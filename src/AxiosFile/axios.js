import axios from 'axios';

const API = axios.create({
	baseURL: 'http://www.mocky.io/v2/'
});

export default API;