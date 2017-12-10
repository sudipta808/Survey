import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ValidationService } from "app/common/validation-service/validation.service";
import { PatternService } from "app/common/validation-service/pattern.service";

@Component({
    selector: "signup",
    templateUrl: "./signup.component.html",
    styleUrls: ["./signup.component.scss"]
})

export class SignupComponent {

    signupForm: FormGroup;

    private userDetails: any = {
        userName: "",
        userEmail: "",
        userPhoneNumber: "",
        userPassword: "",
        userConfirmPassword: "",
        userProfilePic: "https://www.sonypark360.net/wp-content/uploads/2017/08/profile-pictures.png"
    };

    constructor(formBuilder: FormBuilder) {
        this.signupForm = formBuilder.group({
            displayName: [{value: ""}, Validators.compose([Validators.required, Validators.pattern(PatternService.Name())])],
            email: [{value: ""}, Validators.compose([Validators.required, Validators.pattern(PatternService.Email())])],
            phoneNumber: [{value: ""}, Validators.compose([Validators.required, Validators.pattern(PatternService.Numbers())])],
            password: [{value: ""}, Validators.compose([Validators.required, Validators.minLength(6)])],
            confirmPassword: [{value: ""}, Validators.compose([Validators.required, Validators.minLength(6)])],
            profilePic: []
        });
    }

    createAccount() {
        if(this.signupForm.valid) {
            console.log("Updated object: ", this.userDetails);
        }
    }
}