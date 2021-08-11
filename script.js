let quizzes = [];

function getAllQuizzes () {
    const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v3/buzzquizz/quizzes');

    promise.then(loadAllQuizzes);
}

function loadAllQuizzes (response) {
    console.log(response.data);
}

getAllQuizzes ();