import React from 'react'
import { cleanup, render } from '@testing-library/react'
import PhotoBox, { IPhotoBox as Props } from '../components/PhotoBox'

describe('PhotoBox Component', () => {
    afterEach(() => {
        cleanup()
    })

    it('Should load image by provided image', async () => {
        const { findByTestId } = renderPhotoBox({ data: sampleData })
        const PhotoBox_div = await findByTestId('box')
        let some_exepted_css = `backgroundImage: url(${sampleData.image})`
        expect(PhotoBox_div).toHaveStyle(some_exepted_css)
    })

    it('Should load title by provided title', async () => {
        const { findByTestId } = renderPhotoBox({ data: sampleData })
        const PhotoBox_div = await findByTestId('box')
        let some_exepted_title = sampleData.title
        expect(PhotoBox_div).toHaveTextContent(some_exepted_title)
    })

    it('Should load empty title by passing empty title', async () => {
        const { findByTestId } = renderPhotoBox({
            data: {
                description: '',
                id: 1,
                image: '',
                title: '',
            },
        })
        const PhotoBox_div = await findByTestId('box')
        let some_exepted_title = ''
        expect(PhotoBox_div).toHaveTextContent(some_exepted_title)
    })
})

function renderPhotoBox(props: Props) {
    return render(<PhotoBox data={props.data} />)
}

let sampleData = {
    description: 'Efbb olhr pdateyiv rs coyxrqnc zrrmjtmlcn bcrgz 61 lxxlb',
    id: 6,
    image: 'http://dummyimage.com/1422x343.png/5fa2dd/ffffff',
    title: 'Sanyang',
}
