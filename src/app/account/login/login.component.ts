import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AccountService } from './shared/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login = {
    email: '',
    password: ''
  };

  constructor(
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async onSubmit() {
    try {
      const result = await this.accountService.login(this.login);
      console.log(`Login efetuado: ${result}`);

      // navego para a rota vazia novamente
      this.router.navigate(['home']);
    } catch (error) {
      console.error(error);
    }
  }
}