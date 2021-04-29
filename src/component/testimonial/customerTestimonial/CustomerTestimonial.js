import React, {useState, useEffect} from 'react'
import CustomerHeroTestimonial from './CustomerHeroTestimonial'
import styles from './styles/CustomerTestimonial.module.css'
import {Testimonial} from '../../../datas/SharedTestimonial'

export default function CustomerTestimonial(){

    const [testimonials, setTestimonials] = useState([])

    useEffect(()=> {
        setTestimonials(Testimonial)
    },
    [])

    const filterTestimonial = testimonials.filter(heroCustomer => (heroCustomer.hero === true && heroCustomer.clientType === "customer"))

    return(

        <div>
            {/* <CustomerHeroTestimonial /> */}


            {
               filterTestimonial.length >= 1 ? (
                <CustomerHeroTestimonial filterTestimonial={filterTestimonial} />
               ) : null
            }

            <div className={styles.CustomerTestimonialsBg}>

                <div className={styles.gridContainner}>

                    {
                        testimonials.filter(filtered => (filtered.hero === false && filtered.clientType === "customer")).map(customterTestimonial => (
                            <>
                            <div className={styles.customer} key={customterTestimonial.id}>
                                <img src={customterTestimonial.image} alt="customer" />
                                <h3 className={styles.customerName}>
                                    <span>{`${customterTestimonial.firstName} ${customterTestimonial.lastName}`}</span>
                                   
                                </h3>
                                <span className={styles.customerCity}>{customterTestimonial.cityOfInstitution}</span>
                                <span className={styles.clientType}>{customterTestimonial.clientType}</span>
                                <p className={styles.textBody}>
                                    {customterTestimonial.message}
                                </p>
                                </div>
                            
                                </>
                        ))
                    }

                </div>

            </div>
        </div>
    )
}