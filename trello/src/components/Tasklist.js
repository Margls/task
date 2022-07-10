import React from "react";
import TaskCard from "./TaskCard";
import '../App.css'
import ActionButton from "./ActionButton";
import { Droppable } from "react-beautiful-dnd";
const TaskList=({title,cards,listID})=>{
    return(
        <Droppable droppableId={String(listID)}>
            {(provided)=>(
        <div {...provided.droppableProps} ref={provided.innerRef}className="task">
        <h3 className="task_title">{title}</h3>
        {cards.map((c, index)=> <TaskCard id={c.id} index={index} key={c.id} text={c.text} />)}
        <ActionButton listID={listID}/>
        {provided.placeholder}
        </div>)}
        
        </Droppable>
    )
}
export default TaskList;