import axios from 'axios'

import {
    getBottomPath,
    getImagePath,
    getLookPath,
    getTopPath,
} from '@/libs/api/apiRoutes'

const baseURL = '/api'

const instance = axios.create({
    baseURL,
    headers: {
        'Cache-Control': 'no-cache',
    },
})

export const getBottomsList = () =>
    instance.get(getBottomPath()).then((res) => res.data)
export const getImage = (itemType: string, itemId: string) =>
    instance.get(getImagePath(itemType, itemId)).then((res) => res.data)
export const getLooksList = () =>
    instance.get(getLookPath()).then((res) => res.data)
export const getTopsList = () =>
    instance.get(getTopPath()).then((res) => res.data)
