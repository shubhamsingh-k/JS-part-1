const form = document.querySelector("#form")
const btn = document.querySelector("#btn")
const username = document.querySelector("#username")
 const bio = document.querySelector("#bio")
const charCount = document.querySelector("#char-count")
const checkbox = document.querySelector("#checkbox")
const country = document.querySelector("#country")
 const passwordHint = document.querySelector("#password-hint")  
const password = document.querySelector("#password")
const errorMessage = document.querySelector("#error-message")

const LIMIT = 250

    charCount.textContent = `${LIMIT} characters remaining`


    function showError(input , errorMessage) {
        input.parentElement.querySelector(".error-message").textContent = errorMessage
    }
function validUsername(username){
    if (username.value.trim().length === 0){
        errorMessage.textContent = "Enter your name"

        return false;
    }
}

if (username.value.trim().length < 5) {
    errorMessage.textContent = "username must be atleast 5 character"
    return false;
}
return true;


form.addEventListener("submit" , (e) => {
    e.preventDefault();
    // console.log("Hii");

    const isUsernameValid = validUsername(username);

  
    // const form = document.querySelector("#name").value
    // const  password = document.querySelector("#password").value
   

    if (isUsernameValid) {
        console.log("form is valid");

        }
        else {
            console.log("form is invalid");
        }

    })
        // console.log("Enter your name");
        // return;
        // alert("Please enter your name");
    //     errorMessage.textContent = "please enter your name"
    //     return;
    // }
//     const email = document.querySelector("#email").value
// console.log({usernam:username.value, password, email });
// // console.log({name , password, email});

// })

// username.addEventListener("input" , (e) => {

// }

// bio.addEventListener("input" , (e) => {
//     // console.log(bio.value.length);
//     const remaining = LIMIT - bio.value.length;
//     // console.log(remaining);
//     charCount.textContent = `${remaining} characters remaining`;
    
//  })

// // change event
// username.addEventListener("change" , (e) => {
//     console.log("change event" , username.value);
// })

// username.addEventListener("input" , (e) => {
//     console.log("input event" , username.value);
// })


// checkbox.addEventListener("change" , (e) => {
// console.log(checkbox.checked);
// })


// country.addEventListener("input" , (e) => {
//     console.log(country.value);
// })

// // event type
// // ---Focus & Blur

// username.addEventListener("focus" , (e) => {
//     console.log("focus");
// })
// username.addEventListener("blur" , (e) => {
//     console.log("Blur");
// })

// password.addEventListener("focus" , (e) => {
//     password.classList.remove("hidden")
// })

// password.addEventListener("focus" , (e) => {
//     passwordHint.classList.add("hidden")
// })

