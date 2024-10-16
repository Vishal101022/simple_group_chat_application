const express = require("express");
const data = [];
const router = express.Router();

router.get(`/`, (req, res, next) => {
  let messagesHtml = data.map((msg) => `<h5>${msg}</h5>`).join("");

  res.send(`
    ${messagesHtml}
    <form action="/" onsubmit="document.getElementById('username').value=localStorage.getItem('username')" method="POST">
      <input id="message" name="message" type="text" placeholder="message">
      <input type="hidden" name="username" id="username">
      <button type="submit">Send</button>
    </form>
  `);
});

router.post(`/`, (req, res, next) => {
  data.push(`${req.body.username}: ${req.body.message}`);
  console.log(data);
  res.redirect(`/`);
});

module.exports = router;
