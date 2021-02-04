import React, { Component } from "react";

import ItemList from "../item-list";
<<<<<<< HEAD
import PersonDetails from "../item-details";
import SwapiService from "../../services/swapi-service";
import Row from '../row'
import ErrorBoundry from "../error-boundry";

import './people-page.css'
=======
import PersonDetails from "../person-details";
import ErrorIndicator from "../error-indicator";

import './people-page.css'
import SwapiService from "../../services/swapi-service";
>>>>>>> 5d79b5b2c62d587fa0401a29eca07ba86daff570

export default class PeoplePage extends Component {

    swapiService = new SwapiService()

    state = {
<<<<<<< HEAD
       selectedPerson: 3
=======
       selectedPerson: 3,
        hasError: false
    }

    componentDidCatch(error, info) {

        this.setState({
            hasError: true
        })
>>>>>>> 5d79b5b2c62d587fa0401a29eca07ba86daff570
    }

    onPersonSelected = (selectedPerson) => {
        this.setState({ selectedPerson })
    }

    render() {

<<<<<<< HEAD
        const itemList = (
            <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}>

                {(i) => (
                `${i.name} (${i.birthYear})`
                )}

            </ItemList>
        )
        const personDetails = (
            <ErrorBoundry>
                <PersonDetails personId={this.state.selectedPerson}/>
            </ErrorBoundry>
        )

        return (
            <Row left={itemList} right={personDetails} />
=======
        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        return (
            <div className='row mb2'>
                <div className='col-md-6'>
                    <ItemList
                        onItemSelected={this.onPersonSelected}
                    getData={this.swapiService.getAllPeople}/>
                </div>
                <div className='col-md-6'>
                    <PersonDetails personId={this.state.selectedPerson}/>
                </div>
            </div>
>>>>>>> 5d79b5b2c62d587fa0401a29eca07ba86daff570
        )
    }
}