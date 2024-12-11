import { TCoating, TTopStyle } from '@/data/types/clothesCharacteristics'

export interface ITopClothes {
    id: string
    name: string
    image: string
    imgBase64Url?: string
    isSleeve: boolean
    isDress: boolean
    isCoating: TCoating
    isWeird: boolean
    fashionability: number
    isOpen: boolean
    color: string
    style: TTopStyle
    length: string
}
