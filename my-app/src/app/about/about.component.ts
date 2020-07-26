import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeaderService } from '../services/leader.service';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

leaders:Leader[]

  constructor(private leaderservice: LeaderService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
   this.leaderservice.getLeaders().then(LEADERS => this.leaders =LEADERS)

  }

}
