import React from "react";
import ReactDOM from "react-dom";
import PostEditor from "./PostEditor";
import "./styles.css";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.mentionsRef = React.createRef();
  }
  render() {
    return (
      <div className="container">
        <p>Type @ to add Mentions</p>
        <br />
        <div className="PostEditor__container">
          <div className="PostEditor">
            <PostEditor
              className="PostEditor__input"
              placeholder={"What are you thinking"}
              mentions={
                [{ name: "Peter", id: "1" }, 
              { name: "John", id: "2" }, 
              { name: "Barney", id: "3" }, { name: "Jane", id: "4" }, { name: "Lin", id: "5" }]
            }
              ref={this.mentionsRef}
            />
            <div key="footerMain" className="PostEditor__footer">
              <button
                onClick={() => {
                  alert(` HTML to Save ${this.mentionsRef.current.toHtml()}`);
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
//const rootElement = document.getElementById("root");
//ReactDOM.render(<Search />, rootElement);