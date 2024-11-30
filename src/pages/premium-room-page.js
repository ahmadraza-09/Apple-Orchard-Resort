import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/navbar'
import TopBanner from '../components/top-banner'
import Footer from '../components/footer'
import SocialMediaFixed from '../components/socialmedia-fixed'
import PremiumRoomComp from '../components/premium-room-comp'

const PremiumRoom = () => {

    return (
        <>
            <Helmet>
                <title>Premium Rooms at Hotel Aroma Nainital - Luxury Stay in Nainital</title>
                <meta name="description" content="Indulge in luxury with the Premium Room at Hotel Aroma Nainital. Enjoy exceptional comfort, top-notch amenities, and breathtaking views for a truly unforgettable stay in Nainital." />
                <meta name="keywords" content="Premium Room Hotel Aroma Nainital, luxury room Nainital, premium hotel room Nainital, best room in Nainital, Nainital premium accommodation, luxury stay Nainital, Hotel Aroma premium room booking, deluxe room Nainital, hotel with premium rooms Nainital" />
                <link rel="canonical" href="https://hotelaromanainital.com/premium-room" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Hotel",
                        "name": "Premium Rooms at Hotel Aroma Nainital - Luxury Stay in Nainital",
                        "telephone": "+91 8743000120",
                        "url": "https://hotelaromanainital.com/premium-room"
                    })}
                </script>
            </Helmet>

            {<TopBanner />}
            {<Navbar />}
            {<PremiumRoomComp />}
            {<Footer />}
            {<SocialMediaFixed />}
        </>
    )
}

export default PremiumRoom
