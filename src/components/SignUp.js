import React from 'react';
import Header from './Header';
import Footer from './Footer';
import homepic from '../assets/home_index-1606861565.png';
import '../bootstrap.min.css'
import '../index.css'
import '../smartphoto.min.css'
import '../styles.css'
import '../plyr.css'
import '../core.min.css'
export default class SignUp extends React.Component {
    state = {
        fullname:'',
        username:'',
        email: '',
        password: '',
        confirmpassword:'',
        country:'',
        checked: ''
    }
    render() {
        return (
            <div>
                <Header Creators />
                <div class="jumbotron home m-0 bg-gradient">
                    <div class="container pt-lg-md">
                        <div class="row new-flex">
                            <div class="col-lg-7">
                                <img src={homepic} class="img-center img-fluid"></img>
                            </div>
                            <div class="col-lg-5">
                                <div class="card bg-light shadow border-0">

                                    <div class="card-header bg-white py-4">
                                        <h4 class="text-center mb-0 font-weight-bold">
                                            Welcome Back!
            </h4>
                                        <small class="btn-block text-center mt-2">Happy to see you again!</small>
                                    </div>

                                    <div class="card-body px-lg-5 py-lg-5">
                                        <form method="POST" action="https://bounla.com/login">
                                            <div class="form-group mb-3">
                                                <div class="input-group input-group-alternative">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text"><i class="fa fa-user-circle"></i></span>
                                                    </div>
                                                    <input class="form-control" value="" placeholder="Full name" name="name" type="text" required></input>
                                                </div>
                                            </div>

                                            <div class="form-group mb-3">
                                                <div class="input-group input-group-alternative">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text"><i class="fa fa-user"></i></span>
                                                    </div>
                                                    <input class="form-control" value="" placeholder="Username" name="username" type="text" required></input>
                                                </div>
                                            </div>

                                            <div class="form-group mb-3">
                                                <div class="input-group input-group-alternative">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text"><i class="fa fa-envelope"></i></span>
                                                    </div>
                                                    <input class="form-control" value="" placeholder="Email" name="email" type="text" required></input>
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <div class="input-group input-group-alternative">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text"><i class="fa fa-key"></i></span>
                                                    </div>
                                                    <input name="password" type="password" class="form-control" placeholder="Password" required></input>
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <div class="input-group input-group-alternative">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text"><i class="fa fa-key"></i></span>
                                                    </div>
                                                    <input name="password_confirmation" type="password" class="form-control" placeholder="Confirm Password" required></input>
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <div class="input-group mb-4">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text"><i class="fa fa-globe"></i></span>
                                                    </div>
                                                    <select name="countries_id" class="form-control custom-select" required>
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
                                                        <option value="113">Korea, Democratic People&#039;s Republic of</option>
                                                        <option value="114">Korea, Republic of</option>
                                                        <option value="115">Kosovo</option>
                                                        <option value="116">Kuwait</option>
                                                        <option value="117">Kyrgyzstan</option>
                                                        <option value="118">Lao People&#039;s Democratic Republic</option>
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

                                            <div class="custom-control custom-control-alternative custom-checkbox">
                                                <input class="custom-control-input" id="customCheckRegister" type="checkbox" name="agree_gdpr" required></input>
                                                <label class="custom-control-label" for="customCheckRegister">
                                                    <span>I agree with the processing of personal data
                        <a href="p/privacy.html" target="_blank">Privacy Policy</a>
                                                    </span>
                                                </label>
                                            </div>
                                            <div class="text-center">
                                                <button type="submit" class="btn btn-primary my-4 w-100" id="buttonSubmitRegister">Sign up</button>
                                            </div>
                                        </form>


                                        <small class="btn-block text-center">Protected by reCAPTCHA <a href="https://policies.google.com/privacy" target="_blank">Privacy</a> - <a href="https://policies.google.com/terms" target="_blank">Terms</a></small>

                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-6">
                                        <a href="password/reset.html" class="text-light">
                                            <small>Forgot Password?</small>
                                        </a>
                                    </div>
                                    <div class="col-6 text-right">
                                        <a href="signup.html" class="text-light">
                                            <small>Don&#039;t have an account?</small>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}