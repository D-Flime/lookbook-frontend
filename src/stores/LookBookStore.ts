import { action, makeObservable, observable, runInAction } from 'mobx'

import { IBottomClothes } from '@/data/types/bottomClothes'
import { ITopClothes } from '@/data/types/topClothes'
import { getBottomsList, getImage, getLooksList, getTopsList } from '@/libs/api'

class Store {
    @observable bottomsList: IBottomClothes[] = []
    @observable bottomsListGettingError: boolean = false
    @observable bottomsListLoading: boolean = false
    @observable looksList: unknown[] = []
    @observable looksListGettingError: boolean = false
    @observable looksListLoading: boolean = false
    @observable topsList: ITopClothes[] = []
    @observable topsListGettingError: boolean = false
    @observable topsListLoading: boolean = false

    constructor() {
        makeObservable(this)
    }

    @action async getBottomsList() {
        this.bottomsList = []
        this.bottomsListGettingError = false
        this.bottomsListLoading = true
        try {
            const bottomsList = await getBottomsList()
            const newBottomsList: IBottomClothes[] = []
            for (const bottom of bottomsList) {
                try {
                    const imgBase64Url = await getImage('bottom', bottom.id)
                    newBottomsList.push({
                        ...bottom,
                        imgBase64Url,
                    })
                } catch (e) {
                    newBottomsList.push(bottom)
                }
            }
            runInAction(() => {
                this.bottomsList = newBottomsList
            })
        } catch (e) {
            runInAction(() => {
                this.bottomsListGettingError = true
            })
        } finally {
            runInAction(() => {
                this.bottomsListLoading = false
            })
        }
    }

    @action async getLooksList() {
        this.looksList = []
        this.looksListGettingError = false
        this.looksListLoading = true
        try {
            const looksList = await getLooksList()
            runInAction(() => {
                this.looksList = looksList
            })
        } catch (e) {
            runInAction(() => {
                this.looksListGettingError = true
            })
        } finally {
            runInAction(() => {
                this.looksListLoading = false
            })
        }
    }

    @action async getTopsList() {
        this.topsList = []
        this.topsListGettingError = false
        this.topsListLoading = true
        try {
            const topsList: ITopClothes[] = await getTopsList()
            const newTopsList: ITopClothes[] = []
            for (const top of topsList) {
                try {
                    const imgBase64Url = await getImage('top', top.id)
                    newTopsList.push({
                        ...top,
                        imgBase64Url,
                    })
                } catch (e) {
                    newTopsList.push(top)
                }
            }
            runInAction(() => {
                this.topsList = newTopsList
            })
        } catch (e) {
            runInAction(() => {
                this.topsListGettingError = true
            })
        } finally {
            runInAction(() => {
                this.topsListLoading = false
            })
        }
    }
}

export const LookBookStore = new Store()
