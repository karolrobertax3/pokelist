import axios from "axios"

const api =  axios.create({

    baseURL:'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20'
})


export default api