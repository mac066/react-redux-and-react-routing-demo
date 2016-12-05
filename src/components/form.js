import React from 'react'
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.focus = this.focus.bind(this);
  }

  focus() {
      console.log(this.sagar)
    // Explicitly focus the text input using the raw DOM API
    this.sagar.focus();
  }

  render() {
    // Use the `ref` callback to store a reference to the text input DOM
    // element in this.sagar.
    return (
      <div>
        <input
          type="text"
          ref={(input) => {
              console.log(input)
               this.sagar = input; }} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focus}
        />
      </div>
    );
  }
}

export default CustomTextInput