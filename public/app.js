let currentQuestionIndex = 0;
let answers = [];
let selectedQuestions = [];

function startQuiz() {
    const questionCount = document.getElementById('question-count').value;
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'block';
    
    fetch(`/api/questions/${questionCount}`)
        .then(response => response.json())
        .then(questions => {
            selectedQuestions = questions;
            answers = new Array(questions.length).fill(null);
            createNavigationButtons();
            showQuestion(currentQuestionIndex);
            updateNavigationControls();
        });
}

function createNavigationButtons() {
    const navigation = document.getElementById('question-navigation');
    navigation.innerHTML = `
        <div class="nav-buttons">
            <button onclick="showPrevious()" class="btn-nav" id="prev-btn">Previous</button>
            <div class="question-numbers">
                ${selectedQuestions.map((_, index) => `
                    <button 
                        class="nav-button" 
                        id="nav-${index}"
                        onclick="navigateToQuestion(${index})"
                    >${index + 1}</button>
                `).join('')}
                <button 
                    id="finish-button" 
                    onclick="finishQuiz()" 
                    class="finish-nav-button"
                    style="display: none;"
                >
                    <span class="checkmark">✓</span>
                </button>
            </div>
            <button onclick="showNext()" class="btn-nav" id="next-btn">Next</button>
        </div>
    `;
}

function showQuestion(index) {
    currentQuestionIndex = index;
    const question = selectedQuestions[index];
    const quizContent = document.getElementById('quiz-content');
    
    quizContent.innerHTML = `
        <div class="question-container">
            <h2>Question ${index + 1} of ${selectedQuestions.length}</h2>
            <p class="question-text">${question.question}</p>
            <form id="answers-form" class="options-container">
                ${question.options.map((option, i) => `
                    <label class="option-label ${answers[index] === option ? 'selected' : ''}">
                        <input type="radio" name="answer" value="${option}" 
                               ${answers[index] === option ? 'checked' : ''}
                               onchange="answerQuestion('${option}')">
                        ${option}
                    </label>
                `).join('')}
            </form>
        </div>
    `;

    updateNavigationControls();
    document.getElementById('finish-button').style.display = 
        isAllQuestionsAnswered() ? 'block' : 'none';
}

function answerQuestion(answer) {
    answers[currentQuestionIndex] = answer;
    updateNavigationStatus();
}

function showPrevious() {
    if (currentQuestionIndex > 0) {
        showQuestion(currentQuestionIndex - 1);
    }
}

function showNext() {
    if (currentQuestionIndex < selectedQuestions.length - 1) {
        showQuestion(currentQuestionIndex + 1);
    }
}

function updateNavigationControls() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.disabled = currentQuestionIndex === selectedQuestions.length - 1;
    
    // Update the active state of number buttons
    document.querySelectorAll('.nav-button').forEach((btn, index) => {
        btn.classList.remove('active');
        if (index === currentQuestionIndex) {
            btn.classList.add('active');
        }
    });
}

function updateNavigationStatus() {
    answers.forEach((answer, index) => {
        const button = document.getElementById(`nav-${index}`);
        if (answer) {
            button.classList.add('answered');
        }
    });

    // Show finish button only when all questions are answered
    const finishButton = document.getElementById('finish-button');
    if (isAllQuestionsAnswered()) {
        finishButton.style.display = 'flex';
    } else {
        finishButton.style.display = 'none';
    }
}

function navigateToQuestion(index) {
    showQuestion(index);
}

function isAllQuestionsAnswered() {
    return answers.every(answer => answer !== null);
}

function finishQuiz() {
    let correct = 0;
    selectedQuestions.forEach((question, index) => {
        if (answers[index] === question.answer) {
            correct++;
        }
    });

    const totalQuestions = selectedQuestions.length;
    const score = (correct / totalQuestions) * 100;
    const passed = score >= 75;

    document.getElementById('quiz-section').style.display = 'none';
    document.getElementById('result-section').style.display = 'block';
    
    document.getElementById('result').innerHTML = `
        <div class="result-card ${passed ? 'passed' : 'failed'}">
            <h3>${passed ? 'Congratulations! 🎉' : 'Better Luck Next Time!'}</h3>
            <p class="score">Score: ${score.toFixed(1)}%</p>
            <p class="total">Correct Answers: ${correct}/${totalQuestions}</p>
            <p class="status">${passed ? 'You passed!' : 'You failed.'}</p>
        </div>
    `;
}

function retakeQuiz() {
    document.getElementById('result-section').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
    answers = [];
    selectedQuestions = [];
    currentQuestionIndex = 0;
}

