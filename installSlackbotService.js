var Service = require('node-windows').Service;
 
// Create a new service object
var svc = new Service({
  name:'Slackbot Monitoring',
  description: 'Slackbot Monitoring',
  script: 'C:\\Tools\\SlackbotMonitoring\\app.js'
});
 
// Listen for the 'install' event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});
 
// install the service
svc.install();