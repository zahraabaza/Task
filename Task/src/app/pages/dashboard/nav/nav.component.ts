import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private translate: TranslateService) {

   }

  ngOnInit(): void {

  }

  async ChangeLang(lang){

    this.translate.use(lang).toPromise();
    if(lang=='ar'){
      document.querySelector('body').classList.add('body-rtl');
    }else{
      document.querySelector('body').classList.remove('body-rtl');
    }
  }

}
