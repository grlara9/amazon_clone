import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'https://localhost:5000/challenge-4b2b2/us-central1/api'
    
});

export default instance;
