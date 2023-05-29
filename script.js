function converttemp(){
    const tempinput = document.getElementById('tempinput').value;
    const fromunit = document.getElementById('fromunit').value;
    const tounit = document.getElementById('tounit').value;

    if(!tempinput || isNaN(tempinput)){
        alert('please enter a valid temperature.');
        return;
    }

    const temp = parseFloat(tempinput);

    let Convertedtemp;

    if(fromunit === 'celsius' && tounit === 'fahrenheit'){
        Convertedtemp = (temp * 9/5) + 32;
    }else if(fromunit === 'celsius' && tounit === 'kelvin'){
        Convertedtemp = temp + 273.15;
    }else if(fromunit === 'fahrenheit' && tounit === 'celsius'){
        Convertedtemp = (temp - 32) * 5/9;
    }else if(fromunit === 'fahrenheit' && tounit === 'kelvin'){
        Convertedtemp = (temp + 459.67) * 5/9;
    }else if(fromunit === 'kelvin' && tounit === 'celsius'){
        Convertedtemp = (temp - 273.15);
    }else if(fromunit === 'kelvin' && tounit === 'fahrenheit'){
        Convertedtemp =(temp * 9/5) - 459.67;
    }else{
        Convertedtemp = temp;
    }

    document.getElementById('result').textContent = `${Convertedtemp.toFixed(2)} ${tounit}`;

}