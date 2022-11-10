import React from "react";
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

function Note(props) {

  function handlerClick(){
    props.onDelete(props.id)
  }
    return (
        <div className="note">
          <h1>{props.title}</h1>
          <p>{props.content}</p>
          <button onClick={handlerClick}><RemoveCircleIcon/></button>
        </div>
    )
}

export default Note;