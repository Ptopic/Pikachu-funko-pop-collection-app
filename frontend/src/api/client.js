import axios from 'axios';

const client = axios.create({
	baseURL: 'https://pikachu-backend.onrender.com/api',
});

export default client;
