const actor = require("./heroName");
// log gives whatever in getname function
console.log(actor.getName());

// This is for other way.
// const prabhas = new actor("salaar");
// console.log(prabhas.getName());

actor.setName("salaar");
// now getname function returns salaar - because
// we set salaar as a name for further code.
console.log(actor.getName());

const newActor=require('./heroName')
console.log(newActor.getName())
