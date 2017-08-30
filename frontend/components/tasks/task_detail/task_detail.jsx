import React from 'react';
import { withRouter } from 'react-router-dom';

class TaskDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      due_date: '',
      list_id: '',
      notes: '',
    };
    this.lists = this.lists.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.setCurrentTask(this.props.taskId);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      id: nextProps.currentTask.id,
      title: nextProps.currentTask.title,
      due_date: nextProps.currentTask.due_date,
      list_id: nextProps.currentTask.list_id,
      notes: nextProps.currentTask.notes,
    });
  }

  update(property) {
    return e => this.setState({
      [property]: e.target.value
    });
  }
  lists() {
    return this.props.lists.map(list => {
      return (
        <option
           key={list.id} value={list.id}>
          {list.title}
        </option>
      );
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const task = this.state;
    this.props.editTask(task);
    this.props.history.goBack();
  }

  render() {
    return (
      <container className="task-detail-container">
          <span onClick={this.handleSubmit} className="close">close &times;</span>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.update('title')} className="title" type="text" value={this.state.title}/>
          <label className="date">due
            <input onChange={this.update('due_date')}type="date" value={this.state.due_date}/>
          </label>
          <label className="list">list
              <select onChange={this.update('list_id')}>
                {this.lists()}
              </select>
          </label>
          <h1>Notes</h1>
            <input onChange={this.update('notes')} className="notes" type="text" value={this.state.notes} />
        </form>
      </container>
    );
  }
}

export default withRouter(TaskDetail);
