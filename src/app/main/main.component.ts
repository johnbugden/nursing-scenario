import { ThrowStmt } from "@angular/compiler";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { VgApiService } from "@videogular/ngx-videogular/core";
import { Observable, Subscription } from "rxjs";
import { ChangeResponseService } from "../overlay/response-buttons/select-response.service";
import { ChangeSceneService } from "../overlay/scene-buttons/change-scene.service";
import { scenes } from "../scenes/scene-data";
import { SceneModel, ResponseModel } from "../scenes/scenes-model";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
})
export class MainComponent implements OnInit, OnDestroy {
  title = "nursing-sim";
  api: VgApiService;
  autoPlay: false;
  lastVideoSource: string;
  sceneId: number;

  videoSource: any;
  scenes: SceneModel[] = scenes;

  currentScene: SceneModel;
  currentResponse: ResponseModel;
  unEndedCurrentResponse: ResponseModel;



  responseOngoing: boolean;
  hasResponded: boolean;
  videoPlayed: boolean;
  needsToRetry: boolean;

  overlayIsHidden: boolean;
  currentResponseChange: Observable<any>;
  vidEndSubscription: Subscription;
  vidReadySubscription: Subscription;
  responsesSubscription: Subscription;
  sceneSubscription: Subscription;

  correctResponse: boolean;

  constructor(
    private getResponseService: ChangeResponseService,
    private getSceneService: ChangeSceneService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initializeComponent();
  }

  initializeComponent(): void {
    this.scenes = scenes;
    this.needsToRetry = false;
    this.sceneId = 0;
    this.overlayIsHidden = false;
    this.currentScene = scenes[0];
    this.hasResponded = false;
    this.responsesSubscription = this.subscribeToResponses();
    this.sceneSubscription = this.subscribeToSceneChanges();
    this.correctResponse = null;
    if (this.api !== undefined) {
      console.log("API is not null", this.api);
    } else {
      console.log("API is Null");
    }
  }

  onPlayerReady(api: VgApiService): void {
    this.api = api;
  }

  chooseResponse(): void {
    this.api.play();
  }

  subscribeToSceneChanges(): Subscription {
    return this.getSceneService.invokeSceneChange.subscribe((sceneId) => {
      if (sceneId < 5) {
        this.hasResponded = false;
        this.currentScene = scenes[sceneId];
        this.sceneId = sceneId;
        this.responsesSubscription = this.subscribeToResponses();
      } else {
        console.debug('Reached the end of the scenario.');
        this.router.navigate(['/end']);
      }
    });
  }

  subscribeToResponses(): Subscription {
    return this.getResponseService.invokeResponseSelection.subscribe(
      (response) => {
        console.log("New response: ", response);
        this.responsesSubscription.unsubscribe();
        this.responseOngoing = true;
        this.videoSource = "";
        this.videoSource = "assets/videos/".concat(response.src); //disable for electron build
        console.log("New video source: ", this.videoSource);
        console.log("Last VideoSRC: ", this.lastVideoSource);
        console.log("New video source canPlay: ", this.api.getMediaById("singleVideo").canPlay);
        console.log("Last VideoSRC: ", this.lastVideoSource);
        this.unEndedCurrentResponse = response;
        if (this.videoSource === this.lastVideoSource) {
          this.videoSource = "assets/videos/OL.mp4";
          this.vidReadySubscription = this.api.getMediaById("singleVideo").subscriptions.canPlay.subscribe(() => {
            this.videoSource = this.lastVideoSource;
            this.vidReadySubscription.unsubscribe();
            this.videoReadySubscription();
          })
        } else {
          this.videoReadySubscription();
        }
      }
    );
  }

  videoReadySubscription() {
    this.vidReadySubscription = this.api
      .getMediaById("singleVideo")
      .subscriptions.canPlay.subscribe(() => {
        this.vidReadySubscription.unsubscribe();
        this.api.getMediaById("singleVideo").currentTime = 0;
        console.log("(canPay Subscription) New video source canPlay: ", this.api.getMediaById("singleVideo").canPlay);
        this.vidEndSubscription = this.api
          .getMediaById("singleVideo")
          .subscriptions.ended.subscribe(() => {
            this.vidEndSubscription.unsubscribe();
            this.responseOngoing = false;
            this.hasResponded = true;
            this.currentResponse = this.unEndedCurrentResponse;
            this.lastVideoSource = this.videoSource
          });
        this.api.getMediaById("singleVideo").play();
      });
  }

  ngOnDestroy() {
    const subs = [this.vidEndSubscription, this.vidReadySubscription, this.sceneSubscription, this.responsesSubscription];
    subs.forEach(sub => {
      this.unsubscribeEach(sub)
    })
  }

  unsubscribeEach(subscription: Subscription) {
    if (subscription) {
      subscription.unsubscribe();
    }
  }
}
