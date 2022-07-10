import { Button, Card, Icon } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import {addList,addCard} from "../actions/action"

class ActionButton extends  React.Component {
   
    state={
        formOpen: false,
        text:""
    }
   openForm=()=>{
    this.setState({
        formOpen:true
    })
   }
   closeForm=(e)=>{
    this.setState({
        formOpen:false
    })
   }
   handleInputChange=e=>{
    this.setState({
        text:e.target.value
    })
   }
   handleAddList=()=>{
       const {dispatch}=this.props;
       const {text} = this.state;
       
       if(text){
        this.setState({
            text:""
       })
        dispatch(addList(text))
       }
       return;
}
    handleAddCard=()=>{
       const {dispatch,listID}=this.props;
       const {text} = this.state;
       
       if(text){
        this.setState({
            text:""
       })
        dispatch(addCard(listID,text))
       }
       return;
    }
    renderAddButton=()=>{
        const {list} = this.props;
        const buttonText= list ? "Add another text" : "Add another card"
        const buttonOpacity= list ? 1:0.5;
        const buttonTextColor=list ? "white" : "inherit"
        const background = list ? "rgba(0,0,0,.15)" : "inherit"
         
        return (
            <div className="button" 
            onClick={this.openForm}
            style={{...styles.openFormButton,opacity: buttonOpacity, color:buttonTextColor , backgroundColor: background}}>
                <p>+</p>
                <p>{buttonText}</p>
            </div>
        )
    }
   
    renderForm = ()=>{
        const {list} = this.props;
        const titleName= list ? "Enter list title..." : "Enter a title for this card...";
        const buttonTitle= list ? "Add list" : "Add card"
        return <div>
            <Card style={{
                overflow: "visible",
                minHeight:80,
                minWidth:272,
                padding:"6px 8px 2px"
            }}>
                <textarea placeholder={titleName} autoFocus onBlur={this.closeForm } value={this.state.text} onChange={this.handleInputChange}></textarea>
            </Card>
            <div style={styles.formButtonGroup}>
            <Button onMouseDown={list? this.handleAddList : this.handleAddCard} className="add_button" variant="contained" >{buttonTitle}{" "}</Button>
            <Icon style={{marginLeft:8, cursor:"pointer" , alignItems:"center"}}>╳</Icon>
            </div>
        </div>
    }
    render(){
        return this.state.formOpen ? this.renderForm() :  this.renderAddButton();
    }
}
const styles={
    openFormButton:{
        display: "flex",
  cursor: "pointer",
  alignItems: "center",
  borderRadius:3,
  height:36,
  width:272
    },
    formButtonGroup:{
        marginTop:8,
        display: "flex",
        alignItems:"center",

    }
}
export default connect()( ActionButton);