import React from 'react'
import Footer from './Footer'
import Header from './Header'
import SideDashboard from './SideDashboard'

class PaymentMethod extends React.Component {
    render() {
        return (
            <div>
                <Header Creators login />
                <section class="section section-sm">
                    <div class="container">
                        <div class="row justify-content-center text-center mb-sm">
                            <div class="col-lg-8 py-5">
                                <h2 class="mb-0 font-montserrat"><i class="far fa-credit-card mr-2"></i> Payout method</h2>
                                <p class="lead text-muted mt-0">Default payout method:
             <strong class="text-danger">None</strong>
                                </p>
                            </div>
                        </div>
                        <div class="row">

                            <div class="col-md-6 col-lg-3 mb-3">

                                <button type="button" class="btn btn-primary btn-block mb-2 d-lg-none" data-toggle="collapse" data-target="#navbarUserHome" aria-controls="navbarCollapse" aria-expanded="false">
                                    <i class="fa fa-bars myicon-right"></i> Menu
	</button>

                                <SideDashboard paymentmethod />
                            </div>
                            <div class="col-md-6 col-lg-9 mb-5 mb-lg-0">




                                <div class="row justify-content-center">


                                    <div class="col-md-12">
                                        <div class="nav-wrapper">
                                            <ul class="nav nav-pills nav-fill flex-md-row" role="tablist">
                                                <li class="nav-item">
                                                    <a class="nav-link link-nav mb-sm-6 mb-md-0 mb-2 p-4" id="btnPayPal" data-toggle="tab" href="#formPayPal" role="tab" aria-controls="formPayPal" aria-selected="true">
                                                        <i class="fab fa-paypal mr-2"></i> PayPal
                                          </a>
                                                </li>

                                                <li class="nav-item">
                                                    <a class="nav-link link-nav mb-sm-6 mb-md-0 p-4" id="btnBank" data-toggle="tab" href="#formBank" role="tab" aria-controls="formBank" aria-selected="false">
                                                        <i class="fa fa-university mr-2"></i> Bank Transfer
                                          </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="tab-content">
                                    <div id="formPayPal" class="tab-pane fade" role="tabpanel">
                                        <form method="POST" action="https://bounla.com/settings/payout/method/paypal">
                                            <input type="hidden" name="_token" value="LPKoehDYscqCh4eDa1nsrfJtG3fvjH3CWnLELH92"></input>
                                            <div class="form-group">
                                                <div class="input-group mb-4">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text"><i class="fab fa-paypal"></i></span>
                                                    </div>
                                                    <input class="form-control" name="email_paypal" value="" placeholder="Email PayPal" required type="email"></input>
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <div class="input-group mb-4">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text"><i class="far fa-envelope"></i></span>
                                                    </div>
                                                    <input class="form-control" name="email_paypal_confirmation" placeholder="Confirm Email PayPal" required type="email"></input>
                                                </div>
                                            </div>
                                            <button class="btn btn-1 btn-success btn-block" type="submit">Save Payout Method</button>
                                        </form>
                                    </div>
                                    <div id="formBank" class="tab-pane fade" role="tabpanel">
                                        <form method="POST" action="https://bounla.com/settings/payout/method/bank">

                                            <input type="hidden" name="_token" value="LPKoehDYscqCh4eDa1nsrfJtG3fvjH3CWnLELH92"></input>
                                            <div class="form-group">
                                                <textarea name="bank_details" rows="5" cols="40" class="form-control" required placeholder="Bank Details: Swift Code, Account Number, Branch Name, IBAN..."></textarea>
                                            </div>
                                            <button class="btn btn-1 btn-success btn-block" type="submit">Save Payout Method</button>
                                        </form>
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

export default PaymentMethod