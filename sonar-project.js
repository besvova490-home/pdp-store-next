const sonarqubeScanner = require('sonarqube-scanner');
sonarqubeScanner({
serverUrl: 'http://64.227.116.189:9000',
options: {
  'sonar.login': 'admin',
  'sonar.password': 'root',
  'sonar.exclusions': 'node_modules/**,**/*.spec.ts,dist/**,**/*.js,coverage/**,',
  'sonar.inclusions': '**/*.{js,jsx,ts,tsx}', // Entry point of your code
  },
}, () => {
console.log('Error Occurred while scanning');
});
