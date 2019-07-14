function reverseNumber(a) {
    let reverse = 0;
    let isNegativeNumber = a < 0;
    a = Math.abs(a);
    
    while (a) {
        reverse = reverse * 10 + (a % 10);
        a = Math.floor(a / 10);
    }

    if (isNegativeNumber) {
        reverse *= -1;
    }
    return reverse;
}

reverseNumber(123);
reverseNumber(-456);
reverseNumber(10000);


