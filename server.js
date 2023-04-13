var events=require("events");
var eventEmitter=new events.EventEmitter;
//create event handler

var work=function()
{
    console.log("I am event handler");
}

//Assigning event handler to an event...

eventEmitter.on("press",work);

//Fire the event 

eventEmitter.emit('press');
