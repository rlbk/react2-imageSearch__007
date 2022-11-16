import React from "react";

class SearchBar extends React.Component {
  state = {
    text: "",
  };

  onFormSubmit(e) {
    e.preventDefault();

    this.props.onSubmit(this.state.text);
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={(e) => this.onFormSubmit(e)} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.text}
              onChange={(e) => this.setState({ text: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
