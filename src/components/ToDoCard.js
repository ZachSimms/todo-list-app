import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Heading,
    Text,
    Input,
    InputLeftElement,
    InputGroup,
    Stack,
} from '@chakra-ui/react'

import './ToDoCard.css';
import { ToDoList } from './ToDoList';
import { ToDoInput } from './ToDoInput';


export const ToDoCard = () => {

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    var dayOfWeek = weekday[today.getDay()]

    return (
        <Card className="BigCard" bgColor='#3D434B' w={350} align='center' textAlign='center' variant={'filled'}>
            <CardBody>
            
                <div style={{padding: '15px 0px'}}>
                    <Heading color='#D5D9DF' fontSize='20px'>{dayOfWeek}</Heading>
                    <Text color='#9A9FA7' fontWeight={400} fontSize={12}>
                        {mm}/{dd}/{yyyy}
                    </Text>
                </div>
                
                <ToDoInput />
            
                <ToDoList />
                
            </CardBody>
        </Card>
    )
}