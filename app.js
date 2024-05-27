alert('Welcome to the secret number game');
const numberMaximum = 50;
const numberSecret = parseInt(Math.random() * (numberMaximum) + 1);
let numberReported;
let tries = 1;
while (numberReported !== numberSecret) {
    numberReported = prompt(`Choose a number between 1 and ${numberMaximum}`);
    if (numberReported == numberSecret) {
        break;
    } if (numberReported > numberSecret) {
            alert(`The number secret is less than ${numberReported}`);
        } else {
            alert(`The number secret is greater than ${numberReported}`);
        }
        // tries = tries + 1
        tries++;
}

const wordTry = tries > 1 ? 'tries' : 'try'
alert(`Congratulations! You got the number secret ${numberSecret} with ${tries} ${wordTry}`);