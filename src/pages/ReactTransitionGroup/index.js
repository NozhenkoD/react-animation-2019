import React, { Component, Fragment } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import random from 'random-name'
import Button from './button'
import Item from './item'
import './style.css';

export default class ReactTransitionGroup extends Component {

  constructor(props) {
    super(props);
    this.state = { items: ['Natividad Steen'] };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    let newItems = this.state.items;
    newItems.push(random());
    this.setState({ items: newItems });
  }

  handleRemove(i) {
    let newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({items: newItems});
  }

  render() {
    const items = this.state.items.map((item, i) => (
      <Item item={item} key={i} keyDelete={i} handleRemove={(i) => this.handleRemove(i)} />
    ));

    return (
      <Fragment>
        <Button onClick={this.handleAdd}/>
        <div className="project">
          <CSSTransitionGroup
            transitionName="example"
          >
            {items}
          </CSSTransitionGroup>
        </div>
      </Fragment>
    );
  }
}
