import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ParkservService } from '../parkserv.service';

@Component({
  selector: 'app-parkingtab',
  templateUrl: './parkingtab.component.html',
  styleUrls: ['./parkingtab.component.css']
})
export class ParkingtabComponent {

          rownum:Array<number>=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
          form!:FormGroup
        constructor(private fb:FormBuilder,private demo:ParkservService) {
            this.form=this.fb.group({
              delid:[''],
              id:[''],
              carnum:[''],
              intime:[''],
              outtime:['00:00'],
              status:['']
            })
        }
        get in(){
          return this.form.get('intime')
        }
        get out(){
          return this.form.get('outtime')
        }

          arr:any=[]
          indexnum:number=0
          clc(i:number){
            // console.log(i);
            this.indexnum=i
            console.log(this.indexnum);


          }
          nenum!:number
          x:any
          indextoremoves:any
          // stat:boolean=false
          carin(i:number){
            this.arr.push({id:this.indexnum,carnum:this.form.value.carnum,intime:this.form.value.intime,outtime:this.form.value.outtime,status:false})
            console.log(this.arr);
            this.demo.sharedata(this.indexnum,this.arr)

            console.log(this.arr);
            console.log(this.indexnum);

             this.indextoremoves= this.arr.findIndex((p:any)=>p.id===this.indexnum)
             this.t = this.arr[this.indextoremoves]
            //  console.log(this.t);

             if(this.t.status==false  ){
              this.t.status=true
             }

             console.log(this.t);
            }
            t:any
            tt:any
            carout(i:number){

              console.log(this.indexnum);
              console.log(this.indextoremoves);
              this.arr.splice(this.indextoremoves,1)
              if(this.t.status==true){

                this.t.status=false
              }
              console.log(this.t);

               this.tt =
              parseInt(this.t.outtime.split(':')[0]) -
              parseInt(this.t.intime.split(':')[0]) +
              (parseInt(this.t.outtime.split(':')[1]) -
                parseInt(this.t.intime.split(':')[1])) /
                60;
                console.log(this.tt);


              // if()
            // delete this.t
          }
}
