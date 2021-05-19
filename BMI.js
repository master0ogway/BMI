function BMI(){
    var h = document.getElementById('h').value;
    var w = document.getElementById('w').value;

    var bmio = (w/(h**2))*703

    if(bmio < 18.5){
        document.getElementById('result').innerHTML = `Your BMI is  ${bmio.toFixed(2)}, currently ${(18.5-bmio).toFixed(2)} underweight`;
    }else if(bmio >= 18.5 && bmio < 24.9){
        document.getElementById('result').innerHTML = `Your BMI is  ${bmio.toFixed(2)}, currently ${(25-bmio).toFixed(2)} within healthy weight keep it up`;
    }else if(bmio >= 25 && bmio < 29.9){
        document.getElementById('result').innerHTML = `Your BMI is  ${bmio.toFixed(2)}, currently ${(29.9-bmio).toFixed(2)} overweight`;
    }else{
        document.getElementById('result').innerHTML = `Your BMI is ${bmio.toFixed(2)}`;
    }

    
}
