document.addEventListener("DOMContentLoaded", function () {
    // Get elements
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const notificationsToggle = document.getElementById("notifications-toggle");
    const soundToggle = document.getElementById("sound-toggle");
    const readReceiptsToggle = document.getElementById("read-receipts");
    const lastSeenToggle = document.getElementById("last-seen");
    const twoFactorAuthToggle = document.getElementById("two-factor-auth");
    const saveSettingsBtn = document.getElementById("save-settings");
    const changePasswordBtn = document.getElementById("change-password");
    const deleteAccountBtn = document.getElementById("delete-account");

    // Load saved settings from localStorage
    function loadSettings() {
        darkModeToggle.checked = localStorage.getItem("darkMode") === "enabled";
        notificationsToggle.checked = localStorage.getItem("notifications") === "enabled";
        soundToggle.checked = localStorage.getItem("sound") === "enabled";
        readReceiptsToggle.checked = localStorage.getItem("readReceipts") === "enabled";
        lastSeenToggle.checked = localStorage.getItem("lastSeen") === "enabled";
        twoFactorAuthToggle.checked = localStorage.getItem("twoFactorAuth") === "enabled";

        // Apply dark mode if enabled
        if (darkModeToggle.checked) {
            document.body.classList.add("dark-mode");
        }
    }

    loadSettings();

    // Save settings to localStorage
    saveSettingsBtn.addEventListener("click", function () {
        localStorage.setItem("darkMode", darkModeToggle.checked ? "enabled" : "disabled");
        localStorage.setItem("notifications", notificationsToggle.checked ? "enabled" : "disabled");
        localStorage.setItem("sound", soundToggle.checked ? "enabled" : "disabled");
        localStorage.setItem("readReceipts", readReceiptsToggle.checked ? "enabled" : "disabled");
        localStorage.setItem("lastSeen", lastSeenToggle.checked ? "enabled" : "disabled");
        localStorage.setItem("twoFactorAuth", twoFactorAuthToggle.checked ? "enabled" : "disabled");
        alert("Settings Saved!");
    });

    // Toggle dark mode instantly
    darkModeToggle.addEventListener("change", function () {
        document.body.classList.toggle("dark-mode", darkModeToggle.checked);
    });

    // Change password functionality (dummy action)
    changePasswordBtn.addEventListener("click", function () {
        let newPassword = prompt("Enter your new password:");
        if (newPassword) {
            alert("Password changed successfully!");
        }
    });

    // Delete account confirmation
    deleteAccountBtn.addEventListener("click", function () {
        let confirmDelete = confirm("Are you sure you want to delete your account? This action cannot be undone.");
        if (confirmDelete) {
            alert("Account deleted successfully!");
            // You can add further logic here to handle account deletion
        }
    });
});
