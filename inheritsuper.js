class student{
    constructor(name){
        this.name = name;
    }
    display(){
        console.log("student name"+this.name);
    }
}
class student1 extends student{
    constructor(name, rollno){
        super(name);
        this.rollno = rollno;
    }
display1(){
    console.log(" student name from child class " + this.name + " rollno "+ this.rollno);
}
}
let s=new student1("shreshta",1242);
s.display1();