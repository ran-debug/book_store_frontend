import { Component, OnInit } from '@angular/core';
import { FormBuilder , Validators} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb : FormBuilder , private auth : AuthService , private router : Router) { }

  loginform = this.fb.group({
    username : [null , [Validators.required]],
    password : [null , [Validators.required , Validators.minLength(6)]]
  });

  get username(){
    return this.loginform.get('username');
  }

  get password(){
    return this.loginform.get('password');
  }
  ngOnInit(): void {
  }

  onsubmit(){
    this.auth.login(this.loginform.value).subscribe((response : any) => {
      console.log(response)
      this.router.navigateByUrl('/home')
    })
  }
}
