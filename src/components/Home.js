import React from 'react';
import '../bootstrap.min.css'
import '../index.css'
import '../smartphoto.min.css'
import '../styles.css'
import '../plyr.css'
import '../core.min.css'
import homepic from '../assets/home_index-1606861565.png';
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.jpg';
import Header from './Header';
import Footer from './Footer';
class Home extends React.Component {

    render() {
        return (

            <div className="home">
                <Header />
                <div className="jumbotron homepage m-0 bg-gradient">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 second">
                                <h1 className="display-4 pt-5 mb-3 text-white">Earn profits with your content</h1>
                                <p className="text-white">Bounla is designed to help content creators on the web, create a free account and start making money now.</p>
                                <p>
                                    <a href="https://bounla.com/creators" className="btn btn-lg btn-primary btn-w-mb px-4 mr-2" role="button">Explore</a>

                                    <a href="https://bounla.com/signup" className="btn btn-lg btn-main btn-outline-light btn-w px-4">
                                        Getting started <small className="pl-1"><i className="fa fa-long-arrow-alt-right"></i></small></a>
                                </p>
                            </div>
                            <div className="col-lg-7 first">
                                <img src={homepic} className="img-center img-fluid"></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section py-5 py-large">
                    <div className="btn-block text-center mb-5">
                        <h1 className="font-weight-light">Start earning money now!</h1>
                        <p>
                            You just need an email address.
      </p>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="text-center">
                                    <img src={img2}></img>
                                    <h5 className="mt-3">Create an free account</h5>
                                    <p className="text-muted mt-3">And start making money.</p>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="text-center">
                                    <img src={img1} className="img-center img-fluid" width="120"></img>
                                    <h5 className="mt-3">Create great content</h5>
                                    <p className="text-muted mt-3">People love good content, that how you keep them.</p>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="text-center">
                                    <img src={img3} className="img-center img-fluid" width="120"></img>
                                    <h5 className="mt-3">Grow your market</h5>
                                    <p className="text-muted mt-3">Lie every social media, engage with your followers.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="section py-5 py-large">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12 col-lg-7 text-center mb-3">
                                <img src={img4} className="img-fluid"></img>
                            </div>
                            <div className="col-12 col-lg-5">
                                <h1 className="m-0 w-75 font-weight-light">Create your profile in few minutes</h1>
                                <div className="col-lg-9 col-xl-8 p-0">
                                    <p className="py-4 m-0 text-muted">Easy as A, B, C... In a few steps your profile will be set up and ready to roll</p>
                                </div>
                                <a href="https://bounla.com/signup" className="btn btn-lg btn-main btn-outline-primary btn-w px-4">
                                    Getting started <small className="pl-1"><i className="fa fa-long-arrow-alt-right"></i></small></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section py-5 py-large">
                    <div className="btn-block text-center mb-5">
                        <h1 className="font-weight-light">Creators Featured</h1>
                        <p>
                            The best creators selected by our team.
        </p>
                    </div>

                    <div className="container">
                        <div className="row">

                            <div className="w-100 mb-3 text-center">
                                <a href="https://bounla.com/creators" className="float-right link-border">View all creators <small className="pl-1"><i className="fa fa-long-arrow-alt-right"></i></small></a>
                            </div>

                            <div className="owl-carousel owl-theme owl-loaded owl-drag">

                                <div className="owl-stage-outer">
                                    <div className="owl-stage" style={{ transition: "all 0s ease 0s", width: "384px" }}><div className="owl-item active" style={{ width: "373.333px", marginRight: "10px" }}><div className="card card-updates">
                                        <div className="card-cover" style={{ background: "#505050 center center" }}></div>
                                        <div className="card-avatar">
                                            <a href="https://bounla.com/Admin">
                                                <img src={img5} width="89" height="89" alt="Admin" className="img-user-small"></img>
                                            </a>
                                        </div>
                                        <div className="card-body text-center">
                                            <h6 className="card-title pt-3">
                                                Admin

								<small className="text-featured mr-1" title="" data-toggle="tooltip" data-placement="top" data-original-title="Creator featured">
                                                    <i className="fas fa fa-award"></i>
                                                </small>

                                                <small className="verified" title="" data-toggle="tooltip" data-placement="top" data-original-title="Verified account!">
                                                    <i className="fas fa-check-circle"></i>
                                                </small>
                                            </h6>
                                            <small className="text-muted">
                                                <i className="fa fa-map-marker-alt mr-1"></i>	United States

							</small>
                                            <p className="m-0 py-3 text-muted">
                                                Welcome to my page. If you like my content, please consider support. Any donation will be well recei...
			</p>
                                            <a href="https://bounla.com/Admin" className="btn btn-1 btn-sm btn-outline-primary">Go to Page</a>
                                        </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="owl-nav disabled"><button type="button" role="presentation" className="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" className="owl-next"><span aria-label="Next">›</span></button></div><div className="owl-dots disabled"><button role="button" className="owl-dot active"><span></span></button></div></div>
                        </div>
                    </div>
                </div>


                <div className="jumbotron m-0 text-white text-center bg-gradient">
                    <div className="container position-relative">
                        <h1>What are you waiting for?</h1>
                        <p>Start generating profits with your quality content</p>
                        <p><a className="btn btn-outline-light btn-main p-3 px-5 btn-lg" href="https://bounla.com/signup" role="button">
                            Getting started <small className="pl-1"><i className="fa fa-long-arrow-alt-right"></i></small>
                        </a>
                        </p>
                    </div>
                </div>
                <Footer />
            </div >

        )
    }
};
export default Home;