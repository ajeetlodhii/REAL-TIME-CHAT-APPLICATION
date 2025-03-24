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