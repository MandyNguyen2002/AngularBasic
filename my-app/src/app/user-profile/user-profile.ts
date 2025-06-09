import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: false,
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.scss'
})
export class UserProfile {
name = ''
email = ''
dob = ''

resetProfile() {
  this.name = ''
  this.email = ''
  this.dob = ''
}

saveProfile() {
  console.log('Saved Profile: ', {
    name: this.name,
    email: this.email,
    dob: this.dob
  })

  alert('Profile Saved');
}

get checkInput() {
  return !this.name || !this.email || !this.dob;
}
}
