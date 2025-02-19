const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  try {
    db.getUser(userId, (err, user) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch user' });
      } else if (!user) {
        res.status(404).json({ error: 'User not found' });
      } else {
        res.json(user);
      }
    });
  } catch (error) {
    console.error('Unexpected error:', error);
    res.status(500).json({ error: 'An unexpected error occurred' });
  }
});