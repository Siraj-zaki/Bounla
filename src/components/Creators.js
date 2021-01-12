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
import Category from "./Category";
import FilterBy from "./FilterBy";

export default class Creators extends React.Component {
    state = {
        card: [
            { name: '' }
        ]
    }
    render() {
        return (
            <div>
                <Header Creators />
                <section class="section section-sm">
                    <div class="container">
                        <div class="row justify-content-center text-center mb-sm">
                            <div class="col-lg-12 py-5">
                                <h2 class="mb-0 text-break">Explore our Creators</h2>
                                <p class="lead text-muted mt-0">The best Creators Content is here
                                          <a href="signup.html" class="link-border">Join now!</a>
                                </p>
                            </div>
                        </div>

                        <FilterBy />
                        <Category />

                        <div class="row">
                            <Card1 name="Admin" region="United States" img="img" paragraph=" Welcome to my page. If you like my content, please consider support. Any donation will be well recei..." />
                            <Card1 name="Admin" region="United States" img="img" paragraph=" Welcome to my page. If you like my content, please consider support. Any donation will be well recei..." />
                            <Card1 name="Admin" region="United States" img="img" paragraph=" Welcome to my page. If you like my content, please consider support. Any donation will be well recei..." />
                            <Card1 name="Admin" region="United States" img="img" paragraph=" Welcome to my page. If you like my content, please consider support. Any donation will be well recei..." />
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}