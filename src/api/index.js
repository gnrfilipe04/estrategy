import axios from 'axios'

const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImludF9hcG9udGFtZW50b3MiLCJuYmYiOjE2NzM4MzY0MzgsImV4cCI6MTY3Mzg0MDAzOCwiaWF0IjoxNjczODM2NDM4fQ.JWw88ScvyGSP8WNpOF45UbniY-csYicDCHnZU8JrkQU'

const api = axios.create({
    baseURL: 'https://barramentoatvos-dev.azurewebsites.net/api/',
    headers: {
        'Authorization': `Bearer ${TOKEN}`
    }
})

export { api }