import { Injectable } from '@angular/core';
import {Leader } from '../shared/leader'
import {LEADERS } from './../shared/leaders'


@Injectable({
  providedIn: 'root'
})
export class LeaderService {



  constructor() { }

  getLeaders(): Promise<Leader[]>  {
    return Promise.resolve(LEADERS);
  }

  
  getfeaturedLeader(): Promise<Leader> {
    return  Promise.resolve(LEADERS.filter((leader) => leader.featured)[0]);
  }
}
