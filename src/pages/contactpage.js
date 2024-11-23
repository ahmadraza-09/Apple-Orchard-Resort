import React from 'react';
import { Helmet } from 'react-helmet-async';
import TopBanner from '../components/top-banner';
import Navbar from '../components/navbar';
import ContactUs from '../components/contact-us';
import Footer from '../components/footer';
import SocialMediaFixed from '../components/socialmedia-fixed';

const ContactPage = () => {
    return (
        <>
            <Helmet>
                <title>Contact Us - Vanasthali Jungle Resort</title>
                <meta name="description" content="Find answers to frequently asked questions about Vanasthali Jungle Resort in Jim Corbett. Get information about booking, accommodations, activities, policies, and more." />
                <meta name="keywords" content="Vanasthali Jungle Resort FAQ, Jim Corbett resort questions, frequently asked questions Corbett, resort booking info, accommodation FAQs, activities at Vanasthali, resort policies, Jim Corbett travel information, Jim Corbett safari questions" />
                <link rel="canonical" href="https://vanasthalicorbett.com/contact" />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Hotel",
                        "name": "Contact Us - Vanasthali Jungle Resort",
                        "telephone": "+91 8510934101",
                        "url": "https://vanasthalicorbett.com/contact"
                    })}
                </script>
            </Helmet>
            <TopBanner />
            <Navbar />
            <ContactUs />
            <Footer />
            <SocialMediaFixed />
        </>
    );
}

export default ContactPage;
