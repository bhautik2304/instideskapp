import axios from 'axios';

export default Api=axios.create({
        baseURL: 'http://localhost:800/api/',
    })
