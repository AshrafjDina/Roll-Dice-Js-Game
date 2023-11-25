


//CREATING A RANDOM NUMBER
let secretNumber = Math.trunc(Math.random() * 20) + 1;
//CREATING Variable Number of 20
let score = 20;
let highscore = 0;




document.querySelector(".check").addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    console.log(guess, typeof guess);

    //When there is no input
    if (!guess) {
        document.querySelector('.message').textContent = 'No Number';


    //When the player WINS   
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number';
        document.querySelector('.number').textContent = secretNumber;

        //Adding CSS
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore
        }
        
    

    //When gues is too High  
    } else if (guess > secretNumber) {
        if (score > 1) {
             document.querySelector('.message').textContent = 'Number too High';
             score--;
             document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You Lost the GAME';
            document.querySelector('.score').textContent = 0;
        }

    //When gues is too Low
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Number too Low';
            score--;
            document.querySelector('.score').textContent = score;
    } else {
            document.querySelector('.message').textContent = 'You Lost the GAME';
            document.querySelector('.score').textContent = 0;
        }
        }
   
});
    
        //Reset Button
        document.querySelector(".again").addEventListener('click', function() {
            
            score = 20;
           document.querySelector('.score').textContent = score;
            secretNumber = Math.trunc(Math.random() * 20) + 1;
            document.querySelector('.message').textContent = 'Start guessing...';
            document.querySelector('.guess').value = '';
            document.querySelector('.number').textContent = '?';

             //Adding CSS
            document.querySelector('body').style.backgroundColor = '#222';
            document.querySelector('.number').style.width = '15rem';
            
        })
    
    
    
    
    















 
