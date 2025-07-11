pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/jagadeesh-chintha/cicd-jenkins-docker-node-app.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("node-app")
                }
            }
        }
        stage('Run Container') {
            steps {
                script {
                    docker.image("node-app").run("-d -p 3000:3000")
                }
            }
        }
    }
}
