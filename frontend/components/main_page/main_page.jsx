import React from 'react';
import HeaderContainer from '../header/header_container';
import Sidebar from '../sidebar/sidebar';
import ListForm from '../lists/list_form';
import ListEditForm from '../lists/list_edit_form';


class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { nextProps: {}};
    this.form = this.form.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout() {
    this.props.logout(this.props.currentUser);
    this.props.clearUi();
  }

  form() {
    switch (this.props.ui) {
      case "create":
        return <ListForm className="list-form"
          createList={this.props.createList}
          clearUi={this.props.clearUi}
          currentUser={this.props.currentUser} />;
      case "edit":
        return <ListEditForm className="list-edit-form"
          currentList={this.props.currentList}
          clearCurrentList={this.props.clearCurrentList}
          clearUi={this.props.clearUi}
          editList={this.props.editList} />;
      default:
        return null;
    }
  }

  render() {
    return(
      <div className="main-page">
        <HeaderContainer />
        <Sidebar />
        {this.form()}
        <container className={this.props.ui === "settings" ? "settings-dropdown view" : "hidden"}>
          <div className="user">
            <p className="avatar">avatar</p>
            <div className="user-info">
              <p className="name">{this.props.currentUser.first_name} {this.props.currentUser.last_name}</p>
              <p className="email">{this.props.currentUser.email}</p>
            </div>
          </div>
          <p className="signout" onClick={this.handleLogout} >Sign out</p>
        </container>
      </div>
    );
  }
}

export default MainPage;
