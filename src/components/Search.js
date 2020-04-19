import React from 'react';
import axios from 'axios';

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
            const result = response.data.results;
            console.log(result);
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

    render () {
        const query = this.state.query;

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
            
            </div>
        );
    }
}

export default Search;