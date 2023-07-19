const scanner = require('sonarqube-scanner');

scanner(
    {
        serverUrl: 'http://localhost:9000',
        login: "admin",
        password: "Madhu*()890",
        // token: "454ab064843599ba767e1c4f082dd7999230f2a7",
        options: {
            'sonar.projectName': 'Meeting-Room-Booking',
            'sonar.projectKey': 'Meeting-Room-Booking',
            'sonar.projectVersion': '0.0.1',
            'sonar.exclusions': '',
            'sonar.sourceEncoding': 'UTF-8',
        }
    },
    () => process.exit()
)