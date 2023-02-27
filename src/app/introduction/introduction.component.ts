// Import necessary modules
import { HostListener, OnDestroy } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { VgApiService } from "@videogular/ngx-videogular/core";
import { Subscription } from "rxjs";

// Declare IntroductionComponent and set its properties
@Component({
  selector: "app-introduction",
  templateUrl: "./introduction.component.html",
  styleUrls: [
    "./introduction.component.scss"
  ]
})
export class IntroductionComponent implements OnInit, OnDestroy {

  // Declare component properties
  videoSource: string; // video source URL
  beginPlaying: boolean; // whether to play video on initialization
  api: VgApiService; // Videogular API service for controlling video playback
  overlayHidden: boolean; // whether to hide the overlay
  videoEndedSubscription: Subscription; // subscription to the 'ended' event of the video

  // Inject Router service to navigate to other pages
  constructor(private router: Router) {}

  // Set initial component property values on initialization
  ngOnInit(): void {
    this.videoSource = "assets/videos/OL.mp4"; // the URL of the introductory video
    this.beginPlaying = false; // do not start playing the video automatically
    this.overlayHidden = false; // show the overlay
  }

  // Callback function called when the video player is ready to play the video
  onPlayerReady(api: VgApiService):void {
    // Set the api property to the video player's api service
    this.api = api;
  }

  // Handler function called when the user clicks the 'play' button
  playVideo(): void {
    // Hide the overlay
    this.overlayHidden = true;

    // Play the video
    this.api.getMediaById('introVideo').play();

    // Subscribe to the 'ended' event of the video
    this.videoEndedSubscription = this.api.getMediaById('introVideo').subscriptions.ended.subscribe(() => {

      // Once the video has ended, unsubscribe from the 'ended' event
      this.videoEndedSubscription.unsubscribe();

      // Navigate to the 'main' page using the Router service
      this.router.navigate(['/main']);
    });
  }

  // Clean up subscriptions when the component is destroyed
  ngOnDestroy() {
    // Unsubscribe from the 'ended' event subscription to avoid memory leaks
    const subs = [this.videoEndedSubscription];
    subs.forEach( sub => {
      this.unsubscribeEach(sub)
    })
  }

  // Helper function to unsubscribe from the subscription
  unsubscribeEach(subscription:Subscription) {
    if(subscription) {
      subscription.unsubscribe();
    }
  }
}