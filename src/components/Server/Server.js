import React, { PropTypes as T } from 'react'
import classnames from 'classnames'
import { Render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import styles from './styles.module.css'


export class Server extends React.Component {
	state = {serverURI: '', buildID: '', serverStat: ''}
	getServerInfo(uri) {
		var request = new XMLHttpRequest();
		request.open('GET', '/test.json', true);

		request.onload = function(){
			if(request.status >= 200 && request.status < 400){
				var data = JSON.parse(request.responseText);
				this.setState(data);
			}
			else {

			}
		};

		request.onerror = function(){

		};

		request.onload = request.onload.bind(this);
		request.onerror = request.onerror.bind(this);
		request.send();
	}

	

	componentDidMount(){
		this.getServerInfo( this.props.serverURI )
	}
	componentWillUnmount(){
		console.log('in the componentWillUnmount function')
		this.serverRequest.abort()
	}

	render() {
		var servHeader = (this.props.id).replace('.lululemon.com', '').toUpperCase()
		return (
			<div className={classnames(styles.servContainer)}>
		    	<a href={'http://'+this.props.id} target="_blank">
		      		<div className={classnames(styles.container)}>
				      	<h2> {servHeader} </h2>
				      	<p> Server status: {this.state.servStat}</p> 
				      	<h5> Build Status: {this.state.buildID}</h5>         
				    </div>
		    	</a> 
			</div>
		)
  	}
}

export default Server