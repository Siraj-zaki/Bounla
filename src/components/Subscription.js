import React from 'react'
import Footer from './Footer'
import Header from './Header'
import SideDashboard from './SideDashboard'

class Subscription extends React.Component {
    render() {
        return (
            <div>
                <Header Creators login />
                <section class="section section-sm">
                    <div class="container">
                        <div class="row justify-content-center text-center mb-sm">
                            <div class="col-lg-8 py-5">
                                <h2 class="mb-0 font-montserrat"><i class="fa fa-pencil-alt mr-2"></i> Edit my page</h2>
                                <p class="lead text-muted mt-0">Tell us something about you.</p>
                            </div>
                        </div>
                        <div class="row">

                            <div class="col-md-6 col-lg-3 mb-3">

                                <button type="button" class="btn btn-primary btn-block mb-2 d-lg-none" data-toggle="collapse" data-target="#navbarUserHome" aria-controls="navbarCollapse" aria-expanded="false">
                                    <i class="fa fa-bars myicon-right"></i> Menu
	</button>

                                <SideDashboard subscription />
                            </div>

                            <div class="col-md-6 col-lg-9 mb-5 mb-lg-0">
                                <form method="POST" action="https://bounla.com/settings/subscription">
                                    <input type="hidden" name="_token" value="vtm8ofZapsT4q0ekhTALFymkwYYaqGI9o0OLgrvQ"></input>
                                    <div class="form-group">
                                        <label>Subscription Price (Per month)  <a href="javascript:void(0)" data-container="body" data-toggle="popover" data-placement="top" data-trigger="focus" class="link-border" data-content="You will receive 75% for each transaction (Does not include payment processor fees)" data-original-title="" title="">How much do you earn?</a> </label>
                                        <div class="input-group mb-2">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">€</span>
                                            </div>
                                            <input class="form-control form-control-lg" id="subscriptionPrice" name="price" placeholder="Subscription Price (Per month)" value="0.00" type="text"></input>
                                        </div>
                                        <div class="text-muted btn-block mb-4">
                                            <div class="custom-control custom-switch">
                                                <input type="checkbox" class="custom-control-input" name="free_subscription" value="yes" id="customSwitch1"></input>
                                                <label class="custom-control-label switch" for="customSwitch1">Free Subscription</label>
                                            </div>
                                        </div>
                                    </div>

                                    <button class="btn btn-1 btn-success btn-block" onclick="this.form.submit(); this.disabled=true; this.innerText=&#39;Please wait...&#39;;" type="submit">Save changes</button>

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

export default Subscription