import React from "react";
import ReactDOM from "react-dom";
import PostEditor from "./PostEditor";
import "./styles.css";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.mentionsRef = React.createRef();
  }
  render() {
    return (
      <div className="container">
        <p>Type @Foo or @Bar to add Mentions</p>
        <br />
        <div className="PostEditor__container">
          <div className="PostEditor">
            <PostEditor
              className="PostEditor__input"
              placeholder={"What are you thinking"}
              mentions={[{ name: "Foo", id: "1" }, { name: "Bar", id: "2" }]}
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

const rootElement = document.getElementById("root");
ReactDOM.render(<Post />, rootElement);
