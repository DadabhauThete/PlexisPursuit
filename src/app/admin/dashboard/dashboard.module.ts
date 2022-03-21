import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { MainComponent } from "./main/main.component";
import { Dashboard2Component } from "./dashboard2/dashboard2.component";
import { ChartsModule as chartjsModule } from "ng2-charts";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MatTooltipModule } from "@angular/material/tooltip";
import { NgApexchartsModule } from "ng-apexcharts";
import { ComponentsModule } from "src/app/shared/components/components.module";
import { SharedModule } from "src/app/shared/shared.module";
import { SubmitclaimsComponent } from "./submitclaims/submitclaims.component";
import { InprocessComponent } from "./inprocess/inprocess.component";
import { CompleteComponent } from "./complete/complete.component";
import { StatusworkbasketComponent } from "./statusworkbasket/statusworkbasket.component";
import { ReportComponent } from "./report/report.component";
import { MatTableModule } from "@angular/material/table";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatExpansionModule } from "@angular/material/expansion";
import { StatusworkbasketdetailsComponent } from './statusworkbasketdetails/statusworkbasketdetails.component';
@NgModule({
  declarations: [
    MainComponent,
    Dashboard2Component,
    SubmitclaimsComponent,
    InprocessComponent,
    CompleteComponent,
    StatusworkbasketComponent,
    ReportComponent,
    StatusworkbasketdetailsComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    chartjsModule,
    NgApexchartsModule,
    PerfectScrollbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTooltipModule,
    ComponentsModule,
    SharedModule,
    MatTableModule,
    MatCheckboxModule,
    MatExpansionModule,
  ],
})
export class DashboardModule {}
