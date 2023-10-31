pipeline {
    agent any
    stages {
        stage("unit-test") {
            steps {
                echo 'UNIT TEST EXECUTION STARTED'
            }
        }
        stage("build") {
            steps {
                echo 'BUILD EXECUTION STARTED'
                echo 'Pulling...' + env.BRANCH_NAME
            }
        }
    }
}
