pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'docker build -t my-todo-app .'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
            }
        }
        stage('Deploy') {
            steps {
                sh '''
        docker stop my-todo-app || true
        docker rm my-todo-app || true
        docker run -d -p 5000:80 --name my-todo-app my-todo-app:latest
        '''
            }
        }
    }
}
