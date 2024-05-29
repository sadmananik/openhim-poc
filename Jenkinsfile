pipeline {
    agent any
    stages {
        stage("synopsys-security-scan") {
          steps {
              	echo 'SYNOPSYS SECURITY SCAN EXECUTION STARTED'

                script {
                    synopsys_scan product: "POLARIS", polaris_assessment_types: "SCA", polaris_prComment_enabled: true, polaris_reports_sarif_create: true
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
