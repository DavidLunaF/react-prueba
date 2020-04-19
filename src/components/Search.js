import React from 'react';
import axios from 'axios';
class Search extends React.Component {

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
        const searchUrl = '';

        if( this.cancel ) {
            this.cancel.cancel();
        }

        this.cancel = axios.CancelToken.source();

        axios.get(searchUrl, {
            cancelToken: this.cancel.token;
        }).then( response => {
            const result = response;
            console.log(response);
        }).catch( error => {
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