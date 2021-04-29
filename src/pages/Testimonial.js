import React from 'react'
import TestimonialBanner from '../component/Banner/TestimonialBanner'
import CustomerTestimonial from '../component/testimonial/customerTestimonial/CustomerTestimonial'
import VendorTestimonial from '../component/testimonial/vendorTestimonial/VendorTestimonial'
import FootBanner from '../component/Banner/FootBanner'

export default function TestimonialPage(){
    return(
        <div>
            <TestimonialBanner />
            <CustomerTestimonial />
            <VendorTestimonial />
            <FootBanner />

        </div>
    )
}