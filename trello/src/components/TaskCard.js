import React from "react";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { Draggable } from "react-beautiful-dnd";

const TaskCard=({text,id, index})=>{
    return(
        <Draggable draggableId={String(id)} index={index}>
            {provided =>(
                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                <Card style={style.cardConteiner}>
                <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
             {text}
            </Typography>
            </CardContent>
        </Card>
        </div>
            )}
        
    </Draggable>
    )
}
const style={
    cardConteiner:{
        marginBottom:10,
        marginTop:8
    }
}
export default TaskCard;