import classNames from 'classnames/bind'
import { ProgressSpinner } from 'primereact/progressspinner'
import React from 'react'

import styles from './Spinner.module.scss'

const cx = classNames.bind(styles)

const Spinner: React.FC<{ className?: string }> = ({ className }) => (
    <ProgressSpinner className={cx('spinner', className)} />
)

export default Spinner
