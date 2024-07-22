import { Component } from 'react'; // Import the Component class from React
import './search-panel.css'; // Import CSS styles for the SearchPanel component

// Define the SearchPanel class component
class SearchPanel extends Component {
    constructor(props) {
        super(props);
        // Initialize component state with searchWord field
        this.state = {
            searchWord: ''
        }
    }

    // Handler to update the search input value
    onUpdateSearchPanel = (e) => {
        const searchWord = e.target.value; // Get the current input value
        this.setState({searchWord}); // Update the component state with the new search word
        this.props.onUpdateSearch(searchWord); // Call the onUpdateSearch prop function passed from the parent component
    }

    render() {
        return (
            <input 
                type="text"
                className="form-control search-input"
                placeholder="Find an employee" 
                value={this.state.searchWord} // Bind input value to component state
                onChange={this.onUpdateSearchPanel} // Attach onChange handler
            />
        );
    }
}

export default SearchPanel; // Export the SearchPanel component as the default export
