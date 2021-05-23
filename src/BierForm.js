import React, { Component } from 'react'


class BierForm extends Component {
    constructor () {
        super();
        this.state = {};
    }

    render() {
        return(
                <div className="bier-form">
                    <span>Naam:</span>
                    <input />
                    <span>Brouwerij:</span>
                    <input />
                    <span>Alcohol percentage:</span>
                    <input Style="width:100px;margin: 0px 0px 0px 2px" type="number" />                    
                </div>
        )
    }
}

export default BierForm;