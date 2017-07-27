import {Component, OnInit, OnDestroy} from '@angular/core';
import {Book} from '../types/book';
import {AppService} from '../services/app.service';
import {Subscription} from 'rxjs';

@Component({
  styleUrls: ['dashboard.component.css'],
  selector: 'bs-dashboard',
  templateUrl: 'dashboard.template.html'
})
export class DashboardComponent implements OnInit,OnDestroy {

  books: Book[] = [];

  constructor() {
  }

  ngOnInit(): void {
    // Get all the books
  }

  ngOnDestroy(): void {
  }
}
