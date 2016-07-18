import React from 'react'

import {Link} from 'react-router'
import Header from 'components/Header/Header'
import styles from './styles.module.css'
import Environment from 'components/Environment/Environment'



export class Container extends React.Component {
	componentWillMount() {
		var qaURLS = __QA_URLS__.split(',');
		var stageURLS = __STAGE_URLS__.split(',');

		this.setState({
			qaURLS: qaURLS,
			stageURLS: stageURLS
		});
	}

	render() {
		return (
			<div>

				<Header />			
				<Environment
					title={'QA'}
					urls={this.state['qaURLS']}
				/>
				<Environment
					title={'Stage'}
					urls={this.state['stageURLS']}
				/>
			</div>
		)
	}
}

export default Container


