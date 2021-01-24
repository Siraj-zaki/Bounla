import React from "react"
import '../bootstrap.min.css'
import '../index.css'
import '../smartphoto.min.css'
import '../styles.css'
import '../plyr.css'
import '../core.min.css'
import img1 from '../assets/default.jpg'
import Card2 from '../components/Card2';
import Header from './Header';
export default class UserPage extends React.Component {
  render() {
    return (
      <div>
        <Header 
        Creators
        login
         />
        <div class="wrap-full-image">
          <div class="container-image"></div>
          <div class="btn-block details-full-image">
            <span class="icon-close" id="closeFull">×</span>
          </div>
          <div class="container-image-full"></div>
        </div>
        <section class="section section-sm">
          <div class="container pt-5">
            <div class="row">
              <div class="col-md-8 second">
                <div class="progress-wrapper display-none mb-3" id="progress">
                  <div class="progress-info">
                    <div class="progress-percentage">
                      <span class="percent">0%</span>
                    </div>
                  </div>
                  <div class="progress progress-xs">
                    <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <form method="POST" action="https://bounla.com/update/create" enctype="multipart/form-data" id="formUpdateCreate">
                  <input type="hidden" name="_token" value="bhIVGyPwJKPTucpQwuIancBUDMbaBUt9HaBL7wGq"></input>
                  <div class="card mb-4">
                    <div class="blocked display-none"></div>
                    <div class="card-body pb-0">
                      <div class="media">
                        <span class="rounded-circle mr-3">
                          <img src={img1} class="rounded-circle avatarUser" width="60" height="60"></img>
                        </span>
                        <div class="media-body">
                          <textarea name="description" id="updateDescription" data-post-length="250" rows="4" cols="40" placeholder="Write something..." class="form-control textareaAutoSize border-0" style={{ overflow: "hidden", overflowWrap: "break-word", height: "116px" }}></textarea>
                        </div>
                      </div>
                      <input class="custom-control-input d-none" id="customCheckLocked" type="checkbox" checked="" name="locked" value="yes"></input>
                      <div class="alert alert-danger my-3 display-none" id="errorUdpate">
                        <ul class="list-unstyled m-0" id="showErrorsUdpate"></ul>
                      </div>
                    </div>
                    <div class="card-footer bg-white border-0 pt-0">
                      <div class="justify-content-between align-items-center">
                        <input type="file" name="photo" id="filePhoto" accept="image/*,video/mp4,video/x-m4v,video/quicktime,audio/mp3" class="visibility-hidden"></input>
                        <button type="button" class="btn btn-upload e-none btn-link text-primary rounded-pill" title="Upload Media" onclick="$(&#39;#filePhoto&#39;).trigger(&#39;click&#39;)">
                          <i class="far fa-image f-size-25"></i>
                        </button>
                        <button type="button" id="contentLocked" class="btn btn-upload e-none btn-link text-primary rounded-pill " data-toggle="tooltip" data-placement="top" title="" data-original-title="Publish a locked content viewable only to your subscribers.">
                          <i class="fas fa-lock f-size-20"></i>
                        </button>
                        <span id="previewImage"></span>
                        <a id="removePhoto" class="btn e-none btn-danger text-white p-1 px-2 display-none" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i class="fa fa-trash-alt"></i></a>
                        <button type="submit" disabled="" class="btn btn-sm btn-primary rounded-pill float-right e-none" data-empty="You must enter at least 2 characters" data-error="Error occurred" data-msg-error="The connection has been lost" id="btnCreateUpdate">
                          <i></i> Publish
            </button>
                        <div id="the-count" class="float-right my-2 mr-2">
                          <small id="maximum">250</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <div class="grid-updates position-relative" id="updatesPaginator"></div>
                <div class="my-5 text-center no-updates">
                  <span class="btn-block mb-3">
                    <i class="fa fa-photo-video ico-no-result"></i>
                  </span>
                  <h4 class="font-weight-light">No posts yet</h4>
                </div>
              </div>
              <div class="col-md-4 mb-4 first">
                <button type="button" class="btn btn-primary btn-block mb-2 d-lg-none" data-toggle="collapse" data-target="#navbarUserHome" aria-controls="navbarCollapse" aria-expanded="false">
                  <i class="fa fa-bars myicon-right"></i> Menu
          </button>
                <div class="navbar-collapse collapse d-lg-block" id="navbarUserHome">
                  <div class="mb-2">
                    <h6 class="mb-3 text-muted font-weight-light">
                      Explore Creators
    <a href="https://bounla.com/creators" class="float-right">View all <small class="pl-1"><i class="fa fa-long-arrow-alt-right"></i></small></a>
                    </h6>
                    <ul class="list-group">

                    <Card2 />
                    <Card2 />
                    <Card2 />
                    <Card2 />
                    </ul>
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
            </div>
          </div>
        </section>
      </div>
    )
  }
}