import React, { Component } from 'react'
import styles from './css-modules/nav-bar.module.css'

export default class NavigationBar extends Component {
    render() {
        return (
            <div className={styles.navColumn}>
                <a href='/'>My Diary</a>
                <hr />
                <a href='/entries'>My Entries</a>
                <a href='/create'>New Entry</a>
            </div>
        )
    }
}
