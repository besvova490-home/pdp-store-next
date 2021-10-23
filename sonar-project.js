const sonarqubeScanner = require('sonarqube-scanner');
sonarqubeScanner({
serverUrl: 'http://64.227.116.189:9000',
options: {
  'sonar.projectKey': 'besvova490-home_pdp-store-next',
  'sonar.login': 'admin',
  'sonar.password': 'root',
  'sonar.sources': '.',
  'sonar.tests': '.',
  'sonar.inclusions': '**/*.{js,jsx,ts,tsx}', // Entry point of your code
  },
}, () => {
console.log('Error Occurred while scanning');
});
