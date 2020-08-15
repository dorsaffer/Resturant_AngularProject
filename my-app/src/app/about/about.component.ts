import { Component, OnInit,Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { flyInOut } from '../animations/app.animation';
import { LeaderService } from '../services/leader.service';
import { Leader } from '../shared/leader';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
  animations:[ flyInOut()],
})
export class AboutComponent implements OnInit {

leaders:Leader[]
errMess:string;

  constructor(private leaderservice: LeaderService,
    private route: ActivatedRoute, @Inject('BaseURL') private baseURL) { }

  ngOnInit(): void {
   this.leaderservice.getLeaders().subscribe(leaders => (this.leaders =leaders),
    errmess => this.errMess = <any>errmess);

  }

}
