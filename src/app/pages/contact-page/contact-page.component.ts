import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  subscription: Subscription
  contacts: Contact[] = []
  contactId: string = null
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.subscription = this.contactService.contacts$.subscribe(contacts => {
      console.log('GOT!', contacts);
      this.contacts = [...contacts]
    })
    if (this.contacts.length===0){
      this.contactService.loadContacts()
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
  setContactId(contactId) {
    this.contactId = contactId;
  }
  setFilter(filterBy) {
    console.log('filterBy:', filterBy)
    this.contactService.loadContacts(filterBy)
  }
}
