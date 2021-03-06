import React, { FC } from 'react'
import { IImagesList } from '../../types'
import './style.scss'

export interface IPhotoBox {
    data: IImagesList
}

const PhotoBox: FC<IPhotoBox> = (props) => {
    return (
        <React.Fragment>
            <div
                data-testid="box"
                className="box"
                style={{ backgroundImage: `url(${props.data.image})` }}
            >
                {props.data.title}
            </div>
        </React.Fragment>
    )
}

export default PhotoBox
