
//Resolution

let n1 = 0, n2 = 1, nextValue;

console.log('Fibonacci Series:');
console.log(n1); // print 0
console.log(n2); // print 1

nextValue = n1 + n2;

while (nextValue <= 500) {

    
    console.log(nextValue);

    n1 = n2;
    n2 = nextValue;
    nextValue = n1 + n2;
}






