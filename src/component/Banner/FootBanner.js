import React from 'react'
import styles from './styles/FootBanner.module.css'
import footBanner from '../../Resources/images/footBanner.png'

export default function FootBanner(){
    return(
        <div className={styles.footBannerBg}>
            <div className={styles.footBannerContainner}>
                <div className={styles.footImageContainner}>
            <img src={footBanner} alt="Banner" className={styles.image} />
            </div>
            <div className={styles.textContainer}>
                <h2 className={styles.Footheader}>
                Be a  member of our community 🎉     
                </h2>
                <p className={styles.textbody}>
                We’d make sure you’re always first to know what’s happening on Vasiti—thus, the world.
                </p>
                <form className={styles.subscribeForm}>
                    <input className={styles.input} type="email" placeholder="enter your email" />
                    <button  className={styles.subscribeBtn}>subscribe</button>
                </form>
            </div>
            </div>
        </div>
    )
}