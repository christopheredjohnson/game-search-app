import React, { ChangeEvent } from 'react';


interface ISearchFormState {
	value: string;
}

class SearchForm extends React.Component<{}, ISearchFormState> {

	constructor(props: {}, state: ISearchFormState) {
		super(props, state);

		this.state = {
			value: '' // blank by default? maybe save in query string.
		}
	}
	private handleChange = async (e: ChangeEvent) : Promise<void> => {
		
	}
	render() {
		return (
			<div>
				<input type="text" onChange={this.handleChange}/>
				{this.state.value}
			</div>
		)
	}
}


export default SearchForm;

