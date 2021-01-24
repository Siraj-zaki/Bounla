import React from 'react'
import Footer from './Footer'
import Header from './Header'
import SideDashboard from './SideDashboard';
class EditMyPage extends React.Component {
    render() {
        return (
            <div>
                <Header Creators />
                <section class="section section-sm">
                    <div class="container">
                        <div class="row justify-content-center text-center mb-sm">
                            <div class="col-lg-8 py-5">
                                <h2 class="mb-0 font-montserrat"><i class="fa fa-pencil-alt mr-2"></i> Edit my page</h2>
                                <p class="lead text-muted mt-0">Tell us something about you.</p>
                            </div>
                        </div>
                        <div class="row">

                            <div class="col-md-6 col-lg-3 mb-3">

                                <button type="button" class="btn btn-primary btn-block mb-2 d-lg-none" data-toggle="collapse" data-target="#navbarUserHome" aria-controls="navbarCollapse" aria-expanded="false">
                                    <i class="fa fa-bars myicon-right"></i> Menu
	</button>
                                <SideDashboard edit />
                            </div>

                            <div class="col-md-6 col-lg-9 mb-5 mb-lg-0">



                                <form method="POST" action="https://bounla.com/settings/page" id="formEditPage" accept-charset="UTF-8" enctype="multipart/form-data">

                                    <input type="hidden" name="_token" value="uSTak0bmids2mEwgonIkpvX7ehmKDUvnlJLfniNO"></input>
                                    <input type="hidden" id="featured_content" name="featured_content" value=""></input>

                                    <div class="form-group">
                                        <label>Full name</label>
                                        <div class="input-group mb-4">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="far fa-user"></i></span>
                                            </div>
                                            <input class="form-control" name="full_name" required="" placeholder="Full name" value="SIRAJMUNEER" type="text"></input>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label>Username</label>
                                        <div class="input-group mb-4">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text pr-0">https://bounla.com/</span>
                                            </div>
                                            <input class="form-control" name="username" required="" placeholder="Username" value="ee96c803" type="text"></input>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <input class="form-control" placeholder="Email" disabled="" value="sirajmuneerfsd1@gmail.com" type="text"></input>
                                    </div>

                                    <div class="row form-group mb-0">
                                        <div class="col-md-6">
                                            <div class="input-group mb-4">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><i class="fa fa-user-tie"></i></span>
                                                </div>
                                                <input class="form-control" name="profession" placeholder="Profession/Ocupation" value="" type="text"></input>
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="input-group mb-4">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><i class="fa fa-language"></i></span>
                                                </div>
                                                <select name="language" class="form-control custom-select">
                                                    <option value="">(Language) Not specified</option>
                                                    <option selected="selected" value="en">English</option>
                                                    <option value="es">Español</option>
                                                    <option value="fr">Français</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row form-group mb-0">
                                        <div class="col-md-6">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><i class="fa fa-calendar-alt"></i></span>
                                                </div>
                                                <input class="form-control" name="birthdate" placeholder="Birthdate" value="" autocomplete="off" type="text"></input>
                                            </div>
                                            <small class="form-text text-muted mb-4">Valid formats: <strong>01/31/2000</strong> or <strong>31-01-2000</strong></small>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="input-group mb-4">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><i class="fa fa-venus-mars"></i></span>
                                                </div>
                                                <select required="" name="gender" class="form-control custom-select">
                                                    <option selected="selected" value="">(Gender) Not specified</option>
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row form-group mb-0">
                                        <div class="col-md-6">
                                            <div class="input-group mb-4">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><i class="fa fa-link"></i></span>
                                                </div>
                                                <input class="form-control" name="website" placeholder="Website" value="" type="text"></input>
                                            </div>
                                        </div>

                                        <div class="col-md-6" id="billing">
                                            <div class="input-group mb-4">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><i class="far fa-lightbulb"></i></span>
                                                </div>
                                                <select required="" name="categories_id" class="form-control custom-select">
                                                    <option value="14">Amateurs</option>
                                                    <option value="13">Amatrices</option>
                                                    <option value="5">Animation</option>
                                                    <option value="1">Artist</option>
                                                    <option value="10">Autres</option>
                                                    <option value="2">Designer</option>
                                                    <option value="4">Developer</option>
                                                    <option value="3">Drawing and Painting</option>
                                                    <option value="15">Modèles</option>
                                                    <option value="7">Photography</option>
                                                    <option value="9">Podcasts</option>
                                                    <option value="8">Video and Film</option>
                                                    <option value="12">Writing</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row form-group mb-0">

                                        <div class="col-lg-12 py-2">
                                            <small class="text-muted">-- Billing Information</small>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="input-group mb-4">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><i class="fa fa-building"></i></span>
                                                </div>
                                                <input class="form-control" name="company" placeholder="Company" value="" type="text"></input>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="input-group mb-4">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><i class="fa fa-globe"></i></span>
                                                </div>
                                                <select name="countries_id" class="form-control custom-select">
                                                    <option value="">Select your country</option>
                                                    <option value="3">Afghanistan</option>
                                                    <option value="4">Albania</option>
                                                    <option value="5">Algeria</option>
                                                    <option value="6">American Samoa</option>
                                                    <option value="7">Andorra</option>
                                                    <option value="8">Angola</option>
                                                    <option value="9">Anguilla</option>
                                                    <option value="10">Antarctica</option>
                                                    <option value="11">Antigua and/or Barbuda</option>
                                                    <option value="12">Argentina</option>
                                                    <option value="13">Armenia</option>
                                                    <option value="14">Aruba</option>
                                                    <option value="15">Australia</option>
                                                    <option value="16">Austria</option>
                                                    <option value="17">Azerbaijan</option>
                                                    <option value="18">Bahamas</option>
                                                    <option value="19">Bahrain</option>
                                                    <option value="20">Bangladesh</option>
                                                    <option value="21">Barbados</option>
                                                    <option value="22">Belarus</option>
                                                    <option value="23">Belgium</option>
                                                    <option value="24">Belize</option>
                                                    <option value="25">Benin</option>
                                                    <option value="26">Bermuda</option>
                                                    <option value="27">Bhutan</option>
                                                    <option value="28">Bolivia</option>
                                                    <option value="29">Bosnia and Herzegovina</option>
                                                    <option value="30">Botswana</option>
                                                    <option value="31">Bouvet Island</option>
                                                    <option value="32">Brazil</option>
                                                    <option value="33">British lndian Ocean Territory</option>
                                                    <option value="34">Brunei Darussalam</option>
                                                    <option value="35">Bulgaria</option>
                                                    <option value="36">Burkina Faso</option>
                                                    <option value="37">Burundi</option>
                                                    <option value="38">Cambodia</option>
                                                    <option value="39">Cameroon</option>
                                                    <option value="2">Canada</option>
                                                    <option value="40">Cape Verde</option>
                                                    <option value="41">Cayman Islands</option>
                                                    <option value="42">Central African Republic</option>
                                                    <option value="43">Chad</option>
                                                    <option value="44">Chile</option>
                                                    <option value="45">China</option>
                                                    <option value="46">Christmas Island</option>
                                                    <option value="47">Cocos (Keeling) Islands</option>
                                                    <option value="48">Colombia</option>
                                                    <option value="49">Comoros</option>
                                                    <option value="50">Congo</option>
                                                    <option value="51">Cook Islands</option>
                                                    <option value="52">Costa Rica</option>
                                                    <option value="53">Croatia (Hrvatska)</option>
                                                    <option value="54">Cuba</option>
                                                    <option value="55">Cyprus</option>
                                                    <option value="56">Czech Republic</option>
                                                    <option value="57">Denmark</option>
                                                    <option value="58">Djibouti</option>
                                                    <option value="59">Dominica</option>
                                                    <option value="60">Dominican Republic</option>
                                                    <option value="61">East Timor</option>
                                                    <option value="62">Ecuador</option>
                                                    <option value="63">Egypt</option>
                                                    <option value="64">El Salvador</option>
                                                    <option value="65">Equatorial Guinea</option>
                                                    <option value="66">Eritrea</option>
                                                    <option value="67">Estonia</option>
                                                    <option value="68">Ethiopia</option>
                                                    <option value="69">Falkland Islands (Malvinas)</option>
                                                    <option value="70">Faroe Islands</option>
                                                    <option value="71">Fiji</option>
                                                    <option value="72">Finland</option>
                                                    <option value="73">France</option>
                                                    <option value="74">France, Metropolitan</option>
                                                    <option value="75">French Guiana</option>
                                                    <option value="76">French Polynesia</option>
                                                    <option value="77">French Southern Territories</option>
                                                    <option value="78">Gabon</option>
                                                    <option value="79">Gambia</option>
                                                    <option value="80">Georgia</option>
                                                    <option value="81">Germany</option>
                                                    <option value="82">Ghana</option>
                                                    <option value="83">Gibraltar</option>
                                                    <option value="84">Greece</option>
                                                    <option value="85">Greenland</option>
                                                    <option value="86">Grenada</option>
                                                    <option value="87">Guadeloupe</option>
                                                    <option value="88">Guam</option>
                                                    <option value="89">Guatemala</option>
                                                    <option value="90">Guinea</option>
                                                    <option value="91">Guinea-Bissau</option>
                                                    <option value="92">Guyana</option>
                                                    <option value="93">Haiti</option>
                                                    <option value="94">Heard and Mc Donald Islands</option>
                                                    <option value="95">Honduras</option>
                                                    <option value="96">Hong Kong</option>
                                                    <option value="97">Hungary</option>
                                                    <option value="98">Iceland</option>
                                                    <option value="99">India</option>
                                                    <option value="100">Indonesia</option>
                                                    <option value="101">Iran (Islamic Republic of)</option>
                                                    <option value="102">Iraq</option>
                                                    <option value="103">Ireland</option>
                                                    <option value="104">Israel</option>
                                                    <option value="105">Italy</option>
                                                    <option value="106">Ivory Coast</option>
                                                    <option value="107">Jamaica</option>
                                                    <option value="108">Japan</option>
                                                    <option value="109">Jordan</option>
                                                    <option value="110">Kazakhstan</option>
                                                    <option value="111">Kenya</option>
                                                    <option value="112">Kiribati</option>
                                                    <option value="113">Korea, Democratic People's Republic of</option>
                                                    <option value="114">Korea, Republic of</option>
                                                    <option value="115">Kosovo</option>
                                                    <option value="116">Kuwait</option>
                                                    <option value="117">Kyrgyzstan</option>
                                                    <option value="118">Lao People's Democratic Republic</option>
                                                    <option value="119">Latvia</option>
                                                    <option value="120">Lebanon</option>
                                                    <option value="121">Lesotho</option>
                                                    <option value="122">Liberia</option>
                                                    <option value="123">Libyan Arab Jamahiriya</option>
                                                    <option value="124">Liechtenstein</option>
                                                    <option value="125">Lithuania</option>
                                                    <option value="126">Luxembourg</option>
                                                    <option value="127">Macau</option>
                                                    <option value="128">Macedonia</option>
                                                    <option value="129">Madagascar</option>
                                                    <option value="130">Malawi</option>
                                                    <option value="131">Malaysia</option>
                                                    <option value="132">Maldives</option>
                                                    <option value="133">Mali</option>
                                                    <option value="134">Malta</option>
                                                    <option value="135">Marshall Islands</option>
                                                    <option value="136">Martinique</option>
                                                    <option value="137">Mauritania</option>
                                                    <option value="138">Mauritius</option>
                                                    <option value="139">Mayotte</option>
                                                    <option value="140">Mexico</option>
                                                    <option value="141">Micronesia, Federated States of</option>
                                                    <option value="142">Moldova, Republic of</option>
                                                    <option value="143">Monaco</option>
                                                    <option value="144">Mongolia</option>
                                                    <option value="145">Montenegro</option>
                                                    <option value="146">Montserrat</option>
                                                    <option value="147">Morocco</option>
                                                    <option value="148">Mozambique</option>
                                                    <option value="149">Myanmar</option>
                                                    <option value="150">Namibia</option>
                                                    <option value="151">Nauru</option>
                                                    <option value="152">Nepal</option>
                                                    <option value="153">Netherlands</option>
                                                    <option value="154">Netherlands Antilles</option>
                                                    <option value="155">New Caledonia</option>
                                                    <option value="156">New Zealand</option>
                                                    <option value="157">Nicaragua</option>
                                                    <option value="158">Niger</option>
                                                    <option value="159">Nigeria</option>
                                                    <option value="160">Niue</option>
                                                    <option value="161">Norfork Island</option>
                                                    <option value="162">Northern Mariana Islands</option>
                                                    <option value="163">Norway</option>
                                                    <option value="164">Oman</option>
                                                    <option value="165">Pakistan</option>
                                                    <option value="166">Palau</option>
                                                    <option value="167">Panama</option>
                                                    <option value="168">Papua New Guinea</option>
                                                    <option value="169">Paraguay</option>
                                                    <option value="170">Peru</option>
                                                    <option value="171">Philippines</option>
                                                    <option value="172">Pitcairn</option>
                                                    <option value="173">Poland</option>
                                                    <option value="174">Portugal</option>
                                                    <option value="175">Puerto Rico</option>
                                                    <option value="176">Qatar</option>
                                                    <option value="177">Reunion</option>
                                                    <option value="178">Romania</option>
                                                    <option value="179">Russian Federation</option>
                                                    <option value="180">Rwanda</option>
                                                    <option value="181">Saint Kitts and Nevis</option>
                                                    <option value="182">Saint Lucia</option>
                                                    <option value="183">Saint Vincent and the Grenadines</option>
                                                    <option value="184">Samoa</option>
                                                    <option value="185">San Marino</option>
                                                    <option value="186">Sao Tome and Principe</option>
                                                    <option value="187">Saudi Arabia</option>
                                                    <option value="188">Senegal</option>
                                                    <option value="189">Serbia</option>
                                                    <option value="190">Seychelles</option>
                                                    <option value="191">Sierra Leone</option>
                                                    <option value="192">Singapore</option>
                                                    <option value="193">Slovakia</option>
                                                    <option value="194">Slovenia</option>
                                                    <option value="195">Solomon Islands</option>
                                                    <option value="196">Somalia</option>
                                                    <option value="197">South Africa</option>
                                                    <option value="198">South Georgia South Sandwich Islands</option>
                                                    <option value="199">Spain</option>
                                                    <option value="200">Sri Lanka</option>
                                                    <option value="201">St. Helena</option>
                                                    <option value="202">St. Pierre and Miquelon</option>
                                                    <option value="203">Sudan</option>
                                                    <option value="204">Suriname</option>
                                                    <option value="205">Svalbarn and Jan Mayen Islands</option>
                                                    <option value="206">Swaziland</option>
                                                    <option value="207">Sweden</option>
                                                    <option value="208">Switzerland</option>
                                                    <option value="209">Syrian Arab Republic</option>
                                                    <option value="210">Taiwan</option>
                                                    <option value="211">Tajikistan</option>
                                                    <option value="212">Tanzania, United Republic of</option>
                                                    <option value="213">Thailand</option>
                                                    <option value="214">Togo</option>
                                                    <option value="215">Tokelau</option>
                                                    <option value="216">Tonga</option>
                                                    <option value="217">Trinidad and Tobago</option>
                                                    <option value="218">Tunisia</option>
                                                    <option value="219">Turkey</option>
                                                    <option value="220">Turkmenistan</option>
                                                    <option value="221">Turks and Caicos Islands</option>
                                                    <option value="222">Tuvalu</option>
                                                    <option value="223">Uganda</option>
                                                    <option value="224">Ukraine</option>
                                                    <option value="225">United Arab Emirates</option>
                                                    <option value="226">United Kingdom</option>
                                                    <option value="1">United States</option>
                                                    <option value="227">United States minor outlying islands</option>
                                                    <option value="228">Uruguay</option>
                                                    <option value="229">Uzbekistan</option>
                                                    <option value="230">Vanuatu</option>
                                                    <option value="231">Vatican City State</option>
                                                    <option value="232">Venezuela</option>
                                                    <option value="233">Vietnam</option>
                                                    <option value="234">Virgin Islands (British)</option>
                                                    <option value="235">Virgin Islands (U.S.)</option>
                                                    <option value="236">Wallis and Futuna Islands</option>
                                                    <option value="237">Western Sahara</option>
                                                    <option value="238">Yemen</option>
                                                    <option value="239">Yugoslavia</option>
                                                    <option value="240">Zaire</option>
                                                    <option value="241">Zambia</option>
                                                    <option value="242">Zimbabwe</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="input-group mb-4">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><i class="fa fa-map-pin"></i></span>
                                                </div>
                                                <input class="form-control" name="city" placeholder="City" value="" type="text"></input>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="input-group mb-4">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><i class="fa fa-map-marked-alt"></i></span>
                                                </div>
                                                <input class="form-control" name="address" placeholder="Address" value="" type="text"></input>
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="input-group mb-4">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><i class="fa fa-map-marker-alt"></i></span>
                                                </div>
                                                <input class="form-control" name="zip" placeholder="Postal/ZIP" value="" type="text"></input>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="row form-group mb-0">
                                        <div class="col-lg-12 py-2">
                                            <small class="text-muted">-- Profiles Social</small>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="input-group mb-4">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><i class="fab fa-facebook-f"></i></span>
                                                </div>
                                                <input class="form-control" name="facebook" placeholder="https://facebook.com/username" value="" type="text"></input>
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="input-group mb-4">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><i class="fab fa-twitter"></i></span>
                                                </div>
                                                <input class="form-control" name="twitter" placeholder="https://twitter.com/username" value="" type="text"></input>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row form-group mb-0">
                                        <div class="col-md-6">
                                            <div class="input-group mb-4">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><i class="fab fa-instagram"></i></span>
                                                </div>
                                                <input class="form-control" name="instagram" placeholder="https://instagram.com/username" value="" type="text"></input>
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="input-group mb-4">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><i class="fab fa-youtube"></i></span>
                                                </div>
                                                <input class="form-control" name="youtube" placeholder="https://youtube.com/username" value="" type="text"></input>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row form-group mb-0">
                                        <div class="col-md-6">
                                            <div class="input-group mb-4">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><i class="fab fa-pinterest-p"></i></span>
                                                </div>
                                                <input class="form-control" name="https://pinterest.com/username" placeholder="Pinterest" value="" type="text"></input>
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="input-group mb-4">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><i class="fab fa-github"></i></span>
                                                </div>
                                                <input class="form-control" name="github" placeholder="https://github.com/username" value="" type="text"></input>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label class="w-100"><i class="fa fa-bullhorn text-muted"></i> Tell us about your story
                              <span id="the-count" class="float-right d-inline">
                                                <span id="current">96</span>
                                                <span id="maximum">/ 500</span>
                                            </span>
                                        </label>
                                        <textarea name="story" id="story" required="" rows="5" cols="40" class="form-control textareaAutoSize" style={{ overflow: "hidden", overflowWrap: "break-word", height: "142px" }}>Welcome to my page. If you like my content, please consider support. Thank you for your support!</textarea>

                                    </div>
                                    <div class="alert alert-danger my-3 display-none" id="errorUdpateEditPage">
                                        <ul class="list-unstyled m-0" id="showErrorsUdpatePage"><li></li></ul>
                                    </div>

                                    <button class="btn btn-1 btn-success btn-block" data-msg-success="Changes saved successfully" id="saveChangesEditPage" type="submit"><i></i> Save changes</button>

                                    <div class="text-center mt-3">
                                        <a href="https://bounla.com/account/delete">Delete account</a>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>

                    <div class="modal fade" id="tipForm" tabindex="-1" role="dialog" aria-labelledby="modal-form" aria-hidden="true">
                        <div class="modal-dialog modal- modal-dialog-centered modal-sm" role="document">
                            <div class="modal-content">
                                <div class="modal-body p-0">
                                    <div class="card bg-white shadow border-0">
                                        <div class="card-header pb-2 border-0 position-relative" style={{ height: "100px", background: "#ec5165   url(&#39;https://bounla.com/public/uploads/cover/ee96c803-81610961414rld0zjkime.png&#39;)  no-repeat center center", backgroundSize: "cover" }}>
                                        </div>
                                        <div class="card-body px-lg-5 py-lg-5 position-relative">

                                            <div class="text-muted text-center mb-3 position-relative modal-offset">
                                                <img src="./Edit my page - Bounla _ Social Private Network For Influencers And Fans_files/ee96c803-81610961624qttsn7nwin.png" width="100" class="avatar-modal rounded-circle mb-1"></img>
                                                <h6>
                                                    Send tip to <span class="userNameTip"></span>
                                                </h6>
                                            </div>

                                            <form method="post" action="https://bounla.com/send/tip" id="formSendTip">

                                                <input type="hidden" name="id" class="userIdInput" value="8"></input>


                                                <input type="hidden" id="cardholder-name" value="SIRAJMUNEER"></input>
                                                <input type="hidden" id="cardholder-email" value="sirajmuneerfsd1@gmail.com"></input>
                                                <input type="number" min="" autocomplete="off" id="onlyNumber" class="form-control mb-3" name="amount" placeholder="Tip amount"></input>

                                                <input type="hidden" name="_token" value="uSTak0bmids2mEwgonIkpvX7ehmKDUvnlJLfniNO"></input>

                                                <div class="custom-control custom-radio mb-3">
                                                    <input name="payment_gateway_tip" value="2" id="tip_radio2" checked="" class="custom-control-input" type="radio"></input>
                                                    <label class="custom-control-label" for="tip_radio2">
                                                        <span><strong><i class="far fa-credit-card mr-1"></i> Debit / Credit Card (Stripe)</strong></span>
                                                    </label>
                                                </div>

                                                <div id="stripeContainerTip" class="">
                                                    <div id="card-element" class="margin-bottom-10 StripeElement StripeElement--empty"><div class="__PrivateStripeElement" style={{ margin: "0px !important", padding: "0px !important", border: "none !important", display: "block !important", background: "transparent !important", position: "relative !important", opacity: "1 !important" }}><iframe frameborder="0" allowtransparency="true" scrolling="no" name="__privateStripeFrame4535" allowpaymentrequest="true" src="./Edit my page - Bounla _ Social Private Network For Influencers And Fans_files/elements-inner-card-66614ebb76e0a29e12cbca6bfa25d0fa.html" title="Secure card payment input frame" style={{ border: "none !important", margin: "0px !important", padding: "0px !important", width: "1px !important", minWidth: "100% !important", overflow: "hidden !important", display: "block !important", userSelect: "none !important", willChange: "transform !important", height: "19.2px" }}></iframe><input class="__PrivateStripeElement-input" aria-hidden="true" aria-label=" " autocomplete="false" maxlength="1" style={{ border: "none !important", display: "block !important", position: "absolute !important", height: "1px !important", top: "-1px !important", left: "0px !important", padding: "0px !important", margin: "0px !important", width: "100% !important", opacity: "0 !important", background: "transparent !important", pointerEvents: "none !important", fontSize: "16px !important" }}></input></div>
                                                    </div>
                                                    <div id="card-errors" class="alert alert-danger display-none" role="alert"></div>
                                                </div>


                                                <div class="custom-control custom-radio mb-3">
                                                    <input name="payment_gateway_tip" disabled="" value="wallet" id="tip_radio0" class="custom-control-input" type="radio"></input>
                                                    <label class="custom-control-label" for="tip_radio0">
                                                        <span>
                                                            <strong>
                                                                <i class="fas fa-wallet mr-1"></i> Wallet
                        <span class="w-100 d-block font-weight-light">
                                                                    Available balance: <span class="font-weight-bold mr-1 balanceWallet">0,00€</span>

                                                                    <a href="https://bounla.com/my/wallet" class="link-border">Recharge</a>
                                                                </span>
                                                            </strong>
                                                        </span>
                                                    </label>
                                                </div>

                                                <div class="alert alert-danger display-none" id="errorTip">
                                                    <ul class="list-unstyled m-0" id="showErrorsTip"></ul>
                                                </div>

                                                <div class="text-center">
                                                    <button type="button" class="btn e-none mt-4" data-dismiss="modal">Cancel</button>
                                                    <button type="submit" id="tipBtn" class="btn btn-primary mt-4 tipBtn"><i></i> Pay</button>
                                                </div>
                                            </form>
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

export default EditMyPage