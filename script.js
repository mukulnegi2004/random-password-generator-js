const passwordbox = document.getElementById("password");
const length = 16;

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+-={}[]|=;";
const allchars = uppercase + lowercase + number + symbol;

function createpassword(){
    let password = "";
    password += uppercase[Math.floor(Math.random()*uppercase.length)];   // Math.random() generates a random decimal between 0 and 1 (e.g., 0.7264), Multiplying by uppercase.length (which is 26 for "ABCDEFGHIJKLMNOPQRSTUVWXYZ") scales the random number to be between 0 and 25.9999, Math.floor() rounds the decimal down to the nearest whole number, ensuring a valid index between 0 and 25,math.floor()Always rounds down (towards -∞)
    password += lowercase[Math.floor(Math.random()*lowercase.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += symbol[Math.floor(Math.random()*symbol.length)];

    while(password.length < length){   // loop keeps running until password.length reaches length.
        password += allchars[Math.floor(Math.random()*allchars.length)];
    }
    passwordbox.value =  password;
}

function copypassword(){
    passwordbox.select();    //select() highlights the text inside the input field so it can be copied.
    document.execCommand("copy");   //This copies the selected text (the password) to the clipboard.
    setTimeout(() => {
        alert("Password copied to clipboard!");
    },1000);
}
