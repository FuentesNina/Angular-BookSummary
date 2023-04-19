import { Component } from '@angular/core';
import { Summary } from 'src/app/Summary';
import { SUMMARIES } from 'src/app/mock-summaries';

@Component({
  selector: 'app-summaries',
  templateUrl: './summaries.component.html',
  styleUrls: ['./summaries.component.css']
})
export class SummariesComponent {
  summaries: Summary[] = SUMMARIES;
}
