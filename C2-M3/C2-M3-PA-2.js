// Task 1: Code a Person class
class Person {
    constructor(name, age, energy) {
        this.name = "Tom"
        this.age = 20
        this.energy = 100
    }
    doSomethingFun() {
        this.energy -= 10
    }

    sleep() {
        this.energy += 10
    }
}

// Task 2: Code a Worker class
class Worker extends Person{
    constructor(name, age, energy, xp, wage) {
        super(name, age, energy)
        this.xp = xp
        this.wage = wage
    }
    goToWork() {
        this.xp += 10
    }
}

// Task 3: Code an intern object, run methods
function intern() {
    var intern = new Worker("Bob", 21, 110, 0, 10)
    intern.goToWork()
    return intern
}

function manager() {
    var manager = new Worker("Alice", 30, 120, 100, 30)
    manager.doSomethingFun
    return manager
}

console.log(intern())
console.log(manager())