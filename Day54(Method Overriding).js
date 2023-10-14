//Method Overriding:
/*Parent class Methods override and update the child classes*/
//Example:
class Employee{
    login(startTime){
        console.log(`Login at ${startTime}.`)
    }
    logout(endTime){
        console.log(`LogOut Time ${endTime}`)
    }
    requestLeaves(leaves){
        console.log(`Request Leaves Approved ${leaves+1} Days.`);
    }
}
class Programmer extends Employee{
    requesCOffee(){
        console.log("Please Send One Coffee On My Room")
    }
    requestLeaves(leaves){
        super.requestLeaves(4);  //use Super Keyword
        console.log("One leaves Extra Leave Auto Approved.")
    }
}

let cos=new Programmer();
cos.login("10.30 AM");
cos.logout("07.00 PM");
cos.requestLeaves()