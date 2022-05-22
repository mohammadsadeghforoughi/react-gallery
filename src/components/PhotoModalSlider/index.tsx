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

    useEffect(() => {
        setCurrentImage(
            props.ImageList.find((i) => i.id == props.selectedImage) ||
                initiatedState
        )
    }, [props.selectedImage])
    return (
        <React.Fragment>
            <div className={`modal-container ${props.isOpen && 'modal-show'}`}>
                <div className="modal-body">
                    <div className="modal-overlay">
                        <div
                            className="exit-modal-button"
                            onClick={() => {
                                props.closeModal()
                            }}
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
                            <img src={ArrowLeft} />
                            <img className="right-arrow" src={ArrowLeft} />
                        </div>
                    </div>
                    <img src={currentImage.image} />
                </div>
            </div>
        </React.Fragment>
    )
}

export default PhotoModalSlider
