import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/navbar'
import TopBanner from '../components/top-banner'
import Footer from '../components/footer'
import DeluxeRoomComp from '../components/deluxe-room-comp'
import SocialMediaFixed from '../components/socialmedia-fixed'
import SlidingText from "../components/sliding-text"

const DeluxeRoom = () => {

    return (
        <>
            <Helmet>
                <title>Deluxe Room - Apple Orchard Resort Dhanaulti</title>
                <meta name="description" content="Book the Deluxe Room at Apple Orchard Resort, Dhanaulti for a comfortable and luxurious stay. Enjoy breathtaking views of the Himalayas with premium amenities and cozy interiors." />
                <meta name="keywords" content="Deluxe Room, Apple Orchard Resort Dhanaulti, luxury room, resort booking, Dhanaulti room booking, Himalayan resort, best resort in Dhanaulti" />
                <link rel="canonical" href="https://www.appleorchardresort.com/rooms/deluxe-room" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Room",
                        "name": "Deluxe Room",
                        "url": "https://www.appleorchardresort.com/rooms/deluxe-room",
                        "telephone": "+91-9958140101",
                        "roomType": "Deluxe Room"
                    })}
                </script>
            </Helmet>


            {<TopBanner />}
            {<Navbar />}
            <SlidingText/>
            {<DeluxeRoomComp />}
            {<Footer />}
            {<SocialMediaFixed />}
        </>
    )
}

export default DeluxeRoom
