var cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9;

// Handles button click events for all cells
function cellSelected() {
    // Adding all cells to the DOM
	cell1 = document.getElementById("cell1").value;
	cell2 = document.getElementById("cell2").value;
	cell3 = document.getElementById("cell3").value;
	cell4 = document.getElementById("cell4").value;
	cell5 = document.getElementById("cell5").value;
	cell6 = document.getElementById("cell6").value;
	cell7 = document.getElementById("cell7").value;
	cell8 = document.getElementById("cell8").value;
	cell9 = document.getElementById("cell9").value;

    // Player 1 Victory Logic
    // TODO: Move Victory Print Out to Separate Function
    if ((cell1 == 'x' || cell1 == 'X') && (cell2 == 'x' ||
		cell2 == 'X') && (cell3 == 'x' || cell3 == 'X')) {
		    document.getElementById('player-turn').innerHTML = "Player 1 Wins!";
		    document.getElementById("cell4").disabled = true;
		    document.getElementById("cell5").disabled = true;
		    document.getElementById("cell6").disabled = true;
		    document.getElementById("cell7").disabled = true;
		    document.getElementById("cell8").disabled = true;
		    document.getElementById("cell9").disabled = true;
	} else if ((cell1 == 'x' || cell1 == 'X') && (cell4 == 'x' ||
		cell4 == 'X') && (cell7 == 'x' || cell7 == 'X')) {
		document.getElementById('player-turn').innerHTML = "Player 1 Wins!";
		document.getElementById("cell2").disabled = true;
		document.getElementById("cell3").disabled = true;
		document.getElementById("cell5").disabled = true;
		document.getElementById("cell6").disabled = true;
		document.getElementById("cell8").disabled = true;
		document.getElementById("cell9").disabled = true;
	} else if ((cell7 == 'x' || cell7 == 'X') && (cell8 == 'x' ||
		cell8 == 'X') && (cell9 == 'x' || cell9 == 'X')) {
		document.getElementById('player-turn').innerHTML = "Player 1 Wins!";
		document.getElementById("cell1").disabled = true;
		document.getElementById("cell2").disabled = true;
		document.getElementById("cell3").disabled = true;
		document.getElementById("cell4").disabled = true;
		document.getElementById("cell5").disabled = true;
		document.getElementById("cell6").disabled = true;
	} else if ((cell3 == 'x' || cell3 == 'X') && (cell6 == 'x' ||
		cell6 == 'X') && (cell9 == 'x' || cell9 == 'X')) {
		document.getElementById('player-turn').innerHTML = "Player 1 Wins!";
		document.getElementById("cell1").disabled = true;
		document.getElementById("cell2").disabled = true;
		document.getElementById("cell4").disabled = true;
		document.getElementById("cell5").disabled = true;
		document.getElementById("cell7").disabled = true;
		document.getElementById("cell8").disabled = true;
	} else if ((cell1 == 'x' || cell1 == 'X') && (cell5 == 'x' ||
		cell5 == 'X') && (cell9 == 'x' || cell9 == 'X')) {
		document.getElementById('player-turn').innerHTML = "Player 1 Wins!";
		document.getElementById("cell2").disabled = true;
		document.getElementById("cell3").disabled = true;
		document.getElementById("cell4").disabled = true;
		document.getElementById("cell6").disabled = true;
		document.getElementById("cell7").disabled = true;
		document.getElementById("cell8").disabled = true;
	} else if ((cell3 == 'x' || cell3 == 'X') && (cell5 == 'x' ||
		cell5 == 'X') && (cell7 == 'x' || cell7 == 'X')) {
		document.getElementById('player-turn').innerHTML = "Player 1 Wins!";
		document.getElementById("cell1").disabled = true;
		document.getElementById("cell2").disabled = true;
		document.getElementById("cell4").disabled = true;
		document.getElementById("cell6").disabled = true;
		document.getElementById("cell8").disabled = true;
		document.getElementById("cell9").disabled = true;
	} else if ((cell2 == 'x' || cell2 == 'X') && (cell5 == 'x' ||
		cell5 == 'X') && (cell8 == 'x' || cell8 == 'X')) {
		document.getElementById('player-turn').innerHTML = "Player 1 Wins!";
		document.getElementById("cell1").disabled = true;
		document.getElementById("cell3").disabled = true;
		document.getElementById("cell4").disabled = true;
		document.getElementById("cell6").disabled = true;
		document.getElementById("cell7").disabled = true;
		document.getElementById("cell9").disabled = true;
	} else if ((cell4 == 'x' || cell4 == 'X') && (cell5 == 'x' ||
		cell5 == 'X') && (cell6 == 'x' || cell6 == 'X')) {
		document.getElementById('player-turn').innerHTML = "Player 1 Wins!";
		document.getElementById("cell1").disabled = true;
		document.getElementById("cell2").disabled = true;
		document.getElementById("cell3").disabled = true;
		document.getElementById("cell7").disabled = true;
		document.getElementById("cell8").disabled = true;
		document.getElementById("cell9").disabled = true;
	}

    // Player 2 Victory Logic
    // TODO: Move Victory Print Out to Separate Function
	else if ((cell1 == 'O' || cell1 == 'O') && (cell2 == 'O' ||
		cell2 == 'O') && (cell3 == 'O' || cell3 == 'O')) {
		document.getElementById('player-turn').innerHTML = "Player 2 Wins!";
		document.getElementById("cell4").disabled = true;
		document.getElementById("cell5").disabled = true;
		document.getElementById("cell6").disabled = true;
		document.getElementById("cell7").disabled = true;
		document.getElementById("cell8").disabled = true;
		document.getElementById("cell9").disabled = true;
	} else if ((cell1 == 'O' || cell1 == 'O') && (cell4 == 'O' ||
		cell4 == 'O') && (cell7 == 'O' || cell7 == 'O')) {
		document.getElementById('player-turn').innerHTML = "Player 2 Wins!";
		document.getElementById("cell2").disabled = true;
		document.getElementById("cell3").disabled = true;
		document.getElementById("cell5").disabled = true;
		document.getElementById("cell6").disabled = true;
		document.getElementById("cell8").disabled = true;
		document.getElementById("cell9").disabled = true;
	} else if ((cell7 == 'O' || cell7 == 'O') && (cell8 == 'O' ||
		cell8 == 'O') && (cell9 == 'O' || cell9 == 'O')) {
		document.getElementById('player-turn').innerHTML = "Player 2 Wins!";
		document.getElementById("cell1").disabled = true;
		document.getElementById("cell2").disabled = true;
		document.getElementById("cell3").disabled = true;
		document.getElementById("cell4").disabled = true;
		document.getElementById("cell5").disabled = true;
		document.getElementById("cell6").disabled = true;
	} else if ((cell3 == 'O' || cell3 == 'O') && (cell6 == 'O' ||
		cell6 == 'O') && (cell9 == 'O' || cell9 == 'O')) {
		document.getElementById('player-turn').innerHTML = "Player 2 Wins!";
		document.getElementById("cell1").disabled = true;
		document.getElementById("cell2").disabled = true;
		document.getElementById("cell4").disabled = true;
		document.getElementById("cell5").disabled = true;
		document.getElementById("cell7").disabled = true;
		document.getElementById("cell8").disabled = true;
    } else if ((cell1 == 'O' || cell1 == 'O') && (cell5 == 'O' ||
		cell5 == 'O') && (cell9 == 'O' || cell9 == 'O')) {
		document.getElementById('player-turn').innerHTML = "Player 2 Wins!";
		document.getElementById("cell2").disabled = true;
		document.getElementById("cell3").disabled = true;
		document.getElementById("cell4").disabled = true;
		document.getElementById("cell6").disabled = true;
		document.getElementById("cell7").disabled = true;
		document.getElementById("cell8").disabled = true;
	} else if ((cell3 == 'O' || cell3 == 'O') && (cell5 == 'O' ||
		cell5 == 'O') && (cell7 == 'O' || cell7 == 'O')) {
		document.getElementById('player-turn').innerHTML = "Player 2 Wins!";
		document.getElementById("cell1").disabled = true;
		document.getElementById("cell2").disabled = true;
		document.getElementById("cell4").disabled = true;
		document.getElementById("cell6").disabled = true;
		document.getElementById("cell8").disabled = true;
		document.getElementById("cell9").disabled = true;
	} else if ((cell2 == 'O' || cell2 == 'O') && (cell5 == 'O' ||
		cell5 == 'O') && (cell8 == 'O' || cell8 == 'O')) {
		document.getElementById('player-turn').innerHTML = "Player 2 Wins!";
		document.getElementById("cell1").disabled = true;
		document.getElementById("cell3").disabled = true;
		document.getElementById("cell4").disabled = true;
		document.getElementById("cell6").disabled = true;
		document.getElementById("cell7").disabled = true;
		document.getElementById("cell9").disabled = true;
	} else if ((cell4 == 'O' || cell4 == 'O') && (cell5 == 'O' ||
		cell5 == 'O') && (cell6 == 'O' || cell6 == 'O')) {
		document.getElementById('player-turn').innerHTML = "Player 2 Wins!";
		document.getElementById("cell1").disabled = true;
		document.getElementById("cell2").disabled = true;
		document.getElementById("cell3").disabled = true;
		document.getElementById("cell7").disabled = true;
		document.getElementById("cell8").disabled = true;
		document.getElementById("cell9").disabled = true;
	}

	// Logic for Evaluating Tie Game
	else if ((cell1 == 'X' || cell1 == 'O') && (cell2 == 'X'
		|| cell2 == 'O') && (cell3 == 'X' || cell3 == 'O') &&
		(cell4 == 'X' || cell4 == 'O') && (cell5 == 'X' ||
		cell5 == 'O') && (cell6 == 'X' || cell6 == 'O') &&
		(cell7 == 'X' || cell7 == 'O') && (cell8 == 'X' ||
		cell8 == 'O') && (cell9 == 'X' || cell9 == 'O')) {
			document.getElementById('player-turn').innerHTML = "Tie Game!";
	} else { // This means the game is still on-going.
		if (flag == 1) {
			document.getElementById('player-turn').innerHTML = "Player 1's Turn!";
		} else {
			document.getElementById('player-turn').innerHTML = "Player 2's Turn!";
		}
	}
}

// Handles Game Reset Logic
function resetGame() {
	location.reload();
	document.getElementById('cell1').value = '';
	document.getElementById("cell2").value = '';
	document.getElementById("cell3").value = '';
	document.getElementById("cell4").value = '';
	document.getElementById("cell5").value = '';
	document.getElementById("cell6").value = '';
	document.getElementById("cell7").value = '';
	document.getElementById("cell8").value = '';
	document.getElementById("cell9").value = '';

}

// Remaining logic: checking player turn and placing X or O
flag = 1;
function cell1Checker() {
	if (flag == 1) {
		document.getElementById("cell1").value = "X";
		document.getElementById("cell1").disabled = true;
		flag = 0;
	} else {
		document.getElementById("cell1").value = "O";
		document.getElementById("cell1").disabled = true;
		flag = 1;
	}
}

function cell2Checker() {
    if (flag == 1) {
		document.getElementById("cell2").value = "X";
		document.getElementById("cell2").disabled = true;
		flag = 0;
	} else {
		document.getElementById("cell2").value = "O";
		document.getElementById("cell2").disabled = true;
		flag = 1;
	}
}

function cell3Checker() {
	if (flag == 1) {
		document.getElementById("cell3").value = "X";
		document.getElementById("cell3").disabled = true;
		flag = 0;
	} else {
		document.getElementById("cell3").value = "O";
		document.getElementById("cell3").disabled = true;
		flag = 1;
	}
}

function cell4Checker() {
	if (flag == 1) {
		document.getElementById("cell4").value = "X";
		document.getElementById("cell4").disabled = true;
		flag = 0;
	} else {
		document.getElementById("cell4").value = "O";
		document.getElementById("cell4").disabled = true;
		flag = 1;
	}
}

function cell5Checker() {
	if (flag == 1) {
		document.getElementById("cell5").value = "X";
		document.getElementById("cell5").disabled = true;
		flag = 0;
	} else {
		document.getElementById("cell5").value = "O";
		document.getElementById("cell5").disabled = true;
		flag = 1;
	}
}

function cell6Checker() {
	if (flag == 1) {
		document.getElementById("cell6").value = "X";
		document.getElementById("cell6").disabled = true;
		flag = 0;
	} else {
		document.getElementById("cell6").value = "O";
		document.getElementById("cell6").disabled = true;
		flag = 1;
	}
}

function cell7Checker() {
	if (flag == 1) {
		document.getElementById("cell7").value = "X";
		document.getElementById("cell7").disabled = true;
		flag = 0;
	} else {
		document.getElementById("cell7").value = "O";
		document.getElementById("cell7").disabled = true;
		flag = 1;
	}
}

function cell8Checker() {
	if (flag == 1) {
		document.getElementById("cell8").value = "X";
		document.getElementById("cell8").disabled = true;
		flag = 0;
	} else {
		document.getElementById("cell8").value = "O";
		document.getElementById("cell8").disabled = true;
		flag = 1;
	}
}

function cell9Checker() {
	if (flag == 1) {
		document.getElementById("cell9").value = "X";
		document.getElementById("cell9").disabled = true;
		flag = 0;
	} else {
		document.getElementById("cell9").value = "O";
		document.getElementById("cell9").disabled = true;
		flag = 1;
	}
}