// Initialize EmailJS with your User ID
//service_4tf9412
emailjs.init("service_4tf9412");

function sendMail() {
  const templateParams = {
    to_email_1: "mahmudulmidul@gmail.com",
    to_email_2: "maksudabegum196@gmail.com", 
    subject: "Emergency SOS",
    message: "This is an SOS message. Please respond immediately."
  };

  const serviceID = "service_4tf9412";
  const templateID = "template_7ks7xmi";


  emailjs.send(serviceID, templateID, templateParams)
    .then(function(response) {
      alert("SOS emails sent successfully!");
    }, function(error) {
      alert("Failed to send SOS emails. Please try again.");
    });
}


