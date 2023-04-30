import axios from "axios";

const search = async (query) =>
        axios.get(`https://api.rawg.io/api/games?search=${query}&key=16a39185eb9849f7807a5d112e0d06c8`)

export default {search}