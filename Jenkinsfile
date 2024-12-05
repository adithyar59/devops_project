pipeline {
    agent any // Use any available agent

    environment {
        IMAGE_NAME = "my-todo-app"  // Docker image name
        CONTAINER_NAME = "my-todo-app-container"  // Docker container name
    }

    stages {
        stage('Checkout') {
            steps {
                echo "Checking out the source code..."
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "Building the Docker image..."
                sh 'docker build -t ${IMAGE_NAME} .'
            }
        }

        stage('Stop and Remove Existing Container') {
            steps {
                echo "Stopping and removing any existing containers..."
                script {
                    // Stop and remove the existing container if it exists
                    sh """
                    if [ \$(docker ps -a -q -f name=${CONTAINER_NAME}) ]; then
                        docker stop ${CONTAINER_NAME} || true
                        docker rm ${CONTAINER_NAME} || true
                    fi
                    """
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                echo "Running the Docker container..."
                sh """
                docker run -d --name ${CONTAINER_NAME} -p 8080:80 ${IMAGE_NAME}
                """
            }
        }

        stage('Post-Build Cleanup (Optional)') {
            steps {
                echo "Cleaning up unused Docker images and containers..."
                sh """
                docker image prune -f
                docker container prune -f
                """
            }
        }
    }

    post {
        success {
            echo "Pipeline completed successfully!"
        }
        failure {
            echo "Pipeline failed. Please check the logs."
        }
    }
}
