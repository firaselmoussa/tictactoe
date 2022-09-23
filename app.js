const coins = Object.values(document.getElementsByClassName('coin'));
const restart = document.getElementById('restart');
const turn_dot = document.querySelector('.turn');
const winner = document.querySelector('.winner');
let turn = 'red';


    coins.forEach(coin => {
        coin.addEventListener('click', ()=>{
            if(coin.style.background != 'red' && coin.  style.background != 'yellow'){
                coin.style.background = turn;
                if(turn == 'red'){
                turn = 'yellow'
                }else{
                turn = 'red'
                };

            turn_dot.style.background = turn;
            };
            
        });
        
    });

// winning algorithim
// below is the reason I've been avoiding Tic TAC Toe my whole life..
// if there's a shortcut to replace that long if-else statment please tell me  (:^_^:)
    coins.forEach(coin => {
        
        coin.addEventListener('click', ()=>{

                var one = coins[0].style.background;
                var two = coins[1].style.background;
                var three = coins[2].style.background;
                var four = coins[3].style.background;
                var five = coins[4].style.background;
                var six = coins[5].style.background;
                var seven = coins[6].style.background;
                var eight = coins[7].style.background;
                var nine = coins[8].style.background;


                if((one == two && two == three)){
                    winner.style.background = one;
                }else if(four == five && five == six){
                    winner.style.background = four;
                }else if(seven == eight && eight == nine){
                    winner.style.background = seven;
                }else if(one == four && four == seven){
                    winner.style.background = one;
                }else if(two == five && five == eight){
                    winner.style.background = two;
                }else if(three == six && six == nine){
                    winner.style.background = three;
                }else if(one == five && five == nine){
                    winner.style.background = one;
                }else if(three == five && five == seven){
                    winner.style.background = three;
                }

    });
});

// RESTART
restart.addEventListener('click', ()=>{
    window.location.reload();
});

// Playing against computer