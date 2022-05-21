import React, { useEffect, useState } from 'react'
import PhotoBox from '../../components/PhotoBox'
import { IImagesList, _FetchImagesList } from '../../services'
import './style.scss'
function Home() {
    const [ImageList, setImageList] = useState<Array<IImagesList>>([])
    useEffect(() => {
        _FetchImagesList().then((res) => {
            setImageList(res)
        })
    }, [])
    return (
        <div className="container">
            {ImageList.map((i) => {
                return (
                    <div className="items">
                        <PhotoBox data={i} />
                    </div>
                )
            })}
        </div>
    )
}

export default Home
