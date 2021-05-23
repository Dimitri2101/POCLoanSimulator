import React, { Component } from 'react'
import BierItem from './BierItem'

class BierList extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {

        let bierList = this.props.bieren.map((bier,index) => 
            <div> 
                <BierItem showPerc={this.props.showPerc} key={index} item={bier} /> 
                <p className="bier-list-space"></p>
            </div>);

        return (
            <div>
            {bierList}
            </div>
        )
    }

}

export default BierList;