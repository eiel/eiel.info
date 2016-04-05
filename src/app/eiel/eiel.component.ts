import {Component} from 'angular2/core';

@Component({
  selector: 'eiel',
  styles: [`
    .menu {
      margin: 2px 0;
    }
    md-list a {
      color: #666;
    }
    md-card {
      margin: 10px 4px;
    }
    .gpg {
      margin: 10px 4px;
    }
    h2 {
      font-size: 16px;
     }
  `],
  template: require('./eiel.html')
})
export class Eiel {
  sns = require('./sns.toml');
  community = require('./community.toml');
  application = require('./ios-application.toml');
  websites = require('./websites.toml');
  links = require('./links.toml');
  gpg = require = require('raw!./gpg.txt');
  pageState = 'sns';

  constructor() {
  }

  ngOnInit() {
  }

  baseToggle(state: String) {
    if (this.pageState == state) {
      this.pageState = 'none';
    } else {
      this.pageState = state;
    }
  }

  openCommunity() {
    this.baseToggle('community');
  }

  openSns() {
    this.baseToggle('sns');
  }

  openIOSApplication() {
    this.baseToggle('iOSApplication');
  }

  openWebsite() {
    this.baseToggle('Website');
  }

  openLink() {
    this.baseToggle('Link');
  }
}

