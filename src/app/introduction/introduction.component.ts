import { HostListener, OnDestroy } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { VgApiService } from "@videogular/ngx-videogular/core";
import { Subscription } from "rxjs";

@Component({
  selector: "app-introduction",
  templateUrl: "./introduction.component.html",
  styleUrls: [
    "./introduction.component.scss"
  ]
})
export class IntroductionComponent implements OnInit, OnDestroy {
  videoSource: string;
  beginPlaying: boolean;
  api: VgApiService;
  overlayHidden: boolean;
  videoEndedSubscription: Subscription;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.videoSource = "assets/videos/OL.mp4"; //disable for electron build
    this.beginPlaying = false;
    this.overlayHidden = false;
  }

  onPlayerReady(api: VgApiService):void {
    this.api = api;
  }
  playVideo(): void {
    this.overlayHidden = true;
    this.api.getMediaById('introVideo').play();
    this.videoEndedSubscription = this.api.getMediaById('introVideo').subscriptions.ended.subscribe(() => {
      this.videoEndedSubscription.unsubscribe();
      this.router.navigate(['/main']);
    });
  }

  ngOnDestroy() {
    const subs = [this.videoEndedSubscription];
    subs.forEach( sub => {
      this.unsubscribeEach(sub)
    })
  }

  unsubscribeEach(subscription:Subscription) {
    if(subscription) {
      subscription.unsubscribe();
    }
  }
}
