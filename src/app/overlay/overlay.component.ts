import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ResponseModel, SceneModel } from "../scenes/scenes-model";

@Component({
  selector: "app-overlay",
  templateUrl: "./overlay.component.html",
})
export class OverlayComponent implements OnInit {
  // boolean values to track the status of the overlay
  needsResponse: boolean;
  correct: boolean;
  needsRetry: boolean;
  sceneOver: boolean;

  // default values for overlay text and title
  overlayTitle = "Situation:";
  overlayText: string;

  // boolean value to check if the component is initialized
  initialized = false;

  // private variables to store the current response, current scene, and response status
  private _currentResponse: ResponseModel;
  private _currentScene: SceneModel;
  private _hasResponded: boolean;

  // get and set properties for current scene
  @Input()
  set currentScene(scene: SceneModel) {
    console.log("Current scene changed to: ", scene);
    this._currentScene = scene;
    this.overlayTitle = "Situation:";
    this.overlayText = scene.situation;
  }
  get currentScene(): SceneModel {
    return this._currentScene;
  }

  // get and set properties for hasResponded variable
  @Input()
  set hasResponded(responded: boolean) {
    this._hasResponded = responded;

    // check if the component is initialized and has already responded
    if (this.initialized) {
      if (this._hasResponded) {
        return;
      } else {
        // reset overlay text and title to the current scene's situation
        this.overlayText = this.currentScene.situation;
        this.overlayTitle = "Situation: ";
      }
    }
  }
  get hasResponded(): boolean {
    return this._hasResponded;
  }

  // input property for current scene ID
  @Input() currentSceneId: number;

  // get and set properties for current response
  @Input()
  set currentResponse(response: ResponseModel) {
    console.log("Current response changed to: ", response);
    console.log("hasResponded: ", this.hasResponded);

    // check if the component has already responded
    if (this.hasResponded) {
      // set the correct and needsRetry values based on the response
      this.correct = response.correct;
      this.needsRetry = !this.correct;

      // set the overlay title and text based on the response correctness
      if (this.correct) {
        this.overlayTitle = "Well done!";
      } else if (!this.correct) {
        this.overlayTitle = "Incorrect Response!";
      }
      this.overlayText = response.codeMessage;
    }

    // set the current response value
    this._currentResponse = response;
  }
  get currentResponse(): ResponseModel {
    console.log("Got current response: ", this._currentResponse);
    return this._currentResponse;
  }

  // output property for passing next scene
  @Output() passNextScene = new EventEmitter<string>();

  scenes: any;

  constructor() {
    this.needsRetry = false;
    this.needsResponse = true;
  }

  ngOnInit(): void {
    console.log(this.scenes);
    this.initialized = true;
  }
}
