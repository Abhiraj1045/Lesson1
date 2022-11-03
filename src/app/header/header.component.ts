import { Component, OnInit ,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked,OnChanges,OnDestroy, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked,OnChanges,OnDestroy {

  constructor() {
    console.log('constructor called')
   }

  ngOnInit(): void {
    console.log('ngOnInit called')
    this.fetchData();
  }
  fetchData(){
    console.log('fetching data')
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called')
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called')
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called')
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called')
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called')
  }

}
