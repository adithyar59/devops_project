pipeline {
    agent any
    stages {
        stage('Build Docker Image') {
            steps {
                echo 'Building the Docker image...'
                // Adjust command for Windows
                sh 'docker build -t my-app-image .'
            }
        }
        stage('Stop and Remove Existing Container') {
            steps {
                echo 'Stopping and removing the existing container...'
                script {
                    try {
                        sh 'docker stop my-app-container || true'
                        sh 'docker rm my-app-container || true'
                    } catch (Exception e) {
                        echo "No existing container found. Skipping removal."
                    }
                }
            }
        }
        stage('Run Docker Container') {
            steps {
                echo 'Running the Docker container...'
                sh 'docker run -d --name my-app-container -p 8080:80 my-app-image'
            }
        }
    }
    post {
        failure {
            echo 'Pipeline failed. Please check the logs.'
        }
    }
}
