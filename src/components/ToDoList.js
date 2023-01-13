import { Flex, Center } from "@chakra-ui/react";
import { ToDoListItem } from "./ToDoListItem";
import { useContext } from 'react'

import { AppContext } from '../App'

export const ToDoList = () => {
    //const list = ["alpha", "bravo", "charlie", "delta"];
    const { tasks } = useContext(AppContext)

    return (
        <>
            <Flex flexDirection={'column'} justifyItems='center' gap='4'>
                {tasks.map((task) => {
                    return (
                        <ToDoListItem 
                            id={task.id}
                            key={task.id}
                            task={task}
                        />
                    )
                })}
            </Flex>
        </>
    );
};
