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
  sns = require('./../eiel/sns.toml');

  constructor() {
  }

  ngOnInit() {
  }

}

