const sonarqubeScanner = require('sonarqube-scanner');
sonarqubeScanner({
  serverUrl: 'http://64.227.116.189:9000',
  options: {
    'sonar.login': secrets.SONAR_LOGIN,
    'sonar.password': secrets.SONAR_PASSWORD,
    },
  }, () => {
  console.log('Error Occurred while scanning');
});
