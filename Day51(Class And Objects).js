//Class:
class MovieTicket{
    buy(){
        console.log(this.name  +" Buy Movie Ticket "+ this.Movie);
    }
    cancel(){ 
        console.log(this.name  +" Cancel Ticket Successfully "+this.Movie )
    }
    fill(given_name,MovieName){
        this.name=given_name
        this.Movie=MovieName
    }
}
//Create a Form For Viewer1
let Viewer1=new MovieTicket();
//Fill up the Form For Viewer1
Viewer1.fill("Anupam Ghosh","- 'Jawan'");
;

//Create a Form For Viewer2
let Viewer2=new MovieTicket();
//Fill up the Form For Viewer2
Viewer2.fill("Anuska Das","- 'Pathan'");

//call
Viewer1.buy();
Viewer2.buy();
Viewer2.cancel();


