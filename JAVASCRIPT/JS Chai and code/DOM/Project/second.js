const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')
    const range = document.querySelector('#range')

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `please give a valid height ${height}`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `please give a valid weight ${weight}`;
    }
    else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        // show the result
        result.innerHTML = `<span>${bmi}</span>`;
        if(bmi<=18.6){
            range.innerHTML = `Under Weight`;
        }
        else if(bmi>=18.6 && bmi<=24.9){
            range.innerHTML = `Normal Range`;
        }
        else{
            range.innerHTML = `Over Weight`;
        }
    }

});
