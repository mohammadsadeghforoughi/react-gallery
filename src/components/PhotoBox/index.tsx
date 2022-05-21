import React, { FC } from 'react'
import './style.scss'

const PhotoBox: FC = (props) => {
    return (
        <React.Fragment>
            <div className="box">
                <img src="https://dummyimage.com/673x331.png/ff4444/ffffff" />
            </div>
        </React.Fragment>
    )
}

export default PhotoBox
