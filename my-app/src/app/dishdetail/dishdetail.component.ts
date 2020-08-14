import { Component, OnInit ,ViewChild,Inject} from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DishService } from '../services/dish.service';
import { Dish } from '../shared/dish';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { Comment } from '../shared/comment';
import { visibility, expand } from '../animations/app.animation';



@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss'],
  animations: [
    visibility(),
    expand()
  ]
})
export class DishdetailComponent implements OnInit {
  errMess:string;
  dish: Dish;
  dishcomm: Dish;
  dishIds: string[];
  prev: string;
  next: string;
  dishcopy: Dish;
  CommentForm: FormGroup;
  comment :Comment
  visibility = 'shown';
  commentErrors ={ 
    'author':'',
    'comment':'',
    

  }
  @ViewChild('fform') commentFormDirective;
  constructor(
    private fb: FormBuilder,
    private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location,
    @Inject('BaseURL') private baseURL
  ) {}

  ngOnInit(): void {
    this.dishservice
      .getDishIds()
      .subscribe((dishIds) => (this.dishIds = dishIds));
      this.route.params.pipe(switchMap((params: Params) => { this.visibility = 'hidden'; return this.dishservice.getDish(+params['id']); }))
      .subscribe(dish => { this.dish = dish; this.dishcopy = dish; this.setPrevNext(dish.id); this.visibility = 'shown'; },
        errmess => this.errMess = <any>errmess);
    this.createForm();
  }

  setPrevNext(dishId: string) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[
      (this.dishIds.length + index - 1) % this.dishIds.length
    ];
    this.next = this.dishIds[
      (this.dishIds.length + index + 1) % this.dishIds.length
    ];
  }

  
  goBack(): void {
    this.location.back();
  }
  
  createForm() {
    this.CommentForm = this.fb.group({
      author: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      comment: ['', [Validators.required] ],
      rating:[''],
    })

    this.CommentForm.valueChanges
    .subscribe(data => this.onValueChanged(data));

     this.onValueChanged(); 
  }


  onValueChanged(data?: any) {
    if (!this.CommentForm) { return; }
    const form = this.CommentForm;
    for (const field in this.commentErrors) {
      if (this.commentErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.CommentForm[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.commentErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  
  onSubmit() {
    this.comment={rating: this.CommentForm.value.rating,
      comment: this.CommentForm.value.comment,
      author: this.CommentForm.value.author,
      date: new Date().toISOString()};

    this.dish.comments.push( {rating: this.CommentForm.value.rating,
      comment: this.CommentForm.value.comment,
      author: this.CommentForm.value.author,
      date: new Date().toISOString() });

    this.dishcopy.comments.push(this.comment);

    this.dishservice.putDish(this.dishcopy)
      .subscribe(dish => {
        this.dish = dish; this.dishcopy = dish;
      },
      errmess => { this.dish = null; this.dishcopy = null; this.errMess = <any>errmess; });
    
    this.CommentForm.reset({
      author: '',
      comment: '',
      rating:''
  
    });
    
    this.commentFormDirective.resetForm();
  }

  validationMessages = {
    'author': {
      'required':      'author is required.',
      'minlength':     'author must be at least 2 characters long.',
      'maxlength':     'author  cannot be more than 25 characters long.'
    },
    'comment': {
      'required':      'Comment Name is required.',
    },
  }
  
}
