document.addEventListener("DOMContentLoaded", function() {
    const logoutBtn = document.getElementById("logout-btn");
    const messageInput = document.getElementById("message-input");
    const sendBtn = document.getElementById("send-btn");
    const chatMessages = document.getElementById("chat-messages");
    const clearChatBtn = document.getElementById("clear-chat");
    const themeToggle = document.getElementById("theme-toggle");
    const searchMessages = document.getElementById("search-messages");
    const notificationsToggle = document.getElementById("notifications-toggle");
    const attachFile = document.getElementById("attach-file");
    const emojiPicker = document.getElementById("emoji-picker");
    const voiceMessage = document.getElementById("voice-message");
    const videoCall = document.getElementById("video-call");
    const groupChat = document.getElementById("group-chat");
    const usersList = document.getElementById("users");
    const blockUserBtn = document.getElementById("block-user");
    const deleteChatBtn = document.getElementById("delete-chat");
    const reportUserBtn = document.getElementById("report-user");
    
    let notificationsEnabled = true;
    let activeUsers = ["Alice", "Bob", "Charlie", "David"];
    let userName = "You"; // Change dynamically if needed
    
    // Logout Functionality
    logoutBtn.addEventListener("click", function() {
        alert("You have been logged out!");
        window.location.href = "login.html";
    });

    // Send Message Functionality
    sendBtn.addEventListener("click", function() {
        const messageText = messageInput.value.trim();
        if (messageText !== "") {
            const messageElement = document.createElement("div");
            messageElement.classList.add("chat-message");
            
            const nameElement = document.createElement("span");
            nameElement.textContent = userName + ": ";
            nameElement.style.fontWeight = "bold";
            nameElement.style.color = "#00bfff";
            
            messageElement.appendChild(nameElement);
            messageElement.appendChild(document.createTextNode(messageText));
            chatMessages.appendChild(messageElement);
            messageInput.value = "";
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    });
    
    // Clear Chat
    clearChatBtn.addEventListener("click", function() {
        chatMessages.innerHTML = "";
    });
    
    // Toggle Dark Mode
    themeToggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
        themeToggle.textContent = document.body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
    });
    
    // Search Messages
    searchMessages.addEventListener("click", function() {
        let searchText = prompt("Enter text to search:");
        if (searchText) {
            let messages = chatMessages.querySelectorAll("div");
            messages.forEach(msg => {
                msg.style.backgroundColor = msg.textContent.toLowerCase().includes(searchText.toLowerCase()) ? "yellow" : "";
            });
        }
    });
    
    // Toggle Notifications
    notificationsToggle.addEventListener("click", function() {
        notificationsEnabled = !notificationsEnabled;
        notificationsToggle.textContent = notificationsEnabled ? "🔔 Notifications On" : "🔕 Notifications Off";
        alert(`Notifications ${notificationsEnabled ? "enabled" : "disabled"}`);
    });
    
    // Attach File
    attachFile.addEventListener("click", function() {
        alert("File attachment feature coming soon!");
    });
    
    // Emoji Picker
    emojiPicker.addEventListener("click", function() {
        messageInput.value += " 😊";
    });
    
    // Voice Message
    voiceMessage.addEventListener("click", function() {
        alert("Voice message recording started!");
    });
    
    // Video Call
    videoCall.addEventListener("click", function() {
        alert("Starting a video call...");
    });
    
    // Group Chat
    groupChat.addEventListener("click", function() {
        alert("Creating a group chat...");
    });
    
    // Function to Update Users List
    function updateUsers() {
        usersList.innerHTML = "";
        activeUsers.forEach(user => {
            let li = document.createElement("li");
            li.textContent = user;
            li.classList.add("user-item");
            li.addEventListener("click", function() {
                alert(`You clicked on ${user}`);
            });
            usersList.appendChild(li);
        });
    }
    
    // Simulate User Joining and Leaving
    setTimeout(() => {
        activeUsers.push("Emma");
        updateUsers();
        alert("Emma has joined the chat!");
    }, 3000);
    
    setTimeout(() => {
        activeUsers.pop();
        updateUsers();
        alert("A user has left the chat.");
    }, 6000);
    
    updateUsers(); // Initial population of users
    
    // Block User Functionality
    blockUserBtn.addEventListener("click", function() {
        let userToBlock = prompt("Enter the username to block:");
        if (userToBlock) {
            alert(`${userToBlock} has been blocked!`);
        }
    });
    
    // Delete Chat Functionality
    deleteChatBtn.addEventListener("click", function() {
        if (confirm("Are you sure you want to delete this chat?")) {
            chatMessages.innerHTML = "";
            alert("Chat has been deleted.");
        }
    });
    
    // Report User Functionality
    reportUserBtn.addEventListener("click", function() {
        let userToReport = prompt("Enter the username to report:");
        if (userToReport) {
            alert(`${userToReport} has been reported!`);
        }
    });
});