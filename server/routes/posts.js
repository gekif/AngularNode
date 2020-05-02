const express = require('express');
const router = express.Router();

const axios = require('axios');
const PostAPI = 'https://jsonplaceholder.typicode.com';


// GET POST
router.get('/', (req, res) => {
  axios.get(`${PostAPI}/posts`).then(posts => {
    res.status(200).json(posts.data);
  })
    .catch(err => res.status(500).send(err));
});


module.exports = router;
