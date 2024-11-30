import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/navbar'
import TopBanner from '../components/top-banner'
import Footer from '../components/footer'
import ExploreRoomsSection from '../components/explore-rooms-section'
import SocialMediaFixed from '../components/socialmedia-fixed'
import SlidingText from '../components/sliding-text';

const RoomsPage = () => {
    return (
        <>
            <Helmet>
                <title>Rooms at Apple Orchard Resort - Premium, Deluxe, Suite, & Super Deluxe</title>
                <meta name="description" content="Explore the luxurious accommodations at Apple Orchard Resort, Dhanaulti. Choose from Premium Rooms, Deluxe Rooms, Super Deluxe Rooms, and Suite Rooms, all offering breathtaking mountain views, elegant interiors, and modern amenities." />
                <meta name="keywords" content="Rooms at Apple Orchard Resort, Premium Room Dhanaulti, Deluxe Room Dhanaulti, Super Deluxe Room Dhanaulti, Suite Room Dhanaulti, luxury rooms in Dhanaulti, Apple Orchard Resort rooms, mountain view accommodations, family suites Dhanaulti" />
                <link rel="canonical" href="https://www.appleorchardresort.com/rooms" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Resort",
                        "name": "Apple Orchard Resort",
                        "telephone": "+91-9958140101",
                        "url": "https://www.appleorchardresort.com/rooms"
                    })}
                </script>
            </Helmet>


            {<TopBanner />}
            {<Navbar />}
            <SlidingText/>
            {<ExploreRoomsSection />}
            {<Footer />}
            {<SocialMediaFixed />}
        </>
    )
}

export default RoomsPage
