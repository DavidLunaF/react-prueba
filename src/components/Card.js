import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card/Card.css';

class Card extends React.Component {


    render() {
        return(
        <div id="">
            <div id="product-card">
                <div id="product-front">
                    <div className="shadow"></div>
                    <div className="image_overlay"></div>
                    <div id="view_details"></div>
                    <div className="stats">        	
                        <div className="stats-container">
                            <span className="product_price">{this.props.rating}</span>
                            <span className="product_name">{this.props.commerceData.name}</span>    
                            <p>{this.props.commerceData.types[0]}</p>                                            
                            
                            <div className="product-options">
                            <strong>Rating</strong>
                            <span>{this.props.commerceData.rating}</span>
                            <strong>Adress</strong>
                            <div className="colors">{this.props.commerceData.vicinity}</div>
                            <img src={this.props.commerceData.icon} alt="" />
                        </div>                       
                        </div>                         
                    </div>
                </div>
                <div id="product-back">
                    <div className="shadow"></div>
                    <div id="carousel">
                        <ul>
                            <li></li>
                            <li>></li>
                            <li></li>
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
