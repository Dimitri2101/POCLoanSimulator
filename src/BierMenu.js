import React, { Component } from 'react';

class BierMenu extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            showPercentage: this.props.showPerc
        }
    }

    onAlcoholClicked = () => {
        this.setState(
            {showPercentage : !this.state.showPercentage }
        )
        this.props.onPercChanged();
    }

    render() {
        let toggleButtonText = this.state.showPercentage ? "Alcohol percentages verbergen" : "Alcohol percentages tonen";

        return(
            <div>
            <hr />
            <div className="bier-menu">
                <span className="bier-button">Toevoegen</span>
                <span onClick={this.onAlcoholClicked} onPercChanged={this.props.onPercChanged} className="bier-button">{toggleButtonText}</span>
            </div>
            <hr/>
            </div>
        )
    }
}

export default BierMenu;