import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
@Component({
  selector: "app-complete",
  templateUrl: "./complete.component.html",
  styleUrls: ["./complete.component.sass"],
})
export class CompleteComponent implements OnInit {
  sortClaims: FormGroup;
  campaignOne: FormGroup;
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
  onSubmit() {
    console.log("Form Value", this.sortClaims.value);
  }
}
