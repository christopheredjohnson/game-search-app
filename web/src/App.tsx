import React from "react";
import SearchForm from './components/SearchForm';

interface IAppState {}

class App extends React.Component<{}, IAppState> {
	constructor(props: {}, state: IAppState) {
		super(props, state);
		this.state = {
		}
	}

	render() {
		return (
			<div className="app">
				<SearchForm />
			</div>
		);
	}
}

export default App;
