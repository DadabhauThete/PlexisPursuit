import { Page404Component } from "./../../authentication/page404/page404.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { Dashboard2Component } from "./dashboard2/dashboard2.component";
import { SubmitclaimsComponent } from "./submitclaims/submitclaims.component";
import { InprocessComponent } from "./inprocess/inprocess.component";
import { CompleteComponent } from "./complete/complete.component";
import { StatusworkbasketComponent } from "./statusworkbasket/statusworkbasket.component";
import { ReportComponent } from "./report/report.component";
import { ClaimsdetailsComponent } from "./claimsdetails/claimsdetails.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "main",
    pathMatch: "full",
  },
  {
    path: "main",
    component: MainComponent,
  },
  {
    path: "submitclaims",
    component: SubmitclaimsComponent,
  },
  {
    path: "inprocess",
    component: InprocessComponent,
  },
  {
    path: "complete",
    component: CompleteComponent,
  },
  {
    path: "statusworkbasket",
    component: StatusworkbasketComponent,
  },
  {
    path: "report",
    component: ReportComponent,
  },
  {
    path: "claimsdetails",
    component: ClaimsdetailsComponent,
  },
  {
    path: "claimsdetails/:id",
    component: ClaimsdetailsComponent,
  },
  {
    path: "dashboard2",
    component: Dashboard2Component,
  },
  { path: "**", component: Page404Component },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
