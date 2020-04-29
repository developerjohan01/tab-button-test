import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'my-tab-button',
  templateUrl: './my-tab-button.component.html',
  styleUrls: ['./my-tab-button.component.scss'],
})
export class MyTabButtonComponent implements OnInit {

  @Input()
  tab = ""

  constructor() { }

  ngOnInit() {}

  myButtonAction() {
    this.privateReusableViaComponent()
    alert("This triggers a lot of functionality")
  }

  private privateReusableViaComponent() {
    console.log('Do important work')
  }
}
