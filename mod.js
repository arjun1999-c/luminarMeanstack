//reverse of number
var num = 123;
var res=0;
var digit=0;

while (num != 0) {
    digit=num%10;//123%10=3,12%10=2,1%10=1
    res=res*10+digit;//0*10+3=3
    num = Math.floor(num / 10)
}
console.log(res);