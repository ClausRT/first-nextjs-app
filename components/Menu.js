import React from 'react'
import Link from 'next/link'

const Menu = () => {
    return (
        <nav>
            <Link href="/">
                <a>Home</a>
            </Link>
            <span> </span>
            <Link href="/about">
                <a>About</a>
            </Link>
        </nav>
    )
}

export default Menu;