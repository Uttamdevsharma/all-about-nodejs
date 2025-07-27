import os from 'os';
console.log("cpu architecure : " ,os.arch());

console.log("LOgical cpu core:", os.cpus())

console.log("Systems Memory:(RAM) " , os.totalmem()/(1024 * 1024 * 1024) , "GB")