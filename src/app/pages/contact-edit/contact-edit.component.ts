import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {
  // name
  // email
  // phone
  contactToEdit: Contact = {
    name: '',
    phone: '',
    email: ''
  }
  errMsg: string | number = null
  constructor(private contactService: ContactService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.loadContact(id)
    })
  }
  submitForm(value) {
    console.log(value);
    if (!value.name || !value.email || !value.phone) return
    this.contactService.saveContact(value)
  }
  loadContact(id){
    // console.log('heppend')
    if (id) {
      const contact$ = this.contactService.getContactById(id)
      contact$.subscribe(contact => this.contactToEdit = contact)
    } else this.contactToEdit =this.getEmptyContact()
  }
  // get contactJson() {
  //   return JSON.stringify(this.contactToEdit)
  // }
  getEmptyContact(): Contact {
    return {
      name: '',
      phone: '',
      email: ''
    }
  }
  // saveContact(ev: Event): string {
  //   ev.preventDefault()
  //   const { name, phone, email } = this.contactToEdit
  //   if (!name || !phone || !email) {
  //     return this.errMsg = 'Must to fill All the fields'
  //   }
  //   // this.contactToEdit = this.getEmptyContact()


  // }
}
