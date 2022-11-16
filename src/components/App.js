import React from "react";
import SearchBar from "./SearchBar";

import UnSplash from "../api/Unsplash";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await UnSplash.get("/search/photos", {
      params: { query: term },
    });
    this.setState({
      images: response.data.results,
    });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "1rem" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
