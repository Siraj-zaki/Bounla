import React from 'react'
import Header from "../components/Header"
import '../bootstrap.min.css'
import '../index.css'
import '../smartphoto.min.css'
import '../styles.css'
import '../plyr.css'
import '../core.min.css'
import img1 from "../assets/default.jpg"



export default class ShowUser extends React.Component {
    render() {
        return (
            <div>
            <div style={{backgroundColor:'white'}}>
                <Header Creators />
                <div class="jumbotron jumbotron-cover-user home m-0 position-relative" style={{padding:  "125px 0"   ,background: "#505050"}}></div>

                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="w-100 text-center py-4 img-profile-user">

                                    <div class="text-center position-relative avatar-wrap shadow  user-offline-profile overflow-visible ">
                                        <div class="progress-upload">0%</div>


                                        <img src={img1} height="150" width="150" alt="SIRAJMUNEER" class="rounded-circle img-user mb-2 avatarUser"></img>
                                    </div>

                                    <div class="media-body">
                                        <h4 class="mt-1">
                                            SIRAJMUNEER

                            <small class="verified" title="" data-toggle="tooltip" data-placement="top" data-original-title="Verified account!">
                                                <i class="feather icon-check-circle"></i>
                                            </small>

                                        </h4>

                                        <p>
                                            <span>
                                                <span class="w-100 d-block">
                                                    <small>Active</small>
                                                    <small class="timeAgo" data="2021-01-06T23:54:26+01:00">22 hours ago</small>
                                                </span>

                                            </span>

                                        </p>

                                        <div class="d-flex-user justify-content-center mb-2">



                                            <button data-toggle="modal" data-target="#loginFormModal" data-url="https://bounla.com/messages/8/ee96c803" title="Message" class="btn btn-google btn-profile mr-1">
                                                <i class="feather icon-send mr-1 mr-lg-0"></i> <span class="d-lg-none">Message</span>
                                            </button>

                                            <button class="btn btn-profile btn-google" title="Share" id="dropdownUserShare" role="button" data-toggle="modal" data-target=".share-modal">
                                                <i class="far fa-share-square mr-1 mr-lg-0"></i> <span class="d-lg-none">Share</span>
                                            </button>
                                            <div class="modal fade share-modal" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-dialog-centered" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h5 class="modal-title" id="mySmallModalLabel">Share</h5>
                                                            <button type="button" class="close close-inherit" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true"><i class="fa fa-times-circle"></i></span>
                                                            </button>
                                                        </div>
                                                        <div class="modal-body">
                                                            <div class="container-fluid">
                                                                <div class="row">
                                                                    <div class="col-md-4 col-6 mb-3">
                                                                        <a href="https://www.facebook.com/sharer/sharer.php?u=https://bounla.com/ee96c803" title="Facebook" target="_blank" class="social-share text-muted d-block text-center h6">
                                                                            <i class="fab fa-facebook-square facebook-btn"></i>
                                                                            <span class="btn-block mt-3">Facebook</span>
                                                                        </a>
                                                                    </div>
                                                                    <div class="col-md-4 col-6 mb-3">
                                                                        <a href="https://twitter.com/intent/tweet?url=https://bounla.com/ee96c803&amp;text=SIRAJMUNEER" data-url="https://bounla.com/ee96c803" class="social-share text-muted d-block text-center h6" target="_blank" title="Twitter">
                                                                            <i class="fab fa-twitter twitter-btn"></i> <span class="btn-block mt-3">Twitter</span>
                                                                        </a>
                                                                    </div>
                                                                    <div class="col-md-4 col-6 mb-3">
                                                                        <a href="whatsapp://send?text=https://bounla.com/ee96c803" data-action="share/whatsapp/share" class="social-share text-muted d-block text-center h6" title="WhatsApp">
                                                                            <i class="fab fa-whatsapp btn-whatsapp"></i> <span class="btn-block mt-3">WhatsApp</span>
                                                                        </a>
                                                                    </div>

                                                                    <div class="col-md-4 col-6 mb-3">
                                                                        <a href="mailto:?subject=SIRAJMUNEER&amp;body=https://bounla.com/ee96c803" class="social-share text-muted d-block text-center h6" title="Email">
                                                                            <i class="far fa-envelope"></i> <span class="btn-block mt-3">Email</span>
                                                                        </a>
                                                                    </div>
                                                                    <div class="col-md-4 col-6 mb-3">
                                                                        <a href="sms://?body=Check this https://bounla.com/ee96c803" class="social-share text-muted d-block text-center h6" title="Text message">
                                                                            <i class="fa fa-sms"></i> <span class="btn-block mt-3">Text message</span>
                                                                        </a>
                                                                    </div>
                                                                    <div class="col-md-4 col-6 mb-3">
                                                                        <a href="javascript:void(0);" id="btn_copy_url" class="social-share text-muted d-block text-center h6 link-share" title="Copy link">
                                                                            <i class="fas fa-link"></i> <span class="btn-block mt-3">Copy link</span>
                                                                        </a>
                                                                        <input type="hidden" readonly="readonly" id="copy_link" class="form-control" value="https://bounla.com/ee96c803"></input>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>


                                    </div>
                                </div>

                                <ul class="nav nav-profile justify-content-center">
                                    <li class="nav-link active  navbar-user-mobile">
                                        <small class="btn-block sm-btn-size">0</small>
                                        <a href="javascript:;" title="Posts"><i class="feather icon-file-text"></i> <span class="d-lg-inline-block d-none">Posts</span></a>
                                    </li>

                                    <li class="nav-link  navbar-user-mobile">
                                        <small class="btn-block sm-btn-size">0</small>
                                        <a href="https://bounla.com/ee96c803/photos" title="Photos"><i class="feather icon-image"></i> <span class="d-lg-inline-block d-none">Photos</span></a>
                                    </li>

                                    <li class="nav-link  navbar-user-mobile">
                                        <small class="btn-block sm-btn-size">0</small>
                                        <a href="https://bounla.com/ee96c803/videos" title="Video"><i class="feather icon-video"></i> <span class="d-lg-inline-block d-none">Videos</span></a>
                                    </li>

                                    <li class="nav-link  navbar-user-mobile">
                                        <small class="btn-block sm-btn-size">0</small>
                                        <a href="https://bounla.com/ee96c803/audio" title="Audio"><i class="feather icon-mic"></i> <span class="d-lg-inline-block d-none">Audio</span></a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="container py-4 pb-5">
                        <div class="row">
                            <div class="col-lg-4 mb-3">

                                <button type="button" class="btn btn-secondary btn-block mb-2 d-lg-none" data-toggle="collapse" data-target="#navbarUserHome" aria-controls="navbarCollapse" aria-expanded="false">
                                    <i class="fa fa-bars myicon-right"></i> About
      	</button>

                                <div class="sticky-top navbar-collapse collapse d-lg-block" id="navbarUserHome">
                                    <div class="card mb-3">
                                        <div class="card-body">
                                            <h6 class="card-title">About SIRAJMUNEER</h6>
                                            <p class="card-text position-relative update-text">

                                                <small class="btn-block m-0 mb-1">
                                                    <i class="fa fa-user-circle mr-1 text-muted"></i> Member since 06 Jan, 2021
              </small>
                            Welcome to my page. If you like my content, please consider support. Thank you for your support!
                        </p>








                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-body">
                                        <small>© 2021 Bounla | Social Private Network For Influencers And Fans</small>
                                        <ul class="list-inline mb-0">
                                            <li class="list-inline-item"><a class="link-footer" href="https://bounla.com/p/terms-of-service">
                                                Terms of Service
      </a>
                                            </li>
                                            <li class="list-inline-item"><a class="link-footer" href="https://bounla.com/p/privacy">
                                                Privacy
      </a>
                                            </li>
                                            <li class="list-inline-item"><a class="link-footer" href="https://bounla.com/p/about">
                                                About us
      </a>
                                            </li>
                                            <li class="list-inline-item"><a class="link-footer" href="https://bounla.com/p/how-it-works">
                                                How it works
      </a>
                                            </li>
                                            <li class="list-inline-item"><a class="link-footer" href="https://bounla.com/p/cookies">
                                                Cookies Policy
      </a>
                                            </li>
                                            <li class="list-inline-item"><a class="link-footer" href="https://bounla.com/p/billing-support">
                                                Billing Support
      </a>
                                            </li>
                                            <li class="list-inline-item"><a class="link-footer" href="https://bounla.com/p/18us-compliance-statement">
                                                18 U.S.C. 2257 Record-Keeping Requirements Compliance Statement
      </a>
                                            </li>
                                            <li class="list-inline-item"><a class="link-footer" href="https://bounla.com/contact">Contact us</a></li>
                                            <li class="list-inline-item"><a class="link-footer" href="https://bounla.com/blog">Blog</a></li>

                                            <div class="btn-group dropup d-inline ">
                                                <li class="list-inline-item">
                                                    <a class="-footer dropdown-toggle text-decoration-none" href="javascript:;" data-toggle="dropdown">
                                                        <i class="fa fa-globe mr-1"></i>
                       English
                        </a>

                                                    <div class="dropdown-menu">
                                                        <a class="dropdown-item  active text-white ">
                                                            <i class="fa fa-check mr-1"></i>  English
          </a>
                                                        <a href="https://bounla.com/lang/es" class="dropdown-item ">
                                                            Español
          </a>
                                                        <a href="https://bounla.com/lang/fr" class="dropdown-item ">
                                                            Français
          </a>
                                                    </div>
                                                </li>
                                            </div>

                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="col-lg-8">


                            <div class="grid-updates"></div>

                            <div class="my-5 text-center no-updates">
                                <span class="btn-block mb-3">
                                    <i class="fa fa-photo-video ico-no-result"></i>
                                </span>
                                <h4 class="font-weight-light">No posts yet</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="loginFormModal" tabindex="-1" role="dialog" aria-labelledby="modal-form" aria-hidden="true">
                    <div class="modal-dialog modal- modal-sm" role="document">
                        <div class="modal-content">
                            <div class="modal-body p-0">
                                <div class="card-body px-lg-5 py-lg-5 position-relative">


                                    <form method="POST" action="https://bounla.com/login" data-url-login="https://bounla.com/login" data-url-register="https://bounla.com/signup" id="formLoginRegister" enctype="multipart/form-data">
                                        <input type="hidden" name="_token" value="n6tJ5Dry0Rxe1h7YY5nzHaRZIcue23ZEQcYvWRjF"></input>
                                        <input type="hidden" name="isModal" id="isModal" value="true"></input>
                                        <div class="form-group mb-3 display-none" id="full_name">
                                            <div class="input-group input-group-alternative">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><i class="fa fa-user-circle"></i></span>
                                                </div>
                                                <input class="form-control" value="" placeholder="Full name" name="name" type="text"></input>
                                            </div>
                                        </div>

                                        <div class="form-group mb-3 display-none" id="email">
                                            <div class="input-group input-group-alternative">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><i class="fa fa-envelope"></i></span>
                                                </div>
                                                <input class="form-control" value="" placeholder="Email" name="email" type="text"></input>
                                            </div>
                                        </div>

                                        <div class="form-group mb-3" id="username_email">
                                            <div class="input-group input-group-alternative">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><i class="fa fa-envelope"></i></span>
                                                </div>
                                                <input class="form-control" value="" placeholder="Username or Email" name="username_email" type="text"></input>

                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="input-group input-group-alternative" id="showHidePassword">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><i class="fa fa-key"></i></span>
                                                </div>
                                                <input name="password" type="password" class="form-control" placeholder="Password"></input>
                                                <div class="input-group-append">
                                                    <span class="input-group-text c-pointer"><i class="fa fa-eye-slash"></i></span>
                                                </div>
                                            </div>
                                            <small class="form-text text-muted">
                                                <a href="https://bounla.com/password/reset" id="forgotPassword">
                                                    Forgot Password?
                    </a>
                                            </small>
                                        </div>

                                        <div class="custom-control custom-control-alternative custom-checkbox" id="remember">
                                            <input class="custom-control-input" id=" customCheckLogin" type="checkbox" name="remember"></input>
                                            <label class="custom-control-label" for=" customCheckLogin">
                                                <span>Remember me</span>
                                            </label>
                                        </div>

                                        <div class="custom-control custom-control-alternative custom-checkbox display-none" id="agree_gdpr">
                                            <input class="custom-control-input" id="customCheckRegister" type="checkbox" name="agree_gdpr"></input>
                                            <label class="custom-control-label" for="customCheckRegister">
                                                <span>I agree with the processing of personal data
                          <a href="https://bounla.com/p/privacy" target="_blank">Privacy Policy</a>
                                                </span>
                                            </label>
                                        </div>

                                        <div class="alert alert-danger display-none mb-0 mt-3" id="errorLogin">
                                            <ul class="list-unstyled m-0" id="showErrorsLogin"></ul>
                                        </div>

                                        <div class="text-center">
                                            <button type="submit" id="btnLoginRegister" class="btn btn-primary mt-4 w-100"><i></i> Login</button>
                                        </div>
                                    </form>

                                    <small class="btn-block text-center mt-3">Protected by reCAPTCHA <a href="https://policies.google.com/privacy" target="_blank">Privacy</a> - <a href="https://policies.google.com/terms" target="_blank">Terms</a></small>

                                    <div class="row mt-3">
                                        <div class="col-12 text-center">
                                            <a href="javascript:void(0);" id="toggleLogin" data-not-account="Don&#39;t have an account?" data-already-account="Already have an account?" data-text-login="Login" data-text-register="Sign up">
                                                <strong>Don't have an account?</strong>
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

        )
    }
}