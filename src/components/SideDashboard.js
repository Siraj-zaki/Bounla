import React from 'react'

class SideDashboard extends React.Component {
    render() {
        return (
            <div>
                <div class="navbar-collapse collapse d-lg-block" id="navbarUserHome">
                    <div class="card shadow-sm">
                        <div class="list-group list-group-sm list-group-flush">

                            <a href="./ShowUser" class="list-group-item list-group-item-action d-flex justify-content-between">
                                <div>
                                    <i class="far fa-user-circle mr-2"></i>
                                    <span>My page</span>
                                </div>
                                <div>
                                    <i class="fas fa-angle-right"></i>
                                </div>
                            </a>
                            <a href="./Dashboard" class="list-group-item list-group-item-action d-flex justify-content-between ">
                                <div>
                                    <i class="fa fa-tachometer-alt mr-2"></i>
                                    <span>Dashboard</span>
                                </div>
                                <div>
                                    <i class="fas fa-angle-right"></i>
                                </div>
                            </a>
                            <a href="./EditMyPage" class={this.props.edit ? "list-group-item list-group-item-action d-flex justify-content-between  active" : "list-group-item list-group-item-action d-flex justify-content-between"}>
                                <div>
                                    <i class="fa fa-pencil-alt mr-2"></i>
                                    <span>Edit my page</span>
                                </div>
                                <div>
                                    <i class="fas fa-angle-right"></i>
                                </div>
                            </a>
                            <a href="./Subscription" class={this.props.subscription ? "list-group-item list-group-item-action d-flex justify-content-between  active" : "list-group-item list-group-item-action d-flex justify-content-between"}>
                                <div>
                                    <i class="fa fa-sync mr-2"></i>
                                    <span>Subscription</span>
                                </div>
                                <div>
                                    <i class="fas fa-angle-right"></i>
                                </div>
                            </a>
                            <a href="./Messages" class={this.props.message ? "list-group-item list-group-item-action d-flex justify-content-between active " : "list-group-item list-group-item-action d-flex justify-content-between"}>
                                <div>
                                    <i class="feather icon-send mr-2"></i>
                                    <span>Messages</span>
                                </div>
                                <div>
                                    <i class="fas fa-angle-right"></i>
                                </div>
                            </a>
                            <a href="./Wallet" class={this.props.wallet ? "list-group-item list-group-item-action d-flex justify-content-between active" : "list-group-item list-group-item-action d-flex justify-content-between"}>
                                <div>
                                    <i class="fas fa-wallet mr-2"></i>
                                    <span>Wallet</span>
                                </div>
                                <div>
                                    <i class="fas fa-angle-right"></i>
                                </div>
                            </a>
                            <a href="./VerifyAccount" class={this.props.verify ? "list-group-item list-group-item-action d-flex justify-content-between active " : "list-group-item list-group-item-action d-flex justify-content-between"}>
                                <div>
                                    <i class="feather icon-check-circle mr-2"></i>
                                    <span>Verify Account</span>
                                </div>
                                <div>
                                    <i class="fas fa-angle-right"></i>
                                </div>
                            </a>
                            <a href="./Notification" class={this.props.notification ? "list-group-item list-group-item-action d-flex justify-content-between active " : "list-group-item list-group-item-action d-flex justify-content-between "}>
                                <div>
                                    <i class="far fa-bell mr-2"></i>
                                    <span>Notifications</span>
                                </div>
                                <div>
                                    <i class="fas fa-angle-right"></i>
                                </div>
                            </a>
                            <a href="./Password" class={this.props.password ? "list-group-item list-group-item-action d-flex justify-content-between active" : " list-group-item list-group-item-action d-flex justify-content-between"}>
                                <div>
                                    <i class="fa fa-key mr-2"></i>
                                    <span>Password</span>
                                </div>
                                <div>
                                    <i class="fas fa-angle-right"></i>
                                </div>
                            </a>

                            <a href="./NewSubscribers" class={this.props.newsubscription ? "list-group-item list-group-item-action d-flex justify-content-between active " : "list-group-item list-group-item-action d-flex justify-content-between"} >
                                <div>
                                    <i class="fas fa-users mr-2"></i>
                                    <span>My subscribers</span>
                                </div>
                                <div>
                                    <i class="fas fa-angle-right"></i>
                                </div>
                            </a>

                            <a href="./MySubscriptions" class={this.props.MySubscriptions ? "list-group-item list-group-item-action d-flex justify-content-between active " : "list-group-item list-group-item-action d-flex justify-content-between"}>
                                <div>
                                    <i class="fas fa-user-friends mr-2"></i>
                                    <span>My subscriptions</span>
                                </div>
                                <div>
                                    <i class="fas fa-angle-right"></i>
                                </div>
                            </a>

                            <a href="./Payments" class={this.props.payments ? "list-group-item list-group-item-action d-flex justify-content-between active " : "list-group-item list-group-item-action d-flex justify-content-between"}>
                                <div>
                                    <i class="fas fa-file-invoice-dollar mr-2"></i>
                                    <span>Payments</span>
                                </div>
                                <div>
                                    <i class="fas fa-angle-right"></i>
                                </div>
                            </a>

                            <a href="./PaymentMethod" class={this.props.paymentmethod ? "list-group-item list-group-item-action d-flex justify-content-between active" : "list-group-item list-group-item-action d-flex justify-content-between "}>
                                <div>
                                    <i class="far fa-credit-card mr-2"></i>
                                    <span>Payout method</span>
                                </div>
                                <div>
                                    <i class="fas fa-angle-right"></i>
                                </div>
                            </a>

                            <a href="./Withdrawals" class={this.props.withdrawals ? "list-group-item list-group-item-action d-flex justify-content-between active " : " list-group-item list-group-item-action d-flex justify-content-between "}>
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
            </div >
        )
    }
}

export default SideDashboard