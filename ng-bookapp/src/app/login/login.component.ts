import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup!: FormGroup;

  constructor(private authService: AuthServiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.formGroup = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }

  onSubmit(){
    this.authService.login(this.formGroup.value).subscribe((result:any)=>{
      localStorage.setItem('token',result.data);
      this.router.navigate(['/home']); 
    })

    // if(this.formGroup.valid){
    //   this.authService.login(this.formGroup.value).subscribe(result => {
    //     console.log(result);
    //     localStorage.setItem('token',result.data);
    //     if(result.success){
    //       console.log(result);
    //       console.log(result.message);
    //     }else{
    //       console.log("login Succesfully..!");
    //       this.router.navigate(['/home']) 
    //     }
    //   });
    // }
  }
}
