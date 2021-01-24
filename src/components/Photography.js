import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Card1 from './Card1';
import '../bootstrap.min.css'
import '../index.css'
import '../smartphoto.min.css'
import '../styles.css'
import '../plyr.css'
import '../core.min.css'
import img10 from '../public/img-category/podcasts-ubacYB2BVCgzu79lqOXp9Zfa2jtjwgFE.jpg'
import Category from "./Category";
import FilterBy from "./FilterBy";

export default class Photography extends React.Component {
    state = false
    render() {
        return (
            <div>
                <Header Creators notuser />
                <section class="section section-sm">
                    <div class="container">
                        <div class="row justify-content-center text-center mb-sm">
                            <div class="col-lg-12 py-5">
                                <h2 class="mb-0 font-montserrat">
                                    <img src={img10} class="mr-2 rounded" width="30" /> Photography</h2>
                                <p class="lead text-muted mt-0">(0) Creators in this category</p>
                            </div>
                        </div>

                        <FilterBy />
                        <Category />
                        {
                            this.state === true ?
                                <Card1 name="Admin" region="United States" img="img" paragraph=" Welcome to my page. If you like my content, please consider support. Any donation will be well recei..." />
                                :
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="my-5 text-center no-updates">
                                            <span class="btn-block mb-3">
                                                <i class="fa fa-user-slash ico-no-result"></i>
                                            </span>
                                            <h4 class="font-weight-light">Oh no! At the moment there are no creators in this category</h4>
                                        </div>
                                    </div>
                                </div>
                        }
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}