import axios from 'axios';
export const api = (url, method) => {

    const request = axios({
        method,
        url,
        headers: {
            'Accept': 'application/json',
            'X-Auth-Token': '6c00d18b478340f5ad9f6ff2d3873c91'
        }
    })

    return request
}
