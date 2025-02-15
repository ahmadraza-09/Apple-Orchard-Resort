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
import SlidingText from '../components/sliding-text';
import FestiveModalContainer from '../components/festive-modal-container';


const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>Apple Orchard Resort - Luxury Stay in Dhanaulti</title>
                <meta name="description" content="Apple Orchard Resort in Dhanaulti offers a serene and luxurious retreat surrounded by breathtaking mountain views. Experience premium accommodations, delicious cuisine, and unparalleled hospitality in the lap of nature." />
                <meta name="keywords" content="Apple Orchard Resort Dhanaulti, luxury resort Dhanaulti, best hotels in Dhanaulti, mountain resort Dhanaulti, nature retreat Dhanaulti, resorts with mountain views, Apple Orchard stay,Best resorts in Dhanaulti, Pet friendly resorts in Dhanaulti, Hotels and resorts in Dhanaulti, Best hotels and resorts in Dhanaulti, Good resorts in Dhanaulti, Resorts at Dhanaulti, Luxury resorts in Dhanaulti, Resorts in Dhanaulti Uttarakhand, Dhanaulti hotels & resorts, Dhanaulti best resort, Hotels and resorts near Dhanaulti, Luxury stay in Dhanaulti" />
                <link rel="canonical" href="https://www.appleorchardresort.com/" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Resort",
                        "name": "Apple Orchard Resort",
                        "telephone": "+91-9958140101",
                        "url": "https://www.appleorchardresort.com"
                    })}
                </script>
            </Helmet>

            <FestiveModalContainer />

            <TopBanner />
            <Navbar />
            <SlidingText/>
            <HeroSection />
            <IntroductionSection />
            <OurResortValue />
            <CustomerCountingCard />
            <ExploreRoomsSection />
            <GuestReviews />
            <Testimonial />
            <Footer />
            <SocialMediaFixed />
        </>
    );
};

export default HomePage;
