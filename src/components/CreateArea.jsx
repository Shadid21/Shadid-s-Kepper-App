import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

function CreateArea(props) {

  const [isExpand, setExpand] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
      

        const {name, value} = event.target;

        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value
            };     
    });
    }

    function handleClick(event) {
        props.onAdd(note);

        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }


    function handleExpand() {
      setExpand(true);
    }

  return (
    <div>
      <form>

      {isExpand && <input 
        onChange={handleChange} 
        value= {note.title} 
        name="title" 
        placeholder="Title" 

        /> }
        
        <textarea 
        onClick= {handleExpand}
        onChange= {handleChange} 
        value= {note.content} 
        name="content" 
        placeholder="Take a note..." 
        rows={isExpand ? 3 : 1}

        />
        <Fab className="button" onClick={handleClick}><AddIcon /></Fab>
      </form>
    </div>
  );
}

export default CreateArea;








