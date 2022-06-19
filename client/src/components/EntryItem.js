import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './css-modules/entry-item.module.css'

export default class EntryItem extends Component {

    render() {
        const months = [
            "January", "February", "March", "April",
            "May", "June", "July", "August",
            "September", "October", "November", "December"
        ];

        let entryDate = new Date(this.props.entry.date);
        let month = months[entryDate.getMonth()];
        let day = entryDate.getDate();
        let year = entryDate.getFullYear();

        return (
            <div className={styles.card}>
                <div className={styles.cardHeaderFlexbox}>
                    <div className={styles.cardInfo}>
                        {`${month} ${day}, ${year}`}
                    </div>
                    <div className={styles.cardButton}>
                        <Link className={styles.editButton} to={`/update/${this.props.entry._id}`}>
                            ≡
                        </Link>
                    </div>
                    <div className={styles.cardButton}>
                        <button
                            className={styles.deleteButton} 
                            onClick={() => this.props.deleteEntry(this.props.entry._id)}>
                            ×
                        </button>
                    </div>
                </div> 
                <hr />
                <div>
                    {this.props.entry.logText}
                </div>
            </div>
        )
    }
}