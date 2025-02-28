let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];

async function startQuiz() {
    const questionCount = document.getElementById('question-count').value;
    try {
        const response = await fetch(`/.netlify/functions/questions/${questionCount}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        currentQuestions = await response.json();
        currentQuestionIndex = 0;
        userAnswers = new Array(currentQuestions.length).fill(null);
        
        document.getElementById('dashboard').style.display = 'none';
        document.getElementById('quiz-section').style.display = 'block';
        
        displayCurrentQuestion();
        createNavigationButtons();
        updateNavigationButtons();
    } catch (error) {
        console.error('Error fetching questions:', error);
        alert('Failed to load quiz questions. Please try again.');
    }
}

function displayCurrentQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    const quizContent = document.getElementById('quiz-content');
    
    const questionHTML = `
        <div class="question-container">
            <div class="question-text">
                ${currentQuestionIndex + 1}. ${question.question}
            </div>
            ${question.imageUrl ? `<img src="${question.imageUrl}" alt="Question Image" class="question-image">` : ''}
            ${question.code ? `<pre class="code-block">${question.code}</pre>` : ''}
            <div class="options-container">
                ${question.options.map((option, index) => `
                    <label class="option-label ${userAnswers[currentQuestionIndex] === option ? 'selected' : ''}">
                        <input type="radio" name="question${currentQuestionIndex}" value="${option}" 
                            ${userAnswers[currentQuestionIndex] === option ? 'checked' : ''}>
                        ${option}
                    </label>
                `).join('')}
            </div>
        </div>
    `;
    
    quizContent.innerHTML = questionHTML;

    // Add event listeners to radio buttons
    const radioButtons = quizContent.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(radio => {
        radio.addEventListener('change', (e) => {
            userAnswers[currentQuestionIndex] = e.target.value;
            updateNavigationButtons();
        });
    });
}

function createNavigationButtons() {
    const navigationDiv = document.getElementById('question-navigation');
    navigationDiv.innerHTML = `
        <div class="nav-buttons">
            <button onclick="previousQuestion()" class="btn-nav" id="prev-btn">Previous</button>
            <div class="question-numbers">
                ${currentQuestions.map((_, index) => `
                    <button onclick="goToQuestion(${index})" class="nav-button" id="nav-btn-${index}">
                        ${index + 1}
                    </button>
                `).join('')}
            </div>
            <button onclick="nextQuestion()" class="btn-nav" id="next-btn">Next</button>
        </div>
    `;
}

function updateNavigationButtons() {
    // Update Previous/Next buttons
    document.getElementById('prev-btn').disabled = currentQuestionIndex === 0;
    document.getElementById('next-btn').disabled = currentQuestionIndex === currentQuestions.length - 1;

    // Update question number buttons
    currentQuestions.forEach((_, index) => {
        const button = document.getElementById(`nav-btn-${index}`);
        button.className = 'nav-button';
        if (index === currentQuestionIndex) {
            button.classList.add('active');
        }
        if (userAnswers[index] !== null) {
            button.classList.add('answered');
        }
    });

    // Show/hide finish button
    const finishButton = document.getElementById('finish-button');
    const allAnswered = userAnswers.every(answer => answer !== null);
    finishButton.style.display = allAnswered ? 'block' : 'none';
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayCurrentQuestion();
        updateNavigationButtons();
    }
}

function nextQuestion() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        displayCurrentQuestion();
        updateNavigationButtons();
    }
}

function goToQuestion(index) {
    currentQuestionIndex = index;
    displayCurrentQuestion();
    updateNavigationButtons();
}

function finishQuiz() {
    const score = calculateScore();
    const percentage = (score / currentQuestions.length) * 100;
    const passed = percentage >= 70;

    const resultSection = document.getElementById('result-section');
    const resultDiv = document.getElementById('result');
    
    resultDiv.innerHTML = `
        <div class="result-card ${passed ? 'passed' : 'failed'}">
            <h3>Quiz Complete!</h3>
            <div class="score">${score} / ${currentQuestions.length}</div>
            <div class="total">Score: ${percentage.toFixed(2)}%</div>
            <div class="status">${passed ? 'Passed!' : 'Try Again!'}</div>
        </div>
    `;

    document.getElementById('quiz-section').style.display = 'none';
    resultSection.style.display = 'block';
}

function calculateScore() {
    return currentQuestions.reduce((score, question, index) => {
        return score + (userAnswers[index] === question.answer ? 1 : 0);
    }, 0);
}

function retakeQuiz() {
    document.getElementById('result-section').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
    currentQuestions = [];
    currentQuestionIndex = 0;
    userAnswers = [];
}

