import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})






export class AppComponent {
  productList = [[0,"Orange",25,10],[0,"Banana",15,20],[0,"Apple",35,40],[0,"Kiwi",50,40]];



  delete(event) {

this.productList.splice(event,1);
  }

  changevalue(i) {
    
    this.productList[i][0]=1;
  }
  deleteSelected() {
    for(var i=0;i<this.productList.length;i++) {
        
        console.log("checking "+ this.productList[i][1])

        if(this.productList[i][0]==1){
          
        console.log("deleting "+ this.productList[i][1])
       
        this.productList.splice(i,1);
        i--;


        }
     }
  }  
  




}
