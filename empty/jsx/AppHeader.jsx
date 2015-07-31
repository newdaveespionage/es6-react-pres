const React = require('react');
class AppHeader extends React.Component{
	handleLayoutEvent(event) {
		this.props.changeLayout(event.target.value);
	}
	render(){
		return(
			<header className="app-header">
				<div className="app-header__inner">
					<h1 className="app-header__title">ForwardFlix</h1>
					<select onChange={this.handleLayoutEvent.bind(this)} value={this.props.layout} className="app-header__display-select">
						<option value="tile">Tile</option>
						<option value="list">List</option>
					</select>
				</div>
			</header>
		)
	}
}

module.exports = AppHeader;