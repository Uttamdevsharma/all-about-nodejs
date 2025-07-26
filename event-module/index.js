import EventEmitter from 'node:events';
const eventEmitter = new EventEmitter();

eventEmitter.on('start' ,(a,b) => {
    const res = a + b;
    console.log("The result is:" , res);
})

eventEmitter.emit("start" , 10,5);