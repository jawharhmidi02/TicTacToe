var t = document.querySelector('.table')
var turn = "X";
var nextturn= "O"
var player1Score=0
var player2Score=0
function load() {
    document.querySelector('.player1').innerHTML = "Player 1: "+turn+" Score :"+player1Score;
    document.querySelector('.player2').innerHTML = "Player 2: "+nextturn+" Score :"+player2Score;
    for (let i = 0; i < 9; i++) {
        var div = document.createElement('div');
        div.className = 't';
        div.addEventListener("click", function (e) {
            handleCellClick(e);
        });
        t.appendChild(div);
    }
}

function handleCellClick(e) {
    if (turn == "X" && e.target.innerHTML == "") {
        e.target.innerHTML = "X";
        setTimeout(() => {
            checktable();
        }, 100);
        turn = "O";
    } else if (turn == "O" && e.target.innerHTML == "") {
        e.target.innerHTML = "O";
        setTimeout(() => {
            checktable();
        }, 100);
        turn = "X";
    }
    document.querySelector('.player').innerHTML = turn + " Turn";
}

function checktable(){
    var t = document.querySelectorAll('.t');
    if (t[0].innerHTML==t[1].innerHTML&&t[1].innerHTML==t[2].innerHTML&&t[0].innerHTML!="") {
        t[0].classList.add('winner1');
        t[1].classList.add('winner1');
        t[2].classList.add('winner1');
        restart(t[0].innerHTML)
        return
    }
    if (t[3].innerHTML==t[4].innerHTML&&t[4].innerHTML==t[5].innerHTML&&t[3].innerHTML!="") {
        t[3].classList.add('winner1');
        t[4].classList.add('winner1');
        t[5].classList.add('winner1');
        restart(t[3].innerHTML)
        return
    }
    if (t[6].innerHTML==t[7].innerHTML&&t[7].innerHTML==t[8].innerHTML&&t[6].innerHTML!="") {
        t[6].classList.add('winner1');
        t[7].classList.add('winner1');
        t[8].classList.add('winner1');
        restart(t[6].innerHTML)
        return
    }
    if (t[0].innerHTML==t[3].innerHTML&&t[3].innerHTML==t[6].innerHTML&&t[0].innerHTML!="") {
        t[0].classList.add('winner4');
        t[3].classList.add('winner4');
        t[6].classList.add('winner4');
        restart(t[0].innerHTML)
        return
    }
    if (t[1].innerHTML==t[4].innerHTML&&t[4].innerHTML==t[7].innerHTML&&t[1].innerHTML!="") {
        t[1].classList.add('winner4');
        t[4].classList.add('winner4');
        t[7].classList.add('winner4');
        restart(t[1].innerHTML)
        return
    }
    if (t[2].innerHTML==t[5].innerHTML&&t[5].innerHTML==t[8].innerHTML&&t[2].innerHTML!="") {
        t[2].classList.add('winner4');
        t[5].classList.add('winner4');
        t[8].classList.add('winner4');
        restart(t[2].innerHTML)
        return
    }
    if (t[0].innerHTML==t[4].innerHTML&&t[4].innerHTML==t[8].innerHTML&&t[0].innerHTML!="") {
        t[0].classList.add('winner3');
        t[4].classList.add('winner3');
        t[8].classList.add('winner3');
        restart(t[0].innerHTML)
        return
    }
    if (t[2].innerHTML==t[4].innerHTML&&t[4].innerHTML==t[6].innerHTML&&t[2].innerHTML!="") {
        t[2].classList.add('winner2');
        t[4].classList.add('winner2');
        t[6].classList.add('winner2');
        restart(t[2].innerHTML)
        return
    }
    if (t[0].innerHTML!=""&&t[1].innerHTML!=""&&t[2].innerHTML!=""&&t[3].innerHTML!=""&&t[4].innerHTML!=""&&t[5].innerHTML!=""&&t[6].innerHTML!=""&&t[7].innerHTML!=""&&t[8].innerHTML!=""){
        restart("draw")
        return
    }        
}
function restart(result){
    if(result=="X"){
        player1Score+=1
        document.getElementById('popuptext').innerHTML="Player 1 Win!";
    }
    else if(result=="O"){
        player2Score+=1
        document.getElementById('popuptext').innerHTML="Player 2 Win!";
    }
    else if(result=="draw"){
        document.getElementById('popuptext').innerHTML="Draw!";
    }
    document.getElementById('popupContainer').style.opacity = '1';
    document.getElementById('popupContent').style.opacity = '1';
    document.getElementById('popupContainer').style.display = 'flex';
    document.getElementById('popupContent').style.transform = 'translateY(0)';
    document.getElementById('restartButton').addEventListener('click', function() {
        document.getElementById('popupContainer').style.opacity = '0';
        document.getElementById('popupContent').style.opacity = '0';
        document.getElementById('popupContent').style.transform = 'translateY(-20px)';
        setTimeout(function() {
            document.getElementById('popupContainer').style.display = 'none';
        }, 300); 
        t = document.querySelectorAll('.t');
        for (let i = 0; i < t.length; i++) {
            t[i].innerHTML=""
            t[i].classList.remove('winner1');
            t[i].classList.remove('winner2');
            t[i].classList.remove('winner3');
            t[i].classList.remove('winner4');
        }
        turn = nextturn;
        if(nextturn=="X"){
            nextturn="O"
        }
        else{
            nextturn="X"
        }
        document.querySelector('.player').innerHTML=turn+" Turn";
        document.querySelector('.player1').innerHTML = "Player 1: X Score :"+player1Score;
        document.querySelector('.player2').innerHTML = "Player 2: O Score :"+player2Score;
        return;
    })
}