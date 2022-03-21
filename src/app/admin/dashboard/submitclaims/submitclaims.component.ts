import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import submittedclaimsData from "../../../../assets/data/submittedclaimsdata.json";

@Component({
  selector: "app-submitclaims",
  templateUrl: "./submitclaims.component.html",
  styleUrls: ["./submitclaims.component.sass"],
})
export class SubmitclaimsComponent implements OnInit {
  submitclaimsdata = submittedclaimsData;
  panelOpenState = false;
  sortClaims: FormGroup;
  campaignOne: FormGroup;
  showMyContainer: boolean = false;
  showTab = 1;
  tabToggle(index) {
    this.showTab = index;
  }
  toggle(index) {
    this.showTab = index;
  }
  constructor(private fb: FormBuilder) {
    this.initForm();
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    this.campaignOne = new FormGroup({
      start: new FormControl(new Date(year, month, 13)),
      end: new FormControl(new Date(year, month, 16)),
    });
  }
  initForm() {
    this.sortClaims = this.fb.group({
      startDate: ["", [Validators.required]],
      endDate: ["", [Validators.required]],
      patientName: ["", [Validators.required]],
      claimId: ["", [Validators.required]],
    });
  }

  ngOnInit(): void {}
  onRegister() {
    console.log("Form Value", this.sortClaims.value);
  }
}
