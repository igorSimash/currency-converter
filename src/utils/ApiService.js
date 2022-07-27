import axios from "axios";

export default class ApiService {
    static async getCurrency(from, to){
        const res = await axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}/${to}.json`);
        return res.data
    }
}