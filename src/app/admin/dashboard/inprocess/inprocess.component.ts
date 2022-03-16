import { Component, OnInit } from "@angular/core";
import inprocessData from "../../../../assets/data/inprocessdata.json";

interface Patients {
  patient: string;
  claimID: number;
  provider: string;
  payer: string;
  dateOfService: string;
  status: string;
}
@Component({
  selector: "app-inprocess",
  templateUrl: "./inprocess.component.html",
  styleUrls: ["./inprocess.component.sass"],
})
export class InprocessComponent implements OnInit {
  patients: Patients[] = inprocessData;
  constructor() {}

  ngOnInit(): void {}
}
