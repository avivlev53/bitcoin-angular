import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent implements OnInit {
  @Input() contact
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToDetails(id) {
    this.router.navigate(['/contact/' + id])
  }

}
