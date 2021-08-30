var Service = require('node-windows').Service;
 
// Create a new service object
var svc = new Service({
  name:'Slackbot Monitoring2',
  description: 'Slackbot Monitoring2',
  script: 'C:\\Tools\\SlackbotMonitoring\\app2.js'
});
 
// Listen for the 'install' event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});
 
// install the service
svc.install();