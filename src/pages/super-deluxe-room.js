import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/navbar'
import TopBanner from '../components/top-banner'
import Footer from '../components/footer'
import SuperDeluxeRoomComp from '../components/super-deluxe-room'
import SocialMediaFixed from '../components/socialmedia-fixed'
import SlidingText from '../components/sliding-text';

const SuperDeluxeRoom = () => {
    return (
        <>
            <Helmet>
                <title>Super Deluxe Room - Apple Orchard Resort Dhanaulti</title>
                <meta name="description" content="Book the Super Deluxe Room at Apple Orchard Resort, Dhanaulti for a premium stay. Experience elegant decor, spacious interiors, stunning Himalayan views, and top-tier amenities." />
                <meta name="keywords" content="Super Deluxe Room, Apple Orchard Resort Dhanaulti, luxury room, deluxe room, Himalayan views, best room in Dhanaulti, premium resort stay, resort booking in Dhanaulti" />
                <link rel="canonical" href="https://www.appleorchardresort.com/super-deluxe-room" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Room",
                        "name": "Super Deluxe Room",
                        "url": "https://www.appleorchardresort.com/super-deluxe-room",
                        "telephone": "+91-9958140101",
                        "roomType": "Super Deluxe Room"
                    })}
                </script>
            </Helmet>


            {<TopBanner />}
            {<Navbar />}
            <SlidingText/>
            {<SuperDeluxeRoomComp />}
            {<Footer />}
            {<SocialMediaFixed />}
        </>
    )
}

export default SuperDeluxeRoom
