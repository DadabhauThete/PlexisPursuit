import { Component, OnInit } from "@angular/core";
import { TooltipPosition } from "@angular/material/tooltip";
@Component({
  selector: "app-claimsdetails",
  templateUrl: "./claimsdetails.component.html",
  styleUrls: ["./claimsdetails.component.sass"],
})
export class ClaimsdetailsComponent implements OnInit {
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
