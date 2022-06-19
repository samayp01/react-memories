import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import NavigationBar from './components/NavigationBar'
import EntriesList from './components/EntriesList'
import CreateEntry from './components/CreateEntry'
import UpdateEntry from './components/UpdateEntry'
import Dashboard from './components/Dashboard'

import styles from './components/css-modules/page-content.module.css'

export default function App() {
    return (
        <div className={styles.page}>
            <Router>
                <NavigationBar />
                <div className={styles.main}>
                    <Route path='/' exact component={Dashboard} />
                    <Route path='/entries' component={EntriesList} />
                    <Route path='/update/:id' component={UpdateEntry} />
                    <Route path='/create' component={CreateEntry} />
                </div>
            </Router>
        </div>
    );
}