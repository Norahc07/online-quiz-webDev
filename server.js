// Import necessary modules
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Initialize dotenv for environment variables
dotenv.config();

// Create an Express application
const app = express();
const port = process.env.PORT || 3000;  // Use the environment variable for port

// Middlewares
app.use(cors());  // Enable CORS (Cross-Origin Resource Sharing)
app.use(express.static('public'));  // Serve static files from the 'public' folder

// Example questions for the quiz
const questions = [
  {
    question: "What is an endpoint?",
    options: [
      "a) A network cable",
      "b) Any device that communicates with another device on a network",
      "c) A firewall",
      "d) A server room"
    ],
    answer: "b) Any device that communicates with another device on a network"
  },
  {
    question: "What is a baseline in operating system security?",
    options: [
      "a) A type of malware",
      "b) A standard or reference point for system performance and security settings",
      "c) A network cable",
      "d) A user password"
    ],
    answer: "b) A standard or reference point for system performance and security settings"
  },
  {
    question: "Which of the following is NOT a type of malware?",
    options: [
      "a) Viruses",
      "b) Adware",
      "c) Patches",
      "d) Spyware"
    ],
    answer: "c) Patches"
  },
  {
    question: "What is the primary purpose of adware?",
    options: [
      "a) Stealing passwords",
      "b) Displaying unwanted advertisements",
      "c) Encrypting files",
      "d) Monitoring network traffic"
    ],
    answer: "b) Displaying unwanted advertisements"
  },
  {
    question: "What does spyware do?",
    options: [
      "a) Encrypts data",
      "b) Displays pop-up ads",
      "c) Records keystrokes to steal information",
      "d) Filters network traffic"
    ],
    answer: "c) Records keystrokes to steal information"
  },
  {
    question: "What are patches used for?",
    options: [
      "a) Displaying ads",
      "b) Preventing malware attacks",
      "c) Stealing data",
      "d) Encrypting files"
    ],
    answer: "b) Preventing malware attacks"
  },
  {
    question: "What is a host-based firewall?",
    options: [
      "a) A firewall that protects an entire network",
      "b) A firewall that runs on a device to restrict network activity for that device",
      "c) A physical firewall device",
      "d) A cloud-based firewall"
    ],
    answer: "b) A firewall that runs on a device to restrict network activity for that device"
  },
  {
    question: "What does HIDS stand for?",
    options: [
      "a) Host Intrusion Data Storage",
      "b) Host Intrusion Detection System",
      "c) Hardware Intrusion Detection System",
      "d) High Intrusion Detection Server"
    ],
    answer: "b) Host Intrusion Detection System"
  },
  {
    question: "What is the purpose of EDR?",
    options: [
      "a) Encrypting files",
      "b) Continuously monitoring and responding to endpoint threats",
      "c) Displaying ads",
      "d) Filtering emails"
    ],
    answer: "b) Continuously monitoring and responding to endpoint threats"
  },
  {
    question: "What is the purpose of DLP?",
    options: [
      "a) Preventing data loss",
      "b) Displaying ads",
      "c) Encrypting files",
      "d) Filtering emails"
    ],
    answer: "a) Preventing data loss"
  },
  {
    question: "What does encryption do?",
    options: [
      "a) Displays ads",
      "b) Makes data unreadable",
      "c) Steals data",
      "d) Filters network traffic"
    ],
    answer: "b) Makes data unreadable"
  },
  {
    question: "What is TPM?",
    options: [
      "a) A type of malware",
      "b) A chip that stores encryption keys and certificates",
      "c) A network cable",
      "d) A firewall"
    ],
    answer: "b) A chip that stores encryption keys and certificates"
  },
  {
    question: "What is the purpose of Secure Boot?",
    options: [
      "a) Encrypting files",
      "b) Ensuring a device boots using trusted software",
      "c) Displaying ads",
      "d) Filtering emails"
    ],
    answer: "b) Ensuring a device boots using trusted software"
  },
  {
    question: "What is RFID used for?",
    options: [
      "a) Encrypting files",
      "b) Identifying and tracking objects using radio waves",
      "c) Displaying ads",
      "d) Filtering emails"
    ],
    answer: "b) Identifying and tracking objects using radio waves"
  },
  {
    question: "Which antimalware approach recognizes general features shared by various types of malware?",
    options: [
      "a) Signature-based",
      "b) Heuristics-based",
      "c) Behavior-based",
      "d) Encryption-based"
    ],
    answer: "b) Heuristics-based"
  },
  {
    question: "What is another name for host-based antivirus protection?",
    options: [
      "a) Network-based",
      "b) Agent-based",
      "c) Cloud-based",
      "d) Server-based"
    ],
    answer: "b) Agent-based"
  },
  {
    question: "What does ESA provide?",
    options: [
      "a) Website filtering",
      "b) SPAM and malicious email filtering",
      "c) Network access control",
      "d) Endpoint protection"
    ],
    answer: "b) SPAM and malicious email filtering"
  },
  {
    question: "What does WSA provide?",
    options: [
      "a) Email filtering",
      "b) Website filtering",
      "c) Network access control",
      "d) Endpoint protection"
    ],
    answer: "b) Website filtering"
  },
  {
    question: "What does NAC do?",
    options: [
      "a) Filters emails",
      "b) Filters websites",
      "c) Permits only authorized systems to connect to the network",
      "d) Encrypts files"
    ],
    answer: "c) Permits only authorized systems to connect to the network"
  },
  {
    question: "What is iptables?",
    options: [
      "a) A Windows firewall",
      "b) A Linux firewall application",
      "c) An email filter",
      "d) A website filter"
    ],
    answer: "b) A Linux firewall application"
  },
  {
    question: "What is anomaly-based HIDS?",
    options: [
      "a) A system that uses predefined rules",
      "b) A system that compares behavior to a baseline",
      "c) A system that filters emails",
      "d) A system that filters websites"
    ],
    answer: "b) A system that compares behavior to a baseline"
  },
  {
    question: "What is an attack surface?",
    options: [
      "a) A firewall",
      "b) The total sum of vulnerabilities in a system",
      "c) A network cable",
      "d) An encrypted file"
    ],
    answer: "b) The total sum of vulnerabilities in a system"
  },
  {
    question: "What is blocklisting?",
    options: [
      "a) Creating lists of prohibited applications",
      "b) Encrypting files",
      "c) Displaying ads",
      "d) Filtering emails"
    ],
    answer: "a) Creating lists of prohibited applications"
  },
  {
    question: "What is sandboxing?",
    options: [
      "a) Encrypting files",
      "b) Analyzing suspicious files in a safe environment",
      "c) Displaying ads",
      "d) Filtering emails"
    ],
    answer: "b) Analyzing suspicious files in a safe environment"
  },
  {
    question: "What is a Phishing attack?",
    options: [
      "a) Attacking a server with a hammer.",
      "b) Sending fraudulent communications from a reputable source.",
      "c) Encrypting all files on a drive.",
      "d) Setting up a secure network."
    ],
    answer: "b) Sending fraudulent communications from a reputable source."
  },
  {
    question: "If you receive an email from an unknown sender with a suspicious attachment, what should you do?",
    options: [
      "a) Open the attachment immediately.",
      "b) Forward the email to all your contacts.",
      "c) Delete the email without opening the attachment.",
      "d) Reply to the sender and ask for more information."
    ],
    answer: "c) Delete the email without opening the attachment."
  },
  {
    question: "Why is it important to keep your software updated?",
    options: [
      "a) To make your computer run faster.",
      "b) To prevent malware from exploiting known vulnerabilities.",
      "c) To get new features.",
      "d) To display more ads."
    ],
    answer: "b) To prevent malware from exploiting known vulnerabilities."
  },
  {
    question: "If your computer starts displaying unusual pop-up ads, what is a likely cause?",
    options: [
      "a) A hardware malfunction.",
      "b) Adware infection.",
      "c) An operating system update.",
      "d) A network cable issue."
    ],
    answer: "b) Adware infection."
  },
  {
    question: "Why should you avoid downloading programs from untrusted websites?",
    options: [
      "a) They might be too expensive.",
      "b) They might contain malware.",
      "c) They might be too large.",
      "d) They might be too old."
    ],
    answer: "b) They might contain malware."
  },
  {
    question: "What is the most common way to get a virus on your computer?",
    options: [
      "a) By typing too fast.",
      "b) By clicking on malicious links or opening infected files.",
      "c) By leaving your computer on for too long.",
      "d) By not using a mouse."
    ],
    answer: "b) By clicking on malicious links or opening infected files."
  },
  {
    question: "What is the purpose of a firewall?",
    options: [
      "a) To display ads.",
      "b) To block unauthorized access to your computer or network.",
      "c) To encrypt files.",
      "d) To speed up your internet connection."
    ],
    answer: "b) To block unauthorized access to your computer or network."
  },
  {
    question: "Why should you use strong, unique passwords?",
    options: [
      "a) To make them easier to remember.",
      "b) To prevent unauthorized access to your accounts.",
      "c) To display more ads.",
      "d) To speed up your computer."
    ],
    answer: "b) To prevent unauthorized access to your accounts."
  },
  {
    question: "What is the purpose of backing up your data?",
    options: [
      "a) To make your computer run faster.",
      "b) To protect your data from loss in case of a malware attack or hardware failure.",
      "c) To display more ads.",
      "d) To speed up your internet connection."
    ],
    answer: "b) To protect your data from loss in case of a malware attack or hardware failure."
  },
  {
    question: "If you suspect your computer is infected with malware, what is a good first step?",
    options: [
      "a) Immediately format your hard drive.",
      "b) Run a full system scan with your antivirus software.",
      "c) Disconnect your computer from the internet.",
      "d) Delete all your files."
    ],
    answer: "b) Run a full system scan with your antivirus software."
  },
  {
    question: "Why is it important to be cautious when clicking on links in emails or on websites?",
    options: [
      "a) They might be too long.",
      "b) They might lead to malicious websites or downloads.",
      "c) They might be in a different language.",
      "d) They might be too colorful."
    ],
    answer: "b) They might lead to malicious websites or downloads."
  },
  {
    question: "What is a keylogger?",
    options: [
      "a) A program that displays ads.",
      "b) A program that records your keystrokes.",
      "c) A program that filters emails.",
      "d) A program that encrypts files."
    ],
    answer: "b) A program that records your keystrokes."
  },
  {
    question: "What is a 'Trojan horse' in the context of malware?",
    options: [
      "a) A type of network cable.",
      "b) A malicious program disguised as legitimate software.",
      "c) A type of firewall.",
      "d) A hardware component."
    ],
    answer: "b) A malicious program disguised as legitimate software."
  },
  {
    question: "Which of the following is a strong indicator of a phishing email?",
    options: [
      "a) The email is short and concise.",
      "b) The email asks for your personal information or login credentials.",
      "c) The email is sent from a known contact.",
      "d) The email contains a funny meme."
    ],
    answer: "b) The email asks for your personal information or login credentials."
  },
  {
    question: "What is the purpose of a VPN (Virtual Private Network)?",
    options: [
      "a) To display ads.",
      "b) To encrypt your internet traffic and protect your privacy.",
      "c) To speed up your computer.",
      "d) To filter emails."
    ],
    answer: "b) To encrypt your internet traffic and protect your privacy."
  },
  {
    question: "Why should you regularly update your web browser?",
    options: [
      "a) To get new features.",
      "b) To patch security vulnerabilities that malware could exploit.",
      "c) To make websites load faster.",
      "d) To change the browser's color scheme."
    ],
    answer: "b) To patch security vulnerabilities that malware could exploit."
  },
  {
    question: "What is an endpoint?",
    options: [
      "a) A network cable.",
      "b) Any device that communicates with another device on a network.",
      "c) A firewall.",
      "d) A server room."
    ],
    answer: "b) Any device that communicates with another device on a network."
  },
  {
    question: "What is a baseline in operating system security?",
    options: [
      "a) A type of malware.",
      "b) A standard or reference point for system performance and security settings.",
      "c) A network cable.",
      "d) A user password."
    ],
    answer: "b) A standard or reference point for system performance and security settings."
  },
  {
    question: "Which of the following is NOT a type of malware?",
    options: [
      "a) Viruses.",
      "b) Adware.",
      "c) Patches.",
      "d) Spyware."
    ],
    answer: "c) Patches."
  },
  {
    question: "What is the primary purpose of adware?",
    options: [
      "a) Stealing passwords.",
      "b) Displaying unwanted advertisements.",
      "c) Encrypting files.",
      "d) Monitoring network traffic."
    ],
    answer: "b) Displaying unwanted advertisements."
  },
  {
    question: "What does spyware do?",
    options: [
      "a) Encrypts data.",
      "b) Displays pop-up ads.",
      "c) Records keystrokes to steal information.",
      "d) Filters network traffic."
    ],
    answer: "c) Records keystrokes to steal information."
  }
  // Add the remaining 25 questions following the same format
]; 

console.log('Total number of questions available:', questions.length);

// Route to get random quiz questions
app.get('/api/questions/:number', (req, res) => {
    try {
        const requestedCount = parseInt(req.params.number);
        const totalQuestions = questions.length;
        
        // Validate requested count
        const numQuestions = Math.min(requestedCount, totalQuestions);
        
        console.log(`Total questions available: ${totalQuestions}`);
        console.log(`Requested questions: ${requestedCount}`);
        console.log(`Returning questions: ${numQuestions}`);

        // Create a copy of questions array and shuffle it
        const shuffledQuestions = [...questions].sort(() => 0.5 - Math.random());
        
        // Select the requested number of questions
        const selectedQuestions = shuffledQuestions.slice(0, numQuestions);
        
        // Standardize the question format
        const formattedQuestions = selectedQuestions.map(q => ({
            question: q.question,
            choices: q.choices || q.options, // handle both formats
            answer: q.answer,
            imageUrl: q.imageUrl,
            code: q.code
        }));

        res.json(formattedQuestions);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to load questions' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
