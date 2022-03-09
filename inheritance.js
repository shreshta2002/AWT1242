class student{
    display(){
        console.log("hello from parent class");
    }
}
class student1 extends student{
    display1(){
        console.log("hello from child class");
    }
}
let s=new student1();
s.display();
s.display1();
