import React from 'react'
import Footer from './Shared/Footer'
import NavBarLanding from './Shared/NavBarLanding'
import SubNavBar from './Shared/SubNavBar'

export default function Layout(props){

    return(
        <div>
            <div>
                <NavBarLanding />
                <SubNavBar />
            </div>
            {props.children}

            <Footer />
        </div>
    )
}