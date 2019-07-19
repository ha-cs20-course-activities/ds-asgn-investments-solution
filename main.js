// DS ASGN STARTER TEMPLATE

// Create Investment Account Array
let investments = [];
for (let n = 0; n < 500; n++) {
    investments.push(Math.random() * 5000);
}

// DOM Elements
let outputEl = document.getElementById('output');

// Main Menu & Go Button
document.getElementById('go').addEventListener('click', mainMenu);

function mainMenu() {
    // Get value of menu select element
    let selection = document.getElementById('menu').value;

    // Take action based on menu selection
    if (selection == 'displayAll') {
        displayAll();
    } else if (selection == 'displayRange') {
        displayRange();
    } else if (selection == 'generousDonor') {
        generousDonor();
    } else if (selection == 'hackerAttack') {
        hackerAttack();
    } else if (selection == 'robinHood') {
        robinHood();
    } else if (selection == 'stats') {
        stats();
    } else if (selection == 'addAccount') {
        addAccount();
    } else if (selection == 'removeLow') {
        removeLow();
    }
}

// HELPER FUNCTIONS
function displayAll() {
    let printCount = 0;
    for (let i = 0; i < investments.length; i++) {
        console.log(investments[i]);
        printCount++;
    }
    console.log("Items Printed: " + printCount);
}

function displayRange() {
    let printCount = 0;
    for (let i = 0; i < investments.length; i++) {
        if (investments[i] >= 2000 && investments[i] <= 4000) {
            console.log(investments[i]);
            printCount++;
        }
    }
    console.log("Items Printed: " + printCount);
}

function generousDonor() {
    let donorCount = 0;
    for (let i = 0; i < investments.length; i++) {
        if (investments[i] < 2000) {
            investments[i] += 500;
            donorCount++;
        }
    }
    console.log("Donor Count: " + donorCount + " Donation Amt: " + (donorCount * 500));
}

function hackerAttack() {
    let totalStolen = 0;
    for (let i = 0; i < investments.length; i++) {
        let stolenAmt = investments[i] * 0.05;
        totalStolen += stolenAmt;
        investments[i] -= stolenAmt;
    }
    console.log("Total Stolen: " + totalStolen);
}

function robinHood() {
    // Steal from the rich and count the poor
    let totalStolen = 0;
    let poorCount = 0;
    for (let i = 0; i < investments.length; i++) {
        if (investments[i] > 4000) {
            investments[i] -= 400;
            totalStolen += 400;
        } else if (investments[i] < 1000) {
            poorCount++;
        }
    }

    // Calculate amount to distribute to each poor person
    let giveAmt = totalStolen / poorCount;
    
    // Give to the poor
    for (let i = 0; i < investments.length; i++) {
        if (investments[i] < 1000) {
            investments[i] += giveAmt;
        }
    }

    console.log("Poor people helped: " + poorCount + " Amt Received: " + giveAmt);
}

function stats() {
    let max = Math.max(...investments);
    let min = Math.min(...investments);
    
    // Calc Average
    let total = 0;
    for (let i = 0; i < investments.length; i++) {
        total += investments[i];
    }

    let ave = total / investments.length;

    console.log("Max: " + max + " Min: " + min + " Ave: " + ave);
}

function addAccount() {
    let amount = Number(prompt("Enter amount for new account:"));
    investments.push(amount);
    console.log("New account created. Opening balance: " + amount);
}

function removeLow() {
    let removeCount = 0;
    for (let i = investments.length - 1; i >= 0; i--) {
        if (investments[i] < 500) {
            investments.splice(i, 1);
            removeCount++;
        }
    }
    console.log("Accounts Removed: " + removeCount);
}