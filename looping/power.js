var upp = 30;
var low = 5;
var num = 2;
i = 1;



while (i <= 30) {
    res = i ** num;

    if (res >= low & res <= upp) {
        console.log(i);
    }
    i++;
}
