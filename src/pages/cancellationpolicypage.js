import React from 'react'
import { Helmet } from 'react-helmet-async'
import TopBanner from '../components/top-banner'
import Navbar from '../components/navbar'
import CancellationPolicy from '../components/cancellation-policy'
import Footer from '../components/footer'
import SocialMediaFixed from '../components/socialmedia-fixed'
import SlidingText from '../components/sliding-text'

const CancellationPolicyPage = () => {
    return (
        <>
            <Helmet>
                <title>Cancellation Policy - Apple Orchard Resort Dhanaulti</title>
                <meta name="description" content="Read the cancellation policy for Apple Orchard Resort Dhanaulti. Understand the terms, conditions, and refund process for booking cancellations." />
                <meta name="keywords" content="cancellation policy Apple Orchard Resort, Apple Orchard Resort Dhanaulti, booking cancellation terms, refund policy, Dhanaulti resort booking, Apple Orchard refund terms" />
                <link rel="canonical" href="https://www.appleorchardresort.com/cancellation-policy" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Policy",
                        "name": "Cancellation Policy",
                        "url": "https://www.appleorchardresort.com/cancellation-policy",
                        "telephone": "+91-9958140101",
                    })}
                </script>
            </Helmet>


            {<TopBanner />}
            {<Navbar />}
            <SlidingText />
            {<CancellationPolicy />}
            {<Footer />}
            {<SocialMediaFixed />}
        </>
    )
}

export default CancellationPolicyPage
