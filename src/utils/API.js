class APIClass {
    constructor() {
        if (!APIClass.instance) {
            this.API_URL = "http://localhost:3000/";
            APIClass.instance = this;
        }
        return APIClass.instance;
    }

    async get(url, body = null) {
        let query = ''
        if (body) {
            query = this.paramsToURLParams(body)
        }
        return this.execute(`${url}?${query}`, 'GET')
    }

    paramsToURLParams(params, mainProp = '') {
        return Object.keys(params).map(prop => {
            let query = ''
            if (typeof params[prop] === 'object' && params[prop]) {
                query = this.paramsToURLParams(params[prop], prop)
            } else {
                if (mainProp) {
                    query = `${mainProp}[${prop}]=${params[prop]}`
                } else {
                    query = `${prop}=${params[prop]}`
                }
            }
            return query
        }).join('&')
    }
    
    async post(url, body = null) {
        return this.execute(url, 'POST', body)
    }
    
    async put(url, body = null) {
        return this.execute(url, 'PUT', body)
    }
    
    async patch(url, body = null) {
        return this.execute(url, 'PATCH', body)
    }
    
    async delete(url, body = null) {
        return this.execute(url, 'DELETE', body)
    }
    
    async execute(url, method, body) {
        let options = {
            method,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }
        }
        if (method) {
            options = {
                ...options,
                body: JSON.stringify(body)
            }
        }
        return fetch(`${this.API_URL}${url}`, options)
    }
}

export const API = new APIClass();

export default APIClass
