import React, { FC } from 'react'
import { IImagesList } from '../../types'
import './style.scss'

interface IPhotoBox {
    data: IImagesList
}

const PhotoBox: FC<IPhotoBox> = (props) => {
    return (
        <React.Fragment>
            <div
                className="box"
                style={{ backgroundImage: `url(${props.data.image})` }}
            >
                {props.data.title}
            </div>
        </React.Fragment>
    )
}

export default PhotoBox
