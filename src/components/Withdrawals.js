import React from 'react'
import Footer from './Footer'
import SideDashboard from './SideDashboard'
import Header from './Header'

class Withdrawals extends React.Component {
    render() {
        return (
            <div>
                <Header Creators login />
                <section class="section section-sm">
                    <div class="container">
                        <div class="row justify-content-center text-center mb-sm">
                            <div class="col-lg-8 py-5">
                                <h2 class="mb-0 font-montserrat"><i class="fa fa-university"></i> Withdrawals</h2>
                                <p class="lead text-muted mt-0">History withdrawals</p>
                            </div>
                        </div>
                        <div class="row">

                            <div class="col-md-6 col-lg-3 mb-3">

                                <button type="button" class="btn btn-primary btn-block mb-2 d-lg-none" data-toggle="collapse" data-target="#navbarUserHome" aria-controls="navbarCollapse" aria-expanded="false">
                                    <i class="fa fa-bars myicon-right"></i> Menu
	</button>

                                <SideDashboard withdrawals />
                            </div>
                            <div class="col-md-6 col-lg-9 mb-5 mb-lg-0">

                                <div class="alert alert-warning alert-dismissible" role="alert">
                                    <span class="alert-inner--text"><i class="far fa-credit-card mr-2"></i> Please select a
            <a href="https://bounla.com/settings/payout/method" class="text-white link-border">Payout method</a>
                                    </span>
                                </div>

                                <div class="row">
                                    <div class="col-md-12">
                                        <h5>Balance: 0,00€ <small>EUR</small>

                                            <button class="btn btn-1 btn-success mb-2 disabled e-none">Make withdrawal</button>

                                        </h5>


                                        <div class="alert alert-primary alert-dismissible fade show" role="alert">
                                            <i class="fa fa-info-circle mr-2"></i>

                                            <span>Amount minimum withdrawal <strong>50€ EUR</strong>

                                                <small class="btn-block">* Your payment would be available in 7 business day(s)</small>

                                            </span>
                                        </div>

                                    </div>
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

export default Withdrawals