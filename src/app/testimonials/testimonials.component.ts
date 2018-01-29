import { Component, OnInit } from '@angular/core';
declare var $: any;
var testimonialText = ['We worked with Nicole for our anniversary photos and she was absolutely amazing! From the planning stages to the final photos, we could not have been more impressed. We were especially impressed by how much preparation Nicole did before taking our photos: she did a Q&A about our style as a couple, she asked me to send her inspiration photos, she suggested several places to take photos, and even went to our location a couple of days beforehand to scout out spots and think of poses! We were blown away!!! We look forward to working with Nicole again and being impressed by her work for years to come.','Nicole was incredible to work with. We worked with her first for our engagement photos and liked them so much that we asked her to do our wedding photos. She was willing to meet with us multiple times and made sure that our vision was incorporated into the entire process. She allowed us to make our own timeline for the day and have total control in how the day went. She even came to the hotel for some get ready shots before the wedding, and stayed all the way through the reception and dance. She was incredible when the day went completely differently than planned, and it rained all day long. She was so helpful in getting all the pictures we wanted. We received over 400 digital prints from her, and they were all amazing. I would highly recommend her for any photography needs.']
var index = 1;
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setInterval (changeTestimonialText, 25000);
  }
}

function changeTestimonialText()
{
  $('#testimonial').fadeOut('fast', function() 
  {
    $(this).text(testimonialText[index]);
    
    $(this).fadeIn('fast', function() 
    {
      if (index == testimonialText.length-1)
      {
        index = 0;
      }
      else
      {
        index++;
      }
    });
  });
}