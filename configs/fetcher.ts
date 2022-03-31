import axios from "axios";


const baseUrl = 'https://api.spacexdata.com/v3'

const fetcher = axios.create({
    baseURL: baseUrl,
})

export default fetcher;