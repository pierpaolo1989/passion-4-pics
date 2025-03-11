import ContactFormModal from "../components/ContactFormModal.tsx";
import Footer from "../components/Footer";
import GalleryCarousel from "../components/GalleryCarousel.jsx";
import Header from "../components/Header";
import InstagramFeed from "../components/InstagramFeed.tsx";
import YouTubeVideos from "../components/YoutubeVideos.tsx";

function MainPage() {
    return (
        <>
            <Header />
            <section className="testimonials1 cid-spaiTlABRY" id="testimonials1-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6">
                            <div className="image-wrapper">
                                <img src="assets/images/photography-801891-1920-1076x717.jpg" alt="Passion4Pics" />
                            </div>
                        </div>
                        <div className="col-12 col-md">
                            <div className="text-wrapper">
                                <p className="mbr-text mbr-fonts-style mb-4 display-7">“Photography is a way of feeling, of
                                    touching, of loving. What you have caught on film is captured forever… It remembers little
                                    things, long after you have forgotten everything.”
                                    <br />
                                </p>
                                <p className="name mbr-fonts-style mb-1 display-4"><strong>Aaron Siskind</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content7 cid-ssp6j0FcSc bg-secondary" id="content7-b">

                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10">
                            <blockquote>
                                <h5 className="mbr-section-title mbr-fonts-style mb-2 display-7"><strong>Our mission</strong></h5>
                                <p className="mbr-text mbr-fonts-style display-4">Your passion makes you a promising amateur but
                                    your ability to earn a living from your photography work makes you a professional
                                    photographer. Get yourself involved in the community and find all you need to become a
                                    professional.</p>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <YouTubeVideos />
            </section>

            <section className="content7 cid-ssp6j0FcScsss" style={{backgroudColor: "#ddddd !important" }}>

                <InstagramFeed />

            </section>

            <section className="gallery1 cid-srZMqP1bME" id="gallery1-a" style={{backgroudColor: "#929292 !important"}}>

                

                <div className="container">
                    <div className="mbr-section-head">
                        <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                            <strong>Gallery</strong>
                        </h4>

                    </div>
                    <GalleryCarousel />
                    <ContactFormModal/>
                </div>
            </section>

            <section className="contacts4 cid-spajBnt0w5" id="contacts4-5">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="text-content col-12 col-md-6">
                            <h2 className="mbr-section-title mbr-fonts-style display-2">
                                <strong>Follow Us</strong>
                            </h2>
                            <p className="mbr-text mbr-fonts-style display-7">Follow us on different channels and in particular tag
                                us in Instagram with our tag <strong>#passion_4_pics</strong>. Every week we repost the best pics in our gallery.
                            </p>
                        </div>
                        <div className="icons d-flex align-items-center col-12 col-md-6 justify-content-end mt-md-0 mt-2 flex-wrap">
                            <a href="https://www.facebook.com/_passion4pics-110868584418609/about/?ref=page_internal"
                                target="_blank" rel="noreferrer">
                                <span className="socicon-facebook socicon mbr-iconfont mbr-iconfont-social"></span>
                            </a>
                            <a href="#" target="_blank">
                                <span className="socicon-youtube socicon mbr-iconfont mbr-iconfont-social"></span>
                            </a>
                            <a href="https://www.instagram.com/_passion4pics/" target="_blank" rel="noreferrer">
                                <span className="socicon-instagram socicon mbr-iconfont mbr-iconfont-social"></span>
                            </a>
                            <a href="https://www.instagram.com/_passion4pics/" target="_blank" rel="noreferrer">
                                <span className="socicon-tiktok socicon mbr-iconfont mbr-iconfont-social"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default MainPage;