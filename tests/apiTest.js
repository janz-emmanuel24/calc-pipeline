const chai = require('chai');
const { assert } = require('chai');
const chaiHttp = require('chai-http');
// const server = require('../app');
const calculations = require('../controller/calculations');

// eslint-disable-next-line no-unused-vars
const should = chai.should();

chai.use(chaiHttp);

chai.use(chaiHttp);

// eslint-disable-next-line no-undef
// describe('Testing endpoints', () => {
//   // eslint-disable-next-line no-undef
//   it('GET /: should the application home page', (done) => {
//     chai.request(server)
//       .get('/')
//       .end((err, res) => {
//         res.should.have.status(200);
//         done();
//       });
//   });
// });

// eslint-disable-next-line no-undef
describe('Testing the basic operations', () => {
  // eslint-disable-next-line no-undef
  it('should add two integers', () => {
    assert.equal(calculations.add(4, 3), 7, 'Addition Failed');
  });

  // eslint-disable-next-line no-undef
  it('Should subtract two integers', () => {
    assert.equal(calculations.subtract(10, 5), 5, 'Subtraction Failed');
  });

  // eslint-disable-next-line no-undef
  it('Should multiply two numbers', () => {
    assert.equal(calculations.multiply(2, 2), 4, 'Multiplication Failed');
  });

  // eslint-disable-next-line no-undef
  it('Should divide two numbers', () => {
    assert.equal(calculations.divide(15, 3), 5, 'Division Failed');
  });
});
