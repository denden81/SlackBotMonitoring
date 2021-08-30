var Service = require('node-windows').Service;
 
// Create a new service object
var svc = new Service({
  name:'Slackbot Monitoring2',
  description: 'Slackbot Monitoring2',
  script: 'C:\\Tools\\SlackbotMonitoring\\app2.js'
});
 
// Listen for the 'uninstall' event so we know when it is done.
svc.on('uninstall',function(){
  console.log('Uninstall complete.');
  console.log('The service exists: ',svc.exists);
 
});
 
// Uninstall the service.
svc.uninstall();