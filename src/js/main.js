function input(sun) {
    var x = document.getElementById("result") ;
    var y = document.getElementById("myPara") ;
    x.value += sun ;
    y.innerHTML += sun ;
}

function factorial(num) {
    if (Number.isInteger(num)) {
        if (num < 2) return 1 ;
        return num * factorial(num - 1) ;
    }
}

function sqrt() {
    var x = document.getElementById("result") ;
    var y = document.getElementById("myPara") ;
    x.value += "sqrt(" ;
    y.innerHTML += (/[\d)IE]/.test(y.innerHTML.slice(-1))) ?
    " * Math.sqrt(" : "Math.sqrt(" ;
}

function leftParen() {
    var x = document.getElementById("result") ;
    var y = document.getElementById("myPara") ;
    x.value += "(" ;
    y.innerHTML += (/[\d)IE]/.test(y.innerHTML.slice(-1))) ?
    " * (" : "(" ;
}

function multOrDiv(edward) {
    var x = document.getElementById("result") ;
    var y = document.getElementById("myPara") ;
    if (edward == "mult") {
        x.value += "\u00D7" ;
        y.innerHTML += "*" ;
    } else {
        x.value += "\u00F7" ;
        y.innerHTML += "/"
    }
}

function del() {
    var x = document.getElementById("result") ;
    var y = document.getElementById("myPara") ;
    var z = document.getElementById("myAns") ;
    if (x.value.slice(-3) == "Ans") {
        y.innerHTML = (/[\d)IE]/.test(x.value.slice(-4, -3))) ?
        y.innerHTML.slice(0, -(z.innerHTML.length + 3)) : y.innerHTML.slice(0, -(z.innerHTML.length)) ;
        x.value = x.value.slice(0, -3) ;
    } else if (x.value == "Error!") {
        ac() ;
    } else {
        switch (y.innerHTML.slice(-2)) {
            case "t(": // sqrt
            y.innerHTML = (/[\d)IE]/.test(x.value.slice(-6, -5))) ?
            y.innerHTML.slice(0, -13) : y.innerHTML.slice(0, -10) ;
            x.value = x.value.slice(0, -5) ;
            break ;
            default:
            y.innerHTML = y.innerHTML.slice(0, -1) ;
            x.value = x.value.slice(0, -1) ;
        }
    }
}

function ac() {
    var x = document.getElementById("result") ;
    var y = document.getElementById("myPara") ;
    x.value = y.innerHTML = "" ;
}

function ans() {
    var x = document.getElementById("result") ;
    var y = document.getElementById("myPara") ;
    var z = document.getElementById("myAns") ;
    x.value += "Ans" ;
    y.innerHTML += (/[\d)IE]/.test(y.innerHTML.slice(-1))) ?
    " * " + z.innerHTML : z.innerHTML ;
}

function equal() {
    var x = document.getElementById("result") ;
    var y = document.getElementById("myPara") ;
    var z = document.getElementById("myAns") ;
    for (var i = 0; i < x.value.split("(").length - x.value.split(")").length; i++) {
        y.innerHTML += ")" ;
    }
    if (y.innerHTML != "") {
        x.value = y.innerHTML = z.innerHTML = eval(y.innerHTML
        .replace(/(\d+\.?\d*)\!/g, "factorial($1)")
        .replace(/(\(?[^(]*\)?)\^(\(?.*\)?)/, "Math.pow($1, $2)")
        ) ;
    }
    if (!isFinite(x.value)) x.value = "Error!" ;
}
