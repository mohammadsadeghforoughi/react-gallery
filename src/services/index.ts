import axios from 'axios'
import { IImagesList } from '../types'
const BASE_URL =
    process.env.REACT_APP_BASE_URL || 'https://apimocha.com/bearbulltraders/api'

const instance = axios.create({
    baseURL: BASE_URL,
})

const _FetchImagesList = async (): Promise<IImagesList[]> => {
    let images = await instance.get('')
    return images.data
}

export { _FetchImagesList }
