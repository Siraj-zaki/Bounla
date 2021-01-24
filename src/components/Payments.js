import React from 'react'
import Footer from './Footer'
import Header from './Header'
import SideDashboard from './SideDashboard'

class Payments extends React.Component {
    render() {
        return (
            <div>
                <Header Creators login />
                <section class="section section-sm">
                    <div class="container">
                        <div class="row justify-content-center text-center mb-sm">
                            <div class="col-lg-8 py-5">
                                <h2 class="mb-0 font-montserrat"><i class="fas fa-file-invoice-dollar mr-2"></i> Payments</h2>
                                <p class="lead text-muted mt-0">History of all payments made</p>
                            </div>
                        </div>
                        <div class="row">

                            <div class="col-md-6 col-lg-3 mb-3">

                                <button type="button" class="btn btn-primary btn-block mb-2 d-lg-none" data-toggle="collapse" data-target="#navbarUserHome" aria-controls="navbarCollapse" aria-expanded="false">
                                    <i class="fa fa-bars myicon-right"></i> Menu
	</button>

                                <SideDashboard payments />
                            </div>
                            <div class="col-md-6 col-lg-9 mb-5 mb-lg-0">

                                <div class="btn-block mb-3 text-right">
                                    <span>
                                        Filter by

    <select class="ml-2 custom-select w-auto" id="filter">
                                            <option selected value="https://bounla.com/my/payments">Payments made</option>
                                            <option value="http://localhost:3000/PaymentsReceived">Payments received</option>
                                        </select>
                                    </span>
                                </div>

                                <div class="my-5 text-center">
                                    <span class="btn-block mb-3">
                                        <i class="fa fa-file-invoice-dollar ico-no-result"></i>
                                    </span>
                                    <h4 class="font-weight-light">You haven&#039;t made any payments yet</h4>
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

export default Payments