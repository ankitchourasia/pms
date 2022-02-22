import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'dms-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  user : any = {};
  loading : boolean = false;
  loginError : boolean = false;
  errorText! : string;

  constructor(private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
  }

  submitClicked(){
    console.log("inside submit clicked");
    this.router.navigate(['/dc'], {relativeTo:this.route});
    // this.checkCredentials();
  }

  // checkCredentials(){
  //   this.loading = true;
  //   this.loginService.checkLoginDetails(this.user).subscribe(success =>{
  //     // console.log(success);
  //     this.loading = false;
  //     this.processTokenFromResponse(success.headers);
  //     console.log(this.user);
  //     if(this.user.user.role === "ee"){
  //       this.router.navigate(['/ee']);
  //     } else if(this.user.user.role === "bank"){
  //       this.router.navigate(['/bank']);
  //     } else if(this.user.user.role === "pmc"){
  //       this.router.navigate(['/pmc']);
  //     }  else if(this.user.user.role === "se"){
  //       this.router.navigate(['/se']);
  //     } else if(this.user.user.role === "commercial"){
  //       this.router.navigate(['/commercial']);
  //     } else {
  //       console.log("invalid user");
  //     }
  //   }, error =>{
  //     this.loading = false;
  //     this.loginError = true;
  //     if(error.status == 403 || error.status == 401) {
  //       this.errorText = "Invalid username or password";
  //     } else {
  //       this.errorText = "Unable to login, please try again !";
  //     }
  //     console.log(error);
  //   });
  // }

  // private processTokenFromResponse(httpHeaders : HttpHeaders){
  //   console.log("processTokenFromResponse called");

  //   if(!httpHeaders){
  //     console.error("Invalid input params " + httpHeaders);
  //     return;
  //   }

  //   let fullToken = httpHeaders.get("Authorization");
  //   if (fullToken) {
  //     let token = fullToken.split(" ")[1];
  //     sessionStorage.setItem("token", token);
  //     this.user = this.jwtHelper.decodeToken(token);
  //     let sessionEndTimestamp = new Date(new Date().getTime() + 30 * 60 * 1000).getTime();
  //     sessionStorage.setItem("session_end", sessionEndTimestamp.toString());
  //     sessionStorage.setItem("sessionId", this.user.sessionId);
  //   }
  // }

  private clearStorage(key : any) {
    sessionStorage.removeItem(key);
  }

  // public logout() {
  //   this.loginService.logout(this.user.seesionId).subscribe(success => {
  //     console.log("Logout successfull. Redirecting to login page");
  //   }, error => {
  //       console.log("Error while logging out");
  //       console.log(error);
  //     });
  //   this.clearStorage("token");
  //   this.clearStorage("session_end");
  //   this.router.navigate(['login']);
  // }

  forgotPassword : boolean = false;
  username! : string;
  userVerified : boolean = false;
  otpVerified : boolean = false;
  newPassword! : string;
  reenteredPassword! : string;
  enteredOTP! : string;

  forgotPasswordClicked(){
    this.user = {};
    this.forgotPassword = true;
  }

  // getOTPClicked(){
  //   let data : any = {};
  //   data.action = "GENERATE_OTP";
  //   data.username = this.username;
  //   this.generateOTP(data);
  // }

  // // otpResponse : any;
  // // generateOTP(data : any){
  // //   this.loading = true;
  // //   this.loginService.generateOTP(data).subscribe( success =>{
  // //     console.log(success);
  // //     this.otpResponse = success.body;
  // //     this.userVerified = true;
  // //     this.loading = false;
  // //   }, error =>{
  // //     this.loading = false;
  // //     console.log(error);
  // //     alert(error.error.errorMessage);
  // //   });
  // // }

  // verifyOTPClicked(){
  //   console.log(this.otpResponse);
  //   let data : any = {};
  //   data.action = "VALIDATE_OTP";
  //   data.username = this.otpResponse.username;
  //   data.temporaryToken = this.otpResponse.temporaryToken;
  //   data.inputOTP = this.enteredOTP;
  //   this.loading = true;
  //   this.loginService.generateOTP(data).subscribe(success =>{
  //     console.log(success);
  //     this.otpVerified = true;
  //     this.loading = false;
  //   }, error =>{
  //     this.loading = false;
  //     console.log(error);
  //     alert(error.error.errorMessage);
  //   });
  // }

  // updatePassword(){
  //   if(this.newPassword === this.reenteredPassword){
  //     let data : any = {
  //       action : "RESET_PASSWORD",
  //       username: this.otpResponse.username,
  //       resendCounter: 0,
  //       inputOTP: this.enteredOTP,
  //       password: this.newPassword,
  //       confirmPassword: this.reenteredPassword,
  //       temporaryToken: this.otpResponse.temporaryToken,
  //       resendOTP: false,
  //       validOTP: true
  //     }
  //     this.loading = true;
  //     this.loginService.generateOTP(data).subscribe(success =>{
  //       console.log(success);
  //       this.loading = false;
  //       alert("Password changed successfully, Please login again.");
  //       this.backToLoginClicked();
  //     }, error =>{
  //       this.loading = false;
  //       console.log(error);
  //       alert(error.error.errorMessage);
  //     });
  //   } else{
  //     console.log("wrong cred");
  //     alert("password does not match");
  //   }
  // }

  // clearResetPasswordData(){
  //   this.username = "";
  //   this.otpResponse = {};
  //   this.forgotPassword = true;
  // }

  // resendOTP(){
  //   console.log("inside resend otp");
    
  // }

  // resendOTPClicked(){
  //   let data = {
  //     action : "GENERATE_OTP",
  //     username : this.username,
  //     temporaryToken : this.otpResponse.temporaryToken,
  //     resendCounter : 1,
  //     resendOTP : true
  //   }
  //   this.loading = true;
  //   this.loginService.generateOTP(data).subscribe(success =>{
  //     console.log(success);
  //     this.loading = false;
  //   }, error =>{
  //     this.loading = false;
  //     console.log(error);
  //     alert(error.error.errorMessage);
  //   });
  // }

  backToLoginClicked(){
    this.forgotPassword = false;
    this.username = "";
    this.userVerified = false;
    this.otpVerified = false;
    this.newPassword = "";
    this.reenteredPassword = "";
    this.enteredOTP = "";
    this.loading = false;
  }
}
