import { Component, Input, OnInit } from '@angular/core';
import { ChangeSceneService } from './change-scene.service';

@Component({
  selector: 'app-scene-buttons',
  templateUrl: './scene-buttons.component.html',
})
export class SceneButtonsComponent {

  @Input() currentSceneId;
  @Input() canContinue;

  constructor(public changeSceneService: ChangeSceneService) { }

  changeScene(sceneId: number): void {
    this.changeSceneService.onSceneButtonClick(sceneId);
  }

}
