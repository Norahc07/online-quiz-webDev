document.getElementById('startQuizBtn').addEventListener('click', function() {
    const questionCount = document.getElementById('questionCount').value;
    fetch(`/api/questions/${questionCount}`)
        .then(response => response.json())
        .then(data => startQuiz(data))
        .catch(error => console.error('Error fetching questions:', error));
});

function startQuiz(questions) {
    const quizContainer = document.createElement('div');
    quizContainer.classList.add('quiz-container');
    questions.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.innerHTML = `
            <p>${question.question}</p>
            ${question.options.map(option => `
                <label>
                    <input type="radio" name="question${index}" value="${option}">${option}
                </label>
            `).join('')}
        `;
        quizContainer.appendChild(questionElement);
    });

    document.body.innerHTML = '';
    document.body.appendChild(quizContainer);
    addFinishButton();
}

function addFinishButton() {
    const finishButton = document.createElement('button');
    finishButton.innerHTML = 'Finish';
    finishButton.addEventListener('click', finishQuiz);
    document.body.appendChild(finishButton);
}

function finishQuiz() {
    const totalQuestions = document.querySelectorAll('input[type="radio"]:checked').length;
    const totalCorrect = checkAnswers();
    const result = totalCorrect / totalQuestions >= 0.75 ? 'Congratulations! You passed!' : 'Sorry, you failed!';
    alert(`You answered ${totalCorrect} out of ${totalQuestions} correctly.\n${result}`);
}

function checkAnswers() {
    let correctCount = 0;
    // Check answers here (use the correct answers stored on the server)
    return correctCount;
}
