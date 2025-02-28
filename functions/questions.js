const questions = [
    {
      question: "What is Node.js?",
      options: [
        "a) A client-side framework",
        "b) A server-side platform",
        "c) A database",
        "d) A text editor"
      ],
      answer: "b) A server-side platform"
    },
    {
      question: "Who developed Node.js?",
      options: [
        "a) Tim Berners-Lee",
        "b) Ryan Dahl",
        "c) Brendan Eich",
        "d) Mark Zuckerberg"
      ],
      answer: "b) Ryan Dahl"
    },
    {
      question: "In which year was Node.js developed?",
      options: [
        "a) 2005",
        "b) 2009",
        "c) 2012",
        "d) 2015"
      ],
      answer: "b) 2009"
    },
    {
      question: "Which engine is Node.js built on?",
      options: [
        "a) V8 JavaScript Engine",
        "b) SpiderMonkey",
        "c) Chakra",
        "d) JavaScriptCore"
      ],
      answer: "a) V8 JavaScript Engine"
    },
    {
      question: "Which of the following is NOT a feature of Node.js?",
      options: [
        "a) Asynchronous and event-driven",
        "b) Supports multi-threading",
        "c) Very fast execution",
        "d) Single-threaded model"
      ],
      answer: "b) Supports multi-threading"
    },
    {
      question: "How does Node.js handle requests differently than PHP or ASP?",
      options: [
        "a) It blocks the next request until the current one is processed.",
        "b) It handles requests asynchronously, without waiting for the previous request to complete.",
        "c) It uses multiple threads to handle requests.",
        "d) It only supports file handling."
      ],
      answer: "b) It handles requests asynchronously, without waiting for the previous request to complete."
    },
    {
      question: "What type of applications is Node.js best suited for?",
      options: [
        "a) CPU-intensive applications",
        "b) I/O-bound applications",
        "c) Static websites",
        "d) Mobile apps"
      ],
      answer: "b) I/O-bound applications"
    },
    {
      question: "Which of the following is a common use of Node.js?",
      options: [
        "a) Generating dynamic page content",
        "b) Running graphical applications",
        "c) Managing databases",
        "d) Handling real-time video processing"
      ],
      answer: "a) Generating dynamic page content"
    },
    {
      question: "What does 'npm' stand for in Node.js?",
      options: [
        "a) Node Programming Manager",
        "b) Node Package Manager",
        "c) Node Project Manager",
        "d) Network Protocol Manager"
      ],
      answer: "b) Node Package Manager"
    },
    {
      question: "What command is used to initialize a Node.js project?",
      options: [
        "a) node init",
        "b) npm install",
        "c) npm init",
        "d) node start"
      ],
      answer: "c) npm init"
    },
    {
      question: "What file does 'npm init' create in the project directory?",
      options: [
        "a) server.js",
        "b) index.html",
        "c) package.json",
        "d) app.js"
      ],
      answer: "c) package.json"
    },
    {
      question: "What is the purpose of the 'package.json' file in Node.js?",
      options: [
        "a) Store database credentials",
        "b) Define project metadata and dependencies",
        "c) Log application errors",
        "d) Configure server settings"
      ],
      answer: "b) Define project metadata and dependencies"
    },
    {
      question: "Which method is used to create an HTTP server in Node.js?",
      options: [
        "a) http.createRequest()",
        "b) http.createServer()",
        "c) http.request()",
        "d) http.newServer()"
      ],
      answer: "b) http.createServer()"
    },
    {
      question: "Which of the following is a built-in module in Node.js?",
      options: [
        "a) express",
        "b) react",
        "c) http",
        "d) vue"
      ],
      answer: "c) http"
    },
    {
      question: "What does the 'require()' function do in Node.js?",
      options: [
        "a) Starts a new HTTP server",
        "b) Includes external libraries or modules",
        "c) Sends HTTP requests",
        "d) Reads a file from the disk"
      ],
      answer: "b) Includes external libraries or modules"
    },
    {
      question: "Which method in the HTTP module allows you to send an HTTP header with a status code?",
      options: [
        "a) res.sendHeader()",
        "b) res.writeHead()",
        "c) res.statusCode()",
        "d) res.setHeader()"
      ],
      answer: "b) res.writeHead()"
    },
    {
      question: "What is the purpose of the 'exports' keyword in Node.js?",
      options: [
        "a) Declare variables in the global scope",
        "b) Export functions or variables to be used in other modules",
        "c) Initialize a new project",
        "d) Define dependencies"
      ],
      answer: "b) Export functions or variables to be used in other modules"
    },
    {
      question: "What will the following code output?",
      imageUrl: "/date-time.png",  // Make sure to include the leading slash
      options: [
        "a) The current date and time",
        "b) Hello World!",
        "c) Error message",
        "d) Undefined"
      ],
      answer: "a) The current date and time"
    },
    {
      question: "What does the 'fs' module in Node.js provide?",
      options: [
        "a) File system operations",
        "b) Network utilities",
        "c) Database connections",
        "d) HTTP server functionality"
      ],
      answer: "a) File system operations"
    },
    {
      question: "Which function does the fs module use for non-blocking file reads?",
      options: [
        "a) fs.readFileSync()",
        "b) fs.read()",
        "c) fs.readFile()",
        "d) fs.open()"
      ],
      answer: "c) fs.readFile()"
    },
    {
      question: "What is the default status code for a successful HTTP request?",
      options: [
        "a) 404",
        "b) 500",
        "c) 200",
        "d) 301"
      ],
      answer: "c) 200"
    },
    {
      question: "Which of the following is true about callback functions in Node.js?",
      options: [
        "a) They are always synchronous.",
        "b) They are executed immediately after the task is started.",
        "c) They are executed after the task completes.",
        "d) They block the execution of other code."
      ],
      answer: "c) They are executed after the task completes."
    },
    {
      question: "Which of the following is NOT a utility module in Node.js?",
      options: [
        "a) Path",
        "b) Net",
        "c) OS",
        "d) FileReader"
      ],
      answer: "d) FileReader"
    },
    {
      question: "What is a common use case for the 'net' module in Node.js?",
      options: [
        "a) Handle DNS lookups",
        "b) Create servers and clients as streams",
        "c) Manipulate file paths",
        "d) Read operating system details"
      ],
      answer: "b) Create servers and clients as streams"
    },
    {
      question: "How do you uninstall a Node.js module?",
      options: [
        "a) npm remove [module]",
        "b) npm uninstall [module]",
        "c) npm delete [module]",
        "d) node uninstall [module]"
      ],
      answer: "b) npm uninstall [module]"
    },
    // Adding new set of questions
    {
      question: "What does REST stand for?",
      options: [
        "a) Reliable State Transfer",
        "b) Representational State Transfer",
        "c) Resource State Transfer",
        "d) Representational Server Transfer"
      ],
      answer: "b) Representational State Transfer"
    },
    {
      question: "Who introduced the concept of REST?",
      options: [
        "a) Tim Berners-Lee",
        "b) Roy Fielding",
        "c) Brendan Eich",
        "d) Mark Zuckerberg"
      ],
      answer: "b) Roy Fielding"
    },
    {
      question: "What is the most popular representation format used in REST?",
      options: [
        "a) XML",
        "b) HTML",
        "c) JSON",
        "d) CSV"
      ],
      answer: "c) JSON"
    },
    {
      question: "Which of the following is not a principle of REST?",
      options: [
        "a) Stateless communication",
        "b) Layered system",
        "c) Uniform Interface",
        "d) Client-Side Rendering"
      ],
      answer: "d) Client-Side Rendering"
    },
    {
      question: "What is the primary function of a URI in REST architecture?",
      options: [
        "a) To define the request method",
        "b) To represent the data format",
        "c) To identify a resource",
        "d) To handle server responses"
      ],
      answer: "c) To identify a resource"
    },
    {
      question: "Which HTTP method is used to request data from a server?",
      options: [
        "a) PUT",
        "b) POST",
        "c) GET",
        "d) DELETE"
      ],
      answer: "c) GET"
    },
    {
      question: "Which HTTP method is used to send data to a server to create or update a resource?",
      options: [
        "a) GET",
        "b) PUT",
        "c) POST",
        "d) HEAD"
      ],
      answer: "c) POST"
    },
    {
      question: "What is the difference between POST and PUT in REST?",
      options: [
        "a) PUT is idempotent; POST is not",
        "b) POST requests are faster",
        "c) PUT requests cannot update resources",
        "d) POST is used to delete resources"
      ],
      answer: "a) PUT is idempotent; POST is not"
    },
    {
      question: "Which of the following is a feature of Express framework?",
      options: [
        "a) Supports client-side rendering",
        "b) Facilitates rapid development of web applications",
        "c) Provides server-side rendering only",
        "d) Does not support middleware"
      ],
      answer: "b) Facilitates rapid development of web applications"
    },
    // Additional questions can be added similarly.
  ];

exports.handler = async function(event, context) {
  const number = event.path.split('/').pop();
  const numQuestions = parseInt(number);
  
  const shuffledQuestions = questions.sort(() => 0.5 - Math.random());
  const selectedQuestions = shuffledQuestions.slice(0, numQuestions);
  
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(selectedQuestions)
  };
} 