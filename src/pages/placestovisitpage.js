import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import TopBanner from '../components/top-banner';
import SocialMediaFixed from '../components/socialmedia-fixed';
import PlacesToVisit from '../components/places-to-visit';
import SlidingText from '../components/sliding-text';

const PlacesToVisitPage = () => {
    return (
        <>
            <Helmet>
                <title>Places to Visit Near Apple Orchard Resort - Explore Dhanaulti & Beyond</title>
                <meta name="description" content="Discover top attractions near Apple Orchard Resort, Dhanaulti. Visit Tihri Dam, Surkanda Devi Temple, Eco Park, Kempty Falls, and more scenic spots for an unforgettable experience in the Himalayas." />
                <meta name="keywords" content="Places to visit near Apple Orchard Resort, Tihri Dam, Maa Surkanda Devi Temple, Maa Kunjapuri Temple, Eco Park Dhanaulti, Dehradun attractions, Dashavatar Temple, Dhanaulti Adventure Park, Deograh Fort, Kaudia Forest, Kempty Falls, 
                Best places to visit in Dhanaulti, Nearby places to visit in Dhanaulti, Unique places to visit in Dhanaulti, Famous places to visit in Dhanaulti, Best places to visit in Dhanaulti in one day, Places to visit in Dhanaulti in one day in winter, Places to visit at Dhanaulti, Places to visit around Dhanaulti, Places to see at Dhanaulti, Dhanaulti places for visit, Tourist places in Dhanaulti Uttarakhand, Dhanaulti places to visit in winter, Dhanaulti places to visit with family, Dhanaulti visiting spots" />
                <link rel="canonical" href="https://www.appleorchardresort.com/places-to-visit" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Resort",
                        "name": "Apple Orchard Resort",
                        "telephone": "+91-9958140101",
                        "url": "https://www.appleorchardresort.com/places-to-visit"
                    })}
                </script>
            </Helmet>


            <TopBanner />
            <Navbar />
            <SlidingText/>
            <PlacesToVisit />
            <Footer />
            <SocialMediaFixed />
        </>
    );
};

export default PlacesToVisitPage;
