import React, { Component } from 'react'
import axios from 'axios'
import DatePicker from 'react-datepicker';
import TextareaAutosize from 'react-textarea-autosize';

import 'react-datepicker/dist/react-datepicker.css'
import styles from './css-modules/modify-entry.module.css'

export default class CreateEntry extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      logText: '',
      entries: []
    }
  }

  onChangeLogText(e) {
    this.setState({ logText: e.target.value })
  }

  onChangeDate(d) {
    this.setState({ date: d })
  }

  onSubmit(e) {
    e.preventDefault();

    const entry = {
      date: this.state.date,
      logText: this.state.logText,
    }
    console.log('New entry submitted.');

    axios.post('http://localhost:5000/entries/add', entry)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
    
    window.location = '/';
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className={styles.pageHeaderFlexbox}>
            <h2>Add a New Entry</h2>
            <div className={styles.submitButton}>
                <button className={styles.addButton} type='submit'>+</button>
            </div>
          </div>

          <div className={styles.entryComponent}>
            <label>Date</label>
            <hr />
            <DatePicker
              selected={this.state.date}
              className={styles.dateSelector}
              onChange={this.onChangeDate.bind(this)}
              required
            />
          </div>

          <div className={styles.entryComponent}> 
            <label>Log</label>
            <hr />
            <TextareaAutosize
              type='text'
              className={styles.textbox}
              required
              value={this.state.logText}
              onChange={this.onChangeLogText.bind(this)}
            />
          </div>
        </form>
      </div>
    )
  }
}