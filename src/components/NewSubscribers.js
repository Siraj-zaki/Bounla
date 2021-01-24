import React from 'react'
import Footer from './Footer'
import Header from './Header'
import SideDashboard from './SideDashboard'

class NewSubscribers extends React.Component {
    render() {
        return (
            <div>
                <Header Creators login />
                <section class="section section-sm">
                    <div class="container">
                        <div class="row justify-content-center text-center mb-sm">
                            <div class="col-lg-8 py-5">
                                <h2 class="mb-0 font-montserrat"><i class="fas fa-users mr-2"></i> My subscribers</h2>
                                <p class="lead text-muted mt-0">Users who have subscribed to you content</p>
                            </div>
                        </div>
                        <div class="row">

                            <div class="col-md-6 col-lg-3 mb-3">

                                <button type="button" class="btn btn-primary btn-block mb-2 d-lg-none" data-toggle="collapse" data-target="#navbarUserHome" aria-controls="navbarCollapse" aria-expanded="false">
                                    <i class="fa fa-bars myicon-right"></i> Menu
	</button>

                                <SideDashboard newsubscription />
                            </div>
                            <div class="col-md-6 col-lg-9 mb-5 mb-lg-0">

                                <div class="my-5 text-center">
                                    <span class="btn-block mb-3">
                                        <i class="fa fa-users ico-no-result"></i>
                                    </span>
                                    <h4 class="font-weight-light">You do not have any subscribers</h4>
                                </div>
                            </div>

                        </div>
                    </div>
                </section >
                <Footer />
            </div >
        )
    }
}

export default NewSubscribers