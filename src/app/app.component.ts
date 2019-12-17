import { Component } from '@angular/core';
import { NzI18nService, zh_CN, en_US } from 'ng-zorro-antd';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  isCollapsed = false;
  // 通过nzi18nservice切换语言
  constructor(private i18n:NzI18nService){}
  switchLanguage(language:string){
    switch (language) {
      case 'zh_CN':
        this.i18n.setLocale(zh_CN)
        break;
      case 'en_US':
        this.i18n.setLocale(en_US)
        break;
    }
  }
}
