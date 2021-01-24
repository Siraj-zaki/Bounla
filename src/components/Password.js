import React from 'react'
import Footer from './Footer'
import Header from './Header'
import SideDashboard from './SideDashboard'

class Password extends React.Component {
    render() {
        return (
            <div>
                <Header Creators login />
                <section class="section section-sm">
                    <div class="container">
                        <div class="row justify-content-center text-center mb-sm">
                            <div class="col-lg-8 py-5">
                                <h2 class="mb-0 font-montserrat"><i class="fa fa-key mr-2"></i> Password</h2>
                                <p class="lead text-muted mt-0">Update your password</p>
                            </div>
                        </div>
                        <div class="row">

                            <div class="col-md-6 col-lg-3 mb-3">

                                <button type="button" class="btn btn-primary btn-block mb-2 d-lg-none" data-toggle="collapse" data-target="#navbarUserHome" aria-controls="navbarCollapse" aria-expanded="false">
                                    <i class="fa fa-bars myicon-right"></i> Menu
	</button>

                                <SideDashboard password />
                            </div>
                            <div class="col-md-6 col-lg-9 mb-5 mb-lg-0">

                                <form method="POST" action="https://bounla.com/settings/password">

                                    <input type="hidden" name="_token" value="EbSMDQl5D2UaBhCz9lpKXuCInrf1mPphf8N1M1Ea"></input>
                                    <div class="form-group">
                                        <div class="input-group mb-4">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="fa fa-unlock-alt"></i></span>
                                            </div>
                                            <input class="form-control" name="old_password" placeholder="Old password" type="password" required></input>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="input-group mb-4">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="fa fa-lock"></i></span>
                                            </div>
                                            <input class="form-control" name="new_password" placeholder="New password" type="password" required></input>
                                        </div>
                                    </div>

                                    <button class="btn btn-1 btn-success btn-block" type="submit">Save changes</button>

                                </form>
                            </div>

                        </div>
                    </div>
                </section >
                <Footer />
            </div >
        )
    }
}

export default Password