import { Router } from '@angular/router';
import { FeedbackService } from '../feedback/feedback.service';

import { Component, OnInit, NgModule } from '@angular/core';
import { FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']

})


export class FeedbackComponent implements OnInit {

  constructor(private router: Router, private fservice : FeedbackService, private fb: FormBuilder) { }

  ngOnInit() {
    console.log(this.fservice);
  }


  feedbackForm = this.fb.group({
      name: ['', Validators.required],
      email: ['',  [Validators.required, Validators.minLength(5) ] ],
      message: ['', Validators.required]
  });

  onSubmit(){

    console.log(this.fservice);

    console.log('Submit Triggered');
    console.warn(this.feedbackForm.value);

    if(this.feedbackForm.valid){
      console.log('Form is good to submit!!');
      this.fservice.postFeedback(this.feedbackForm.value)
        .subscribe(res => {
          console.log('Form posted succesfully to db! ')
        }, (err) => {
          console.log(err);
        })
    }else {
      console.error('Validation Error: ', 'Still form need to be baked!!');
    }
  }

}

