import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrickyService } from './tricky.service';

@Component({
  selector: 'app-tricky-test',
  template: ` Nothing tricky here - {{ onlyServerVar }}`,
})
export class TrickyComponent implements OnInit {
  onlyServerVar = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private trickyService: TrickyService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => console.log(params));
    this.onlyServerVar = this.trickyService.getMessage();
  }
}
