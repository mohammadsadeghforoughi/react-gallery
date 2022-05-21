import axios from 'axios'
const BASE_URL = 'https://apimocha.com/bearbulltraders/api'

const instance = axios.create({
    baseURL: BASE_URL,
})

interface IImagesList {
    id: number
    title: string
    description: string
    image: string
}

const _FetchImagesList = async (): Promise<IImagesList[]> => {
    let images = await instance.get('')
    return images.data
}

export { _FetchImagesList }
export type { IImagesList }
