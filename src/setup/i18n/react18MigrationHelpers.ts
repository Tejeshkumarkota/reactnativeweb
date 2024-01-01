import { ReactNode } from 'react'

type WithChildren = {
    children?: ReactNode
}

const reInitMenu = () => {
    setTimeout(() => {
    }, 500)
}

export { type WithChildren, reInitMenu }
