
function enrollStudentsList()
{
 
   let studentName=document.getElementById("name");
   if(studentName.value=="")
   {
      alert("Enter your full name");
      studentName.focus();
      return false;
   }
   
   let studentEmail = document.getElementById("email");
    if( studentEmail.value != "" )
    {
        atpos = studentEmail.value.indexOf("@");
        dotpos = studentEmail.value.lastIndexOf(".");
    }
    if (studentEmail.value == "" || atpos < 1 || ( dotpos - atpos < 2 ))
    {
        alert("Enter your correct email ID");
        studentEmail.focus();
        return  false;
    }
 


var studentWebsite=document.getElementById("website");
var UrlRegx=/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

if(!(UrlRegx.test(studentWebsite.value)))
{
    alert("enter a valid url!");
    studentWebsite.focus();
    return false;
}

var inputImage=document.getElementById("image");
var filePath=inputImage.value;
var allowedExtensions= /(\.jpg|\.jpeg|\.png|\.gif)$/i;
if(!allowedExtensions.exec(filePath))
{
    alert("Please upload file having extensions .jpeg/.jpg/.png/.gif only.");
    inputImage.value='';
    return false;
}

var radio1=document.getElementById("male");
var radio2=document.getElementById("female");

if((radio1.checked==false) && (radio2.checked==false))
{
    alert ( "Choose Your Gender: Male or Female" );
    return false;
}

var checkBox1= document.getElementById("java");
var checkBox2= document.getElementById("html");
var checkBox3= document.getElementById("css");

if((checkBox1.checked==false )&& (checkBox2.checked==false) && (checkBox3.checked==false)) 
{
    alert("kindly choose a skill");
    return  false;
}

var table = document.getElementById('list');
        var tr = table.insertRow();
        let html= "<div style='font-weight: bold;'>"+studentName.value +"</div>";
        html+=
        "<div><a href="+ email.value +">"+studentEmail.value+"</a></div>";
        html+= "<div><a href="+ website.value +">"+studentWebsite.value+"</a></div>";
        html+= "<div>";
        html+= radio1.checked ? 'Male' :'Female';
        html+= "</div>";
        html+= "<div>"; 
        html+= checkBox1.checked ? 'JAVA' : ' ';
        html+= checkBox2.checked ? 'HTML' : ' ';
        html+= checkBox3.checked ? 'CSS' : ' ' ;
        html+=  "</div>";

let imageLink=image.value;


var cell=tr.appendChild(document.createElement('td'));
cell.innerHTML=html;
var img=document.createElement('img');
img.src=imageLink;
var cell=tr.appendChild(document.createElement('td'));
cell.appendChild(img);

}

