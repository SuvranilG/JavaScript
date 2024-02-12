this.name = "MayBach";
const car = {
    name:"Car",
    speed: 0,
    start: function() {
        console.log(this);
        console.log("Start the " + this.name);
        this.speed=10;
    },
    speedUp:function(value1, value2){
        console.log("Speedup the " + this.name);
        this.speed+=(value1+value2);
    },
    stop:function(){
        console.log("Stop the " + this.name);
        this.speed=0;
    }
}

const airCraft = {
    name:"Aircraft",
    speed:0,
    fly:function(){
        console.log("Fly")
    }
}
car.start();


// // start the aircraft 
// car.start.apply(airCraft);

// // speedUp the aircraft 
// car.speedUp.apply(airCraft, [10,20]);
// console.log(airCraft.speed);

// // Stop  the aircraft 
// car.stop.apply(airCraft);


// // start the aircraft 
// car.start.call(airCraft);

// // speedUp the aircraft 
// car.speedUp.call(airCraft, 10,20);
// console.log(airCraft.speed);

// // Stop  the aircraft 
// car.stop.call(airCraft);