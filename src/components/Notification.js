import React from 'react'
import Footer from './Footer'
import Header from './Header'
import SideDashboard from './SideDashboard'

class Notification extends React.Component {
    render() {
        return (
            <div>
                <Header Creators login />
                <section class="section section-sm">
                    <div class="container">
                        <div class="row justify-content-center text-center mb-sm">
                            <div class="col-lg-8 py-5">
                                <h2 class="mb-0 font-montserrat">
                                    <i class="far fa-bell mr-2"></i> Notifications

            <small class="font-tiny">
                                        <a href="javascript:;" data-toggle="modal" data-target="#notifications"><i class="fa fa-cog ml-2"></i></a>

                                    </small>
                                </h2>
                                <p class="lead text-muted mt-0">New subscribers, likes and new comments</p>
                            </div>
                        </div>
                        <div class="row">

                            <div class="col-md-6 col-lg-3 mb-3">

                                <button type="button" class="btn btn-primary btn-block mb-2 d-lg-none" data-toggle="collapse" data-target="#navbarUserHome" aria-controls="navbarCollapse" aria-expanded="false">
                                    <i class="fa fa-bars myicon-right"></i> Menu
	</button>

                                <SideDashboard notification />
                            </div>
                            <div class="col-md-6 col-lg-9 mb-5 mb-lg-0">
                                <div class="my-5 text-center">
                                    <span class="btn-block mb-3">
                                        <i class="far fa-bell-slash ico-no-result"></i>
                                    </span>
                                    <h4 class="font-weight-light">No have notifications</h4>
                                </div>


                            </div>
                            <div class="modal fade" id="notifications" tabindex="-1" aria-labelledby="modal-form" aria-hidden="true" style={{ display: "none" }}>
                                <div class="modal-dialog modal- modal-dialog-centered modal-dialog-scrollable modal-sm" role="document">
                                    <div class="modal-content">
                                        <div class="modal-body p-0">
                                            <div class="card bg-white shadow border-0">

                                                <div class="card-body px-lg-5 py-lg-5">

                                                    <div class="mb-3">
                                                        <h6 class="position-relative">Receive notifications when:
                  <small data-dismiss="modal" class="btn-cancel-msg"><i class="fa fa-times"></i></small>
                                                        </h6>
                                                    </div>

                                                    <form method="POST" action="https://bounla.com/notifications/settings" id="form">

                                                        <input type="hidden" name="_token" value="EbSMDQl5D2UaBhCz9lpKXuCInrf1mPphf8N1M1Ea"></input>
                                                        <div class="custom-control custom-switch">
                                                            <input type="checkbox" class="custom-control-input" name="notify_new_subscriber" value="yes" checked="" id="customSwitch1"></input>
                                                            <label class="custom-control-label switch" for="customSwitch1">Someone has subscribed to my content</label>
                                                        </div>

                                                        <div class="custom-control custom-switch">
                                                            <input type="checkbox" class="custom-control-input" name="notify_liked_post" value="yes" checked="" id="customSwitch2"></input>
                                                            <label class="custom-control-label switch" for="customSwitch2">Someone liked my post</label>
                                                        </div>

                                                        <div class="custom-control custom-switch">
                                                            <input type="checkbox" class="custom-control-input" name="notify_commented_post" value="yes" checked="" id="customSwitch3"></input>
                                                            <label class="custom-control-label switch" for="customSwitch3">Someone commented my post</label>
                                                        </div>

                                                        <div class="mt-3">
                                                            <h6 class="position-relative">Email notification
                  </h6>
                                                        </div>

                                                        <div class="custom-control custom-switch">
                                                            <input type="checkbox" class="custom-control-input" name="email_new_subscriber" value="yes" checked="" id="customSwitch4"></input>
                                                            <label class="custom-control-label switch" for="customSwitch4">Someone has subscribed to my content</label>
                                                        </div>

                                                        <button type="submit" id="save" class="btn btn-primary btn-sm mt-3 w-100" data-msg="Save">
                                                            Save
                </button>

                                                    </form>

                                                </div>
                                            </div>
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

export default Notification