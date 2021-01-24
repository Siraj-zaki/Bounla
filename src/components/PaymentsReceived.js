import React from 'react'
import Footer from './Footer'
import Header from './Header'

class PaymentsReceived extends React.Component {
    render() {
        return (
            <div>
                <Header Creators login />
                <section class="section section-sm">
                    <div class="container">
                        <div class="row justify-content-center text-center mb-sm">
                            <div class="col-lg-8 py-5">
                                <h2 class="mb-0 font-montserrat"><i class="fas fa-file-invoice-dollar mr-2"></i> Payments</h2>
                                <p class="lead text-muted mt-0">History of all payments received</p>
                            </div>
                        </div>
                        <div class="row">

                            <div class="col-md-6 col-lg-3 mb-3">

                                <button type="button" class="btn btn-primary btn-block mb-2 d-lg-none" data-toggle="collapse" data-target="#navbarUserHome" aria-controls="navbarCollapse" aria-expanded="false">
                                    <i class="fa fa-bars myicon-right"></i> Menu
	</button>

                                <div class="navbar-collapse collapse d-lg-block" id="navbarUserHome">
                                    <div class="card shadow-sm">
                                        <div class="list-group list-group-sm list-group-flush">

                                            <a href="https://bounla.com/ee96c803" class="list-group-item list-group-item-action d-flex justify-content-between">
                                                <div>
                                                    <i class="far fa-user-circle mr-2"></i>
                                                    <span>My page</span>
                                                </div>
                                                <div>
                                                    <i class="fas fa-angle-right"></i>
                                                </div>
                                            </a>
                                            <a href="https://bounla.com/dashboard" class="list-group-item list-group-item-action d-flex justify-content-between ">
                                                <div>
                                                    <i class="fa fa-tachometer-alt mr-2"></i>
                                                    <span>Dashboard</span>
                                                </div>
                                                <div>
                                                    <i class="fas fa-angle-right"></i>
                                                </div>
                                            </a>
                                            <a href="https://bounla.com/settings/page" class="list-group-item list-group-item-action d-flex justify-content-between">
                                                <div>
                                                    <i class="fa fa-pencil-alt mr-2"></i>
                                                    <span>Edit my page</span>
                                                </div>
                                                <div>
                                                    <i class="fas fa-angle-right"></i>
                                                </div>
                                            </a>
                                            <a href="https://bounla.com/settings/subscription" class="list-group-item list-group-item-action d-flex justify-content-between ">
                                                <div>
                                                    <i class="fa fa-sync mr-2"></i>
                                                    <span>Subscription</span>
                                                </div>
                                                <div>
                                                    <i class="fas fa-angle-right"></i>
                                                </div>
                                            </a>
                                            <a href="https://bounla.com/messages" class="list-group-item list-group-item-action d-flex justify-content-between ">
                                                <div>
                                                    <i class="feather icon-send mr-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-send"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                                                    </i>
                                                    <span>Messages</span>
                                                </div>
                                                <div>
                                                    <i class="fas fa-angle-right"></i>
                                                </div>
                                            </a>
                                            <a href="https://bounla.com/my/wallet" class="list-group-item list-group-item-action d-flex justify-content-between  ">
                                                <div>
                                                    <i class="fas fa-wallet mr-2"></i>
                                                    <span>Wallet</span>
                                                </div>
                                                <div>
                                                    <i class="fas fa-angle-right"></i>
                                                </div>
                                            </a>
                                            <a href="https://bounla.com/settings/verify/account" class="list-group-item list-group-item-action d-flex justify-content-between">
                                                <div>
                                                    <i class="feather icon-check-circle mr-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                                    </i>
                                                    <span>Verify Account</span>
                                                </div>
                                                <div>
                                                    <i class="fas fa-angle-right"></i>
                                                </div>
                                            </a>
                                            <a href="https://bounla.com/notifications" class="list-group-item list-group-item-action d-flex justify-content-between ">
                                                <div>
                                                    <i class="far fa-bell mr-2"></i>
                                                    <span>Notifications</span>
                                                </div>
                                                <div>
                                                    <i class="fas fa-angle-right"></i>
                                                </div>
                                            </a>
                                            <a href="https://bounla.com/settings/password" class="list-group-item list-group-item-action d-flex justify-content-between">
                                                <div>
                                                    <i class="fa fa-key mr-2"></i>
                                                    <span>Password</span>
                                                </div>
                                                <div>
                                                    <i class="fas fa-angle-right"></i>
                                                </div>
                                            </a>

                                            <a href="https://bounla.com/my/subscribers" class="list-group-item list-group-item-action d-flex justify-content-between  ">
                                                <div>
                                                    <i class="fas fa-users mr-2"></i>
                                                    <span>My subscribers</span>
                                                </div>
                                                <div>
                                                    <i class="fas fa-angle-right"></i>
                                                </div>
                                            </a>

                                            <a href="https://bounla.com/my/subscriptions" class="list-group-item list-group-item-action d-flex justify-content-between active ">
                                                <div>
                                                    <i class="fas fa-user-friends mr-2"></i>
                                                    <span>My subscriptions</span>
                                                </div>
                                                <div>
                                                    <i class="fas fa-angle-right"></i>
                                                </div>
                                            </a>

                                            <a href="https://bounla.com/my/payments" class="list-group-item list-group-item-action d-flex justify-content-between ">
                                                <div>
                                                    <i class="fas fa-file-invoice-dollar mr-2"></i>
                                                    <span>Payments</span>
                                                </div>
                                                <div>
                                                    <i class="fas fa-angle-right"></i>
                                                </div>
                                            </a>

                                            <a href="https://bounla.com/settings/payout/method" class="list-group-item list-group-item-action d-flex justify-content-between ">
                                                <div>
                                                    <i class="far fa-credit-card mr-2"></i>
                                                    <span>Payout method</span>
                                                </div>
                                                <div>
                                                    <i class="fas fa-angle-right"></i>
                                                </div>
                                            </a>

                                            <a href="https://bounla.com/settings/withdrawals" class="list-group-item list-group-item-action d-flex justify-content-between ">
                                                <div>
                                                    <i class="fa fa-university mr-2"></i>
                                                    <span>Withdrawals</span>
                                                </div>
                                                <div>
                                                    <i class="fas fa-angle-right"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-9 mb-5 mb-lg-0">

                                <div class="btn-block mb-3 text-right">
                                    <span>
                                        Filter by

    <select class="ml-2 custom-select w-auto" id="filter">
                                            <option  value="https://bounla.com/my/payments">Payments made</option>
                                            <option selected value="https://bounla.com/my/payments/received">Payments received</option>
                                        </select>
                                    </span>
                                </div>

                                <div class="my-5 text-center">
                                    <span class="btn-block mb-3">
                                        <i class="fa fa-file-invoice-dollar ico-no-result"></i>
                                    </span>
                                    <h4 class="font-weight-light">You haven&#039;t received any payments yet</h4>
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

export default PaymentsReceived