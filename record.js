// fill in javascript code here

  let head=document.querySelector("tr3");
  document.querySelector("tbody").append(head);
 let nam=document.querySelector("#name").value;
 let empid=document.querySelector("#employeeID");
 let deptmnt=document.querySelector("#department");
 let exp=document.querySelector("#exp");
 let emlid=document.querySelector("#email");
 let mblnmbr=document.querySelector("#mbl");


let tr2=document.createElement("tr").setAttribute("id","pankaj");
let t1=document.createElement("th").innerText="hi";
let t2=document.createElement("th").innerText="hello";
let t3=document.createElement("th").innerText="who";
let t4=document.createElement("th").innerText="me";
let t5=document.createElement("th").innerText="i";
let t6=document.createElement("th").innerText="j";
let t7=document.createElement("th").innerText="k";
let t8=document.createElement("th").innerText="l";
let pank=document.querySelector("#pankaj");

document.querySelector("#pankaj").append(t1,t2,t3,t4,t5,t6,t7,t8)
let x=document.querySelector("#pankaj");
document.querySelector("table>tbody").append(x);
// document.querySelector("tbody").append(pank);



document.querySelector("form").addEventListener("submit",myfucntion)


function myfucntion(event)
{
 event.preventDefault();
 t1.innerText=nam;
 t2.innerText=empid.value;
 t3.innerText=deptmnt.value;
 t4.innerText=exp.value;

 t5.innerText=emlid.value;
 t6.innerText=mblnmbr.value;
 
  


}
