import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'app/shared/auth/auth.service';
import { BaThemePreloader } from '../../theme/services';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'login-callback',
  template: ``,
})

export class LoginCallback implements OnInit {
  error = '';
  constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
      console.log("init callback");
    BaThemePreloader.registerLoader(this.loadThings()); 
  }

  private loadThings() {
    const prom = new Promise((resolve, reject) => {
        this.route.params.subscribe(params => {
            const uid = params['uid'];
            this.auth.login(uid).subscribe(result => {
                if (result) {
                    resolve();
                    this.router.navigate(['/dashboard']);
                } else {
                    // TODO translateable?
                    this.error = 'The authentication failed!';
                    resolve();
                }
            });
        });
    });
    return prom;
  }

}
