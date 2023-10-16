import { url } from "./https://api.noroff.dev/docs/json";

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("inputPassword");
const loginFormDOM = document.getElementById("loginForm");

function validateUsername(username) {
    return username.length >= 4;
}

function validateEmail(email) {
    const emailRegex = /^([a-zA-Z0-9._-]+)@(stud\.)?noroff\.no$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    return password.length >= 8;
}

async function registerSubmitHandler(event) {
    event.preventDefault();

    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;

    if (!validateUsername(usernameValue)) {
        alert(".");
        return;
    }

    if (!validateEmail(emailValue)) {
        alert("email stud.noroff.no");
        return;
    }

    if (!validatePassword(passwordValue)) {
        alert(" password ar least 8 characters.");
        return;
    }

    try {
        const response = await fetch(url + "/social/auth/register", {
            method: "POST",
            body: JSON.stringify({
                username: usernameValue,
                email: emailValue,
                password: passwordValue,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });

        if (response.status === 200) {
            alert("registration ");
        } else {
            console.log(response.status);
        }
    } catch (e) {
        console.log(e);
    }
}

loginFormDOM.addEventListener("submit", registerSubmitHandler);
