import React from 'react'

class SearchBox extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            text: '',
            data: []
        }
    }

    render(){
        return(
            <div>
                
                <button onClick={this.props.handleSearchButton}>Search</button>
            </div>
        )
    }

}

export default SearchBox