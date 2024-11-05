class Player {
    #name;
    #activeHand;

    constructor(name, activeHand){
        this.#name = name;
        this.#activeHand = activeHand;
    }

    get name(){
        return this.#name;
    }

    serve(){
        console.log(this.name + " подає");

    }

    hit(){
        console.log(this.name + " відбив м'яч");

    }

    miss(){
        console.log(this.name + " пропустив м'яч");

    }

    getRandomAction(){
        const random = Math.floor(Math.random() * 2) + 1;   
        if (random === 1) {
            this.hit();
            return 'hit';
        } else {
            this.miss();
            return 'miss';
        }
    }
}


class Scoreboard {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.scores = { [player1.name]: 0, [player2.name]: 0};
    }

    addPoint(player){
        this.scores[player.name]++;

    }

    displayScore(){
        console.log ("Поточний рахунок: " + this.player1.name + ": " + this.scores[player1.name] + "; " + this.player2.name + ": " + this.scores[player2.name]);

    }
    
    hasWinner(){
        if (this.scores[player1.name] >= 21) {
            return this.scores[player1.name];
        } else if (this.scores[player2.name] >= 21) {
            return this.scores[player2.name];           
        }
    }
    
    getWinner(){
        if (this.scores[player1.name] >= 21) {
            return this.player1.name;
        } else if (this.scores[player2.name] >= 21) {
            return this.player2.name;         
        }
        return null;
    }
}

class GameEngine {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.scoreboard = new Scoreboard(player1, player2);

    }
    
    play(){
    let firstPlayer = this.player1;
    let secondPlayer = this.player2;

    firstPlayer.serve();
    
    while (!this.scoreboard.hasWinner()) {

        const returnAction = secondPlayer.getRandomAction();

        if (returnAction === 'hit') {
            this.scoreboard.addPoint(secondPlayer);
        }else {
            this.scoreboard.addPoint(firstPlayer);
        }
        
        this.scoreboard.displayScore();
             
        [firstPlayer, secondPlayer] = [secondPlayer, firstPlayer];
       
    }

    console.log("Переможець: " + this.scoreboard.getWinner() + "!");

    }
}

let player1 = new Player('Боб', 'ліва');
let player2 = new Player('Ден', 'права');

const game = new GameEngine (player1, player2);
game.play();
