var distance = require('../index.js');



console.log("millimeters", distance.millimeters(10));
console.log("centimeters", distance.centimeters(10));
console.log("decimeters", distance.decimeters(10));
console.log("meters", distance.meters(10));
console.log("decameters", distance.decameters(10));
console.log("hectometers", distance.hectometers(10));
console.log("kilometers", distance.kilometers(10));
console.log("megameters", distance.megameters(10));
console.log("gigameters", distance.gigameters(10));
console.log("terameters", distance.terameters(10));
console.log("petameters", distance.petameters(10));
console.log("exameters", distance.exameters(10));


console.log("meter in millimeters", distance.in.millimeters(distance.meters(1)));
console.log("kilometer in millimeters", distance.in.millimeters(distance.kilometers(1)));
console.log("megameter in millimeters", distance.in.millimeters(distance.megameters(1)));

console.log("mile in kilometers", distance.in.miles(distance.kilometers(1)));

