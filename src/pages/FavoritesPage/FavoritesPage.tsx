import classNames from 'classnames/bind'
import { observer } from 'mobx-react'
import React, { useEffect } from 'react'

import Spinner from '@/components/Spinner'
import { LookBookStore } from '@/stores'

import styles from './FavoritesPage.module.scss'

const cx = classNames.bind(styles)

const FavoritesPageComponent: React.FC<{
    store: typeof LookBookStore
}> = observer(({ store }) => {
    const { looksListLoading } = store

    useEffect(() => {
        store.getLooksList()
    }, [store])

    return (
        <main className={cx('page', 'card')}>
            {looksListLoading && <Spinner />}
        </main>
    )
})

const FavoritesPage = () => <FavoritesPageComponent store={LookBookStore} />

export default FavoritesPage
