const validPin = 7733;
const validNumber = 12345678910

// add money features 
document.getElementById("add-money-btn").addEventListener("click", function (e) {
    e.preventDefault();
    const bank = document.getElementById("bank").value;
    const accountNumber = parseInt(document.getElementById("account-number").value);
    const amount = parseInt(document.getElementById("add-amount").value);
    const pinNumber = parseInt(document.getElementById("add-pin").value);


    if (accountNumber !== validNumber) {
        alert("Please Provide Correct Account Number")
        return;
    }
    if (pinNumber !== validPin) {
        alert("Please Provide Correct Pin Number")
        return;
    }
    if (isNaN(amount) || amount <= 0) {
        alert("Please Provide a valid amount")
    }

    const availableBalance = parseInt(document.getElementById("available-balance").innerText);

    const totalNewAvailableBalance = amount + availableBalance;
    document.getElementById("available-balance").innerText = totalNewAvailableBalance;
})




// cash oout features 
document.getElementById("withdraw-btn").addEventListener("click", function (e) {
    e.preventDefault();

    const amount = parseInt(document.getElementById("withdraw-amount").value);
    const availableBalance = parseInt(document.getElementById("available-balance").innerText);
    const totalNewAvailableBalance = availableBalance - amount;
    
    document.getElementById("available-balance").innerText = totalNewAvailableBalance;
})

// toggling feature
document.getElementById("add-button").addEventListener("click", function () {
    document.getElementById("cash-out-parent").style.display = "none"
    document.getElementById("add-money-parent").style.display = "block"
});
document.getElementById("cash-out-button").addEventListener("click", function () {
    document.getElementById("add-money-parent").style.display = "none"
    document.getElementById("cash-out-parent").style.display = "block"
})
