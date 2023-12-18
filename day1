// Object Oriented Programming
// object, anything that we can describe or has properties like chair or dog
let dog = {
    name: 'Browny',
    color: 'rainbow',
    describe: function(){
        return 'The dog name is '+this.name+' and its color is '+this.color+'.'
    }
}

// let's modify the properties inside of that object using dot and square bracket notation
dog.name = 'blacky';
dog.color = 'white';


// create a constructor function with parameter/s
// constructor creates object

// create a supertype where Cat, the subtype can inherit its properties/methods
function Animal(){
    console.log("Dont log me!");
}
Animal.prototype.describe = function(){
    return 'The name of the animal is '+this.name+' and its color is '+this.color+'.';
}

// this is now a subtype
function Cat(name, color){
    this.name = name,
    this.color = color
}
// to allow subtype to inherit only the prototype of the supertype, do this
Cat.prototype = Object.create(Animal.prototype);

// reset constructor of the cat object
Cat.prototype.constructor = Cat;
// override method from the animal prototype

Cat.prototype.describe = function(){
    return 'The cat name is '+this.name+' and its color is '+this.color+'.';
}
let cat = new Cat('muning', 'white');

// Create mixin for unrelated object
function Airplane(){};

function Bird(){};

let flyMixin = function(obj){
    obj.fly = function(){
        return 'I can fly!';
    }
};

let airplane = new Airplane();
let bird = new Bird();
// objects created is passed to the mixin
flyMixin(airplane);
flyMixin(bird);

airplane.fly();
bird.fly();

// create a function that can be modified its properties
function Dog(){
    let dogType = 'aspin';
    let dogWeight = '1 ton'

    // create a privilege method that can access the value of dogType or properties
    this.getDogType = function(){
        return dogType + ", " +dogWeight;
    };
};

let dog2 = new Dog();

// create self-invoking function, it is a function that has no name
(function (){
    return 'I don\'t need to be invoked!';
}
)();

// create module using self-invoked function or called IIFE (Immediately Invoked Function Expression)
let abilityModule = (function(){
    return {
        // create mixins here
        walkMixin: function(obj){
            obj.walk = function(){
                console.log('I can walk!');
            }
        },
        flyMixin: function(obj){
            obj.fly = function(){
                console.log('I can fly!');
            }
        }
    }
})();

// create an empty object here
let chicken = {};

// call the module name
abilityModule.walkMixin(chicken);
abilityModule.flyMixin(chicken);
// now the chicken object has now ability to walk and fly, call it
chicken.walk();
chicken.fly();
