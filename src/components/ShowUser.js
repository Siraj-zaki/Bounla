import React from 'react'
import Header from "../components/Header"
import '../bootstrap.min.css'
import '../index.css'
import '../smartphoto.min.css'
import '../styles.css'
import '../plyr.css'
import '../core.min.css'
import { Tabs, Tab } from 'react-bootstrap-tabs';
import img1 from "../assets/default.jpg"



export default class ShowUser extends React.Component {
    data = () => {
        return (
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
        )
    }
    post = () => {
        return (
            <li class=" navbar-user-mobile">
                <small class="btn-block sm-btn-size">0</small>
                <a href="javascript:;" title="Posts"><i class="feather icon-file-text"></i> <span class="d-lg-inline-block d-none">Posts</span></a>
            </li>
        )
    }
    photo = () => {
        return (
            <li class="navbar-user-mobile">
                <small class="btn-block sm-btn-size">0</small>
                <a href="https://bounla.com/ee96c803/photos" title="Photos"><i class="feather icon-image"></i> <span class="d-lg-inline-block d-none">Photos</span></a>
            </li>
        )
    }
    video = () => {
        return (
            <li class="navbar-user-mobile">
                <small class="btn-block sm-btn-size">0</small>
                <a href="https://bounla.com/ee96c803/photos" title="Videos"><i class="feather icon-image"></i> <span class="d-lg-inline-block d-none">Videos</span></a>
            </li>
        )
    }
    audio = () => {
        return (
            <li class="navbar-user-mobile">
                <small class="btn-block sm-btn-size">0</small>
                <a href="https://bounla.com/ee96c803/photos" title="Audio"><i class="feather icon-image"></i> <span class="d-lg-inline-block d-none">Audio</span></a>
            </li>
        )
    }
    render() {
        return (
            <div>
                <div>
                    <div style={{ backgroundColor: 'white' }}>
                        <Header Creators login />
                        <div class="jumbotron jumbotron-cover-user home m-0 position-relative" style={{ padding: "125px  0", background: "#505050" }}>

                            <div class="progress-upload-cover" style={{ width: "0%", display: "none" }}></div>

                            <form action="https://bounla.com/upload/cover" method="POST" id="formCover" accept-charset="UTF-8" enctype="multipart/form-data">
                                <input type="hidden" name="_token" value="SjuBBJ4oNJG4BRccfpo6gim1LpZ2HlzP4VJIKPuP"></input>    <input type="file" name="image" id="uploadCover" accept="image/*" class="visibility-hidden"></input>
                            </form>

                            <button class="btn btn-cover-upload" id="coverFile" onclick={""}><i class="fa fa-camera mr-1"></i> <span class="d-none d-lg-inline">Change Cover</span></button>
                        </div>

                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="w-100 text-center py-4 img-profile-user">

                                        <div class="text-center position-relative avatar-wrap shadow ">
                                            <div class="progress-upload" style={{ display: "none" }}>0%</div>


                                            <form action="https://bounla.com/upload/avatar" method="POST" id="formAvatar" accept-charset="UTF-8" enctype="multipart/form-data">
                                                <input type="hidden" name="_token" value="SjuBBJ4oNJG4BRccfpo6gim1LpZ2HlzP4VJIKPuP"></input>              <input type="file" name="avatar" id="uploadAvatar" accept="image/*" class="visibility-hidden"></input>
                                            </form>

                                            <a href="javascript:;" class="position-absolute button-avatar-upload" id="avatar_file">
                                                <i class="fa fa-camera"></i>
                                            </a>

                                            <img src="./Support to SIRAJMUNEER - Bounla _ Social Private Network For Influencers And Fans_files/ee96c803-81610538097lvlntpj5uk.png" width="150" height="150" alt="SIRAJMUNEER" class="rounded-circle img-user mb-2 avatarUser"></img>
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

                                                </span>

                                            </p>

                                            <div class="d-flex-user justify-content-center mb-2">
                                                <a href="./EditMyPage" class="btn btn-primary btn-profile mr-1"><i class="fa fa-pencil-alt mr-2"></i> Edit my page</a>




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
                                        <Tabs classname="tab-style parent-tab" onSelect={(index, label) => console.log(label + ' selected')}>
                                            <Tab label={this.post()}>{this.data()}</Tab>
                                            <Tab classname="tab-style" label={this.photo()}>{this.data()}</Tab>
                                            <Tab classname="tab-style" label={this.video()}>{this.data()}</Tab>
                                            <Tab classname="tab-style" label={this.audio()}>{this.data()}</Tab>
                                        </Tabs>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="modal fade" id="tipForm" tabindex="-1" role="dialog" aria-labelledby="modal-form" aria-hidden="true">
                        <div class="modal-dialog modal- modal-dialog-centered modal-sm" role="document">
                            <div class="modal-content">
                                <div class="modal-body p-0">
                                    <div class="card bg-white shadow border-0">
                                        <div class="card-header pb-2 border-0 position-relative" style={{ height: "100px", background: "#ec5165  no-repeat center center", backgroundSize: "cover" }}>

                                        </div>
                                        <div class="card-body px-lg-5 py-lg-5 position-relative">

                                            <div class="text-muted text-center mb-3 position-relative modal-offset">
                                                <img src="./Support to SIRAJMUNEER - Bounla _ Social Private Network For Influencers And Fans_files/default-1603288901.png" width="100" class="avatar-modal rounded-circle mb-1"></img>
                                                <h6>
                                                    Send tip to <span class="userNameTip"></span>
                                                </h6>
                                            </div>

                                            <form method="post" action="https://bounla.com/send/tip" id="formSendTip">

                                                <input type="hidden" name="id" class="userIdInput" value="8"></input>
                                                <input type="hidden" id="cardholder-name" value="SIRAJMUNEER"></input>
                                                <input type="hidden" id="cardholder-email" value="sirajmuneerfsd1@gmail.com"></input>
                                                <input type="number" min="" autocomplete="off" id="onlyNumber" class="form-control mb-3" name="amount" placeholder="Tip amount"></input>
                                                <input type="hidden" name="_token" value="SjuBBJ4oNJG4BRccfpo6gim1LpZ2HlzP4VJIKPuP"></input>
                                                <div class="custom-control custom-radio mb-3">
                                                    <input name="payment_gateway_tip" value="2" id="tip_radio2" checked="" class="custom-control-input" type="radio"></input>
                                                    <label class="custom-control-label" for="tip_radio2">
                                                        <span><strong>Debit / Credit Card (Stripe)</strong></span>
                                                    </label>
                                                </div>

                                                <div id="stripeContainerTip" class="">
                                                    <div id="card-element" class="margin-bottom-10 StripeElement StripeElement--empty"><div class="__PrivateStripeElement" style={{ margin: "0px !important", padding: "0px !important", border: "none !important", display: "block !important", background: "transparent !important", position: "relative !important", opacity: "1 !important" }}><iframe frameborder="0" allowtransparency="true" scrolling="no" name="__privateStripeFrame5705" allowpaymentrequest="true" src="./Support to SIRAJMUNEER - Bounla _ Social Private Network For Influencers And Fans_files/elements-inner-card-d56c18638142f5a8b9b3de4fb85168d9.html" title="Secure card payment input frame" style={{ border: "none !important", margin: "0px !important", padding: "0px !important", width: "1px !important", minWidth: "100% !important", overflow: "hidden !important", display: "block !important", userSelect: "none !important", willChange: "transform !important", height: "19.2px" }}></iframe><input class="__PrivateStripeElement-input" aria-hidden="true" aria-label=" " autocomplete="false" maxlength="1" style={{ border: "none !important", display: "block !important", position: "absolute !important ", height: "1px !important", top: "-1px !important", left: "0px !important", padding: "0px !important", margin: "0px !important", width: "100% !important", opacity: "0 !important", background: "transparent !important ", pointerEvents: "none !important", fontSize: "16px !important" }}></input> </div></div>

                                                    <div id="card-errors" class="alert alert-danger display-none" role="alert"></div>
                                                </div>


                                                <div class="alert alert-danger display-none" id="errorTip">
                                                    <ul class="list-unstyled m-0" id="showErrorsTip"></ul>
                                                </div>

                                                <div class="text-center">
                                                    <button type="submit" id="tipBtn" class="btn btn-primary mt-4 tipBtn"><i></i> Pay</button>
                                                    <button type="button" class="btn e-none mt-4" data-dismiss="modal">Cancel</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div id="bodyContainer"></div>
                <div data-id="KJVCRTEQH9BK4"><div class="smartphoto" aria-hidden="true" role="dialog">
                    <div class="smartphoto-body">
                        <div class="smartphoto-inner">
                            <div class="smartphoto-header">
                                <span class="smartphoto-count">1/</span>
                                <span class="smartphoto-caption" aria-live="polite" tabindex="-1"></span>
                                <button class="smartphoto-dismiss" data-action-click="hidePhoto()"><span class="smartphoto-sr-only">close the image dialog</span></button>
                            </div>
                            <div class="smartphoto-content" data-action-click="hidePhoto()">
                            </div>
                            <ul style={{ transform: "translate(px,px)" }} class="smartphoto-list">
                            </ul>
                            <ul class="smartphoto-arrows">
                                <li class="smartphoto-arrow-left" aria-hidden="true"><a href="https://bounla.com/ee96c803#" data-action-click="gotoSlide()" role="button"><span class="smartphoto-sr-only">go to the previous image</span></a></li>
                                <li class="smartphoto-arrow-right" aria-hidden="true"><a href="https://bounla.com/ee96c803#" data-action-click="gotoSlide()" role="button"><span class="smartphoto-sr-only">go to the next image</span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div><iframe frameborder="0" allowtransparency="true" scrolling="no" name="__privateStripeMetricsController5700" allowpaymentrequest="true" src="./Support to SIRAJMUNEER - Bounla _ Social Private Network For Influencers And Fans_files/m-outer-d9e5e2bfda26c81fe55a41963856c287.html" aria-hidden="true" tabindex="-1" style={{ border: "none !important", margin: "0px !important", padding: "0px !important", width: "1px !important", minWidth: "100% !important", overflow: "hidden !important", display: "block !important", visibility: "hidden !important", position: "fixed !important", height: "1px !important", pointerEvents: "none !important", userSelect: "none !important" }}></iframe><div class="sweet-overlay" tabindex="-1" style={{ opacity: "-0.01", display: "none" }}></div><div class="sweet-alert hideSweetAlert" data-custom-class="" data-has-cancel-button="false" data-has-confirm-button="true" data-allow-outside-click="false" data-has-done-function="false" data-animation="pop" data-timer="null" style={{ display: "none", marginTop: "-169px", opacity: "-0.01" }}><div class="sa-icon sa-error" style={{ display: "block" }}>
                    <span class="sa-x-mark">
                        <span class="sa-line sa-left"></span>
                        <span class="sa-line sa-right"></span>
                    </span>
                </div><div class="sa-icon sa-warning" style={{ display: "none" }}>
                        <span class="sa-body"></span>
                        <span class="sa-dot"></span>
                    </div><div class="sa-icon sa-info" style={{ display: "none" }}></div><div class="sa-icon sa-success" style={{ display: "none" }}>
                        <span class="sa-line sa-tip"></span>
                        <span class="sa-line sa-long"></span>

                        <div class="sa-placeholder"></div>
                        <div class="sa-fix"></div>
                    </div><div class="sa-icon sa-custom" style={{ display: "none" }}></div><h2>Oops...</h2>
                    <p style={{ display: "block" }}>The Image has invalid image dimensions (800 x 400 px).</p>
                    <fieldset>
                        <input type="text" tabindex="3" placeholder=""></input>
                        <div class="sa-input-error"></div>
                    </fieldset><div class="sa-error-container">
                        <div class="icon">!</div>
                        <p>Not valid!</p>
                    </div><div class="sa-button-container">
                        <button class="cancel" tabindex="2" style={{ display: "none", boxShadow: 'none' }}>Cancel</button>
                        <div class="sa-confirm-button-container">
                            <button class="confirm" tabindex="1" style={{ display: "inlineBlock", backgroundColor: "rgb(140, 212, 245)", boxShadow: "rgba(140, 212, 245, 0.8) 0px 0px 2px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px inset" }}>Ok</button><div class="la-ball-fall">
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}