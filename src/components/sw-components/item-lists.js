import React from 'react'
import ItemList from "../item-list/item-list";
import { withData } from '../hoc-helpers'
import SwapiService from "../../services/swapi-service";

const swapiService = new SwapiService()

const {
    getAllPeople,
    getAllStarships,
    getAllPlanets
} = swapiService

const withChildfunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
}

const renderName = ({ name }) => <span>{name}</span>
const renderModelAndName = ({ model, name }) => <span>{name} ({model})</span>

const PersonList = withData(
                        withChildfunction(ItemList,renderName),
                        getAllPeople)
const PlanetList = withData(
                        withChildfunction(ItemList,renderName),
                        getAllPlanets)
const StarshipList = withData(
                        withChildfunction(ItemList,renderModelAndName),
                        getAllStarships)

export {
    PersonList,
    PlanetList,
    StarshipList
}