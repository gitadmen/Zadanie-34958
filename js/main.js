


function colorchange(){

    document.getElementById('one').setAttribute('style', 'background-color:chartreuse');
    document.getElementById('second').setAttribute('style', 'background-color:blue');

}


document.getElementById('swap').addEventListener('click', colorchange);