pipeline {
    agent any
    stages {
        stage("unit-test") {
            steps {
                echo 'UNIT TEST EXECUTION STARTED'
            }
        }
        stage("functional-test") {
            steps {
                echo 'FUNCTIONAL TEST EXECUTION STARTED'
            }
        }
        stage("synopsys-security-scan") {
          steps {
                echo 'SYNOPSYS SECURITY SCAN EXECUTION STARTED'

                script {
                 checkout scm
                 synopsys_scan product: "POLARIS", polaris_assessment_types: "SAST"
                }   
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
