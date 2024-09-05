import React from "react"
import '@/styles/MainLayout.css'

type Props = {
    children: React.ReactNode
}

const MainLayout = (props: Props) => {
    return (
        <>
        <div className="layout-main">
            {props.children}
        </div>
        </>
    )
}

export default MainLayout