
import axios from "axios"
export const praticiens = []
const urlBase = "http://localhost:3020"
export const getPraticiens = () => {
    
    return axios.get(`${urlBase}/praticiens`)

}
let compteurPraticien = 1

export const ajouterPraticien = (praticien) => {
   
return axios.post(`${urlBase}/praticien`, {...praticien})
}

export const search = (filtre) => {
    

    return axios.get(`${urlBase}/praticiens/${filtre}`)
}

export const getPraticienById = (id) => {

    return axios.get(`${urlBase}/praticien/${id}`)
}


export let compte = []

export const prendreunRdv = (id) => {
    if(!rdvDejaPris(id)) {
        const praticien = praticiens.find(p=> p.id == id)
        compte.push(praticien)
    }
}

export const annulerUnRdv = (id) => {
    compte = compte.filter(p => p.id != id)
}

export const rdvDejaPris = (id) => {
    const praticien = compte.find(p => p.id == id)
    return praticien != undefined
}
const users = [{login : 'formation', password : '0000'}]
export let isLogged = false
export const login = (login, password) => {
    const u = users.find(l => l.login == login && l.password == password)
 
    return u != undefined
}
export const changeIsLogged = (log) => {
    isLogged = log
}