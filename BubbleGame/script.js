let rn2 = 0;
let score = 0;
let count = 60;

const Gstart = document.querySelector('.Gstart');
const startBtn = document.querySelector('button');
const HighScore = document.querySelector('#score');


function startGame() {
    startBtn.addEventListener('click', () => {
        //  displaying container block to start game 
        document.querySelector('.container').style.display = "block";
        // displaying Gstart none for hide start div
        Gstart.style.display = "none"

        targetNum();
        countDown();
        makeBubble();
    });

}

function targetNum() {
    rn2 = Math.floor(Math.random() * 10)
    document.querySelector('.targetNum').innerHTML = rn2
};

function Score() {
    score += 10;
    document.querySelector('.targetScore').innerHTML = score;
};

function makeBubble() {
    let dic = document.getElementById('numDiv');
    let culter = "";

    for (let i = 1; i <= 70; i++) {
        let rn = Math.floor(Math.random() * 10);
        culter += `<div id="numberDiv">${rn}</div>`;
        dic.innerHTML = culter
    }
};


function countDown() {

    let timeIntervel = setInterval(() => {
        if (count > 0) {
            count--;
            document.querySelector('.timerDiv').innerHTML = count;
        } else {
            clearInterval(timeIntervel)
            disabledDiv()
            YourScore()
        }
    }, 1000)
};

document.querySelector('#numDiv').addEventListener('click', function (event) {
    let clickedNum = Number(event.target.innerHTML);
    if (clickedNum === rn2) {
        Score();
        makeBubble();
        targetNum();
    }
});


function disabledDiv() {
    if (count <= 0) {
        let div = document.querySelector('.container');
        div.style.display = 'none'
    } else {
        div.style.display = 'block'
    }
}

function YourScore() {
    HighScore.innerText = `${score}`
    document.querySelector('.Score').style.display = "block";
}

function Restart() {
    document.querySelector('#Restart').addEventListener('click', () => {
        document.querySelector('.Score').style.display = "none";
        count = 60
        score = 0
        if (count == 60 && score == 0) {
            document.querySelector('.container').style.display = "block"
            document.querySelector('.targetScore').innerHTML = score;
        }
        targetNum();
        countDown();
        makeBubble();
    })
}



Restart()
startGame()