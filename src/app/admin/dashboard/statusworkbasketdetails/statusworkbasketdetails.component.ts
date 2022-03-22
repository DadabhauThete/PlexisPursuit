import { Component, OnInit } from "@angular/core";
import { TooltipPosition } from "@angular/material/tooltip";

@Component({
  selector: "app-statusworkbasketdetails",
  templateUrl: "./statusworkbasketdetails.component.html",
  styleUrls: ["./statusworkbasketdetails.component.sass"],
})
export class StatusworkbasketdetailsComponent implements OnInit {
  positionOptions: TooltipPosition[] = [
    "after",
    "before",
    "above",
    "below",
    "left",
    "right",
  ];
  position = this.positionOptions[2];
  constructor() {}

  ngOnInit(): void {}
}
