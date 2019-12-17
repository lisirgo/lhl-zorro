import { Component } from '@angular/core';
// import { NzI18nService, zh_CN, en_US } from 'ng-zorro-antd';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent {
  dateFormat = 'yyyy/MM/dd';
  monthFormat = 'yyyy/MM';

  // 通过nzi18nservice切换语言
  // constructor(private i18n:NzI18nService){}
  // switchLanguage(language:string){
  //   switch (language) {
  //     case 'zh_CN':
  //       this.i18n.setLocale(zh_CN)
  //       break;
  //     case 'en_US':
  //       this.i18n.setLocale(en_US)
  //       break;
  //   }
  // }
}
