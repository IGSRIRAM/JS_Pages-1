let money=300;
let lmoney= -3000;



// LOGIN PAGE

function login(){
    let username=(document.getElementById("username").value);
    let userid=(document.getElementById("userid").value);
    let password=(document.getElementById("password").value);
    
    if(username != ""){
        localStorage.setItem('username', username);
        if(userid != ""){
            if(password>=99999 && password<=999999){
                let otp=prompt("Enter the OTP (Hint: Enter any 4-Digit Number)");
                if (otp>=999 && otp<=9999){
                    window.location.href = `./HTML/welcome.html?`;
                }else{
                    alert("OTP should be 4 digits");
                }
            }else{
                alert("Pin should be 6 Digits ");
            }
        }else{
            alert("Enter valid UserID ");
        }
    }else{
        alert("Enter valid UserName");
    }
}



// WELCOME PAGE

function details(){
    let pin=prompt("Enter the PIN (Hint: Enter any 6-Digit Number)");
    if (pin>=99999 && pin<=999999){
        window.location.href = `userdetails.html?`;
    }else{
        alert("PIN should be 6 digits");
    }
}

function methods(){
    window.location.href = `../HTML/methods.html?`;
}



//Account Details

function back(){
    window.location.href = `../HTML/welcome.html?`;
}




// Methods


function debit(){
    window.location.href = `../HTML/dcard.html?`;
    
}

function credit(){   
    window.location.href = `../HTML/ccard.html?`;
}

function upi(){    
    window.location.href = `../HTML/upi.html?`;
}



function cpay() {
    let userid = parseInt(document.getElementById("userid").value, 10);
    let amount = parseFloat(document.getElementById("lamount").value);

    if (userid > 999999999 && userid <= 9999999999) {
        if (amount <= 100000) {
            let pin = parseInt(prompt("Enter the PIN (Hint: Enter any 6-Digit Number)"), 10);

            if (pin>=99999 && pin<=999999) {
                // Use local storage to pass data between pages
                localStorage.setItem('lamount', amount);
                window.location.href = `../HTML/final.html`;
            } else {
                alert("Pin should be 6 digits");
            }
        } else {
            alert("Insufficient balance");
        }
    } else {
        alert("Customer ID should be 10 digits");
    }
}


function pay() {
    let userid = parseInt(document.getElementById("userid").value, 10);
    let amount = parseFloat(document.getElementById("amount").value);

    if (userid > 999999999 && userid <= 9999999999) {
        if (amount <= money) {
            let pin = parseInt(prompt("Enter the PIN (Hint: Enter any 6-Digit Number)"), 10);

            if (pin>=99999 && pin<=999999) {
                // Use local storage to pass data between pages
                localStorage.setItem('amount', amount);
                window.location.href = `../HTML/final.html`;
            } else {
                alert("Pin should be 6 digits");
            }
        } else {
            alert("Insufficient balance");
        }
    } else {
        alert("Customer ID should be 10 digits");
    }
}


function welcome() {
    
    const username = localStorage.getItem('username');
    const lamount = localStorage.getItem('lamount');
    const amount = localStorage.getItem('amount');

    if (amount) {
        const z2Div = document.getElementById('z2');
        z2Div.innerHTML = `${money-amount}/-`;
        localStorage.removeItem('amount'); // Clean up after use
    }else{
        document.getElementById("z2").innerHTML=money+"/-";
    }
    
     if (lamount) {
        const z4Div = document.getElementById('z4');
        z4Div.innerHTML =`${lmoney+-lamount}/-`;
        // localStorage.removeItem('lamount'); // Clean up after use
    }else{
        document.getElementById("z4").innerHTML=lmoney+"/-";
    }

    if (username) {
        const z1Div = document.getElementById('z1');
        z1Div.innerHTML = `${username}`;
        // localStorage.removeItem('username'); // Clean up after use
    }else{
        document.getElementById("z1").innerHTML=username;
    }
}