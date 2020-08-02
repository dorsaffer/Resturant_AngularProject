import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { LeaderService } from '../services/leader.service';
import { Leader } from '../shared/leader';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  dish: Dish;
  promotion: Promotion;
  leader: Leader;

  constructor(
    private dishservice: DishService,
    private leaderService: LeaderService,
    private promotionservice: PromotionService
  ) {}

  ngOnInit(): void {
    this.dishservice
      .getFeaturedDish()
      .subscribe((dishes) => (this.dish = dishes));
    this.promotion = this.promotionservice.getFeaturedPromotion();
    this.leaderService
      .getfeaturedLeader()
      .then((leader) => (this.leader = leader));
  }
}
