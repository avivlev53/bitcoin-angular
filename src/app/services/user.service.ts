import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  public getUser() {
    const user = new User(undefined, 'Ochoa Hyde')
    //  user.setId()
    console.log('user:', user)
    return user
  }
}
