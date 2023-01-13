import {
    Checkbox,
    Text,
    Input,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverArrow,
    Box,
    Spacer,
    Flex,
    PopoverBody,
    Textarea,
} from "@chakra-ui/react";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";

import { useContext, useEffect, useState, useRef } from "react";

import { AppContext } from "../App";

export const ToDoListItem = (props) => {
    /* DATA
        - Edit text with the text entry
        - Checkbox to show completed
        - Menu to Save edit or Delete task
    */

    const {
        getTasks,
        createTask,
        updateTask,
        deleteTask,
        taskinput,
        setTaskInput,
        isComplete,
        setIsComplete,
        tasks,
        setTasks,
    } = useContext(AppContext);
    // const updateTask = async (id, title, complete) => {
    //     const taskDoc = doc(db, 'tasks', id);
    //     const newFields = {title: title, isComplete: complete};
    //     await updateDoc(taskDoc, newFields)
    // }

    // const deleteTask = async (id) => {
    //     const taskDoc = doc(db, 'tasks', id);
    //     await deleteDoc(taskDoc)
    //   }
    const [checkboxChecked, setCheckboxChecked] = useState(
        props.task.isChecked
    );
    const [editedText, setEditedText] = useState("");
    const checkboxRef = useRef(null);
    const inputRef = useRef(null);

    const handleCheckboxChange = (e) => {
        
        //console.log(e.target.checked);
        updateTask(props.id, props.task.title, e.target.checked);
        getTasks();
        
        
    };

    const handleEdit = (e) => {
        
        if (editedText !== "") {
            inputRef.current.value = ""
            updateTask(props.id, editedText, props.task.isComplete);
            
            setEditedText("")
            getTasks();
            
        }
    }
        


    // const getTasks = async () => {
    //     const data = await getDocs(tasksCollectionRef);
    //     setTasks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    //   };

    useEffect(() => {
        getTasks();
    }, [tasks]);

    return (
        <>
            <Flex minWidth="max-content" alignItems="center" gap="3">
                <Checkbox
                    ref={checkboxRef}
                    colorScheme=""
                    iconColor="#D5D9DF"
                    iconSize="1rem"
                    isChecked={props.task.isComplete}
                    onChange={handleCheckboxChange}
                />
                <Textarea
                    ref={inputRef}
                    focusBorderColor="black"
                    fontSize={16}
                    maxW={245}
                    borderRadius={4}
                    color="#D5D9DF"
                    rows={1}
                    resize="none"
                    //bgColor="blue"
                    //bg="#343A3F"
                    variant="unstyled"
                    placeholder={props.task.title}
                    _placeholder={{ opacity: 0.75, color: "#D5D9DF" }}
                    onChange={(e) => setEditedText(e.target.value)}
                />
                <Spacer />
                <Text
                    as={CreateIcon}
                    cursor="pointer"
                    color="#D5D9DF"
                    w={4}
                    h={4}
                    onClick={handleEdit}
                />
                <Text
                    as={DeleteIcon}
                    cursor="pointer"
                    color="#D5D9DF"
                    w={4}
                    h={4}
                    onClick={() => deleteTask(props.id)}
                />
            </Flex>
        </>
    );
};
