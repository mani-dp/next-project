import { Iusers } from '@/core/type/Iusers';
// import axios from "axios"
// import { Iusers } from "../type/Iusers"

import axios from "axios"
import { FC } from 'react';


const getusers = async(): Promise<Iusers[]> => {
    const response = await axios.get('https://699a1bde377ac05ce28d42bd.mockapi.io/dataUsers')

    return response.data;
}

export default getusers


