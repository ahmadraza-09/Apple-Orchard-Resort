import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import TopBanner from '../components/top-banner';
import SocialMediaFixed from '../components/socialmedia-fixed';
import PlacesToVisit from '../components/places-to-visit';

const PlacesToVisitPage = () => {
    return (
        <>
            <Helmet>
                <title>Places to Visit Near Vanasthali Jungle Resort</title>
                <meta name="description" content="Discover must-visit attractions near Vanasthali Jungle Resort in Jim Corbett. Explore wildlife safaris, river walks, local villages, temples, and scenic spots in and around Ramnagar." />
                <meta name="keywords" content="Places to visit near Vanasthali Jungle Resort, Jim Corbett attractions, things to do in Ramnagar, Corbett sightseeing, wildlife safari, Corbett waterfalls, Garjia Devi Temple, Kosi River, Corbett Museum, local villages near Corbett, nature trails" />
                <link rel="canonical" href="https://vanasthalicorbett.com/places-to-visit" />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Hotel",
                        "name": "Places to Visit Near Vanasthali Jungle Resort",
                        "telephone": "+91 8510934101",
                        "url": "https://vanasthalicorbett.com/places-to-visit"
                    })}
                </script>
            </Helmet>

            <TopBanner />
            <Navbar />
            <PlacesToVisit />
            <Footer />
            <SocialMediaFixed />
        </>
    );
};

export default PlacesToVisitPage;
