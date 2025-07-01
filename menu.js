import PromptSync from "prompt-sync";

const prompt = PromptSync();


function mainMenu() {
    console.log("== Main Menu==")
    console.log("1. Greet Me")
    console.log("2. Tell a joke")
    console.log("3. Show current time")
    console.log("4. Reverse a word")
    console.log("5. Check if a number is even or odd")
    console.log("6. Calculate the square of a number")
    console.log("7. Repeat a phrase")
    console.log("8. Convert Celsius to Fahrenheit")
    console.log("9. Count down from a number")
    console.log("10. Exit")

}
mainMenu();
function greetME() {
    console.log('Ni hao pengyou!!');
}

function tellJoke() {
    console.log('Why do Java programmers have to wear glasses?');
    let joke = "Because they dont C#"
    console.log(joke);
}

function showTime() {
    console.log('Its currently 11:26pm');
}

function reverseWord() {
    const word = prompt("Give me a word: ");
    const reversed = word.split("").reverse().join("");
    console.log("Reversed word is:", reversed);
}

function numberEvenOdd() {
    for (let i = 1; i <= 1; i++) {
        const n5 = prompt("Give me a number to indicate if even or odd")
        if (n5 % 2 !== 0) {
            console.log("Number is odd")
            console.log(5)
        }
        if (n5 % 2 == 0) {
            console.log("Number is even")
            console.log(5)
        }
    }
}

function square() {
    const n6 = prompt("Calculate the square of:");
    const number = parseInt(n6); // Convert the input string to a number
    if (isNaN(number)) {
        console.log("Invalid input. Please enter a number.");
        return;
    }
    let square = number ** 2;
    console.log(`The square of ${number} is ${square}`);
}

function repeatPhrase() {
    for (let i = 1; i <= 1; i++) {
        const n7 = prompt("Repeat which phrase?:");
        const repeat = parseInt(prompt("Repeat Count:"))
        const repeatPhrase = phrase.repeat("");
        if (isNaN(repeat)) {
            console.log('Enter a Number!')
        }
        console.log(repeatPhrase)
    }
}

function simplecountdown() {
    const n9 = prompt("Give me a number to count down to zero");
    for (let i = 10; i >= 0; i--) {
        console.log(i);
    }
    console.log("Countdown complete")
}

function Exit() {
    const sure = prompt("Are you sure?")
    console.log('See you later');
}

let running = true;
while (running) {
    mainMenu(); // Show the menu each time
    const choice = prompt("Enter a Number to choose an action");

    switch (choice)
{

        case "1":
            greetME();
            break;
       

        
        case "2":
            tellJoke();
            break;
        


        case "3":
            showTime();
            break;

    

        case "4":
            reverseWord();
            break;
        


        case "5":
            numberEvenOdd();
            break;
        


        case "6":
            square();
            break;
       

        case "7":
            repeatPhrase();
            break;
       

        case "8":
            convertCelsiustoFahrenheit();
            break;
        

        case "9":
            simplecountdown();
            break;
        

        case "10":
            Exit();
             running = false; // Set running to false to exit the loop
            break;
          
         default:
            console.log("Invalid choice. Please enter a number from 1 to 10.");
        }
}