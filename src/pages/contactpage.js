import React from 'react';
import { Helmet } from 'react-helmet-async';
import TopBanner from '../components/top-banner';
import Navbar from '../components/navbar';
import ContactUs from '../components/contact-us';
import Footer from '../components/footer';
import SocialMediaFixed from '../components/socialmedia-fixed';
import SlidingText from '../components/sliding-text';

const ContactPage = () => {
    return (
        <>
            <Helmet>
                <title>Contact Us - Apple Orchard Resort Dhanaulti</title>
                <meta name="description" content="Contact Apple Orchard Resort, Dhanaulti for bookings, inquiries, or assistance. Reach us via phone, email, or the contact form for your perfect getaway in the Himalayas." />
                <meta name="keywords" content="contact Apple Orchard Resort, Dhanaulti contact, resort bookings, resort inquiries, Apple Orchard Resort phone number, Dhanaulti hotel contact, resort contact form" />
                <link rel="canonical" href="https://www.appleorchardresort.com/contact" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Resort",
                        "name": "Apple Orchard Resort",
                        "telephone": "+91-9958140101",
                        "url": "https://www.appleorchardresort.com/contact"
                    })}
                </script>
            </Helmet>

            <TopBanner />
            <Navbar />
            <SlidingText/>
            <ContactUs />
            <Footer />
            <SocialMediaFixed />
        </>
    );
}

export default ContactPage;
