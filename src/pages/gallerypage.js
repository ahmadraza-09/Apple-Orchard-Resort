import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/navbar';
import TopBanner from '../components/top-banner';
import Footer from '../components/footer';
import OurGallery from '../components/our-gallery';
import SocialMediaFixed from '../components/socialmedia-fixed';
import SlidingText from '../components/sliding-text';

const GalleryPage = () => {
    return (
        <>
            <Helmet>
                <title>Gallery - Apple Orchard Resort Dhanaulti</title>
                <meta name="description" content="Explore the beautiful gallery of Apple Orchard Resort, Dhanaulti. View images of the resort's stunning views, luxury rooms, outdoor activities, and natural surroundings." />
                <meta name="keywords" content="Apple Orchard Resort Dhanaulti gallery, resort images, scenic views, luxury rooms, adventure activities, resort photography, Dhanaulti tourism, hill resort gallery" />
                <link rel="canonical" href="https://www.appleorchardresort.com/gallery" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Resort",
                        "name": "Apple Orchard Resort",
                        "telephone": "+91-9958140101",
                        "url": "https://www.appleorchardresort.com/gallery"
                    })}
                </script>
            </Helmet>



            <TopBanner />
            <Navbar />
            <SlidingText/>
            <OurGallery />
            <Footer />
            <SocialMediaFixed />
        </>
    );
}

export default GalleryPage;
