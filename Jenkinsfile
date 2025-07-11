pipeline {
    agent any
    environment {
        IMAGE = "shambudocker/cicd-node-app:${BUILD_NUMBER}"
    }
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/YOUR_USERNAME/cicd-jenkins-docker-node-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE .'
            }
        }

        stage('Push to DockerHub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds-id', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                    sh '''
                    echo $PASS | docker login -u $USER --password-stdin
                    docker push $IMAGE
                    '''
                }
            }
        }

        stage('Deploy to EC2') {
            steps {
                sh '''
                docker stop node-app || true
                docker rm node-app || true
                docker run -d --name node-app -p 3000:3000 $IMAGE
                '''
            }
        }
    }
}

