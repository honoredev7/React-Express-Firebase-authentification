import React from 'react';
import axios from 'axios';

const Tasks = ({ token }) => {

    const fetchData = async () => {
        await axios.get(`${process.env.API_BASE}/tasks`, {
            headers : {
                Authorization : `Bearer ${token}`
            }
        });
    }
    
    React.useEffect(() => {
        if(token) fetchData();
    }, [token]);
    
    return (
        <React.Fragment>
            <h1>Tasks List</h1>
        </React.Fragment>
    )
}

export default Tasks;
