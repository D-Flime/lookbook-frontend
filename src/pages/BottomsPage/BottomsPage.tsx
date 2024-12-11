import classNames from 'classnames/bind'
import { observer } from 'mobx-react'
import { Button } from 'primereact/button'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import React, { useEffect } from 'react'

import ClothesImage from '@/components/ClothesImage'
import Spinner from '@/components/Spinner'
import { LookBookStore } from '@/stores'

import styles from './BottomsPage.module.scss'

const cx = classNames.bind(styles)

const BottomsPageWithObserver: React.FC<{ store: typeof LookBookStore }> =
    observer(({ store }) => {
        const { bottomsList, bottomsListLoading } = store

        useEffect(() => {
            store.getBottomsList()
        }, [store])

        if (bottomsListLoading)
            return (
                <main className={cx('page', 'card')}>
                    <Spinner />
                </main>
            )
        return (
            <main className={cx('page', 'card')}>
                <h1 className={cx('title')}>Низы</h1>
                <div className={cx('table-wrapper')}>
                    <DataTable
                        className={cx('table', 'card')}
                        value={bottomsList}
                        scrollable
                        scrollHeight="100%"
                    >
                        <Column
                            body={() => (
                                <div className={cx('actions')}>
                                    <Button
                                        icon="pi pi-pen-to-square"
                                        severity="info"
                                        title="Редактировать"
                                    />
                                    <Button
                                        icon="pi pi-trash"
                                        severity="danger"
                                        title="Удалить"
                                    />
                                </div>
                            )}
                            header="Действия"
                        />
                        <Column
                            body={(item) => <ClothesImage {...item} />}
                            header="Картинка"
                        />
                        <Column field="name" header="Название" />
                        <Column field="length" header="Длина" />
                        <Column field="isWeird" header="Странный" />
                        <Column field="fashionability" header="Модность" />
                        <Column field="color" header="Цвет" />
                        <Column field="style" header="Стиль" />
                    </DataTable>
                </div>
            </main>
        )
    })

const BottomsPage = () => <BottomsPageWithObserver store={LookBookStore} />

export default BottomsPage
