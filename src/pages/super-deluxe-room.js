import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/navbar'
import TopBanner from '../components/top-banner'
import Footer from '../components/footer'
import SuperDeluxeRoomComp from '../components/super-deluxe-room'
import SocialMediaFixed from '../components/socialmedia-fixed'

const SuperDeluxeRoom = () => {
    return (
        <>
            <Helmet>
                <title>Super Deluxe Rooms at Hotel Aroma Nainital - Exquisite Comfort & Luxury</title>
                <meta name="description" content="Experience unparalleled luxury with the Super Deluxe Room at Hotel Aroma Nainital. Enjoy lavish interiors, world-class amenities, and stunning views for an extraordinary stay in Nainital." />
                <meta name="keywords" content="Super Deluxe Room Hotel Aroma Nainital, luxury rooms Nainital, super deluxe accommodation Nainital, best deluxe room Nainital, Nainital luxury hotel rooms, Hotel Aroma super deluxe room booking, exclusive rooms Nainital, Nainital hotel with deluxe rooms, upscale stay Nainital" />
                <link rel="canonical" href="https://hotelaromanainital.com/super-deluxe-room" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Hotel",
                        "name": "Super Deluxe Rooms at Hotel Aroma Nainital - Exquisite Comfort & Luxury",
                        "telephone": "+91 8743000120",
                        "url": "https://hotelaromanainital.com/super-deluxe-room"
                    })}
                </script>
            </Helmet>

            {<TopBanner />}
            {<Navbar />}
            {<SuperDeluxeRoomComp />}
            {<Footer />}
            {<SocialMediaFixed />}
        </>
    )
}

export default SuperDeluxeRoom
