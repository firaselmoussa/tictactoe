const coins = Object.values(document.getElementsByClassName('coin'));
const turn_dot = document.querySelector('.turn');
let turn = 'red';

    coins.forEach(coin => {
        coin.addEventListener('click', ()=>{
            if(coin.style.background != 'red' && coin.style.background != 'yellow'){

                coin.style.background = turn;

                if(turn == 'red'){
                turn = 'yellow'
                }else{
                turn = 'red'
                }
            turn_dot.style.background = turn;
            
            }
            
            
        })
        
    });