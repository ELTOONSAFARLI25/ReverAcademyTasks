class Animal{
    #age;
    constructor(name,age){
        this.name=name;
        this.#age=age;
    }
    speak(){
        console.log(`${this.name} makes noise.`);
    }
}
let cat= new Animal("Tom",5);
let dog=new Animal("Toplan",9);
cat.speak();
dog.speak();
class Cat extends Animal{
    // constructor(name,age){
    //     super(name,age);

    // }
    speak(){
        console.log(`${this.name} meows`)
    }
}
class Dog extends Animal{
    constructor(name,age){
        super(name,age);

    }
    speak(){
        console.log(`${this.name} barks`)
    }
}
let cat1 = new Cat("tom",5);
let dog1= new Dog("toplan",9);

cat1.speak();
dog1.speak();
class Lion extends Cat{
    // constructor(name,age){
    //     super(name,age);
    // }
    speak(){
        super.speak() ;
        console.log(`${this.name} roars`)
    }
}
let lion = new Lion("LEO",20);
lion.speak();