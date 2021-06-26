//Classes video practice 
//instancion
//constructor
//creates instance of the class, call name of class followed by paranthese
class Student {
    constructor(firstName, lastName, phoneNumber, grade) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.grade = grade;

    }
introduce(){
    console.log(`${this.firstName} ${this.lastName} can be reached at ${this.phoneNumber} `);
}}


let student1 = new Student("Tom", "Sawyer", "6235551234", "A");
let student2 = new Student("Sam", "Smith", "4801234567", "B");

student1.introduce();
student2.introduce();

//INHERITANCE
//move shared code to Parent class, keep common code in one place
class PromotionSender {
    constructor(){

        sendNotification(notification){
            console.log("Sending " + notification);
        
    }
findUsersWithStatus(status){
    let users = getUsers(status);
    return users;

}
    calculateDiscount(status) {
        if(status === "GOLD"){
            return .3;
        }else if( status === "SILVER"){
            return .15;
        }
        return 0;
    }
}
class CollectionsSender{
    constructor(){

    }
sendNotification(notification){
    console.log("Sending: "+ notification);
}

findUsersWithStatus(status){
    let users = getUsers(status);
    return users;
}
calculateFee(status){
    if(status === "OVERDUE"){
        return 10;
    }else if (status === "DELINQUENT")
}