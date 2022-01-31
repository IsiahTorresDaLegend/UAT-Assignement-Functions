// JavaScript file to output craps game, by Isiah Torres.
// Create a function named "play()".
function play() {
    // This function creates local bindings, giving them a value.
    let die1 = 5
    let die2 = 2
    // Bind the word "sum" to the sum of "die1" and "die2".
    let sum = die1+die2
    // Document.write is used to output the information and results to user.
    document.write("Die 1 = " + die1)
    // Start on next line, create a break.
    document.write("<br>")
    document.write("Die 2 = " + die2)
    document.write("<br>")
    document.write("Sum = " + sum)
    document.write("<br>")
    // Conditional statement. If the values equals 7 or 11, the program outputs...
    // "Craps - You lose."
    if (sum == 7 || sum == 11)
    // Use document.write and added variable to create a more personal message, including the user's input.
    { document.write("CRAPS - Sorry " + userName + " , you lose.")
    document.write("<br>")
    }
    // End of the conditional statements. If the values are equal to each other and are even...
    // the program will return, "DOUBLES - You win!"
    else if (die1 == die2 && die1%2 == 0)
    {
        document.write("DOUBLES - Congrats " + userName + " , you win!")
        document.write("<br>")
    }
    
    }
    
    // Now to let the user win.
    function playWin() {
        // Same program with different values set.
        let die1 = 4
        let die2 = 4
        
        let sum = die1+die2
        document.write("Die 1 = " + die1)
        document.write("<br>")
        document.write("Die 2 = " + die2)
        document.write("<br>")
        document.write("Sum = " + sum)
        document.write("<br>")
        if (sum == 7 || sum == 11)
        { document.write("CRAPS - Sorry " + userName + " , you lose.")
        document.write("<br>")
        }
        else if (die1 == die2 && die1%2 == 0)
        {
        document.write("DOUBLES - Congrats " + userName + " , you win!")
        document.write("<br>")
        }
        
        }
    
    // Created a binding to the user's input. Wanted a username for a better experience.
    let userName;
    // do loop, userName value comes from the prompt() function. Prompt displays the following message.
    do {
        userName = prompt("Hello, what is your name?");
        // User's input = userName, if no name is given, the prompt will continue to ask.
    } while (!userName);
    console.log(yourName); 

    // This function was created to decide where I wanted the personal greeting to be placed on the page.
    function intro() {
        document.write('<p>' + 'Welcome ' + userName + ', this is the Craps Room!' + '</p>')
    }