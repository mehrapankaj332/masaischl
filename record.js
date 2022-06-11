// fill in javascript code here

 
document.querySelector("form").addEventListener("submit",myfunction);
function myfunction(event)
{
  event.preventDefault();
 let nam=document.querySelector("#name").value;
 let empid=document.querySelector("#employeeID").value;
 let dept=document.querySelector("#department").value;
 let exp=document.querySelector("#exp").value;
 let email=document.querySelector("#email").value;
 let mbl=document.querySelector("#mbl").value;

 let tr=document.createElement("tr");
 let td1=document.createElement("td");
 td1.innerText=nam;
 let td2=document.createElement("td");
 td2.innerText=empid;
 let td3=document.createElement("td");
 td3.innerText=dept;
 let td4=document.createElement("td");
 td4.innerText=exp;
 let td5=document.createElement("td");
 td5.innerText=email;
 let td6=document.createElement("td");
 td6.innerText=mbl;
 let td7=document.createElement("td");
if(Number(exp)>5)
{
  td7.innerText="Senior";
}
else if(Number(exp)<5&&Number(exp)>2)
{
  td7.innerText="Junior";
}
else if(Number(exp)<1)
{
  td7.innerText="Fresher";
}
 let td8=document.createElement("button");
 td8.innerText="Delete";

 tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
 document.querySelector("tbody").append(tr);

}
