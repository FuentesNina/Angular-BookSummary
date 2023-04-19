import { Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = '12 Months to $1M';

  toggleForm() {
    console.log('toggle')
  }

}
