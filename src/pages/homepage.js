import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import TopBanner from '../components/top-banner';
import SocialMediaFixed from '../components/socialmedia-fixed';
import HeroSection from '../components/hero-section';
import IntroductionSection from '../components/introduction-section';
import OurResortValue from '../components/our-resort-value';
import CustomerCountingCard from '../components/customers-counting-card';
import Testimonial from '../components/testimonial';
import GuestReviews from '../components/guest-reviews';
import ExploreRoomsSection from '../components/explore-rooms-section';


const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>Apple Orchard Resort - Luxury Stay in Dhanaulti</title>
                <meta name="description" content="Experience the beauty of nature at Vanasthali Jungle Resort, located in Jim Corbett National Park. Enjoy comfortable accommodations, thrilling wildlife safaris, and serene jungle views in one of India's top wildlife destinations." />
                <meta name="keywords" content="Vanasthali Jungle Resort, Jim Corbett Resort, luxury jungle resort, wildlife resort, eco-friendly resort, Jim Corbett National Park, nature resort, adventure resort, wildlife safari, Ramnagar resorts, nature stay Corbett, jungle lodge, wildlife experiences, Corbett National Park resort, jungle stay Jim Corbett, eco-tourism Corbett" />
                <link rel="canonical" href="https://vanasthalicorbett.com" />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Hotel",
                        "name": "Vanasthali Jungle Resort - Luxury Stay in Jim Corbett National Park",
                        "telephone": "+91 8510934101",
                        "url": "https://vanasthalicorbett.com"
                    })}
                </script>
            </Helmet>
            <TopBanner />
            <Navbar />
            <HeroSection/>
            <IntroductionSection/>
            <OurResortValue/>
            <CustomerCountingCard/>
            <ExploreRoomsSection/>
            <GuestReviews/>
            <Testimonial/>
            <Footer />
            <SocialMediaFixed />
        </>
    );
};

export default HomePage;
