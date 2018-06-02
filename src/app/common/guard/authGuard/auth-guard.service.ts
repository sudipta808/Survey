import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginService } from '../../../login/service/login.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router,
                private loginService: LoginService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.loginService.getUserName()) {
            return true;
        }

        this.router.navigate(['signin'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}