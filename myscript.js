
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

