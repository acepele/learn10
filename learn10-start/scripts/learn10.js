function start() {
    // Math: https://www.w3schools.com/js/js_math.asp
    // Demonstrate the use of round, ceil, floor, trunc, sign
    // pow, min, and random and display to the appropriate paragraphs
    document.getElementById("round").innerHTML = Math.round(3.7);
    document.getElementById("ceil").innerHTML = Math.ceil(2.5);
    document.getElementById("floor").innerHTML = Math.floor(2.8);
    document.getElementById("trunc").innerHTML = Math.trunc(-6.7)
    document.getElementById("sign").innerHTML = Math.sign(-9);
    document.getElementById("pow").innerHTML = Math.pow(4, 3);
    document.getElementById("min").innerHTML =
        Math.min(0, 70, 120, 20, -4, -65, 13, 125, -1);
    document.getElementById("random").innerHTML = Math.random();

    // Random: https://www.w3schools.com/js/js_random.asp
    // create a random integer between 1 and 100 and display in the random2 paragraph
    document.getElementById("random2").innerHTML =
        Math.floor(Math.random() * 100) + 1;

    // Booleans: https://www.w3schools.com/js/js_booleans.asp
    // read the reference



    // Comparisons: https://www.w3schools.com/js/js_comparisons.asp
    // demonstrate and explain the difference between == and === in the
    // comparisons paragraph

    var x = 10; // Here number variable assigned using =  
    if (x == "10") {
        document.getElementById("comparisons").innerHTML = (x == "15")
    } else if (y === "10") {
        document.getElementById("comparisons").innerHTML = (y === "10")
    } else {
        print("== in JavaScript is used for comparing two variables, but it ignores the datatype of variable. === is used for comparing two variables, but this operator also checks datatype and compares two values.");
    }










    // Conditions: https://www.w3schools.com/js/js_if_else.asp
    // Read the conditions page
}