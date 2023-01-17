import axios from 'axios'

const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImludF9hcG9udGFtZW50b3MiLCJuYmYiOjE2NzM5MjQyNjYsImV4cCI6MTY3MzkyNzg2NiwiaWF0IjoxNjczOTI0MjY2fQ.cU5l4Guap3Kz8VJmTm7CcDhUO-rjFEJoWL-m4j1lIwU'

const api = axios.create({
    baseURL: 'https://barramentoatvos-dev.azurewebsites.net/api/',
    headers: {
        'Authorization': `Bearer ${TOKEN}`
    }
})

export { api }