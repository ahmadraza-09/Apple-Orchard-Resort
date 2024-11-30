import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/navbar'
import TopBanner from '../components/top-banner'
import Footer from '../components/footer'
import SuiteRoomComp from '../components/suite-room-comp'
import SocialMediaFixed from '../components/socialmedia-fixed'


const SuiteRoom = () => {

    return (
        <>
            <Helmet>
                <title>Family Rooms at Hotel Aroma Nainital - Spacious & Comfortable</title>
                <meta name="description" content="Stay in our spacious Family Room at Hotel Aroma Nainital, designed for comfort and relaxation. Enjoy scenic views, modern amenities, and ample space for your family to enjoy a memorable stay in Nainital." />
                <meta name="keywords" content="Family Room Hotel Aroma Nainital, family accommodations Nainital, family hotel room Nainital, spacious family room Nainital, Nainital family hotel, luxury family room Nainital, Hotel Aroma family room booking, family stay Nainital, hotel with family rooms in Nainital" />
                <link rel="canonical" href="https://hotelaromanainital.com/family-room" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Hotel",
                        "name": "Family Rooms at Hotel Aroma Nainital - Spacious & Comfortable",
                        "telephone": "+91 8743000120",
                        "url": "https://hotelaromanainital.com/family-room"
                    })}
                </script>
            </Helmet>

            {<TopBanner />}
            {<Navbar />}
            {<SuiteRoomComp />}
            {<Footer />}
            {<SocialMediaFixed />}
        </>
    )
}

export default SuiteRoom
