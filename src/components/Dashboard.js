import React from 'react'
import Footer from './Footer'
import Header from './Header'

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <Header Creators login />
                <section class="section section-sm">
                    <div class="container">
                        <div class="row justify-content-center text-center mb-sm">
                            <div class="col-lg-8 py-5">
                                <h2 class="mb-0 font-montserrat"><i class="fa fa-tachometer-alt mr-2"></i> Dashboard</h2>
                                <p class="lead text-muted mt-0">Statistics and balance of your account</p>
                            </div>
                        </div>
                        <div class="row">

                            <div class="col-lg-12 mb-5 mb-lg-0">

                                <div class="content">
                                    <div class="row">
                                        <div class="col-lg-4 mb-2">
                                            <div class="card">
                                                <div class="card-body">
                                                    <h4><i class="fas fa-hand-holding-usd mr-2 text-primary"></i> 0,00€</h4>
                                                    <small>Earnings Net</small>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-lg-4 mb-2">
                                            <div class="card">
                                                <div class="card-body">
                                                    <h4><i class="fas fa-wallet mr-2 text-primary"></i> 0,00€</h4>
                                                    <small>Balance
                                          </small>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 mb-2">
                                            <div class="card">
                                                <div class="card-body">
                                                    <h4><i class="fas fa-users mr-2 text-primary"></i> <span title="0">0</span></h4>
                                                    <small>Subscriptions active</small>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-lg-12 mt-3 py-4"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
                                            <h4 class="mb-4">Earning for this month (Jan)</h4>
                                            <canvas id="Chart" style={{display: "block", width: "1110px", height: "555px"}} width="1110" height="555" class="chartjs-render-monitor"></canvas>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}

export default Dashboard