class Consumer {
    constructor(firstName, lastName, cost, brand, version) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.cost = cost;
        this.brand = brand;
        this.version = version;
    }
startOrder(){
    console.log(`${this.firstName} ${this.lastName} has agreed to start an Order`);
    }
}

let consumer1 =  new Consumer("Ibraham", "Jones", "$600", "6235551234", "Apple",  "11");
let consumer2 =  new Consumer("Dillon", "Smith", "$1000", "6235552222", "Android",  "Oneplus 9");

consumer1.startOrder();
consumer2.startOrder();

class NotificationSender {
    constructor(status){
        this.status = status;
    }
    sendNotification(notification){
        console.log("Sending " + notification);
    }
findUserWithStatus(status){
    let users = getUsers(status);
    return users;
   
}}

class PromotionSender extends NotificationSender{
    constructor(status){
        super(status);
    }
    calculateDiscount(status){
        if(status === "LOYAL CUSTOMER"){
            return .15;
        }else if(status === "NEW CUSTOMER"){
            return .05;
    } return 0;
       }
}
let promotionSender = new PromotionSender("LOYAL CUSTOMER");
promotionSender.sendNotification("Hi ${this.firstName}, you are eligible for a discount on your order!");

class BillSender extends NotificationSender{
    constructor(status){
        super(status);
            }

    calculateFee(status) {
        if (status === "Monthly Balance Due"){
            return 60;
        } else if (status === "Past Due"){
            return 15; }
            else (status === "Delinquent")
                return 25;
            }
    }
let billSender = new BillSender("Monthly Balance Due");
billSender.sendNotification("Hi ${this.firstName}, this is your Monthly Balance Due");

class Order{
    constructor(firstName) {
        this.firstName = firstName;
        
    }
    addPhone(phone) {
        if (phone instanceof Phone){
            this.phone.push(phone);
          }
    }
describe (){
    return `Good choice on this phone, ${this.firstName} ! `;
}
}

class Menu {
    constructor(){
        this.order = [];
        this.selectedPhone = null;
    }
    startOrder(){
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case "1": 
                    this.createNewOrder();
                    break;
                case "View 2":
                    this.browsePhones();
                    break;
                case "3":
                    this.addToWishList();
                    break;
                case "4":
                    this.addToCart();
                    break;
                case "5":
                    this.displayShoppingCart();
                    break;
                default:
                    selection = 0;
                
            }
            selection = this.showMainMenuOptions();
        }
        alert("Hope to See You Again Soon!");
    }
    showMainMenuOptions(){
        return prompt(`
            0) exit
            1) browse phones
            2) add to wish list
            3) add to shopping cart
            4) display shopping cart
        
        `);
        
    }
    
    browsePhones(){
        return prompt(`
        1) see all Apple
        2) see all Samsung
        3) see all USED
        4) see all PREPAID
        5) see all HIGHEST RATED
        6) see all NEWEST VERSIONS
        7) GO BACK
        `)
    }

    createNewOrder(){
        return prompt(`
        1) browse by brand
        2) browse by PREPAID
        3) browse by PRICE
        4) GO BACK
                `)
    }
    addToWishList(){
        return prompt(`
        1) add item to wish list
        2) do not add to wish list
        3) add to shopping cart instead
        `);
        

    }
    addToCart(){
        return prompt(`
        1) add item to cart
        2) pay now
        3) GO BACK
         `)
    }

   
    showAccountMenuOptions(orderInfo){
    return prompt(`
        0) GO BACK
        1) upgrade phone
        2) add a new line
        3) pay bill
        4) add warranty
        --------
        ${orderInfo}
        `) }
   displayPhones(){
       let phoneString = "";
       for (let i = 0; i < this.phones.length; i++){
           phoneString += i + ") " + this.phones[i].brand + "\n";
       }
       alert(phoneString);
   }
createOrder(){
    let firstName = prompt("Enter name for order:");
    this.Order.push( new Order(firstName));
}
displayShoppingCart(){
    let index = prompt("Select cart icon to view order cart");
    if (index > -1 && index < this.displayShoppingCart.length){
        this.selectedPhone = this.order[index];
        let description = "Shopping Cart List " + this.selectedPhone.brand + "\n";
        for (let i = 0; i < this.selectedPhone.brand.length; i++){
            description += i + ") " + this.selectedPhone[i].brand 
                + this.selectedPhone[i].brand + "\n";
                        }
    let selection = this.showAccountMenuOptions(description);
    switch(selection){
        case "1":
            this.upgradePhone;
            break;
        case "2":
            this.addAnewLine;
            break;
        case "3":
            this.payBill
            break;
        case "4":
            this.addWarranty;
            break;
        default: 
        selection = 0; 
    }   }
}
}
let menu = new Menu();
menu.startOrder();