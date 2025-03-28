const express = require('express');
const axios = require('axios');
const cors = require('cors');
const qs = require('querystring');
require('dotenv').config();
const PORT = process.env.PORT || 5001;


const app = express();
app.use(cors());
app.use(express.json());

const REDIRECT_URI = 'http://localhost:5001/callback';

app.get('/login', (req, res) => {
    console.log('🔁 Hit /login route');
    console.log('CLIENT_ID:', process.env.CLIENT_ID);
  
    const scope = 'playlist-modify-public playlist-modify-private';
    const queryParams = new URLSearchParams({
        response_type: 'code',
        client_id: process.env.CLIENT_ID,
        scope,
        redirect_uri: REDIRECT_URI,
        show_dialog: 'true',
      });
      
  
    const redirectUrl = `https://accounts.spotify.com/authorize?${queryParams.toString()}`;
    console.log('Redirecting to:', redirectUrl);
  
    res.redirect(redirectUrl);
  });
  

  app.get('/callback', async (req, res) => {
    const code = req.query.code;
  
    try {
      const response = await axios.post(
        'https://accounts.spotify.com/api/token',
        new URLSearchParams({
          code,
          redirect_uri: REDIRECT_URI,
          grant_type: 'authorization_code',
        }),
        {
          headers: {
            Authorization: 'Basic ' + Buffer.from(
              process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET
            ).toString('base64'),
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );
  
      const access_token = response.data.access_token;
  
      // ✅ Redirect to /mood with access_token in query string
      res.redirect(`http://localhost:3000/mood?access_token=${access_token}`);
    } catch (err) {
      console.error('Error during token exchange:', err.response?.data || err);
      res.send('Authentication failed.');
    }
  });
  
  
  

app.listen(5001, () => {
  console.log('Server running on http://localhost:5001');
});
