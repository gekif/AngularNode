const express = require('express');
const path = require('path');

const app = express();

// Getting our POSTS routes
const posts = require('./server/routes/posts');

// Using middleware
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/posts', posts);

// Catch all other routes request and return it to index
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


const port = process.env.PORT || 4600;

app.listen(port, (req, res) => {
  console.log(`RUNNING on port ${port}`);
});
