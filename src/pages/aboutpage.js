import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import TopBanner from "../components/top-banner";
import SocialMediaFixed from "../components/socialmedia-fixed";
import IntroductionSection from "../components/introduction-section";
import CustomerCountingCard from "../components/customers-counting-card";
import OurResortValue from "../components/our-resort-value";
import SlidingText from "../components/sliding-text";

const AboutPage = () => {
    return (
        <>
            <Helmet>
                <title>About Apple Orchard Resort - Luxury in Dhanaulti</title>
                <meta name="description" content="Discover Apple Orchard Resort in Dhanaulti, nestled amidst the serene Himalayas. With 20 elegantly designed rooms and 4 luxury Swiss tents, the resort offers breathtaking views, rejuvenating ambiance, and unmatched hospitality for a perfect getaway." />
                <meta name="keywords" content="About Apple Orchard Resort, Apple Orchard Resort Dhanaulti, Himalayan resort, luxury resort Dhanaulti, family suites Dhanaulti, luxury Swiss tents Dhanaulti, peaceful stay in nature, resorts in apple orchard, nature resort Dhanaulti" />
                <link rel="canonical" href="https://www.appleorchardresort.com/about" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Resort",
                        "name": "Apple Orchard Resort",
                        "telephone": "+91-9958140101",
                        "url": "https://www.appleorchardresort.com/about"
                    })}
                </script>
            </Helmet>


            <TopBanner />
            <Navbar />
            <SlidingText/>
            <IntroductionSection />
            <CustomerCountingCard />
            <OurResortValue />
            <Footer />
            <SocialMediaFixed />
        </>
    );
};

export default AboutPage;
