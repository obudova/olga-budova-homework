var aInput = document.getElementById("a");
var bInput = document.getElementById("b");
var cInput = document.getElementById("c");
var container = document.getElementById("equation");

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

    if(defineDescriminant(a, b,c)<0){
        p.innerHTML= 'Нет корней';
        //console.log('Yea');
    }
    else if(defineDescriminant(a, b, c)>0){
        var x1 = (-b+Math.sqrt(defineDescriminant(a, b, c)))/(2*a);
        var x2 = (-b-Math.sqrt(defineDescriminant(a, b, c)))/(2*a);
        var answer = "Первый корень: "+x1+"" +"\n Второй корень: "+x2;
        p.innerHTML=answer;
    }


    container.appendChild(p);

};

function defineDescriminant(a,b,c) {
    return b*b - 4*a*c;
}
