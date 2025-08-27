// login button functionality
document.getElementById("loginButton").addEventListener("click", function (e) {
    e.preventDefault()
    const mobileNumber = 12345678910
    const pinNumber = 7733

    const mobileNumberValue = document.getElementById("mobile-number").value
    const moblileNumberValueConverted = parseInt(mobileNumberValue)


    const pinNumberValue = document.getElementById("pin-number").value
    const pinNumberValueConverted = parseInt(pinNumberValue)

    if(mobileNumber === moblileNumberValueConverted && pinNumber === pinNumberValueConverted){
        window.location.href = "./home.html"
    }
    else{
        alert("Invalid Credentials")
    }


})