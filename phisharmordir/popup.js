// Function to check phishing likelihood and provide qualitative message
function checkPhishingLikelihood(emailBody) {
    const phishingKeywords = [
        { keyword: 'subscribe', weight: 3 },
        { keyword: 'pay', weight: 4 },
        { keyword: 'or', weight: 3 },
        { keyword: 'compromised', weight: 5 },
        { keyword: 'urgent', weight: 5 },
        { keyword: 'verify', weight: 4 },
        { keyword: 'confirm', weight: 4 },
        { keyword: 'suspension', weight: 4 },
        { keyword: 'termination', weight: 4 },
        { keyword: 'update', weight: 4 },
        { keyword: 'security', weight: 5 },
        { keyword: 'unusual', weight: 5 },
        { keyword: 'login', weight: 5 },
        { keyword: 'breach', weight: 5 },
        { keyword: 'unauthorized', weight: 5 },
        { keyword: 'change', weight: 4 },
        { keyword: 'reset', weight: 4 },
        { keyword: 'locked', weight: 5 },
        { keyword: 'validate', weight: 4 },
        { keyword: 'suspicious', weight: 5 },
        { keyword: 'immediate', weight: 5 },
        { keyword: 'limited', weight: 3 },
        { keyword: 'exclusive', weight: 3 },
        { keyword: 'free', weight: 3 },
        { keyword: 'claim', weight: 3 },
        { keyword: 'lottery', weight: 3 },
        { keyword: 'winner', weight: 3 },
        { keyword: 'congratulations', weight: 3 },
        { keyword: 'selected', weight: 3 },
        { keyword: 'promotion', weight: 3 },
        { keyword: 'stock', weight: 3 },
        { keyword: 'act', weight: 3 },
        { keyword: 'miss', weight: 3 },
        { keyword: 'click', weight: 3 },
        // Additional keywords
        { keyword: 'phishing', weight: 5 },
        { keyword: 'fraud', weight: 5 },
        { keyword: 'spoofing', weight: 5 },
        { keyword: 'account', weight: 4 },
        { keyword: 'request', weight: 5 },
        { keyword: 'notice', weight: 4 },
        { keyword: 'payment', weight: 4 },
        { keyword: 'shipping', weight: 4 },
        { keyword: 'invoice', weight: 4 },
        { keyword: 'refund', weight: 4 },
        { keyword: 'overdue', weight: 5 },
        { keyword: 'action', weight: 5 },
        { keyword: 'update', weight: 4 },
        { keyword: 'purchase', weight: 4 },
        { keyword: 'alert', weight: 4 },
        { keyword: 'identity', weight: 4 },
        { keyword: 'activity', weight: 5 },
        { keyword: 'blocked', weight: 5 },
        { keyword: 'expired', weight: 4 },
        { keyword: 'suspicious', weight: 5 },
        { keyword: 'attempt', weight: 5 },
        { keyword: 'settings', weight: 4 },
        { keyword: 'verify', weight: 4 },
        { keyword: 'subscription', weight: 4 },
        { keyword: 'details', weight: 4 },
        { keyword: 'validate', weight: 4 },
        { keyword: 'account', weight: 4 },
        { keyword: 'login', weight: 4 },
        { keyword: 'reset', weight: 4 },
        { keyword: 'password', weight: 4 },
        { keyword: 'confirm', weight: 4 },
        { keyword: 'update', weight: 4 },
        { keyword: 'security', weight: 5 },
        { keyword: 'secure', weight: 5 },
        { keyword: 'now', weight: 5 },
        { keyword: 'click', weight: 5 },
        // Add more keywords as needed
    ];

    const emailBodyLower = emailBody.toLowerCase();
    let phishingScore = 0;

    // Check for presence of phishing keywords and calculate score
    phishingKeywords.forEach(entry => {
        if (emailBodyLower.includes(entry.keyword)) {
            phishingScore += entry.weight;
        }
    });

    // Set threshold for determining likelihood of phishing
    const phishingThreshold = 10; // Adjust as needed

    // Provide qualitative message based on phishing score
    const isPhishing = phishingScore >= phishingThreshold;

    return isPhishing ? "This message is likely to be phishing/spam." : "This message is not likely to be spam.";
}

// Function to play alert sound
function playAlertSound() {
    const alertSound = new Audio('alert.mp3'); // Path to your alert sound file
    alertSound.play();
}
// Array of tips of the day
const tipsOfTheDay = [
    "Be cautious of emails requesting urgent action or sensitive information. Legitimate organizations typically do not ask for such details via email.",
    "Always verify the sender's email address before clicking on any links or downloading attachments.",
    "Check for spelling and grammar mistakes in emails, as these can often indicate phishing attempts.",
    "Hover over links in emails to see the actual URL before clicking on them.",
    // Add more tips as needed
];

// Function to randomly select a tip from the array
function getRandomTip() {
    const randomIndex = Math.floor(Math.random() * tipsOfTheDay.length);
    return tipsOfTheDay[randomIndex];
}

// Function to display the randomly selected tip
function displayRandomTip() {
    const tipElement = document.getElementById('tipOfTheDay');
    tipElement.innerHTML = `<h2>Tip of the Day</h2><p>${getRandomTip()}</p>`;
}

// Call the function to display a random tip when the popup is loaded
displayRandomTip();




document.addEventListener('DOMContentLoaded', function() {
    const testButton = document.getElementById('testButton');
    const aboutButton = document.getElementById('aboutButton');
    const howToUseButton = document.getElementById('howToUseButton'); // Get the "How to Use" button

    if (testButton && aboutButton && howToUseButton) {
        testButton.addEventListener('click', function() {
            // Your existing code for testing phishing likelihood
        });

        aboutButton.addEventListener('click', function() {
            // Open a new popup window with the About section
            const aboutWindow = window.open('about.html', 'About PhishArmor', 'width=600,height=400');
            // Adjust width and height as needed
        });

        howToUseButton.addEventListener('click', function() {
            // Open a new popup window with the How to Use section
            const howToUseWindow = window.open('howtouse.html', 'How to Use PhishArmor', 'width=600,height=400');
            // Adjust width and height as needed
        });
    } else {
        console.error('Buttons not found.');
    }
});


// Function to handle button click
// Function to handle button click
document.addEventListener('DOMContentLoaded', function() {
    const testButton = document.getElementById('testButton');
    if (testButton) {
        testButton.addEventListener('click', function() {
            // Extract email body from textarea
            const emailBody = document.getElementById('emailBody').value.trim(); // Trim whitespace

            // Check if input is empty
            if (emailBody === '') {
                // Show message that the box cannot be empty
                displayMessage("Email body cannot be empty.");
                return; // Exit function
            }

            // Perform phishing likelihood check
            const message = checkPhishingLikelihood(emailBody);

            // Play alert sound if message is phishing
            if (message.includes("phishing")) {
                playAlertSound();
            }

            // Display the phishing likelihood message
            displayMessage(message);
        });
    } else {
        console.error('Button not found.');
    }
});

// Function to display a message on the page
function displayMessage(message) {
    const popup = document.createElement('div');
    popup.textContent = message;
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.padding = '20px';
    popup.style.borderRadius = '5px'; // Rounded corners
    popup.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'; // Shadow effect
    popup.style.zIndex = '9999';

    // Change styles based on message content
    if (message.includes("phishing")) {
        popup.style.backgroundColor = '#ff4444'; // Red background color
        popup.style.color = '#ffffff'; // White font color
        popup.style.border = '2px solid #ff4444'; // Red border
    } else {
        popup.style.backgroundColor = '#4caf50'; // Green background color
        popup.style.color = '#ffffff'; // White font color
        popup.style.border = '2px solid #4caf50'; // Green border
    }

    document.body.appendChild(popup);

    // Remove popup after 3 seconds
    setTimeout(() => {
        popup.remove();
    }, 3000);
}


