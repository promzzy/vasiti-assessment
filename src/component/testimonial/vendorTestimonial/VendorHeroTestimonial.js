import React from 'react'
import styles from './styles/VendorHeroTestimonial.module.css'
import { Link } from 'react-router-dom'

export default function VendorHeroTestimonial({filterTestimonial}){


    return(
        <div className={styles.vendorHeroBg}>
        {
            filterTestimonial.map(heroVendor => (
            <div className={styles.heroVendorContainner}>
                <div className={styles.TestimonialBody}>

                <h3 className={styles.vendorName}>
                   {` ${heroVendor.firstName } ${ heroVendor.lastName} `}
                </h3>
                <span className={styles.clientType}>{heroVendor.clientType}</span>
                <p className={styles.textBody}>
                    {heroVendor.message}
                </p>
                <Link to="testimonial/form" className={styles.shareStory}>
                Share your own story!
                </Link>
                </div >
               <div className={styles.imageContainner}>
                <img src={heroVendor.image} alt="vendor" className={styles.image} />
                </div>
            </div>
                

            ))
        }
           
            
        

        </div>
    )
}