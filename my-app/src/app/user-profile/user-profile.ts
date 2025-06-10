import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: false,
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.scss'
})
export class UserProfileComponent {
  counter = 0;

  userProfileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    dob: new FormControl('')
  });


  get name(): string | null | undefined {
    return this.userProfileForm.value.name;
  }
  get email(): string | null | undefined {
    return this.userProfileForm.value.email;
  }
  get dob(): string | null | undefined {
    return this.userProfileForm.value.dob;
  }

  saveProfile() {
    this.counter++;
    console.log('Saved profile:', this.userProfileForm.value);
  }

  resetProfile() {
    this.userProfileForm.reset();
  }
}
