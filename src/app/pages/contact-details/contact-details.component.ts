import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  // @Input() contactId
  constructor(private contactService: ContactService, private route: ActivatedRoute, private router: Router) {

    this.route.params.subscribe(params => this.loadContact(params.id))

  }
  contact
  ngOnInit(): void {
    // this.loadContact()
  }
  // ngOnChanges(change):void{
  //   if(change.contactId && !change.contactId.firstChange){
  //     this.loadContact()
  //   }
  // }
  loadContact(contactId) {
    const contact$ = this.contactService.getContactById(contactId)
    contact$.subscribe(contact => this.contact = contact)
  }
  goBack() {
    this.router.navigate(['/contact/'])
  }
  editContact(contactId){
    this.router.navigate(['/edit',contactId])
    // console.log(contactId)
  }
}
