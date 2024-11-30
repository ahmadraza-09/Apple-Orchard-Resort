import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/navbar'
import TopBanner from '../components/top-banner'
import Footer from '../components/footer'
import SocialMediaFixed from '../components/socialmedia-fixed'
import PremiumRoomComp from '../components/premium-room-comp'
import SlidingText from '../components/sliding-text';

const PremiumRoom = () => {

    return (
        <>
            <Helmet>
                <title>Premium Room - Apple Orchard Resort Dhanaulti</title>
                <meta name="description" content="Book the Premium Room at Apple Orchard Resort, Dhanaulti for a luxurious experience. Enjoy elegant interiors, stunning Himalayan views, and top-tier amenities for a serene stay." />
                <meta name="keywords" content="Premium Room, Apple Orchard Resort Dhanaulti, luxury room, Himalayan views, resort bookings, Dhanaulti premium room, best resort in Dhanaulti, luxury resort in Dhanaulti" />
                <link rel="canonical" href="https://www.appleorchardresort.com/rooms/premium-room" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Room",
                        "name": "Premium Room",
                        "url": "https://www.appleorchardresort.com/rooms/premium-room",
                        "telephone": "+91-9958140101",
                        "roomType": "Premium Room"
                    })}
                </script>
            </Helmet>


            {<TopBanner />}
            {<Navbar />}
            <SlidingText/>
            {<PremiumRoomComp />}
            {<Footer />}
            {<SocialMediaFixed />}
        </>
    )
}

export default PremiumRoom
