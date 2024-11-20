const chatbotToggler = document.querySelector(".chatbot-toggler");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const navigationButtons = document.createElement("div");
navigationButtons.classList.add("navigation-buttons");

let userMessage = null;
const inputInitHeight = chatInput.scrollHeight;

const questions = {
    1: "Hello! can i ask you questions?",
    2: "What is the name of the company?",
    3: "What products or services does the company offer?",
    4: "Where is the company headquartered?",
    5: "How do I apply for an internship?",
    6: "What is Pay After Placement?",
    7: "How does Pay After Placement work?",
    8: "Can I see a list of courses available for beginners?",
    9: "Can I choose how long I take to repay?",
    10: "Who is your target audience?",
    11: "What are the company’s key values?",
    12: "What are the main goals for the company?",
    13: "How has the company adapted to trends?",
    14: "What internships do you offer?",
    15: "Free site for education?",
    16: "Free site for mentorship?",
    17: "Free site for resume building?",
    18: "Free site for influencer marketing?",
    19: "Free site for training?",
    20: "Free site for AI tools?",
    21: "Free site for idea to expansion?"
};

const answers = {
    1: " Hello! I'm here to assist you with questions about The Entrepreneurship Network. You can ask me about the company, its services, Pay After Placement, internships, and more.",
    2: "The Entrepreneurship Network.",
    3: "We offer courses, mentorship, and internship opportunities.",
    4: "Our headquarters are in San Francisco, California.",
    5: "You can apply through our website under the internship section.",
    6: "Pay After Placement is a program that allows students to pay for courses only after they secure a job.",
    7: "Students enroll in our courses and pay the fees once they are employed and earning a stable salary.",
    8: "Yes, we offer a variety of beginner courses in entrepreneurship, coding, and more.",
    9: "Yes, flexible repayment options are available.",
    10: "Students, professionals, and aspiring entrepreneurs.",
    11: "Empowerment, education, and innovation.",
    12: "To bridge the gap between traditional education and the requirements of modern businesses.",
    13: "By providing online resources, remote internships, and industry-relevant education.",
    14: "We offer internships in fields like marketing, coding, and management.",
    15: "Yes, our website offers free educational resources.",
    16: "We provide mentorship programs free of charge.",
    17: "Our platform offers resume-building tools for free.",
    18: "Yes, we provide free influencer marketing tools.",
    19: "Training sessions are free.",
    20: "AI tools are available on our platform.",
    21: "Our platform provides free resources from idea inception to expansion."
};

let currentPage = 1;

const generateResponse = (chatElement, message) => {
    const messageElement = chatElement.querySelector("p");
    const response = getResponse(message);
    messageElement.textContent = response;
    chatbox.scrollTo(0, chatbox.scrollHeight);
    appendNavigationButtons();
};

const getResponse = (message) => {
    for (const [key, question] of Object.entries(questions)) {
        if (message === question.toLowerCase()) {
            return answers[key];
        }
    }
    return "I'm sorry, I didn't understand that. Please ask about The Entrepreneurship Network.";
};

const showQuestions = (page) => {
    currentPage = page;
    chatbox.innerHTML = "";

    const start = (page - 1) * 4;
    const end = start + 4;

    for (let i = start + 1; i <= end && i <= Object.keys(questions).length; i++) {
        const questionButton = document.createElement("button");
        questionButton.textContent = questions[i];
        questionButton.classList.add("question-button");

        questionButton.addEventListener("click", () => {
            userMessage = questions[i].toLowerCase();
            chatbox.appendChild(createChatLi(questions[i], "outgoing"));

            updateNavigationButtons();

            const incomingChatLi = createChatLi("...", "incoming");
            chatbox.appendChild(incomingChatLi);
            setTimeout(() => generateResponse(incomingChatLi, userMessage), 600);
        });

        chatbox.appendChild(questionButton);
    }

    appendNavigationButtons();
    chatbox.scrollTo(0, chatbox.scrollHeight);
    updateNavigationButtons();
};

const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);

    const chatContent = className === "incoming" ? `<span>B</span><p>${message}</p>` : `<p>${message}</p>`;
    chatLi.innerHTML = chatContent;

    return chatLi;
};

const createNavigationButtons = () => {
    const prevButton = document.createElement("button");
    prevButton.textContent = "Previous";
    prevButton.classList.add("prev-button");
    prevButton.addEventListener("click", () => {
        if (currentPage > 1) {
            showQuestions(currentPage - 1);
        }
    });

    const nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    nextButton.classList.add("next-button");
    nextButton.addEventListener("click", () => {
        if (currentPage < Math.ceil(Object.keys(questions).length / 4)) {
            showQuestions(currentPage + 1);
        }
    });

    navigationButtons.appendChild(prevButton);
    navigationButtons.appendChild(nextButton);
};

const appendNavigationButtons = () => {
    navigationButtons.innerHTML = '';
    createNavigationButtons();
    chatbox.appendChild(navigationButtons);
    updateNavigationButtons();
};

const updateNavigationButtons = () => {
    const prevButton = navigationButtons.querySelector(".prev-button");
    const nextButton = navigationButtons.querySelector(".next-button");
    prevButton.style.display = currentPage > 1 ? "block" : "none";
    nextButton.style.display = currentPage < Math.ceil(Object.keys(questions).length / 4) ? "block" : "none";
};

const resetChatbot = () => {
    chatbox.innerHTML = ""; 
    currentPage = 1; 
    chatInput.value = ""; 
    chatInput.style.height = `${inputInitHeight}px`; 
    showQuestions(currentPage); 
};

chatbotToggler.addEventListener("click", () => {
    document.body.classList.toggle("show-chatbot");
    if (document.body.classList.contains("show-chatbot")) {
        resetChatbot();
    }
});

chatInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        sendChatBtn.click(); 
    }
});

sendChatBtn.addEventListener("click", () => handleOutgoingChat());

const handleOutgoingChat = () => {
    userMessage = chatInput.value.trim();
    if (!userMessage) return;
    if (userMessage.toLowerCase() === "quit") {
        document.body.classList.remove("show-chatbot"); 
        resetChatbot(); 
        return;
    }

    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    const incomingChatLi = createChatLi("Thinking...", "incoming");
    chatbox.appendChild(incomingChatLi);

    setTimeout(() => generateResponse(incomingChatLi, userMessage), 600);
};

createNavigationButtons();
showQuestions(1);
















