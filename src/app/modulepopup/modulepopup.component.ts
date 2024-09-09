import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserMasterService } from '../Service/user-master.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-modulepopup',
  templateUrl: './modulepopup.component.html',
  styleUrls: ['./modulepopup.component.css']
})
export class ModulepopupComponent implements OnInit {

  constructor(private service: UserMasterService, @Inject(MAT_DIALOG_DATA) public data: any,
  private ref:MatDialogRef<ModulepopupComponent>) { }

  ngOnInit(): void {
    this.GetAllRole()
    this.GetExistData(this.data.userid)
  }

  roleData: any
  editData: any
  saveData: any

  updateForm = new FormGroup({
    userid: new FormControl({ value: "", disabled: true }),
    role: new FormControl("", Validators.required),
    isActive: new FormControl(true)
  })

  SaveUser() {
    if (this.updateForm.valid) {
      this.service.UpdateUser(this.updateForm.getRawValue()).subscribe(item => {
        this.saveData = item
        if (this.saveData.result == 'pass') {
          alertify.success("Updated succesfully.")
          this.ref.close()
        } else {
          alertify.error("Failed, try again")
        }
      })
    }
  }

  GetAllRole() {
    this.service.GetAllRoles().subscribe(item => {
      this.roleData = item
    })
  }

  GetExistData(userid: any) {
    this.service.GetUserById(userid).subscribe(item => {
      this.editData = item
      if (this.editData != null) {
        this.updateForm.setValue({
          userid: this.editData.userid,
          role: this.editData.role,
          isActive: this.editData.isActive
        })
      }
    })
  }

}
