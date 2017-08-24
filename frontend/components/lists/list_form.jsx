import React from 'react';
// This will be a modul
class ListForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      user_id: this.props.currentUser.id,
    };

    this.updateTitle = this.updateTitle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateTitle(e) {
    this.setState({ title: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const list = this.state;
    this.setState({ title: '' });
    this.props.createList({ list: list });
    // close modul
  }

  render() {
    return (
      <div className="list-form">
        <h1>Add a list</h1>
        <form onSubmit={this.handleSubmit} >
          <label>Please enter a new list name:
            <br/>
            <input type="text" onChange={this.updateTitle} value={this.state.title} />
          </label>
            <br/>
            <input type="submit" value="Add" />
            <input className="cancel-button" defaultValue="Cancel" />
        </form>
      </div>
    );
  }
}

export default ListForm;
