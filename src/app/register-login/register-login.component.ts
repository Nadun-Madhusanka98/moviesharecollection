import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-login',
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.css']
})
export class RegisterLoginComponent implements OnInit {

  username: string = "";
  email: string =  "";
  password: string = "";
  errMsgRegister: string = "";
  passMsgRegister: string = "";

  emailLogin : string = "";
  passwordLogin: string = "";
  isLogin: boolean = true;
  errorMessage: string = "";
  
  constructor(private http: HttpClient, private router: Router ) { }

  ngOnInit(): void {
  }

  register(){

    let bodyData = {
      "username" : this.username,
      "email" : this.email,
      "password" : this.password
    };
    if(this.username == "" || this.email == "" || this.password == ""){
      this.errMsgRegister = "Please Fill all the fields";
    } else {
      // Regular expression to check for valid email pattern
      let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!emailRegex.test(this.email)) {
        this.errMsgRegister = "Please enter a valid email address";
      } else {
        this.http.post("http://localhost:9000/user/create", bodyData).subscribe((resultData: any) => {
          console.log(resultData);
          if(resultData.status) {
            this.passMsgRegister = "Registered Succeessfully!!!";
          }
        });
      }
    }

  }

  signUp(){
    this.register();
  }

  login(){
    if(this.emailLogin == "" || this.passwordLogin == ""){
      this.errorMessage = "Please fill all the fields";
    }
    else{
      let bodyData = {
      email: this.emailLogin,
      password: this.passwordLogin
    };
    this.http.post("http://localhost:9000/user/login",bodyData).subscribe((resultData:any)=> {
      console.log(resultData);
      
      if(resultData.status){
        this.router.navigateByUrl('/Home');
      }
      else{
        //alert("Incorrect Email or Password!");
        this.errorMessage = "Incorrect Email or Password!";
        console.log("Error Login");
      }
    });
    }
    
  }

}
