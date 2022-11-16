import React, { createRef } from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spans: 0,
    };

    this.imageRef = createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpan);
  }

  setSpan = () => {
    const height = this.imageRef.current.clientHeight;
    this.setState({ spans: Math.ceil(height / 10) });
  };

  render() {
    const { urls, descriptin } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} src={urls.regular} alt={descriptin} />
      </div>
    );
  }
}

export default ImageCard;
