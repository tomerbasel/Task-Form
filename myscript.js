
function popup() {
alert("Hello World")
}


function test(){

	alert(document.getElementById('name').value);
}


function KeepCount(){

var i=0

if (document.theForm.time.checked)
	{i=i+1}
if (document.theForm.dog.checked)
	{i=i+1}
if (document.theForm.doggy.checked)
	{i=i+1}
if (document.theForm.kangaroo.checked)
	{i=i+1}
if (document.theForm.age.checked)
	{i=i+1}

	if (i>3) {alert("please choose up to 3")
		document.theForm; return false;}

}

function summery(){
 


}

function formsummery(){

    var x;
    if (confirm("Press a button!") == true) {
        x = "You pressed OK!";
    } else {
        x = "You pressed Cancel!";
    }

    document.getElementById("demo").innerHTML = x;
	
}

function validation(){

	var name= document.forms["theForm"]["name"].value;
	if (name == null || name=="") {alert ('please chack for missing details');
	return false
	} 
	var lastname= document.forms["theForm"]["lastName"].value;
	if (lastname == null || lastname=="") {alert ('please chack for missing details');
	return false;}

	var x= document.forms["theForm"]["mail"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Not a valid e-mail address");
        return false;}
}