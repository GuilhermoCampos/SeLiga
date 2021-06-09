var speed = 2;
var passo = 1;

var red1 = 255;
var blue1 = 0;
var green1 = 0;
var red2 = 0;
var blue2 = 255;
var green2 = 0;
var red3 = 0;
var blue3 = 0;
var green3 = 255;

function rainbow(){

    var rainbow = document.getElementsByClassName('rainbow');
    
    for(let i=0; i < rainbow.length; i++){
        rainbow[i].style.background = `linear-gradient(to right,rgb(${red1}, ${blue1}, ${green1}), rgb(${red2}, ${blue2}, ${green2}), rgb(${red3}, ${blue3}, ${green3})`;
        rainbow[i].style.border = '2px solid black';
        rainbow[i].style.borderRadius = '15px';
    }

    // Primeira Cor

    if(red1==255 && blue1<255 && green1 == 0){
        blue1+=passo;

    }
    else if(red1 > 0 && blue1 == 255 && green1 == 0){
        red1-=passo;

    }
    else if(red1 == 0 && blue1 == 255 && green1 < 255){
        green1+=passo;

    }
    else if(red1 == 0 && blue1 > 0 && green1 == 255){
        blue1-=passo;

    }
    else if(red1 < 255 && blue1 == 0 && green1 == 255){
        red1+=passo;

    }
    else if(red1 == 255 && blue1 == 0 && green1 > 0){
        green1-=passo;
    }

    // Segunda Cor

    if(red2==255 && blue2<255 && green2 == 0){
        blue2+=passo;

    }
    else if(red2 > 0 && blue2 == 255 && green2 == 0){
        red2-=passo;

    }
    else if(red2 == 0 && blue2 == 255 && green2 < 255){
        green2+=passo;

    }
    else if(red2 == 0 && blue2 > 0 && green2 == 255){
        blue2-=passo;

    }
    else if(red2 < 255 && blue2 == 0 && green2 == 255){
        red2+=passo;

    }
    else if(red2 == 255 && blue2 == 0 && green2 > 0){
        green2-=passo;
    }

    // Terceira Cor

    if(red3==255 && blue3<255 && green3 == 0){
        blue3+=passo;

    }
    else if(red3 > 0 && blue3 == 255 && green3 == 0){
        red3-=passo;

    }
    else if(red3 == 0 && blue3 == 255 && green3 < 255){
        green3+=passo;

    }
    else if(red3 == 0 && blue3 > 0 && green3 == 255){
        blue3-=passo;

    }
    else if(red3 < 255 && blue3 == 0 && green3 == 255){
        red3+=passo;

    }
    else if(red3 == 255 && blue3 == 0 && green3 > 0){
        green3-=passo;
    }
    

}