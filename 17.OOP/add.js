class Person{
    constructor(name,age,country){
        this.name=name;
        this.age=age;
        this.country=country;
    }
    getDetails(){
        console.log("Name:",this.name,"| Age:",this.age,"| Country:",this.country)
    } 
}
let person=new Person("Elton",18,"Azerbaijan");
person.getDetails();
class Rectangle{
    constructor(width,height){
        this.width=width;
        this.height=height;
    }
    Area(){
        console.log("Area:",this.width*this.height);
    }
    Perimeter(){
        console.log("Perimeter:",2*(this.width+this.height));
    }
}
let rectangle=new Rectangle(10,20);
rectangle.Area();
rectangle.Perimeter();
class Vehicle{
    constructor(mark,model,year){
        this.mark=mark;
        this.model=model;
        this.year=year;
    }
    getDetails(){
        console.log("MARK:",this.mark,"| MODEL:",this.model,"| YEAR:",this.year)
    }
}
class Car extends Vehicle{
    constructor(mark,model,year,number){
        super(mark,model,year);
        console.log("number of doors:")
        this.number=number;
    }
    getDetails(){
        let result=super.getDetails();
        console.log("NUMBER OF DOORS:",this.number)
    }
}
let car=new Car("BMW","M5 E60",2005,4);
car.getDetails();
class BankAccount{
    constructor(number,balance){
        this.number=number;
        this.balance=balance;
    }
    deposit(amount){
        this.balance=this.balance+amount;
        console.log(`Deposit amount: ${amount}`)
        console.log(`Deposited balance: ${this.balance}`);
    }
    withdraw(amount){
        console.log(`Wthdraw amount: ${amount}`)
        if(amount<=this.balance){
            console.log(`Withdrawn balance: ${this.balance-amount}`);
        }
        else{
            console.log("Insufficient funds")
        }
    }
}
let account=new BankAccount("12343ABC",600);
account.deposit(100);
account.withdraw(400);
class Shape{
    constructor(){
    }
}
class Circle extends Shape{
    constructor(radius){
        super();
        this.radius=radius;
    }
    area(){
        console.log("Area of Circle:",Math.PI*this.radius*this.radius);
    }
}
let circle=new Circle(2);
circle.area();
class Triangle extends Shape{
    constructor(height,side){
        super();
        this.height=height;
        this.side=side;
    }
    area(){
        console.log("Area of Triangle:",this.side*this.height*0.5);
    }
}
let triangle=new Triangle(4,5);
triangle.area()
class Employee{
    constructor(name,salary){
        this.name=name;
        this.salary=salary;
    }
    annualSalary(){
        let annualSalary=12*this.salary;
        console.log(annualSalary);
    }
}
class Manager extends Employee{
    constructor(name,salary,department){
        super(name,salary);
        this.department=department;
    }
    annualSalary(){
        super.annualSalary();
    }
    bonus(amount){
        console.log(12*(this.salary+this.salary*0.1));
    }
}
let manager=new Manager("John",1000,"Engineering");
manager.annualSalary();
manager.bonus(0.1);

class Book{
    constructor(title,author,publicYear){
        this.title=title;
        this.author=author;
        this.publicYear=publicYear;
    }
    getDetails(){
        console.log(`TITLE: ${this.title} | AUTHOR: ${this.author} | PUBLICYEAR: ${this.publicYear}`);
    }
}
class EBook extends Book{
    constructor(title,author,publicYear,price){
        super(title,author,publicYear);
        this.price=price;

    }
    getDetails(){
        super.getDetails();
        console.log("PRICE:",this.price)

    }
}
let book=new EBook("Cirtdan","Xalq HEKAYESI",1900,20);
book.getDetails();
class Animal{
    constructor(species,sound){
        this.species=species;
        this.sound=sound;
    }
    sound(){
        console.log(`${this.species} makes ${this.sound}`);
    }
}
class Dog extends Animal{
    constructor(species,sound,color){
        super(species,sound);
        this.color=color;
    }
    makeSound(){
        super.sound();
        console.log(`${this.color} ${this.species} makes ${this.sound}`)
    }
}
let dog=new Dog("dog","hav hav","black");
dog.makeSound();
// class Bank{
//     constructor(name){
//         this.name=name;
//         this.branches=[];
//     }
//     addBranch(){
//         this.branches.push(branch);
//         console.log(this.branches)


//     }

// }
// let bank=new Bank("ABB");
// bank.addBranch();
class Product{
    constructor(ID,name,price){
        this.ID=ID;
        this.name=name;
        this.price=price;
    }
    totalPrice(quantity){
        console.log(this.price*quantity);
    }
}
class PersonalCareProduct extends Product{
    constructor(ID,name,price,warrantyPeriod){
        super(ID,name,price);
        this.warrantyPeriod=warrantyPeriod;
    }
    totalPrice(){
        let result=  super.totalPrice(10) + this.warrantyPeriod;
        return result;
    }
}
let product=new PersonalCareProduct("224","alma",10,5);
product.totalPrice();
class BankAccount1{
    constructor(number,name,balance){
        this.number=number;
        this.name=name;
        this.balance=balance;
    }
    deposit(amount){
        this.balance+=amount;
        console.log("Balance:",this.balance);
    }
    withdraw(amount){
        if(amount<=this.balance){
            this.balance-=amount;
        }
        else{
            console.log("Insufficient funds");
        }
        console.log(this.balance);
    }
    transfer(amount,account2){
        if(amount<=this.balance){
            this.balance-=amount;
            console.log(`${amount} transfered to another account =>`);
            account2.deposit(amount);
    
            
        }
        else{
            console.log("Insufficient funds");
        }
        
    }
}
let account1=new BankAccount1(12234,"elton",3000);
let account2=new BankAccount1(5689,"royal",9000);
account1.deposit(1000);
account1.withdraw(2000);
account1.transfer(500,account2);
