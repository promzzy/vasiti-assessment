import React from 'react'
import {NavBarlink} from './LayoutData/NavBarlink'
import styles from './styles/NavBarLanding.module.css'

export default function NavBarLanding(){
    return(
        <>
        <div className={styles.navBarBG}>

            <div className={styles.navBarContainner}>
                <div className={styles.logo}>
                    logo
                </div>
                <ul className={styles.navLinks}>
                    {
                        NavBarlink.map((links, index) => (
                            <li key={index} className={[styles.navItems]}>{links.title}</li>
                        ))
                    }
                </ul>
            </div>

        </div>
        </>
    )
}