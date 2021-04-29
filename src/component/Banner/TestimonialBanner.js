import React from 'react'
import styles from './styles/TestimonialBanner.module.css'
import testimonialBanner from '../../Resources/images/testimonialBanner.png'

export default function TestimonialBanner(){
    return(
        <div className={styles.bannerBg}>
            <div className={styles.BannerHero}>
                <div className={styles.textContainner}>
                    <h3 className={styles.bannerHeader}>
                        amazing <br /> experience from our <br /> wonderful customers
                    </h3>
                    <p className={styles.bannerText}>
                        Here is what customers and and vendorsare saying about us, you can share your stories with us too.
                    </p>
                </div>
                <div className={styles.bannerImage}>
                    <img src={testimonialBanner} alt="Banner" className={styles.image} />
                </div>

            </div>
        </div>
    )
}