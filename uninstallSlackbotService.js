var Service = require('node-windows').Service;
 
// Create a new service object
var svc = new Service({
  name:'Slackbot Monitoring',
  description: 'Slackbot Monitoring',
  script: 'C:\\Tools\\SlackbotMonitoring\\app.js'
});
 
// Listen for the 'uninstall' event so we know when it is done.
svc.on('uninstall',function(){
  console.log('Uninstall complete.');
  console.log('The service exists: ',svc.exists);
 
});
 
// Uninstall the service.
svc.uninstall();