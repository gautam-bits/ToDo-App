import React, { useState } from "react";
import { useFirestore } from "react-redux-firebase";
import { useSelector } from "react-redux";
import { Input, Checkbox } from "@material-ui/core";

const ToDoItem = ({ isDone, title, todoID }) => {
  const [isTodoItemDone, setTodoItemDone] = useState(isDone);
    const firestore = useFirestore();
    const {uid} = useSelector(state => state.firebase.auth);
  console.log(isTodoItemDone);
  const handleChange = (event) => {
    if (event.currentTarget.type === "checkbox") {
      setTodoItemDone(!isTodoItemDone);
      firestore.collection("users").doc(uid).collection("todos").doc(todoID).update({
          isDone: !isTodoItemDone
      })
    }
  };
  return (
    <div style={{
        textDecoration: isTodoItemDone && "line-through",
        opacity: isTodoItemDone ? 0.5 : 1,
        
    }}>
      <Checkbox
        type="checkbox"
        name=""
        id=""
        onChange={handleChange}
        checked={isTodoItemDone}
      />
      {title}
    </div>
  );
    // <Container className={classes.container} maxWidth="md">
    //   <List>
    //     <ListItem key={item.id} button>
    //         <ListItemIcon>
    //             <CheckCircleIcon color="primary" />
    //         </ListItemIcon>

    //         <ListItemText primary={item.value} />
    //         <ListItemSecondaryAction>
    //             <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(item)}>
    //                 <EditIcon />
    //             </IconButton>
    //             <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(item)}>
    //                 <DeleteIcon />
    //             </IconButton>
    //         </ListItemSecondaryAction>
    //     </ListItem>
    //   </List>)

    // </Container>
};

export default ToDoItem;
