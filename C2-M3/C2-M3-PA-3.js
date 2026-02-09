var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
function logDairy() {
    for (var i of dairy) {
        console.log(i)
    }
}
logDairy()

const animal = {
    canJump: true
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
    for (const key of Object.keys(bird)) {
        console.log(key, ":", bird[key])
    }
}
birdCan()

function animalCan() {
    for (const key of Object.keys(bird)) {
        console.log(key, ":", bird[key])
    }
    for (const k of Object.keys(animal)) {
        console.log(k, ":", animal[k])
    }
}
animalCan()