window.onload = function() {
    let x = +prompt("Iveskite pirma skaiciu");
    let y = +prompt("Iveskite antra skaiciu");

    if (x > y) {
        return -1;
    } else if (x < y) {
        return 1;
    }
    else {
        return 0;
    }
}
    

