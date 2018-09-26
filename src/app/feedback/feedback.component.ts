import { Component, OnInit, NgModule } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']

})


export class FeedbackComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  feedbackForm = this.fb.group({
      name: ['', Validators.required],
      email: ['',  [Validators.required, Validators.minLength(5) ] ],
      message: ['', Validators.required]
  });

  onSubmit(){
    console.log('Submit Triggered');
    console.warn(this.feedbackForm);

    if(this.feedbackForm.valid){
      console.log('Form is good to submit!!');
    }else {
      console.log('Still form need to be baked!!');
    }
  }

}

