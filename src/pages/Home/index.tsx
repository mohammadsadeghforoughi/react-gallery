import React, { useEffect, useState } from 'react'
import PhotoBox from '../../components/PhotoBox'
import PhotoModalSlider from '../../components/PhotoModalSlider'
import { _FetchImagesList } from '../../services'
import { IImagesList } from '../../types'
import './style.scss'

function Home() {
    const [ImageList, setImageList] = useState<Array<IImagesList>>([])
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
    const [selectedImageID, setSelectedImageID] = useState<number>(0)

    const handleFetchData = () => {
        _FetchImagesList().then((res) => {
            setImageList(res)
        })
    }

    useEffect(() => handleFetchData(), []) // get data for first time

    React.useEffect(() => {
        // get data in interval for changes
        const timer = setInterval(
            () => handleFetchData,
            60 * 1000 * 1 // every one minute
        )
        return () => clearInterval(timer)
    })

    return (
        <React.Fragment>
            <div className="container">
                {ImageList.map((image, index) => {
                    return (
                        <div
                            key={`items-${index}`}
                            className="items"
                            onClick={() => {
                                setModalIsOpen(true)
                                setSelectedImageID(image.id)
                            }}
                        >
                            <PhotoBox key={`PhotoBox-${index}`} data={image} />
                        </div>
                    )
                })}
            </div>
            <PhotoModalSlider
                ImageList={ImageList}
                selectedImageID={selectedImageID}
                isOpen={modalIsOpen}
                closeModal={() => {
                    setModalIsOpen(false)
                }}
            />
        </React.Fragment>
    )
}

export default Home
