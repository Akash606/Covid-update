import axios from 'axios';

const Axios = axios.create(
    {
        baseURL: "https://data.nepalcorona.info"
    }
)

export default Axios;