import React from 'react';
import '../bootstrap.min.css'
import '../index.css'
import '../smartphoto.min.css'
import '../styles.css'
import '../plyr.css'
import '../core.min.css'
import logo1 from '../assets/logo-1606859584.png'
import logo2 from "../assets/logo_2-1606859477.png";
export default class Footer extends React.Component {
    render() {
        return (
            <div>
                <div class="py-5 bg-white  border-top ">
                    <footer class="container">
                        <div class="row">
                            <div class="col-md-3">
                                <a href="https://bounla.com/">
                                    <img src={logo2} alt="Bounla | Social Private Network For Influencers And Fans" class="max-w-125"></img>
                                </a> </div>
                            <div class="col-md-3">
                                <h5>About</h5>
                                <ul class="list-unstyled">
                                    <li><a class="link-footer" href="https://bounla.com/p/terms-of-service">Terms of Service</a></li>
                                    <li><a class="link-footer" href="https://bounla.com/p/privacy">Privacy</a></li>
                                    <li><a class="link-footer" href="https://bounla.com/p/about">About us</a></li>
                                    <li><a class="link-footer" href="https://bounla.com/p/how-it-works">How it works</a></li>
                                    <li><a class="link-footer" href="https://bounla.com/p/cookies">Cookies Policy</a></li>
                                    <li><a class="link-footer" href="https://bounla.com/p/billing-support">Billing Support</a></li>
                                    <li><a class="link-footer" href="https://bounla.com/p/18us-compliance-statement">18 U.S.C. 2257
          Record-Keeping Requirements Compliance Statement</a></li>
                                    <li><a class="link-footer" href="https://bounla.com/contact">Contact us</a></li>
                                    <li><a class="link-footer" href="https://bounla.com/blog">Blog</a></li>
                                </ul>
                            </div>
                            <div class="col-md-3">
                                <h5>Categories</h5>
                                <ul class="list-unstyled">
                                    <li><a class="link-footer" href="https://bounla.com/category/amateurs">Amateurs</a></li>
                                    <li><a class="link-footer" href="https://bounla.com/category/amatrices">Amatrices</a></li>
                                    <li><a class="link-footer" href="https://bounla.com/category/animation">Animation</a></li>
                                    <li><a class="link-footer" href="https://bounla.com/category/artist">Artist</a></li>
                                    <li><a class="link-footer" href="https://bounla.com/category/others">Autres</a></li>
                                    <li><a class="link-footer" href="https://bounla.com/category/designer">Designer</a></li>

                                    <li><a class="link-footer" href="https://bounla.com/creators">Explore <i
                                        class="fa fa-long-arrow-alt-right"></i></a></li>
                                </ul>
                            </div>
                            <div class="col-md-3">
                                <h5>Links</h5>
                                <ul class="list-unstyled">
                                    <li><a class="link-footer" href="https://bounla.com/login">Login</a></li>
                                    <li>
                                    </li>
                                    <li><a class="link-footer" href="https://bounla.com/signup">Sign up</a></li>
                                    <li>

                                        <div class="btn-group dropup d-inline ">
                                        </div>
                                    </li>
                                    <li>
                                        <a class="link-footer dropdown-toggle text-decoration-none" href="javascript:;" data-toggle="dropdown">
                                            <i class="fa fa-globe mr-1"></i>
          English </a>

                                        <div class="dropdown-menu">
                                            <a class="dropdown-item  active text-white ">
                                                <i class="fa fa-check mr-1"></i> English
          </a>
                                            <a href="https://bounla.com/lang/fr" class="dropdown-item ">
                                                Français
          </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </footer>
                </div>

                <footer class="py-3  bg-light  text-muted text-center">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 copyright">
                                © 2020 Bounla | Social Private Network For Influencers And Fans
  </div>
                        </div>
                    </div>
                </footer >
                <footer>
                    Please visit
<script src="./Bounla _ Social Private Network For Influencers And Fans_files/epoch_descriptor.php"></script><a
                        href="https://epoch.com/" target="_blank">EPOCH.COM</a>, our authorized sales agent.
</footer>

                <div data-id="KJ641RT9OT8YV">
                    <div class="smartphoto" aria-hidden="true" role="dialog">
                        <div class="smartphoto-body">
                            <div class="smartphoto-inner">
                                <div class="smartphoto-header">
                                    <span class="smartphoto-count">1/</span>
                                    <span class="smartphoto-caption" aria-live="polite" tabindex="-1"></span>
                                    <button class="smartphoto-dismiss" data-action-click="hidePhoto()"><span class="smartphoto-sr-only">close
        the image dialog</span></button>
                                </div>
                                <div class="smartphoto-content" data-action-click="hidePhoto()">
                                </div>
                                <ul class="smartphoto-list">
                                </ul>
                                <ul class="smartphoto-arrows">
                                    <li class="smartphoto-arrow-left" aria-hidden="true"><a href="https://bounla.com/#"
                                        data-action-click="gotoSlide()" role="button"><span class="smartphoto-sr-only">go to the previous
          image</span></a></li>
                                    <li class="smartphoto-arrow-right" aria-hidden="true"><a href="https://bounla.com/#"
                                        data-action-click="gotoSlide()" role="button"><span class="smartphoto-sr-only">go to the next
          image</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}