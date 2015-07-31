const React = require('react');
const preload = require('./netflix');
const MovieContainer = require('./MovieContainer');
const MovieTileLayout = require('./MovieTileLayout');
const AppHeader = require('./AppHeader');
const _ = require('lodash');

class App extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			results: _.clone(preload.Search),
			layout: 'tile'
		};
	}
	changeLayout(layout){
		this.setState({layout});
	}
	render(){
		// unique key allows react to perform better with dom updates
		return (
			<div className="app-container">
				<AppHeader 
					layout={this.state.layout}
					changeLayout={this.changeLayout.bind(this)}
				/>
				<div className="movies-list">
					{this.state.results.map( el => {
						return (
							<MovieContainer
								id={el.imdbID}
								key={el.imdbID}
								layout={MovieTileLayout}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}

module.exports = App;