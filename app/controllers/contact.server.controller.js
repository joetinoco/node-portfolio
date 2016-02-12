/*
  "Contact" controller
  ==================

  Serves the contact layout and the feedback for form submission.
  Also handles the form POST request and email transmission.

*/

// Serve the contact form
exports.render = function(req, res){
  var response = undefined;
  if (typeof req.query.success !== 'undefined'){
    response = {};
    response.success = req.query.success;
    console.log(req.query.success);
  }
  res.render('contact', { response: response });
};

// Contact form POST request handler
exports.submit = function(req, res){
  var nodemailer = require('nodemailer');

  // Configure the SMTP mailer
  var mailer = nodemailer.createTransport({
    host: 'mail.josetinoco.com',
    port: 465,
    secure: true, // use SSL
    tls: {
        rejectUnauthorized: false // ...but pretend it's safe
    },
    auth: {
        user: "contact@josetinoco.com",
        pass: "VxUekK-x"
    },
    pool: true, // Use a pooled connection
    rateLimit: 1, // Maximum 1 message/second
    maxMessages: 2 // Maximum 2 messages per SMTP connection
  });

  // Set up mail contents
  var mailContent = {
      from: req.body.name + ' <' + req.body.email + '>',
      to: 'jose.tinoco@gmail.com',
      subject: 'josetinoco.com Contact Request',
      text: req.body.message
  };

  // Send mail (only in the production environment)
  if (process.env.NODE_ENV === 'development'){
    res.redirect("/contact?success=true");
  } else {
    mailer.sendMail(mailContent, function (error, response) {
        var success;
        if (error){
          console.log(error);
          success = false;
        } else {
          success = true;
        }
        res.redirect("/contact?success=" + success);
    });
  }

};
