import React, { Component } from 'react'
import EntryItem from './EntryItem'
import axios from 'axios'

export default class EntriesList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            entries: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/entries')
            .then(res => this.setState({ entries: res.data }))
            .catch(err => console.log(err));
    }

    deleteEntry(id) {
        axios.delete(`http://localhost:5000/entries/${id}`)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
        
        this.setState({ entries: this.state.entries.filter(entry => entry._id !== id) })
    }

    entriesList() {
        this.state.entries.sort((a, b) => new Date(a.date) - new Date(b.date));

        return this.state.entries.slice(0).reverse().map(entry => {
            return (
                <EntryItem
                    entry={entry}
                    deleteEntry={this.deleteEntry.bind(this)}
                    key={entry._id}
                />
            )
        })
    }
    
    render() {
        return (
            <div>
                {this.entriesList()}
            </div>
        )
    }
}