import classNames from 'classnames/bind'

import ClothesHangerSVG from '@/assets/icons/clothes-hanger.svg?react'
import TopClothingSVG from '@/assets/icons/dress.svg?react'
import PantsSVG from '@/assets/icons/flare-pants.svg?react'
import HairstyleSVG from '@/assets/icons/hairstyle.svg?react'
import JewelrySVG from '@/assets/icons/jewelry.svg?react'
import MakeupSVG from '@/assets/icons/makeup.svg?react'
import ShoesSVG from '@/assets/icons/shoes.svg?react'

import styles from './customIcons.module.scss'

const cx = classNames.bind(styles)

interface IOptions {
    iconProps?: {
        className?: string
    }
}

export const ClothesHanger = (options: IOptions) => (
    <ClothesHangerSVG
        {...options?.iconProps}
        className={cx('icon', options?.iconProps?.className)}
    />
)

export const Hairstyle = (options: IOptions) => (
    <HairstyleSVG
        {...options?.iconProps}
        className={cx('icon', options?.iconProps?.className)}
    />
)

export const Jewelry = (options: IOptions) => (
    <JewelrySVG
        {...options?.iconProps}
        className={cx('icon', options?.iconProps?.className)}
    />
)

export const Makeup = (options: IOptions) => (
    <MakeupSVG
        {...options?.iconProps}
        className={cx('icon', options?.iconProps?.className)}
    />
)

export const Pants = (options: IOptions) => (
    <PantsSVG
        {...options?.iconProps}
        className={cx('icon', options?.iconProps?.className)}
    />
)

export const Shoes = (options: IOptions) => (
    <ShoesSVG
        {...options?.iconProps}
        className={cx('icon', options?.iconProps?.className)}
    />
)

export const TopClothing = (options: IOptions) => (
    <TopClothingSVG
        {...options?.iconProps}
        className={cx('icon', options?.iconProps?.className)}
    />
)
