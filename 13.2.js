window.onload = function() {
    let x = +prompt("Iveskite skaiciu");
    alert("Skaicius dalinasi is 3: " + arDalynasiIsTrejetoBeLiekanos(x));
}
function arDalynasiIsTrejetoBeLiekanos(skaicius) {
    return skaicius % 3 == 0;
}
