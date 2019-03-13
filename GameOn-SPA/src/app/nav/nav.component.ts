import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
    selector: 'app-nav',
    templateUrl: 'nav.component.html',
    styleUrls: ['nav.component.css']
})
export class NavComponent implements OnInit {
    model: any = {};

    constructor(private authService: AuthService) { }

    ngOnInit() {
    }

    login() {
        // returning observable, need to subscribe
        this.authService.login(this.model).subscribe(next => {
            console.log('Logged in successfully');
        }, error => {
            console.log('Failed to login, check your username or password');
        });
    }

    // Logged In method
    loggedIn() {
        const token = localStorage.getItem('token');
        // will return true or false value, if it's something in token it will return true 
        // if var empty return false
        return !!token;
    }
    // logout method
    logout() {
        localStorage.removeItem('token');
        console.log('logged out')
    }
}
