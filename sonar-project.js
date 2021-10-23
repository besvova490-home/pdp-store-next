const sonarqubeScanner = require('sonarqube-scanner');
sonarqubeScanner({
  serverUrl: 'http://64.227.116.189:9000',
  options: {
    'sonar.login': process.env.NEXT_APP_SONAR_LOGIN,
    'sonar.password':  process.env.NEXT_APP_SONAR_PASSWORD,
    },
  }, () => {
  console.log('Error Occurred while scanning');
});
