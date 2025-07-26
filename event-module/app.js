import EventEmitter from 'node:events';

//create server

function createServer() {
    const eventEmitter = new EventEmitter();


    //connect user to server
    function connect(user){
        console.log(`${user} is connecting...`)
        eventEmitter.emit('userConnected' , user)
    }

    //disconnect user
    function disconnect(user){
        console.log(`${user } is disconnecting..`)
        eventEmitter.emit('userDisConnected', user)
    }

    return {
        connect,
        disconnect,
        on:eventEmitter.on.bind(eventEmitter),
        emit: eventEmitter.emit.bind(eventEmitter)
    }
}

//create server instance

const chatServer = createServer();

//registering listeners
chatServer.on("userConnected" , (user) => {
    console.log(`welcome ${user}`)
})

chatServer.on("userDisConnected", (user) => {
    console.log(`Good Bye! ${user}`);
})


//simulate events
chatServer.connect("Uttam")
chatServer.disconnect("Uttam")