import { not } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Coure } from 'src/app/models/coure';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-coure',
  templateUrl: './coure.component.html',
  styleUrls: ['./coure.component.scss']
})
export class CoureComponent implements OnInit {



  constructor(private api:ApiService) { }

  dataSource!: Coure[];
  visible!:boolean;
  label!:string;

  My_Cour:Coure={
    id:0,title:"",price:0,content:"",image:""
  }

  ngOnInit(): void {
    this.getAllCourses();
  }


  getAllCourses(){
    this.api.findAll()
    .subscribe({
      next:(res)=>{
       this.dataSource=res;

      },
      error:(err)=>{
        console.log(err);
        alert('err while getting courses')
      }
    });


  }

  addCours(){
    console.log(this.My_Cour);
    this.api.addCoure(this.My_Cour).subscribe({
      next:(res)=>{
        alert("Cours Added Successfully");
        this.restCours();
        this.visible=false;
        this.getAllCourses();
      },
      error:()=>{
        alert("Error While adding the Cours")
      }
    })
  }

  editCoure(){
  this.api.editeCoure(this.My_Cour,this.My_Cour.id)
  .subscribe({
    next:(res)=>{
      alert("Cours Updated Successfully");
      this.restCours();
      this.visible=false;
      this.getAllCourses();
    },
    error:()=>{
      alert("Error While updating the Cours")
    }
  })
}

deleteCoure(id:any){
  if (confirm("Are you Sure You Want to Delete this Cours !!")) {
    this.api.deleteCoure(id)
    .subscribe({
      next:(res)=>{
        alert("Cours Deleted Successfully");
        this.getAllCourses();
      },
      error:()=>{
        alert("Error While Deleting the Cours")
      }
    })
  }

}

show_edit_form(coure:Coure){
  if (!this.visible) {

    this.visible=!this.visible;
  }
  this.My_Cour=coure
  this.label="Edite Cours";
  console.log(this.My_Cour);
 }

show_add_form(){
  if (!this.visible) {
    this.visible=!this.visible;
  }
  this.label="Add Cours";
}

restCours(){
  this.My_Cour.id=0;
  this.My_Cour.title="";
  this.My_Cour.price=0;
  this.My_Cour.content="";
  this.My_Cour.image="";
}

}
