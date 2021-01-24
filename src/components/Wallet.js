import React from 'react'
import Footer from './Footer'
import Header from './Header'
import SideDashboard from './SideDashboard'

class Wallet extends React.Component {
    render() {
        return (
            <div>
                <Header Creators login />
                <section class="section section-sm">
                    <div class="container">
                        <div class="row justify-content-center text-center mb-sm">
                            <div class="col-lg-8 py-5">
                                <h2 class="mb-0 font-montserrat"><i class="fas fa-wallet mr-2"></i> Wallet</h2>
                                <p class="lead text-muted mt-0">Add funds to your wallet to use for subscriptions, tips, and more</p>
                            </div>
                        </div>
                        <div class="row">

                            <div class="col-md-6 col-lg-3 mb-3">

                                <button type="button" class="btn btn-primary btn-block mb-2 d-lg-none" data-toggle="collapse" data-target="#navbarUserHome" aria-controls="navbarCollapse" aria-expanded="false">
                                    <i class="fa fa-bars myicon-right"></i> Menu
	</button>

                                <SideDashboard wallet />
                            </div>
                            <div class="col-md-6 col-lg-9 mb-5 mb-lg-0">

                                <div class="alert alert-primary alert-dismissible fade show shadow" role="alert">
                                    <span>
                                        <h2><strong>0,00€</strong> <small class="h5">EUR</small></h2>
  Funds available in your account
</span>
                                </div>
                                <form method="POST" action="https://bounla.com/add/funds" id="formAddFunds">

                                    <input type="hidden" name="_token" value="vtm8ofZapsT4q0ekhTALFymkwYYaqGI9o0OLgrvQ"></input>
                                    <div class="form-group mb-4">
                                        <div class="input-group mb-2">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">€</span>
                                            </div>
                                            <input class="form-control form-control-lg" id="onlyNumber" name="amount" min="0" max="0" autocomplete="off" placeholder="Amount (Min. 0€)" type="number"></input>
                                        </div>
                                        <p class="help-block margin-bottom-zero">
                                            + <strong><span id="handlingFee">0</span>€</strong> Transaction Fee

    <span class="float-right">
                                                Total: <strong><span id="total">0</span>€</strong>
                                            </span>
                                        </p>
                                    </div>


                                    <div class="custom-control custom-radio mb-3">
                                        <input name="payment_gateway" value="2" id="tip_radio2" checked="" class="custom-control-input" type="radio"></input>
                                        <label class="custom-control-label" for="tip_radio2">
                                            <span><strong><i class="far fa-credit-card mr-1"></i> Debit / Credit Card (Stripe)</strong></span>
                                            <small class="w-100 d-block">* Transaction Fee: 2.9% + 0.30</small>
                                        </label>
                                    </div>

                                    <div id="stripeContainer" class="">
                                        <div id="card-element" class="margin-bottom-10 StripeElement StripeElement--empty"><div class="__PrivateStripeElement" style={{ margin: "0px !important", padding: "0px !important", border: "none !important", display: "block !important", background: "transparent !important", position: "relative !important", opacity: "1 !important" }}><iframe frameborder="0" allowtransparency="true" scrolling="no" name="__privateStripeFrame3355" allowpaymentrequest="true" src="./Wallet - Bounla _ Social Private Network For Influencers And Fans_files/elements-inner-card-66614ebb76e0a29e12cbca6bfa25d0fa.html" title="Secure card payment input frame" style={{ border: "none !important", margin: "0px !important", padding: "0px !important", width: "1px !important", minWidth: "100% !important", overflow: "hidden !important", display: "block !important", userSelect: "none !important", willChange: "transform !important", height: "19.2px" }}></iframe><input class="__PrivateStripeElement-input" aria-hidden="true" aria-label=" " autocomplete="false" maxlength="1" style={{ border: "none !important", display: "block !important ", position: "absolute !important", height: "1px !important", top: "-1px !important", left: "0px !important", padding: "0px !important", margin: "0px !important ", width: "100% !important", opacity: "0 !important", background: "transparent !important", pointerEvents: "none !important", fontSize: "16px !important" }}></input></div>
                                        </div>
                                    </div>




                                    <div class="alert alert-danger display-none" id="errorAddFunds">
                                        <ul class="list-unstyled m-0" id="showErrorsFunds"></ul>
                                    </div>

                                    <button class="btn btn-1 btn-success btn-block mt-4" id="addFundsBtn" type="submit"><i></i> Add funds</button>
                                </form>

                            </div>
                        </div>
                    </div>

                </section>
                <Footer />
            </div>
        )
    }
}

export default Wallet