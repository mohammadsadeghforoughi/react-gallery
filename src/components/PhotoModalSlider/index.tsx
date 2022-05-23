import React, { FC, useEffect, useState } from 'react'
import ExitSvg from '../../assets/exit.svg'
import ArrowLeft from '../../assets/arrow-left.svg'
import './style.scss'
import { IImagesList } from '../../services'

interface IPhotoModalSlider {
    isOpen: boolean
    closeModal: () => void
    selectedImage: any
    ImageList: IImagesList[]
}

const initiatedState = {
    id: 0,
    title: '',
    description: '',
    image: '',
}
const PhotoModalSlider: FC<IPhotoModalSlider> = (props) => {
    const [currentImage, setCurrentImage] =
        useState<IImagesList>(initiatedState)
    const [imageID, setImageID] = useState<number>(props.selectedImage)

    useEffect(() => {
        setImageID(props.selectedImage)
    }, [props.selectedImage])

    useEffect(() => {
        setCurrentImage(
            props.ImageList.find((i) => i.id == imageID) || initiatedState
        )
    }, [imageID])

    const handleCloseModal = () => {
        props.closeModal()
    }

    const handleNextImage = () => {
        let currentImageIndex = props.ImageList.findIndex(
            (i) => i.id == imageID
        )
        if (currentImageIndex + 1 != props.ImageList.length) {
            let nextImage = props.ImageList[currentImageIndex + 1]
            setImageID(nextImage.id)
        }
    }

    const handlePrevImage = () => {
        let currentImageIndex = props.ImageList.findIndex(
            (i) => i.id == imageID
        )
        if (currentImageIndex != 0) {
            let prevImage = props.ImageList[currentImageIndex - 1]
            setImageID(prevImage.id)
        }
    }
    return (
        <React.Fragment>
            <div
                className={`modal-container ${
                    props.isOpen ? 'modal-show' : ''
                }`}
            >
                <div
                    className={`modal-body ${
                        props.isOpen ? 'modal-body-show' : ''
                    }`}
                >
                    <div className="modal-overlay">
                        <div
                            className="exit-modal-button"
                            onClick={handleCloseModal}
                        >
                            <img src={ExitSvg} />
                        </div>

                        <div className="modal-text">
                            <div className="modal-title">
                                {currentImage.title}
                            </div>
                            <div>{currentImage.description}</div>
                        </div>
                        <div className="controller-modal-button">
                            <img onClick={handlePrevImage} src={ArrowLeft} />
                            <img
                                onClick={handleNextImage}
                                className="right-arrow"
                                src={ArrowLeft}
                            />
                        </div>
                    </div>
                    <img src={currentImage.image} />
                </div>
            </div>
        </React.Fragment>
    )
}

export default PhotoModalSlider
