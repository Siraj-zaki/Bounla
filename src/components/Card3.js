import React from 'react'
import '../bootstrap.min.css'
import '../index.css'
import '../smartphoto.min.css'
import '../styles.css'
import '../plyr.css'
import '../core.min.css'
import img5 from '../assets/img5.jpg';


class Card3 extends React.Component {
    render() {
        return (
            <div>
                <div className="card-cover" style={{ background: "#505050 center center" }}></div>
                <div className="card-avatar">
                    <a href="https://bounla.com/Admin">
                        <img src={img5} width="89" height="89" alt="Admin" className="img-user-small"></img>
                    </a>
                </div>
                <div className="card-body text-center">
                    <h6 className="card-title pt-3">
                        Admin

								<small className="text-featured mr-1" title="" data-toggle="tooltip" data-placement="top" data-original-title="Creator featured">
                            <i className="fas fa fa-award"></i>
                        </small>

                        <small className="verified" title="" data-toggle="tooltip" data-placement="top" data-original-title="Verified account!">
                            <i className="fas fa-check-circle"></i>
                        </small>
                    </h6>
                    <small className="text-muted">
                        <i className="fa fa-map-marker-alt mr-1"></i>	United States

							</small>
                    <p className="m-0 py-3 text-muted">
                        Welcome to my page. If you like my content, please consider support. Any donation will be well recei...
			</p>
                    <a href="https://bounla.com/Admin" className="btn btn-1 btn-sm btn-outline-primary">Go to Page</a>
                </div>
            </div>
        )
    }
}
export default Card3