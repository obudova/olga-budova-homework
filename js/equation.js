var aInput = document.getElementById("a");
var bInput = document.getElementById("b");
var cInput = document.getElementById("c");
var container = document.getElementById("equation");
var form = document.getElementsByTagName('form');

document.getElementById('count').onclick=function (e) {
    e.preventDefault();
    var ans = document.getElementById("answer");
    if(ans){
        container.removeChild(ans);

    }
    var a = aInput.value;
    var b = bInput.value;
    var c = cInput.value;
    var p = document.createElement('p');
    p.id="answer";
    var desc = defineDescriminant(a,b,c);
    if(desc < 0){
        p.innerHTML= 'Нет корней';
        //console.log('Yea');
    }
    else if(desc > 0){
        var x1 = (-b+Math.sqrt(desc))/(2*a);
        var x2 = (-b-Math.sqrt(desc))/(2*a);
        var answer = "Первый корень: "+x1+"" +"\n Второй корень: "+x2;
        p.innerHTML=answer;
    }else{
        var x = -b/(2*a);
        var answer = "Единственный корень: "+x;
        p.innerHTML= answer;
    }
    container.appendChild(p);
    console.log(p);
    console.log(container.lastChild);
    
};

function defineDescriminant(a,b,c) {
    return b*b - 4*a*c;
}
