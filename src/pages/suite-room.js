import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/navbar'
import TopBanner from '../components/top-banner'
import Footer from '../components/footer'
import SuiteRoomComp from '../components/suite-room-comp'
import SocialMediaFixed from '../components/socialmedia-fixed'
import SlidingText from '../components/sliding-text';


const SuiteRoom = () => {

    return (
        <>
            <Helmet>
                <title>Suite Room - Apple Orchard Resort Dhanaulti</title>
                <meta name="description" content="Book the Suite Room at Apple Orchard Resort, Dhanaulti for a lavish stay. Enjoy spacious interiors, breathtaking Himalayan views, and premium amenities for an unforgettable experience." />
                <meta name="keywords" content="Suite Room, Apple Orchard Resort Dhanaulti, luxury suite, resort booking, Dhanaulti luxury rooms, Himalayan suite, best suite in Dhanaulti, luxury resort in Dhanaulti" />
                <link rel="canonical" href="https://www.appleorchardresort.com/rooms/suite-room" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Room",
                        "name": "Suite Room",
                        "url": "https://www.appleorchardresort.com/rooms/suite-room",
                        "telephone": "+91-9958140101",
                        "roomType": "Suite Room"
                    })}
                </script>
            </Helmet>


            {<TopBanner />}
            {<Navbar />}
            <SlidingText/>
            {<SuiteRoomComp />}
            {<Footer />}
            {<SocialMediaFixed />}
        </>
    )
}

export default SuiteRoom
