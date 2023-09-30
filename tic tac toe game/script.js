console.log('welcome to my tic tac toe game');

// declaring variables
var turn=0;
function turnchange(id_box){
    box=document.getElementById(id_box)
    console.log("inner part of function");
    console.log('inner html of box ',box.innerHTML,'end');
    turn_of=document.querySelector('.my_turn');
    // console.log(turn_of.innerHTML)
    if (box.innerHTML==""){
        console.log('in if part')
        if (turn%2==0){

            box.innerHTML='X';
            turn_of.innerHTML='Turn of 0';
            turn+=1;
        }
        else{
            box.innerHTML='0';
            turn_of.innerHTML='Turn of X';
            turn+=1
        }
    }
    else{
        // console.log('in else part')

        alert('already occupied' + ' ' + box.innerHTML)

    }
}