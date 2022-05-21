import React, { FC } from 'react'
import './style.scss'

interface IPhotoBox {
    data: {
        image: string
    }
}

const PhotoBox: FC<IPhotoBox> = (props) => {
    return (
        <React.Fragment>
            <div
                className="box"
                style={{ backgroundImage: `url(${props.data.image})` }}
            >
                test
            </div>
        </React.Fragment>
    )
}

export default PhotoBox
