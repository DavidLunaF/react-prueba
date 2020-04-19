import React from 'react';
import axios from 'axios';
import Card from './Card';

class Search extends React.Component {

    apikey = process.env.REACT_APP_GOOGLE_API_KEY;

    constructor (props) {
        super(props);
    
        this.state = {
            query: '',
            results: {},
            loading: false,
            message: ''
        }

        this.cancel = '';
    }
    
    getResults = ( updatedPageNum, query ) => {
        const pageNum = updatedPageNum;
        const location = '';
        const searchUrl = 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+ this.props.location +'&radius=1500'
                            + '&keyword=' + query + '&key=' + this.apikey;
        if( this.cancel ) {
            this.cancel.cancel();
        }

        this.cancel = axios.CancelToken.source();
        const config = {
            headers: {'Access-Control-Allow-Origin': '*'}
        };
        axios.get(searchUrl, {
            cancelToken: this.cancel.token
        }).then( response => {
            this.setState({
                results: response.data.results
            })
            console.log(this.state.results);
        }).catch( error => {
            console.log(error)
            if (axios.isCancel(error) || error) {
                this.setState({
                    loading: false,
                    message: 'Failed fetch' + error
                })
            }
        })
    }

    handleOnInputChange = ( event ) => {
        const query = event.target.value;
        this.setState({ query: query, loading: true, message: '' }, () =>{
            this.getResults(1, query);
        });
    }

    showResults = () => {
        const {results} = this.state;
        if (Object.keys(results).length && results.length) {
            const listCommerces = results.map((commerce, index) =>
                <li key={index}>{commerce.name} <Card commerceData= {commerce} />
                </li>
            );
            return (
                <ul>
                   {listCommerces}
                </ul>
            )
        
        }
    }

    render () {
        const query = this.state.query;
        let commerces = '';
        return (
            <div className="container">
                <label className="search-label" htmlFor="search-input">
                    <input
                        onChange={this.handleOnInputChange}
                        name="query"
                        type="text"
                        value={query}
                        id="search-input"
                        placeholder="Busca Algo">
                        </input>
                </label>
                {this.showResults()}
            </div>
        );
    }
}

export default Search;