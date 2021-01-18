import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreditsComponent } from "./credits/credits.component";
import { EndComponent } from "./end/end.component";
import { HomeComponent } from "./home/home.component";
import { IntroductionComponent } from "./introduction/introduction.component";
import { MainComponent } from "./main/main.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "introduction", component: IntroductionComponent },
  { path: "main", component: MainComponent },
  { path: "end", component: EndComponent },
  { path: "credits", component: CreditsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
