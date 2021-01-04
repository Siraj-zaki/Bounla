import React from 'react'
import '../bootstrap.min.css'
import '../index.css'
import '../smartphoto.min.css'
import '../styles.css'
import '../plyr.css'
import '../core.min.css'
import img1 from '../assets/default.jpg'
export default class Card1 extends React.Component {
    render(){
        return(
            <div class="col-md-4 mb-4">
            <div class="card card-updates">
                <div class="card-cover" style={{ background: "#505050 center center" }}></div>
                <div class="card-avatar">
                    <a href="Admin.html">
                        <img src={img1} width="89" height="89" alt="Admin" class="img-user-small"></img>
                    </a>
                </div>
                <div class="card-body text-center">
                    <h6 class="card-title pt-3">
                        {this.props.name}

            <small class="text-featured mr-1" title="Creator featured" data-toggle="tooltip" data-placement="top">
                            <i class="fas fa fa-award"></i>
                        </small>

                        <small class="verified" title="Verified account!" data-toggle="tooltip" data-placement="top">
                            <i class="fas fa-check-circle"></i>
                        </small>
                    </h6>
                    <small class="text-muted">
                        <i class="fa fa-map-marker-alt mr-1"></i>	{this.props.region}

        </small>
                    <p class="m-0 py-3 text-muted">
                       {this.props.paragraph}
</p>
                    <a href="Admin.html" class="btn btn-1 btn-sm btn-outline-primary">Go to Page</a>
                </div>

            </div>
        </div>
        
        )
    }
}