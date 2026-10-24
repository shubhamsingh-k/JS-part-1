// let storage1 = localStorage.setItem("num1" , 1)  //setItem
// let storage2 = localStorage.setItem("num2" , 1)
// let storage3 = localStorage.setItem("num3" , 1)  // key ke sath value bhi likh na hai



// // let result = localStorage.setItem("num")  // num ke alwa dusra chiz use krne per null dega

// // console.log(result);

// let result2 = localStorage.getItem("0")  //getItem
// console.log(result2);
// let result3 = localStorage.key("0")  //getItem
// console.log(result2);

// let result4 = localStorage.removeItem("num2")  //removeItem
// console.log(result4);


// document.querySelector("#clear-local-storage").addEventListener("click" , () => {
// localStorage.clear()
// })

// document.querySelector("#add-session-item").addEventListener("click" , () => {
// sessionStorage.getItem("session" , item)
// })

//////////////////////// ///////
////    PROFILE FINDER     /////                ///
////////////////////////////////


// let xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function () {
//     let data = xhttp.responseText;
//     console.log(data);
// }
// // https://github.com/shubhamsingh-k

// xhttp.open("GET" ,  "https://api.github.com/users/shubhamsingh-k" , true);
// xhttp.send();


// fetch("https://api.github.com/users/shubhamsingh-k")
// .then(data => data.json())
// .then(data => console.log(data))

async function getUser(username = "shubhamsingh-k"){
    const response = await fetch(`https://api.github.com/users/${username}`)
    const data = await response.json()
    return data;

    }

    document.querySelector("#github-form").addEventListener("submit" , async (e) => {
        e.preventDefault()

        let username = document.querySelector("#github-username").value
         
        const data = await getUser(username)

        document.querySelector("#show-profile").innerHTML =   `
        <img src=${data.avatar_url} width="100px" height="100px" alt="">
        <h2>${data.name}</h2>
        <i>username : ${data.login}</i>
        <p>bio : ${data.bio}</p>
        <p>followers : ${data.followers}</p>
        <p>following :  ${data.following}</p>
        <p>Public repos : ${data.public_repos}</p>

        `
    })

    function updateStatus(){
    document.querySelector("#live-status").textContent = navigator.onLine ? "Online" : "offline"
}

window.addEventListener("online"  , updateStatus)
window.addEventListener("offline" , updateStatus)