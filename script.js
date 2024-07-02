var a = 10;
console.log(a)
function samplefunct()
{
    var x="hi";
    let y=100;
    const p=3.14;
    console.log(x);
    console.log(y);
    console.log(p);

}
function length(){
    var name="Pooja";
    console.log(name.length);
}
length()

function yesOrno()
{
    var  x=100;
    if(x==100){
        console.log(+ x +"Correct answer")
    }
    else{
        console.log(+ x +"wrong answer")
    }
}
yesOrno()

//1D array
var myArray = [50,"hello",56.3];
console.log(myArray[0]);
console.log("before",myArray[0]);
myArray[0]=300;
console.log("after",myArray[300]);
myArray[3]="Javascript"
myArray.push(100);
console.log(myArray);

//2D array
var arr=[[50,"poo",56],["sub", 4]];
console.log(arr[0]);

function concat(v1,v2,v3){
    var val;
    val=v1+v2+v3;
    return val;
}
console.log(concat("hi","pooja","!!"))