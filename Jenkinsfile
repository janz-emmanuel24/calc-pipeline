pipeline {
  agent any
  options {
    buildDiscarder(logRotator(numToKeepStr: '5'))
  }
  environment {
    DOCKERHUB_CREDENTIALS = credentials('dockerhub')
  }
  stages {
    stage('Build') {
      steps {
        sh 'docker build -t jnz4/jenkins-docker-hub .'
      }
    }
    stage('Login') {
      steps {
        sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
      }
    }
    stage('Push') {
      steps {
        sh 'docker push jnz4/jenkins-docker-hub'
      }
    }
    stage('Run Docker container on remote hosts') {
      steps {
        sh "docker -H ssh://jenkins@170.187.202.21 run -d -p 8000:3000 jnz4/jenkins-docker-hub"
      }
    }
  }
  post {
    always {
      sh 'docker logout'
    }
  }
}
