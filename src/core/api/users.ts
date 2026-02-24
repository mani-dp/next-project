import axios from "axios"
import { Iusers } from "../type/Iusers"

const getusers = async(): Promise<Iusers[]> => {
    const response = await axios.get('https://699a1bde377ac05ce28d42bd.mockapi.io/dataUsers')
   
    return response.data;
}

export default getusers


// functional////************* */

// export default async function getusers() {
//     const response = await axios.get<Iusers[]>('https://699a1bde377ac05ce28d42bd.mockapi.io/dataUsers')

//     return response.data;
// }
