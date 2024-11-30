import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import TopBanner from "../components/top-banner";
import SocialMediaFixed from "../components/socialmedia-fixed";
import IntroductionSection from "../components/introduction-section";
import CustomerCountingCard from "../components/customers-counting-card";
import OurResortValue from "../components/our-resort-value";

const AboutPage = () => {
    return (
        <>
            <Helmet>
                <title>About - The Pearl 21 Villa</title>
                <meta
                    name="description"
                    content="Learn about The Pearl 21 Villa in Udaipur, a luxurious retreat offering exceptional hospitality, elegant accommodations, and personalized services in the City of Lakes."
                />
                <meta
                    name="keywords"
                    content="About The Pearl 21 Villa, luxury villas in Udaipur, about us, villa hospitality Udaipur, elegant accommodations, personalized villa services, The Pearl Villa Udaipur, villa experience in Udaipur"
                />
                <link rel="canonical" href="https://thepearl21villa.com/about" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Hotel",
                        name: "About - The Pearl 21 Villa",
                        telephone: "+91-9971834141",
                        url: "https://thepearl21villa.com/about",
                    })}
                </script>
            </Helmet>

            <TopBanner />
            <Navbar />
            <IntroductionSection />
            <CustomerCountingCard/>
            <OurResortValue/>
            <Footer />
            <SocialMediaFixed />
        </>
    );
};

export default AboutPage;
