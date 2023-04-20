import { Component, OnInit } from '@angular/core';
import { Summary } from 'src/app/Summary';
import { SummaryService } from 'src/app/services/summary.service';

@Component({
  selector: 'app-summaries',
  templateUrl: './summaries.component.html',
  styleUrls: ['./summaries.component.css']
})
export class SummariesComponent implements OnInit {
  summaries: Summary[] = [];

  constructor(private summaryService: SummaryService) {}

  ngOnInit(): void {
    this.summaryService.getSummaries().subscribe(summaries => {
      this.summaries = JSON.parse(summaries).documents;
      console.log(summaries)});
  }
}
