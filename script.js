function tempConvert(){
    var value = document.getElementById("values").value;
    var result = document.getElementById("results").value;

    var check1 = document.getElementsByTagName("select")[0].value;
    var check2 = document.getElementsByTagName("select")[1].value;

    if(check1 == "celsius" && check2 == "fahrenheit"){
        var fahrenheit = (parseFloat(value) * 1.8) + 32;
        document.getElementById("results").value = parseFloat(fahrenheit).toFixed(3);
        
    }
    else if(check1 == "fahrenheit" && check2 == "celsius")
    {
        var celsius = (parseFloat(value) - 32) / 1.8;
        document.getElementById("results").value = parseFloat(celsius).toFixed(3);
    }
    else
    {
        alert("Both degrees can't be same");
    }
}

function reset(){
    document.getElementById("values").value = ("");
    document.getElementById("results").value = ("");
}