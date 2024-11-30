import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/navbar';
import TopBanner from '../components/top-banner';
import Footer from '../components/footer';
import Payment from '../components/payment';
import SocialMediaFixed from '../components/socialmedia-fixed';
import SlidingText from '../components/sliding-text';

const PaymentPage = () => {
    return (
        <>
            <Helmet>
                <title>Payment - Apple Orchard Resort Dhanaulti</title>
                <meta name="description" content="Make secure online payments for your bookings at Apple Orchard Resort, Dhanaulti. Enjoy hassle-free transactions for your family getaway or vacation in the Himalayas." />
                <meta name="keywords" content="secure payment, online booking payment, Apple Orchard Resort Dhanaulti, resort booking, resort payment, Dhanaulti resort, secure transaction, payment gateway" />
                <link rel="canonical" href="https://www.appleorchardresort.com/payment" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Resort",
                        "name": "Apple Orchard Resort",
                        "telephone": "+91-9958140101",
                        "url": "https://www.appleorchardresort.com/payment"
                    })}
                </script>
            </Helmet>



            <TopBanner />
            <Navbar />
            <SlidingText/>
            <Payment />
            <Footer />
            <SocialMediaFixed />
        </>
    );
}

export default PaymentPage;
