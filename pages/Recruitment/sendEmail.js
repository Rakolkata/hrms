const sendEmail = async () => {
    const res = await fetch("/api/sendMail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: "candidate@example.com",
        subject: "Interview Invite",
        text: "You're invited for an interview",
        html: "<h3>You're invited for an interview</h3><p>Join via Google Meet at 3PM.</p>",
      }),
    });
  
    const data = await res.json();
    console.log(data);
  };
  