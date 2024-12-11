import classNames from 'classnames/bind'
import React, { ReactEventHandler } from 'react'

import NoClothesImg from '@/assets/images/no-clothes.jpg'

import styles from './ClothesImage.module.scss'

const cx = classNames.bind(styles)

interface IClothesImageProps {
    imgBase64Url: string
    name: string
}

const ClothesImage = (props: IClothesImageProps) => {
    const handleError: ReactEventHandler<HTMLImageElement> = (e) => {
        e.currentTarget.src = NoClothesImg
    }

    return (
        <img
            className={cx('img')}
            src={props.imgBase64Url || ''}
            alt={props.name}
            onError={handleError}
        />
    )
}

export default ClothesImage
