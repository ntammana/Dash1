import React, { PropTypes as T } from 'react'
import styles from './styles.module.css'
import Server from 'components/Server/Server'

export class Environment extends React.Component {
  render() {
    var rows=[];
    rows = this.props.urls.map(function(URL) {
      return (
         <Server id={URL} key={URL} />
      )
    })

    return (
      <div className={styles.environment} key={this.props.title}>
          <div>
            <h1 className={styles.heading}>{this.props.title} </h1>
            <hr></hr>
            {rows}
          </div>
      </div>
    ) 
  }
}

export default Environment