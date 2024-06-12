pipeline {
    agent { label 'linux-sanik' }
        environment {
        BLACKDUCK_TRUST_CERT=true
    }
    stages {
        stage("unit-test") {
            steps {
              	echo 'GIT_URL...' + env.GIT_URL
              	echo 'CHANGE_TARGET...' + env.CHANGE_TARGET
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
                 synopsys_scan product: "POLARIS", polaris_assessment_types: "SAST", polaris_branch_name: "test"
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
