import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/navbar'
import TopBanner from '../components/top-banner'
import Footer from '../components/footer'
import ExploreRoomsSection from '../components/explore-rooms-section'
import SocialMediaFixed from '../components/socialmedia-fixed'

const RoomsPage = () => {
    return (
        <>
            <Helmet>
                <title>Rooms at Hotel Aroma Nainital - Comfortable Stay in Nainital</title>
                <meta name="description" content="Explore the luxurious rooms at Hotel Aroma Nainital. Choose from a variety of rooms with stunning views, modern amenities, and comfortable accommodations for a memorable stay in Nainital." />
                <meta name="keywords" content="Hotel Aroma Nainital rooms, luxury rooms in Nainital, hotel rooms Nainital, accommodations Nainital, rooms with lake view Nainital, best hotel rooms Nainital, Hotel Aroma room booking, Nainital hotel accommodation, comfortable rooms Nainital" />
                <link rel="canonical" href="https://hotelaromanainital.com/rooms" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Hotel",
                        "name": "Rooms at Hotel Aroma Nainital - Comfortable Stay in Nainital",
                        "telephone": "+91 8743000120",
                        "url": "https://hotelaromanainital.com/rooms"
                    })}
                </script>
            </Helmet>

            {<TopBanner />}
            {<Navbar />}
            {<ExploreRoomsSection />}
            {<Footer />}
            {<SocialMediaFixed />}
        </>
    )
}

export default RoomsPage
