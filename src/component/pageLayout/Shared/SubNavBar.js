import React from 'react'
import {SubNavLink} from './LayoutData/SubNavLink'
import styles from './styles/SubNavBar.module.css'

export default function SubNavBar(){
    return(
        <>
        <ul className={styles.SubNavLinks}>
            {
                SubNavLink.map((link, index) => (
                    <li className={styles.subNavItems} key={index}>{link.title}</li>
                ))
            }
        </ul>
        </>
    )
}