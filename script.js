function newsletterPrompt() {
  setTimeout(function () {
    const email = prompt(
      "Enter your email address to subscribe to our newsletter:"
    );

    if (email) {
      sendEmail(email);
      alert(`Thank you! You have subscribed with the email ${email}`);
    } else {
      alert(
        "You didn't want to subscribe, no problem! We're here whenever you need us."
      );
    }
  }, 2000);
}

function sendEmail(email) {
  fetch("https://your-backend-server.com/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      to: "ck.cigdemkorkmaz@gmail.com",
      subject: "New Newsletter Subscription",
      message: `A new user subscribed with the email: ${email}`,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log("Email sent successfully:", data))
    .catch((error) => console.error("Error sending email:", error));
}
