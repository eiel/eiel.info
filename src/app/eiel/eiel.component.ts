import {Component} from 'angular2/core';

@Component({
  selector: 'eiel',
  styles: [`
    md-list a {
      color: #666;
    }
  `],
  template: require('./eiel.html')
})
export class Eiel {
  sns = require('./sns.toml');
  community = require('./community.toml');
  pageState = 'sns';

  constructor() {
  }

  ngOnInit() {
  }

  openCommunity() {
    this.pageState = 'community';
  }

  openSns() {
    this.pageState = 'sns';
  }

}

