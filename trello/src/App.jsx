import logo from './logo.svg';
import './App.css';
import { Component, useState } from 'react';
import React from 'react';
import TaskList from './components/Tasklist';
import { connect } from 'react-redux';
import ActionButton from './components/ActionButton';
import { DragDropContext } from 'react-beautiful-dnd';



class  App extends Component {
  onDragEnd=()=>{
    //
  }
  render(){ 
    const {lists} =this.props;
  return (
    <DragDropContext onDragEnd={this.onDragEnd}>
    <div className="App">
      {lists.map(l =>
        <TaskList listID={l.id}title= {l.title} key={l.id} cards={l.cards}/>
        
      )}
      <ActionButton list/>
    </div>
    </DragDropContext>
  );

}
}
let mapStateToProps=state=>({
   lists: state.lists
})
export default connect(mapStateToProps)(App);
