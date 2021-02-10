import React from 'react'
import ItemList from "../item-list/item-list";
import {
    withData,
    withSwapiService,
    compose,
    withChildfunction,
} from '../hoc-helpers'

const renderName = ({ name }) => <span>{name}</span>

const renderModelAndName = ({ model, name }) => <span>{name} ({model})</span>

const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    }
}

const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    }
}

const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    }
}

const PersonList = compose(
                        withSwapiService(mapPersonMethodsToProps),
                        withData,
                        withChildfunction(renderName)
                      )(ItemList)
const PlanetList = compose(
                        withSwapiService(mapPlanetMethodsToProps),
                        withData,
                        withChildfunction(renderName)
                      )(ItemList)
const StarshipList = compose(
                        withSwapiService(mapStarshipMethodsToProps),
                        withData,
                        withChildfunction(renderModelAndName)
                      )(ItemList)

export {
    PersonList,
    PlanetList,
    StarshipList
}