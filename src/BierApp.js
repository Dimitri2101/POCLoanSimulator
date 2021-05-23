import React, { Component } from 'react'
import BierFooter from './BierFooter';
import BierForm from './BierForm';
import BierHeader from './BierHeader';
import BierList from './BierList';
import BierMenu from './BierMenu';

class BierApp extends Component {

    constructor() {
        super();
        this.state = {
            showPercentage : true,
            bieren: [
                {
                    naam: "Duvel",
                    brouwerij: "Moordgat",
                    alcoholPerc: 9.0
                },
                {
                    naam: "Sint-Bernardus Tripel",
                    brouwerij: "Sint-Bernardus Watou",
                    alcoholPerc: 9.0
                },
                {
                    naam: "Sint-Bernardus Abt 12",
                    brouwerij: "Sint-Bernardus Watou",
                    alcoholPerc: 10.0
                }
            ]
        }
    }

    onPercChanged = () => {
        //alert('De percentage worden weergeven: ' + this.state.showPercentage)
        this.setState ( {
            showPercentage: !this.state.showPercentage
        })
    }

    onAddItem = () => {
        
    }

    render() {
        return(
            <div>
                <div className="bier-app">
                    <BierHeader />
                    <BierForm />
                    <BierMenu showPerc={this.state.showPercentage} onPercChanged={this.onPercChanged} />
                    <BierList showPerc={this.state.showPercentage} bieren={this.state.bieren} />
                    <BierFooter />
                </div>
                <div className="bier-background" />
            </div>
        )
    }
}

export default BierApp;