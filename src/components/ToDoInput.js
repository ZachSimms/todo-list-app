import {
    Input,
    InputLeftElement,
    InputGroup,
    Center,
    Flex,
    Text,
} from '@chakra-ui/react'

import './ToDoInput.css';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import SendIcon from '@mui/icons-material/Send';
import { useContext, useEffect, useState, useRef } from 'react'

import { AppContext } from '../App'


export const ToDoInput = () => {

    const { taskinput, setTaskInput, createTask,getTasks } = useContext(AppContext);
    const [ placeholder, setPlaceHolder] = useState("Add a task...")
    const inputRef = useRef(null)

    const handleChange = (event) => {
        setTaskInput(event.target.value)
    };

    const handleSubmit = (e) => {
        if (inputRef.current.value !== "") {
            createTask()
            setTaskInput("")
            setPlaceHolder("Add a task...")
            inputRef.current.value = ""
            getTasks()
        }
        
        
        
    }
    
    // useEffect(() => {
    //     getTasks();
    // }, []);
    
    return (
        <Center>
            <Flex pr='6px'bgColor='#343A3F' borderRadius={4} gap='2' mb={5} alignItems={'center'}>
                
                    <InputGroup w='280px' maxW={300} h={29} >
                        <InputLeftElement
                            as={FormatAlignLeftIcon}
                            pointerEvents="none"
                            color="#72787F"
                            w={13}
                            h={13}
                            pos="absolute"
                            top='2'
                            left='3'
                        />
                        <Input
                            ref={inputRef}
                            focusBorderColor="black"
                            h={29}
                            type='text'
                            borderRadius={4}
                            color="#72787F"
                            bgColor="#343A3F"
                            bg="#343A3F"
                            variant="filled"
                            placeholder={placeholder}
                            onChange={handleChange}
                        />
                    </InputGroup>
                    
                    
                    <Text 
                        borderRadius={4}
                        as={SendIcon}
                        cursor='pointer' 
                        color="#D5D9DF"
                        w={5}
                        h={5}
                        onClick={handleSubmit}
                    />
                
            </Flex>
        </Center>
    );
};
