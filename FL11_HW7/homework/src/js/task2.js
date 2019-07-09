let isGameStart = confirm('Do you want to play a game?');
const minNumber = 0;
const maxNumber = 8;
const maxNumberAdd = 12;
let totalPrize = 0;
const attempts = 3;
const number1 = 1;
const number2 = 2;
const number3 = 3;
const prize1_1 = 100;
const prize1_2 = 50;
const prize1_3 = 25;
const prize2_1 = 200;
const prize2_2 = 100;
const prize2_3 = 50;

if (isGameStart) {
	let ballPocket = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
	for (let i = 3; i > 0; i--) {
		let currentAttemptPrize = 0;
		switch(i) {
			case number3:
				currentAttemptPrize = prize1_1;
				break;
			case number2:
				currentAttemptPrize = prize1_2;
				break;
			case number1:
				currentAttemptPrize = prize1_3;
				break;
			default:	 	 	
		}
		let userAnswer = parseInt(prompt(
			'Choose a roulette pocket number from 0 to 8\n' + 
			'Attempts left: ' + i + '\n' +
			'TotalPrize: ' + totalPrize +'$\n' +
			'Possible prize on current attempt: ' + currentAttemptPrize + '$'
		), 10);
		if (ballPocket === userAnswer) {
			let isContinue;
			switch (i) {
				case number3:
					totalPrize += prize1_1;
					isContinue = confirm('Congratulation, you won! Your prize is: 100$. Do you want to continue?');
					if (isContinue) {
						ballPocket = Math.floor(Math.random() * (maxNumberAdd - minNumber + 1)) + minNumber;
						for (i = attempts; i > 0; i--) {
							switch(i) {
								case number3:
									currentAttemptPrize = prize2_1;
									break;
								case number2:
									currentAttemptPrize = prize2_2;
									break;
								case number1:
									currentAttemptPrize = prize2_3;
									break;
								default: 	 	
							}
							let userAnswer = parseInt(prompt(
								'Choose a roulette pocket number from 0 to 12\n' + 
								'Attempts left: ' + i + '\n' +
								'TotalPrize: ' + totalPrize +'$\n' +
								'Possible prize on current attempt: ' + currentAttemptPrize + '$'
							), 10);
							if (ballPocket === userAnswer) {
								switch(i) {
									case number3:
										totalPrize += prize2_1;
										alert('Congratulation, you won! Your prize is: ' + totalPrize + '$');
										break;
									case number2:
										totalPrize += prize2_2;
										alert('Congratulation, you won! Your prize is: ' + totalPrize + '$');
										break;
									case number1:
										totalPrize += prize2_3;
										alert('Congratulation, you won! Your prize is: ' + totalPrize + '$');
										break;
									default:	
								}
							}
						}
					} else {
						alert('Thank you for your participation. Your prize is: 100$');
						isContinue = confirm('Do you want to play again?');
					}
					break;
				case number2:
					totalPrize += prize1_2;
					isContinue = confirm('Congratulation, you won! Your prize is: 50$. Do you want to continue?');
					if (isContinue) {
						ballPocket = Math.floor(Math.random() * (maxNumberAdd - minNumber + 1)) + minNumber;
						for (i = attempts; i > 0; i--) {
							switch(i) {
								case number3:
									currentAttemptPrize = prize2_1;
									break;
								case number2:
									currentAttemptPrize = prize2_2;
									break;
								case number1:
									currentAttemptPrize = prize2_3;
									break;
								default:	 	 	
							}
							let userAnswer = parseInt(prompt(
								'Choose a roulette pocket number from 0 to 12\n' + 
								'Attempts left: ' + i + '\n' +
								'TotalPrize: ' + totalPrize +'$\n' +
								'Possible prize on current attempt: ' + currentAttemptPrize + '$'
							), 10);
							if (ballPocket === userAnswer) {
								switch(i) {
									case number3:
										totalPrize += prize2_1;
										alert('Congratulation, you won! Your prize is: ' + totalPrize + '$');
										break;
									case number2:
										totalPrize += prize2_2;
										alert('Congratulation, you won! Your prize is: ' + totalPrize + '$');
										break;
									case number1:
										totalPrize += prize2_3;
										alert('Congratulation, you won! Your prize is: ' + totalPrize + '$');
										break;
									default:	
								}
							}
						}
					} else {
						alert('Thank you for your participation. Your prize is: 50$');
						isContinue = confirm('Do you want to play again?');
					}
					break;
				case number1:
					totalPrize += prize1_3;
					isContinue = confirm('Congratulation, you won! Your prize is: 25$. Do you want to continue?');
					if (isContinue) {
						ballPocket = Math.floor(Math.random() * (maxNumberAdd - minNumber + 1)) + minNumber;
						for (i = attempts; i > 0; i--) {
							switch(i) {
								case number3:
									currentAttemptPrize = prize2_1;
									break;
								case number2:
									currentAttemptPrize = prize2_2;
									break;
								case number1:
									currentAttemptPrize = prize2_3;
									break;
								default:	 	 	
							}
							let userAnswer = parseInt(prompt(
								'Choose a roulette pocket number from 0 to 12\n' + 
								'Attempts left: ' + i + '\n' +
								'TotalPrize: ' + totalPrize +'$\n' +
								'Possible prize on current attempt: ' + currentAttemptPrize + '$'
							), 10);
							if (ballPocket === userAnswer) {
								switch(i) {
									case number3:
										totalPrize += prize2_1;
										alert('Congratulation, you won! Your prize is: ' + totalPrize + '$');
										break;
									case number2:
										totalPrize += prize2_2;
										alert('Congratulation, you won! Your prize is: ' + totalPrize + '$');
										break;
									case number1:
										totalPrize += prize2_3;
										alert('Congratulation, you won! Your prize is: ' + totalPrize + '$');
										break;
									default:	
								}
							}
						}
					} else {
						alert('Thank you for your participation. Your prize is: 25$');
						isContinue = confirm('Do you want to play again?');
					}
					break;
				default:				
			}
		} else if (i === 1) {
			alert('Thank you for your participation. Your prize is: 0$');
			confirm('Do you want to play again?');
		}
	}
} else {
	alert('You did not become a billionaire, but can.');
}

//