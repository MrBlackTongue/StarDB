import React, { Component } from "react";

import './item-list.css'
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

export default class ItemList extends Component {

    state = {
        itemList: null
    }

    componentDidMount() {

        const { getData } = this.props

        getData()
            .then((itemList) => {
                this.setState({
                    itemList
                })
            })
    }

    renderItems(arr) {
<<<<<<< HEAD
        return arr.map((item) => {
            const { id } = item;
            const label = this.props.children(item)

=======
        return arr.map(({id, name}) => {
>>>>>>> 5d79b5b2c62d587fa0401a29eca07ba86daff570
            return (
                <li className='list-group-item'
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}>
<<<<<<< HEAD
                    {label}
=======
                    {name}
>>>>>>> 5d79b5b2c62d587fa0401a29eca07ba86daff570
                </li>
            )
        })
    }

    render() {

        const { itemList } = this.state

        if (!itemList) {
            return <Spinner />
        }

        const items = this.renderItems(itemList)

        return(
            <ul className='item-list list-group'>
                {items}
            </ul>
        )
    }
}