function greet(){
    let fname=document.getElementById("fname").value;
    let lname=document.getElementById("lname").value;
    if(fname==='' |lname===''){
        alert("Please enter both First name and last name");
    }
    else{
        alert('Hello ' + fname + ' '+ lname + '!');
    }
    return false;
}
