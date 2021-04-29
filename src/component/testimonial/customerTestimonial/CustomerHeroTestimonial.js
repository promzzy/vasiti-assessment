import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles/CustomerHeroTestimonial.module.css'

export default function CustomerHeroTestimonial({filterTestimonial}){


    return(
        <div className={styles.HeroBackground}>

                {
                  filterTestimonial && filterTestimonial.map(heroCustomer => (
                        <div className={styles.heroCustomerContainner}>
                            
                            <div className={styles.imageContainer}>
                            <img className={styles.image} src={heroCustomer.image} alt="Customer" />
                            </div>

                        <div className={styles.TestimonialBody}>
                        <h3 className={styles.customerName}>
                           {` ${heroCustomer.firstName} ${heroCustomer.lastName} `}
                        </h3>
                <span className={styles.clientType}>{heroCustomer.clientType}</span>
                <p className={styles.TestimonialText}>
                    {heroCustomer.message}
                </p>

                <Link to="testimonial/form" className={styles.shareStory}>
                share your own story!
                </Link>
                
                </div>

                        </div>

                    ))
                }

        </div>
    )
}