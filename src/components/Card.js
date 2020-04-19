import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card/Card.css';

class Card extends React.Component {


    render() {
        return(
        <div key={this.props.id} id="make-3D-space">
            <div id="product-card">
                <div id="product-front">
                    <div className="shadow"></div>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt.png" alt="" />
                    <div className="image_overlay"></div>
                    <div id="view_details">View details</div>
                    <div className="stats">        	
                        <div className="stats-container">
                            <span className="product_price">$39</span>
                            <span className="product_name">{this.props.name}</span>    
                            <p>Men's running shirt</p>                                            
                            
                            <div className="product-options">
                            <strong>SIZES</strong>
                            <span>XS, S, M, L, XL, XXL</span>
                            <strong>COLORS</strong>
                            <div className="colors">
                                <div className="c-blue"><span></span></div>
                                <div className="c-red"><span></span></div>
                                <div className="c-white"><span></span></div>
                                <div className="c-green"><span></span></div>
                            </div>
                        </div>                       
                        </div>                         
                    </div>
                </div>
                <div id="product-back">
                    <div className="shadow"></div>
                    <div id="carousel">
                        <ul>
                            <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt-large.png" alt="" /></li>
                            <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt-large2.png" alt="" /></li>
                            <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt-large3.png" alt="" /></li>
                        </ul>
                        <div className="arrows-perspective">
                            <div className="carouselPrev">
                                <div className="y"></div>
                                <div className="x"></div>
                            </div>
                            <div className="carouselNext">
                                <div className="y"></div>
                                <div className="x"></div>
                            </div>
                        </div>
                    </div>
                    <div id="flip-back">
                        <div id="cy"></div>
                        <div id="cx"></div>
                    </div>
                </div>	  
            </div>	
        </div>	     
        );
    }
};

Card.propTypes = {};

Card.defaultProps = {};

export default Card;
