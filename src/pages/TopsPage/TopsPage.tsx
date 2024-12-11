import classNames from 'classnames/bind'
import { observer } from 'mobx-react'
import { Button } from 'primereact/button'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import React, { useEffect } from 'react'

import ClothesImage from '@/components/ClothesImage'
import Spinner from '@/components/Spinner'
import { CLOTHES_PROPS_DICTIONARY } from '@/data/constants/dictionaries'
import { LookBookStore } from '@/stores'

import styles from './TopsPage.module.scss'

const cx = classNames.bind(styles)

const TopsPageWithObserver: React.FC<{ store: typeof LookBookStore }> =
    observer(({ store }) => {
        const { topsList, topsListLoading } = store

        useEffect(() => {
            store.getTopsList()
        }, [store])

        if (topsListLoading)
            return (
                <main className={cx('page', 'card')}>
                    <Spinner />
                </main>
            )
        return (
            <main className={cx('page', 'card')}>
                <h1 className={cx('title')}>Топы</h1>
                <div className={cx('table-wrapper')}>
                    <DataTable
                        className={cx('table', 'card')}
                        value={topsList}
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
                        <Column
                            field="name"
                            header={CLOTHES_PROPS_DICTIONARY.name}
                        />
                        <Column
                            field="isSleeve"
                            header={CLOTHES_PROPS_DICTIONARY.isSleeve}
                        />
                        <Column
                            field="isDress"
                            header={CLOTHES_PROPS_DICTIONARY.isDress}
                        />
                        <Column
                            field="isCoating"
                            header={CLOTHES_PROPS_DICTIONARY.isCoating}
                        />
                        <Column
                            field="isWeird"
                            header={CLOTHES_PROPS_DICTIONARY.isWeird}
                        />
                        <Column
                            field="fashionability"
                            header={CLOTHES_PROPS_DICTIONARY.fashionability}
                        />
                        <Column
                            field="isOpen"
                            header={CLOTHES_PROPS_DICTIONARY.isOpen}
                        />
                        <Column
                            field="color"
                            header={CLOTHES_PROPS_DICTIONARY.color}
                        />
                        <Column
                            field="style"
                            header={CLOTHES_PROPS_DICTIONARY.style}
                        />
                        <Column
                            field="length"
                            header={CLOTHES_PROPS_DICTIONARY.length}
                        />
                    </DataTable>
                </div>
            </main>
        )
    })

const TopsPage = () => <TopsPageWithObserver store={LookBookStore} />

export default TopsPage
