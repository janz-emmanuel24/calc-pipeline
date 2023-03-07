require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const CalcModel = require('./model/calcModel');
const calcFunctions = require('./controller/calculations');
const Logger = require('./logger/mainLogger');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
const DB = 'mongodb+srv://Janz:LZ4gCWNLK32KGdy@cluster0.kakgevo.mongodb.net/calcStore?retryWrites=true&w=majority';

mongoose.connect(DB, {
  useNewUrlParser: true,
}).then(() => {
  // console.log(con.connections);
  Logger.info('DB connection successful');
});

// Calculator function
const calculate = (fn, op, ln) => {
  const fN = parseInt(fn, 10);
  const lN = parseInt(ln, 10);
  if (op === '+') {
    return calcFunctions.add(fN, lN);
  }

  if (op === '*') {
    return calcFunctions.multiply(fN, lN);
  }

  if (op === '-') {
    return calcFunctions.subtract(fN, lN);
  }

  if (op === '/') {
    return calcFunctions.divide(fN, lN);
  }

  return 'Error';
};

const port = 3000;

const result = {
  fn: 0,
  op: '0',
  ln: 0,
  calcvalue: 0,
};

app.get('/', async (req, res) => {
  const getCalculationsData = await CalcModel.find();
  const allHistoryCalcuationsNotCurrent = getCalculationsData.slice(3, -1);
  res.status(200).render('calc', { result, allHistoryCalcuationsNotCurrent });
});

app.post('/', async (req, res) => {
  const { firstNumber, operator, secondNumber } = req.body;
  result.calcvalue = calculate(firstNumber, operator, secondNumber);
  result.fn = firstNumber;
  result.ln = secondNumber;
  result.op = operator;

  const calculatedResults = new CalcModel({
    calResult: calculate(firstNumber, operator, secondNumber),
    firstNumber,
    secondNumber,
    operator,
  });

  if (calculate(firstNumber, operator, secondNumber) !== 'Error') {
    await calculatedResults.save().then((doc) => {
      console.log(doc);
    });
  }

  res.redirect('back');
});

app.listen(port, () => {
  Logger.info(`Listening on port ${port}`);
});

module.exports = app;
