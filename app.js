const coins = Object.values(document.getElementsByClassName('coin'));


const turn_dot = document.querySelector('.turn');
let turn = 'red';

    coins.forEach(coin => {
        coin.addEventListener('click', ()=>{
            if(coin.style.background != 'red' && coin.  style.background != 'yellow'){

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

// winning algorithim
let clicked = 0;
let game_over = false;

    coins.forEach(coin => {
        
        coin.addEventListener('click', ()=>{
            // console.log(typeof coins, typeof coin, coins.indexOf(coin))
            
            if(coin.style.background != 'red' || coin.  style.background != 'yellow'){
                clicked+=1;
                console.log(clicked);
            }

            if(clicked >= coins.length){
                game_over = true;

                var one = coins[0].style.background;
                var two = coins[1].style.background;
                var three = coins[2].style.background;
                var four = coins[3].style.background;
                var five = coins[4].style.background;
                var six = coins[5].style.background;
                var seven = coins[6].style.background;
                var eight = coins[7].style.background;
                var nine = coins[8].style.background;

                //  ||
                //     four == five == six ||
                //     seven == eight == nine ||
                //     one == four == seven ||
                //     two == five == six ||
                //     three == eight == nine ||
                //     one == five == nine ||
                //     seven == five == three

                if((one == two && two == three) ||
                    (four == five && five == six)||
                    (seven == eight && eight == nine) ||
                    (one == four && four == seven) ||
                    (two == five && five == eight) ||
                    (three == six && six == nine)||
                    (one == five && five == nine) ||
                    (three == five && five == seven)){
                
                        console.log('win');
                    
                    
                }else{
                    console.log('lose');
                }


            }

    });
});

