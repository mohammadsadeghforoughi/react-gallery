import React, { useEffect, useState } from 'react'
import PhotoBox from '../../components/PhotoBox'
import PhotoModalSlider from '../../components/PhotoModalSlider'
import { IImagesList, _FetchImagesList } from '../../services'
import './style.scss'
function Home() {
    const [ImageList, setImageList] = useState<Array<IImagesList>>([])
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
    const [selectedImageID, setSelectedImageID] = useState<number>(1)
    useEffect(() => {
        _FetchImagesList().then((res) => {
            setImageList(res)
        })
    }, [])
    return (
        <React.Fragment>
            <div className="container">
                {ImageList.map((i) => {
                    return (
                        <div
                            className="items"
                            onClick={() => {
                                setModalIsOpen(true)
                                setSelectedImageID(i.id)
                            }}
                        >
                            <PhotoBox data={i} />
                        </div>
                    )
                })}
            </div>
            <PhotoModalSlider
                ImageList={ImageList}
                selectedImage={selectedImageID}
                isOpen={modalIsOpen}
                closeModal={() => {
                    setModalIsOpen(false)
                }}
            />
        </React.Fragment>
    )
}

export default Home
