import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { VgApiService } from "@videogular/ngx-videogular/core";
import { Observable } from "rxjs";
import { ChangeResponseService } from "../overlay/response-buttons/select-response.service";
import { ChangeSceneService } from "../overlay/scene-buttons/change-scene.service";
import { scenes } from "../scenes/scene-data";
import { SceneModel, ResponseModel } from "../scenes/scenes-model";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
})
export class MainComponent implements OnInit {



  title = "nursing-sim";
  api: VgApiService;
  autoPlay: false;
  firstInit: boolean;

  sceneId: number;

  videoSource: any;
  scenes: SceneModel[] = scenes;

  currentScene: SceneModel;
  currentResponse: ResponseModel;
  responseOngoing: boolean;
  hasResponded: boolean;
  videoPlayed: boolean;
  needsToRetry: boolean;

  overlayIsHidden: boolean;
  currentResponseChange: Observable<any>;
  vidEndSubscription: any;
  vidReadySubscription: any;
  // responsesSubscription: Subscription;
  // sceneSubscription: Subscription;

  correctResponse: boolean;

  constructor(
    private getResponseService: ChangeResponseService,
    private getSceneService: ChangeSceneService,
    private router: Router
  ) {
    this.firstInit = true;
    this.currentScene = scenes[0];
    // this.screenWidth = 400;
  }

  ngOnInit(): void {
    this.initializeComponent();
  }


  initializeComponent(): void {
    // this.videoSource = "./../assets/videos/".concat(this.scenes[0].responses[0].src); // disable for electron build
    this.scenes = scenes;
    this.needsToRetry = false;
    this.sceneId = 0;
    this.overlayIsHidden = false;
    this.currentScene = scenes[0];
    this.hasResponded = false;
    this.subscribeToResponses();
    this.subscribeToSceneChanges();
    // this.responsesSubscription = this.subscribeToResponses();
    // this.sceneSubscription = this.subscribeToSceneChanges();
    this.correctResponse = null;
    if (this.api !== undefined) {
      console.log("API is not null", this.api);
    } else {
      console.log("API is Null");
    }
  }

  onPlayerReady(api: VgApiService): void {
    if (this.firstInit) {
      this.api = api;
      this.firstInit = false;
    }
  }

  chooseResponse(): void {
    this.api.play();
  }

  subscribeToSceneChanges(): void {
    this.getSceneService.invokeSceneChange.subscribe((sceneId) => {
      if (sceneId < 5) {
        this.hasResponded = false;
        this.currentScene = scenes[sceneId];
        this.sceneId = sceneId;
        this.subscribeToResponses();
      } else {
        console.debug('Reached the end of the scenario.');
        this.router.navigate(['/end']);
      }
    });
  }

  subscribeToResponses(): void {
    this.getResponseService.invokeResponseSelection.subscribe(
      (response) => {
        this.responseOngoing = true;
        this.videoSource = "assets/videos/".concat(response.src); //disable for electron build
        console.log(this.videoSource);
        this.api
          .getMediaById("singleVideo")
          .subscriptions.canPlay.subscribe(() => {
            this.api
              .getMediaById("singleVideo")
              .subscriptions.ended.subscribe(() => {
                this.responseOngoing = false;
                this.hasResponded = true;
                this.currentResponse = response;
              });
            this.api.getMediaById("singleVideo").play();
          });
      }
    );
  }

}
