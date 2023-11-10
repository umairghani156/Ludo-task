const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const playerName = prompt('Enter first player name');
const playerName2 = prompt('Enter second player name');
player1.innerText = playerName
player2.innerText = playerName2
const zeroNum2 = document.getElementById('zeroNum2')
const nGame2 = document.getElementById('nGame2');
const imgSrc = document.querySelector('img')
nGame2.addEventListener('click', function(){
    const randomNum = Math.floor(Math.random() * 6)+ 1;
    imgSrc.src = `./Assets/${randomNum}.png`
    zeroNum2.textContent = randomNum
    if(randomNum)
})
