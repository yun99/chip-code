document.addEventListener("DOMContentLoaded", function() {
    var notifyBtn = document.getElementById("notify-btn");
    notifyBtn.addEventListener("click", function() {
      var options = {
        type: "basic",
        title: "My First Notification",
        message: "This is my first notification from my Chrome extension.",
        iconUrl: "icon.png"
      };
      chrome.notifications.create(options, function() {});
    });
  });
