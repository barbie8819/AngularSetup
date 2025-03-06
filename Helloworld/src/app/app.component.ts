import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Helloworld';
  imgUrl = "assets/bridgelabzlogo.png";
  url = "https://www.bridgelabz.com";
  userName : string ="";
  nameError: string ="";
  ngOnInit(): void {
    this.title = "Hello from BridgeLabz.";
  }
  onClick($event:Event){
    console.log("Save button is clicked!", $event);
    window.open(this.url,"_blank");
  }
  onInput($event:Event){
    console.log("change Even Occurered!",this.userName);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if(nameRegex.test(this.userName)){
      this.nameError="";
      return;
    }this.nameError="Name is Incorrect";
  }
}
