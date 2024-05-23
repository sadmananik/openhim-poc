pipeline {
    agent any
    stages {
        stage("synopsys-security-scan") {
          steps {
              	echo 'SYNOPSYS SECURITY SCAN EXECUTION STARTED'

                script {
                    synopsys_scan product: "POLARIS", polaris_assessment_types: "SCA,SAST", polaris_prComment_enabled: true
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
