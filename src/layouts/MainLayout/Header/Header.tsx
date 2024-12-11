import classNames from 'classnames/bind'
import { Menubar } from 'primereact/menubar'
import { MenuItem } from 'primereact/menuitem'
import React from 'react'
import { useNavigate } from 'react-router'

import { ROUTES } from '@/data/constants/routes'
import {
    ClothesHanger,
    Hairstyle,
    Jewelry,
    Makeup,
    Pants,
    Shoes,
    TopClothing,
} from '@/libs/customIcons'

import styles from './Header.module.scss'

const cx = classNames.bind(styles)

const Header: React.FC = () => {
    const navigate = useNavigate()
    const items: MenuItem[] = [
        {
            label: 'Главная',
            icon: 'pi pi-home',
            command: () => navigate(ROUTES.HOME),
        },
        {
            label: 'Избранное',
            icon: 'pi pi-star',
            command: () => navigate(ROUTES.FAVORITES),
        },
        {
            label: 'Одежда',
            icon: ClothesHanger,
            items: [
                {
                    label: 'Верх',
                    icon: TopClothing,
                    command: () => navigate(ROUTES.TOPS),
                },
                {
                    label: 'Низ',
                    icon: Pants,
                    command: () => navigate(ROUTES.BOTTOMS),
                },
                {
                    label: 'Обувь',
                    icon: Shoes,
                    command: () => navigate(ROUTES.SHOES),
                },
            ],
        },
        {
            label: 'Причёски',
            icon: Hairstyle,
            command: () => navigate(ROUTES.HAIRSTYLES),
        },
        {
            label: 'Мейкап',
            icon: Makeup,
            command: () => navigate(ROUTES.MAKEUP),
        },
        {
            label: 'Украшения',
            icon: Jewelry,
            command: () => navigate(ROUTES.JEWELRY),
        },
    ]

    return <Menubar className={cx('header')} model={items} />
}

export default Header
