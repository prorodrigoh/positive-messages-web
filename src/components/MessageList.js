import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MessageCard from './MessageCard';
import { Button, Row, Col } from 'antd';

export default function MessageList(){
    let navigate = useNavigate();
    const [messages, setMessages] = useState()

    useEffect( () => {
    // fetch the api
    fetch('https://goodvibesrepo-api.web.app/all')
        .then(response => response.json())
        .then(data => setMessages(data.sort((a,b) => b.createdAt - a.createdAt)))
        .catch(err => console.error(err))
    },[])

    return (
        <>
        <Row>
            <Col span={8} />
            <Col span={8} style={{ 
                    margin: '1em',
                    display: 'flex',
                    justifyContent: "center"
                }} >
                <Button type="primary" size='large' 
                    onClick={() => navigate('/add')}>Add New Message
                </Button>
            </Col>
            <Col span={8} />
        </Row>
        <section style={{ marginTop: '20px' }}>
            {!messages
                ? <h2>Loading...</h2>
                :messages.map( messages => 
                    <MessageCard key={messages.id} quote={messages}/>
                    )
            }
        </section>
        </>
    )
}