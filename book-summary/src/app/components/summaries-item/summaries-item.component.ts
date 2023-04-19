import { Component, Input } from '@angular/core';
import { Summary } from 'src/app/Summary';
import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons';
import { CHAPTERS } from 'src/app/chapters';

@Component({
  selector: 'app-summaries-item',
  templateUrl: './summaries-item.component.html',
  styleUrls: ['./summaries-item.component.css']
})
export class SummariesItemComponent {
  @Input() summary: Summary = {id: 0, chapter: '', summary:'', persist: false};
  deleteIcon = faTimes;
  editIcon = faPen;

  getChapterTitle(chapter: Summary["chapter"]) {
    const found = CHAPTERS.find(title => title.id === chapter);
    const title = typeof chapter === 'number' ? `${chapter}. ${found?.title}` : found?.title;

    return title;
  }

}
