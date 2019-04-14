var Service = require('node-windows').Service;

var svc = new Service({
  name:'Hello World',
  description: 'The nodejs.org example web server.',
  script: 'C:\\Users\\Arthur\\Documents\\GitHub\\node-windows-test\\helloworld.js',
  nodeOptions: [
    '--harmony',
    '--max_old_space_size=4096'
  ]
});

svc.on('install',function(){
  svc.start();
});

svc.install();