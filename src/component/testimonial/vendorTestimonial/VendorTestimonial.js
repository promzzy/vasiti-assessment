import React, { useEffect, useState } from 'react'
import VendorHeroTestimonial from './VendorHeroTestimonial'
import {Testimonial} from '../../../datas/SharedTestimonial'
import styles from './styles/VendorTestimonial.module.css'

export default function VendorTestimonial(){
 const [vendorTestimonial, setVendorTestimonial] = useState([])


 useEffect(()=>{
setVendorTestimonial(Testimonial)
 },
 [])

 const filterTestimonial = vendorTestimonial.filter( filtered => (filtered.hero === true && filtered.clientType === "vendor")) 

    return(
        <div>


            {
                filterTestimonial.length >= 1 ? (
                <VendorHeroTestimonial filterTestimonial={filterTestimonial} />
                ) :
                null
            }


            <div className={styles.vendorTestimonialsBg}>

<div className={styles.gridContainner}>

    {
        vendorTestimonial.filter(filtered => (filtered.hero === false && filtered.clientType === "vendor")).map(vendorTestimonial => (
            <>
            <div className={styles.vendor} key={vendorTestimonial.id}>
            <img src={vendorTestimonial.image} alt="customer" />

                <h3 className={styles.customerName}>
                <span>{`${vendorTestimonial.firstName} ${vendorTestimonial.lastName}`}</span>
                </h3>
                <span className={styles.city}>{vendorTestimonial.cityOfInstitution}</span>
                <span className={styles.clientType}>{vendorTestimonial.clientType}</span>
                <p className={styles.textBody}>
                    {vendorTestimonial.message}
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