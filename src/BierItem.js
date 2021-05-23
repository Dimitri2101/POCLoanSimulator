import React, { Component } from 'react'

class BierItem extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }


    render() {
        return(
            <div>
                <h4>{this.props.item.naam}</h4>
                <p>Brouwerij: {this.props.item.brouwerij}</p>
                {this.props.showPerc ? <p>Alcohol percentage: {this.props.item.alcoholPerc}%</p> : ''}
            </div>
        )
    }
}

export default BierItem;