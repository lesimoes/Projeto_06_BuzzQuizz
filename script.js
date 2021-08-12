let allQuizzes = [];
let userQuizzes = [];

function getAllQuizzes () {
    const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v3/buzzquizz/quizzes');

    promise.then(loadAllQuizzes);
}

function loadAllQuizzes (response) {
    allQuizzes = response.data;
    console.log(allQuizzes);

    showAllQuizzes();
    showUserQuizzes();
}

function showUserQuizzes () {
    const ulQuizzes = document.querySelector('.filledUserQuizzes ul');
    ulQuizzes.innerHTML = "";

    for (let i = 0; i < allQuizzes.length; i++) {
        ulQuizzes.innerHTML +=  `
        <li>
            <img src=${allQuizzes[i].image}>
            <p class="quizzTitle">${allQuizzes[i].title}</p>
        </li>

        <li>
            <img src=${allQuizzes[i].image}>
            <p class="quizzTitle">${allQuizzes[i].title}</p>
        </li>

        <li>
            <img src=${allQuizzes[i].image}>
            <p class="quizzTitle">${allQuizzes[i].title}</p>
        </li>

        <li>
            <img src=${allQuizzes[i].image}>
            <p class="quizzTitle">${allQuizzes[i].title}</p>
        </li>`
    }
}

function showAllQuizzes () {
    const ulQuizzes = document.querySelector('.allQuizzes ul');
    ulQuizzes.innerHTML = "";

    for (let i = 0; i < allQuizzes.length; i++) {
        ulQuizzes.innerHTML += `
        <li>
            <img src=${allQuizzes[i].image}>
            <p class="quizzTitle">${allQuizzes[i].title}</p>
        </li>

        <li>
            <img src=${allQuizzes[i].image}>
            <p class="quizzTitle">${allQuizzes[i].title}</p>
        </li>

        <li>
            <img src=${allQuizzes[i].image}>
            <p class="quizzTitle">${allQuizzes[i].title}</p>
        </li>

        <li>
            <img src=${allQuizzes[i].image}>
            <p class="quizzTitle">${allQuizzes[i].title}</p>
        </li>

        <li>
            <img src=${allQuizzes[i].image}>
            <p class="quizzTitle">${allQuizzes[i].title}</p>
        </li>

        <li>
            <img src=${allQuizzes[i].image}>
            <p class="quizzTitle">${allQuizzes[i].title}</p>
        </li>

        <li>
            <img src=${allQuizzes[i].image}>
            <p class="quizzTitle">${allQuizzes[i].title}</p>
        </li>

        <li>
            <img src=${allQuizzes[i].image}>
            <p class="quizzTitle">${allQuizzes[i].title}</p>
        </li>

        <li>
            <img src=${allQuizzes[i].image}>
            <p class="quizzTitle">${allQuizzes[i].title}</p>
        </li>

        <li>
            <img src=${allQuizzes[i].image}>
            <p class="quizzTitle">${allQuizzes[i].title}</p>
        </li>

        <li>
            <img src=${allQuizzes[i].image}>
            <p class="quizzTitle">${allQuizzes[i].title}</p>
        </li>

        <li>
            <img src=${allQuizzes[i].image}>
            <p class="quizzTitle">${allQuizzes[i].title}</p>
        </li>`
    }
}

getAllQuizzes ();