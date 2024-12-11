import classNames from 'classnames/bind'
import React from 'react'
import { Outlet } from 'react-router'

import Header from './Header'
import styles from './MainLayout.module.scss'

const cx = classNames.bind(styles)

const MainLayout: React.FC = () => (
    <div className={cx('layout')}>
        <Header />
        <Outlet />
    </div>
)

export default MainLayout
