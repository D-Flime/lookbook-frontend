import { TBottomStyle } from '@/data/types/clothesCharacteristics'

export interface IBottomClothes {
    id: string
    name: string
    image: string
    length: string
    imgBase64Url?: string
    isWeird: boolean
    fashionability: number
    color: string
    style: TBottomStyle
}
