let factorial = 0;

function factorial(n) {

    if (n === 1) {
        alert(1);
        return 1;
    } else {
        let factorial = n * factorial(n - 1);
        alert(factorial);
        return factorial;
    }
}

alert("hola");

factorial(10);

