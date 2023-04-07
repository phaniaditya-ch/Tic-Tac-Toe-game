import React, { useState } from 'react'

function Game() {
    let [winMessage, setWinMessage] = useState("");
    let [winFlag, setWinFlag] = useState(false);
    let [square, setSquare] = useState([null, null, null, null, null, null, null, null, null]);
    let [isX, setIsX] = useState(true);
    let greenColor = "rgb(153, 214, 134)";
    let [bgColor, setBgColor] = useState(["white", "white", "white", "white", "white", "white", "white", "white", "white"]);
    let styles = Array;
    for(let i = 0 ; i < 9 ; i ++)
    {
        styles[i] = {
            backgroundColor: bgColor[i]
        }
    }
    // console.log("styles = ", styles);
    let changeColor = (a, b, c) => {
        let tempColor = Array(9).fill("white");
        tempColor[a] = greenColor;
        tempColor[b] = greenColor;
        tempColor[c] = greenColor;
        setBgColor(tempColor);
        console.log(bgColor);
    }
    let winCombs = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    // var winFlag = false;
    let endGame = () => {
        setWinFlag(true);
        console.log("winFlag = ", winFlag);
    }
    let checkWin = () => {

        winCombs.forEach(element => {
            console.log("checking");
            let [a, b, c] = element;
            console.log(square[a], square[b], square[c]);
            if (square[a] === square[b] && square[b] === square[c] && square[a] != null) {
                if (square[a] === 'X') {
                    setWinMessage("Player 1 Wins!! Press RESET to play again");
                    console.log("A won");
                    endGame();
                }
                if (square[a] === 'O') {
                    setWinMessage("Player 2 Wins!! Press RESET to play again");
                    console.log("B won");
                    endGame();
                }
                changeColor(a, b, c);
            }
        });
    }
    let handleClick = (event) => {
        if (event.target.innerHTML !== "X" && event.target.innerHTML !== "O" && winFlag === false) {
            console.log("here winflag = ", winFlag);
            let string = event.target.id;
            let numb = Number(string.slice(-1));
            square[numb] = isX ? "X" : "O";
            setIsX(!isX);
            // setWinMessage("Hello wotrld");
            // if(numb === 1)
            // setNumb(2);
            // else
            // setNumb(1);
            checkWin();
            checkDraw();
            console.log(square);
        }
    }
    let checkDraw = () => {
        let count = 0;
        square.forEach(element => {
            if(element === null)
            count++;
        });
        if(!count){
            setWinMessage("DRAW!! Press RESET to play again");
        }
    }
    let handleReset = () => {
        setSquare([null, null, null, null, null, null, null, null, null]);
        setIsX(true);
        setWinMessage("");
        setWinFlag(false);
        setBgColor(Array(9).fill("white"));
    }
    return (
        <>
            <div>
                <div className="turn-teller">
                    <h3>PLayer {Number(!isX) + 1}'s turn</h3>
                </div>
                <div className='game-box'>
                    <div className='board-row'>
                        <button className='square' id="box0" style={styles[0]} onClick={handleClick}>{square[0]}</button>
                        <button className='square' id="box1" style={styles[1]} onClick={handleClick}>{square[1]}</button>
                        <button className='square' id="box2" style={styles[2]} onClick={handleClick}>{square[2]}</button>
                    </div>
                    <div className='board-row'>
                        <button className='square' id="box3" style={styles[3]} onClick={handleClick}>{square[3]}</button>
                        <button className='square' id="box4" style={styles[4]} onClick={handleClick}>{square[4]}</button>
                        <button className='square' id="box5" style={styles[5]} onClick={handleClick}>{square[5]}</button>
                    </div>
                    <div className='board-row'>
                        <button className='square' id="box6" style={styles[6]} onClick={handleClick}>{square[6]}</button>
                        <button className='square' id="box7" style={styles[7]} onClick={handleClick}>{square[7]}</button>
                        <button className='square' id="box8" style={styles[8]} onClick={handleClick}>{square[8]}</button>
                    </div>
                </div>
                <div className="win-message">
                    {winMessage}
                </div>
                <div className="reset-div">
                    <button className="reset-button" onClick={handleReset}>
                        RESET
                    </button>
                </div>

            </div>
        </>
    )
}

export default Game
