var disp = document.getElementById("disp");
console.log(disp.textContent);
function ud(n){ 
    if(disp.textContent.length < 15)
        disp.textContent += n ;
    //console.log(disp.textContent);
}

function calculate(input) {
    let tmp = input.split('');
}

function ans(){
    //console.log(disp.textContent);
    c=eval(disp.textContent);
    disp.textContent=c;
    //console.log(disp.textContent);
}
function clc(){
    disp.textContent='';
}

    document.getElementById("1").addEventListener("click",function(){ ud(1); });
    document.getElementById("2").addEventListener("click",function(){ ud(2); });
    document.getElementById("3").addEventListener("click",function(){ ud(3); });
    document.getElementById("4").addEventListener("click",function(){ ud(4); });
    document.getElementById("5").addEventListener("click",function(){ ud(5); });
    document.getElementById("6").addEventListener("click",function(){ ud(6); });
    document.getElementById("7").addEventListener("click",function(){ ud(7); });
    document.getElementById("8").addEventListener("click",function(){ ud(8); });
    document.getElementById("9").addEventListener("click",function(){ ud(9); });
    document.getElementById("0").addEventListener("click",function(){ ud(0); });
    document.getElementById("dec").addEventListener("click",function(){ ud('.'); });
    
    document.getElementById("add").addEventListener("click",function(){ ud(' + '); });
    document.getElementById("sub").addEventListener("click",function(){ ud(' - '); });
    document.getElementById("mul").addEventListener("click",function(){ ud(' * '); });
    document.getElementById("dvd").addEventListener("click",function(){ ud(' / '); });
    
    document.getElementById("clc").addEventListener("click",function(){clc(); });
    document.getElementById("equal").addEventListener("click",function(){ ans(); });