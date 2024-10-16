const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.send(
    `<form action="/login" method="POST">
    <input type="text" id="username" name="username" required>
    <button type="submit">Login</button>
    </form>
    <script>
    document.querySelector('form').addEventListener('submit', () => {
        localStorage.setItem('username', document.querySelector('#username').value);
    });
    </script>`
  );
});

router.post("/login", (req, res) => {
  res.redirect("/");
});

module.exports = router;
