const React = require('react');
const omdb = require('omdb-client');

class MovieContainer extends React.Component{
	constructor(props) {
		super(props);

		this.state = {
			movie: {}
		};
	}

	// component state event handlers
	// this ONLY happens in the browser
	componentDidMount() {
		omdb.get({id: this.props.id}, (err, data) => {
			// setState has bonus powers, direct state set 
			// do not use direct setting of state on class, 
			// will bypass methods provided by react
			this.setState({movie:data});
		});
	}

	render(){
		return(
			<this.props.layout
				{...this.state.movie}
			/>
		);
	}
}

module.exports = MovieContainer;