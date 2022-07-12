import { useEffect, useState } from "react";


const players = {
    CPU: {
        SYM: "O",
        NAME: "CPU",
    },
    HUMAN: {
        SYM: "X",
        NAME: "You",
    },
};

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

export function TicTacToe() {
    // const [board, setBoard] = useState(Array(9).fill(""));
    const [board, setBoard] = useState([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ]);
    const [isCPUNext, setIsCPUNext] = useState(false);
    const [winner, setWinner] = useState(null);

    function playFn(arrayIndex, index) {
        if (isCPUNext) return;
        if (winner) return;
        board[arrayIndex][index] = players?.HUMAN?.SYM;
        setBoard((board) => [...board]);
        checkWinner();
        setIsCPUNext(true);
    }

    useEffect(() => {
        if (winner) return;
        if (isCPUNext) {
            cPUPlay();
        }
    }, [isCPUNext]);

    function cPUPlay() {
        if (winner) return;
        sleep(1000);

        const cPUMove = getCPUTurn();

        board[cPUMove.arrayIndex][cPUMove.index] = players?.CPU?.SYM;

        setBoard((board) => [...board]);
        checkWinner();
        setIsCPUNext(false);
    }

    function getCPUTurn() {
        const emptyIndexes = [];
        board.forEach((row, arrayIndex) => {
            row.forEach((cell, index) => {
                if (cell === "") {
                    emptyIndexes.push({ arrayIndex, index });
                }
            });
        });
        const randomIndex = Math.floor(Math.random() * emptyIndexes.length);
        return emptyIndexes[randomIndex];
    }

    function checkWinner() {
        // check same row
        for (let index = 0; index < board.length; index++) {
            const row = board[index];
            if (row.every((cell) => cell === players?.CPU?.SYM)) {
                setWinner(players?.CPU?.NAME);
                return;
            } else if (row.every((cell) => cell === players?.HUMAN?.SYM)) {
                setWinner(players?.HUMAN?.NAME);
                return;
            }
        }

        // check same column
        for (let i = 0; i < 3; i++) {
            const column = board.map((row) => row[i]);
            if (column.every((cell) => cell === players?.CPU?.SYM)) {
                setWinner(players?.CPU?.NAME);
                return;
            } else if (column.every((cell) => cell === players?.HUMAN?.SYM)) {
                setWinner(players?.HUMAN?.NAME);
                return;
            }
        }

        // check same diagonal
        const diagonal1 = [board[0][0], board[1][1], board[2][2]];
        const diagonal2 = [board[0][2], board[1][1], board[2][0]];
        if (diagonal1.every((cell) => cell === players?.CPU?.SYM)) {
            setWinner(players?.CPU?.NAME);
            return;
        } else if (diagonal1.every((cell) => cell === players?.HUMAN?.SYM)) {
            setWinner(players?.HUMAN?.NAME);
            return;
        } else if (diagonal2.every((cell) => cell === players?.CPU?.SYM)) {
            setWinner(players?.CPU?.NAME);
            return;
        } else if (diagonal2.every((cell) => cell === players?.HUMAN?.SYM)) {
            setWinner(players?.HUMAN?.NAME);
            return;
        } else if (board.flat().every((cell) => cell !== "")) {
            setWinner("draw");
            return;
        } else {
            setWinner(null);
            return;
        }
    }

    function displayWinner() {
        if (winner === "draw") {
            return "It's a draw!";
        } else if (winner) {
            return `${winner} won!`;
        }
    }

    function displayTurn() {
        if (isCPUNext) {
            return "CPU's turn";
        } else {
            return "Your turn";
        }
    }

    function playAgainFn() {
        setBoard([
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
        ]);
        setWinner(null);
        setIsCPUNext(false);
    }


    return (
        <div className="w-full flex flex-col items-center">
            <div className="text-pwc-green uppercase">{!winner && displayTurn()}</div>
            {winner && <h2 className="text-pwc-green uppercase">{displayWinner()}</h2>}
            <div className="relative w-[400px] h-[400px] border-4 border-pwc-green">
                <div className="h-full">
                    <div className="flex h-1/3 border-b-4 border-pwc-green">
                    <span onClick={() => playFn(0, 0)} className="block h-full w-1/3 border-r-4 border-pwc-green text-pwc-green uppercase text-[120px] leading-[100%] hover:cursor-pointer">
                        {board[0][0]}
                    </span>
                        <span onClick={() => playFn(0, 1)} className="block h-full w-1/3 border-r-4 border-pwc-green text-pwc-green uppercase text-[120px] leading-[100%] hover:cursor-pointer">
                        {board[0][1]}
                    </span>
                        <span onClick={() => playFn(0, 2)} className="block h-full w-1/3 text-pwc-green uppercase text-[120px] leading-[100%] hover:cursor-pointer">
                        {board[0][2]}
                    </span>
                    </div>
                    <div className="flex h-1/3 border-b-4 border-pwc-green">
                    <span onClick={() => playFn(1, 0)} className="block h-full w-1/3 border-r-4 border-pwc-green text-pwc-green uppercase text-[120px] leading-[100%] hover:cursor-pointer">
                        {board[1][0]}
                    </span>
                        <span onClick={() => playFn(1, 1)} className="block h-full w-1/3 border-r-4 border-pwc-green text-pwc-green uppercase text-[120px] leading-[100%] hover:cursor-pointer">
                        {board[1][1]}
                    </span>
                        <span onClick={() => playFn(1, 2)} className="block h-full w-1/3 text-pwc-green uppercase text-[120px] leading-[100%] hover:cursor-pointer">
                        {board[1][2]}
                    </span>
                    </div>
                    <div className="flex h-1/3 ">
                    <span onClick={() => playFn(2, 0)} className="block h-full w-1/3 border-r-4 border-pwc-green text-pwc-green uppercase text-[120px] leading-[100%] hover:cursor-pointer">
                        {board[2][0]}
                    </span>
                        <span onClick={() => playFn(2, 1)} className="block h-full w-1/3 border-r-4 border-pwc-green text-pwc-green uppercase text-[120px] leading-[100%] hover:cursor-pointer">
                        {board[2][1]}
                    </span>
                        <span onClick={() => playFn(2, 2)} className="block h-full w-1/3 text-pwc-green uppercase text-[120px] leading-[100%] hover:cursor-pointer">
                        {board[2][2]}
                    </span>
                    </div>
                </div>
            </div>
            {winner && (
                <button onClick={playAgainFn} className="relative mt-[40px] w-[90%] px-[20px] h-[70px] left-0 right-0 mx-auto bottom-[0px] rounded-[50px] text-[24px] leading-[20px] uppercase text-pwc-black bg-pwc-green hover:cursor-pointer sm:hidden">Play Again</button>

                // <button className="text-pwc-green uppercase" >
                //     Play Again
                // </button>
            )}
            {!winner && (
                <button className="relative mt-[40px] w-[90%] px-[20px] h-[70px] left-0 right-0 mx-auto bottom-[0px] rounded-[50px] text-[24px] leading-[20px] uppercase text-pwc-black bg-pwc-green hover:cursor-pointer sm:hidden">roll</button>

                // <button className="text-pwc-green uppercase" >
                //     Play Again
                // </button>
            )}
        </div>
    );
}