import { Component, OnInit } from '@angular/core';
import { GlbService } from '../glb.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],

})
export class ProfileComponent implements OnInit {
  profileData: any;

  constructor( private Glb:GlbService) { }

  ngOnInit(): void {
    this.Glb.getData().toPromise().then((response:any)=>{
    this.profileData = response.results[0];
    console.log(this.profileData)
    });
  }

}
