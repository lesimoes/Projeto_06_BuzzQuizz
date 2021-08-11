let allQuizzes = [];
let userQuizzes = [];

function getAllQuizzes () {
    const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v3/buzzquizz/quizzes');

    promise.then(loadAllQuizzes);
}

function loadAllQuizzes (response) {
    allQuizzes = response.data;
    console.log(allQuizzes);
}

getAllQuizzes ();