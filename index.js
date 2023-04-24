
alert("Thanks for visiting......");
document.getElementById('main').addEventListener("mouseover",function(){
    this.style.backgroundColor = '#66FCF1';
})
document.getElementById('main').addEventListener("mouseover",function(){
    this.style.backgroundColor = '#45A29E';
}) 
var feet = document.getElementById('feet');
var inch = document.getElementById('inch');

feet.addEventListener('input', function(){
    Let f = this.value;
    Let i = f*12;
    inch.value =i;
})

inch.addEventListener('input',function(){
    Let i = this.value;
    Let f = i/12;
    if(!Number.isInteger(f))
    {
        f = f.toFixed(2);
    }
    feet.value = f;
})