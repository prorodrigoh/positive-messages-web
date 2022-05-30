import React from "react";
import { Row, Col, Card } from 'antd';


export default function MessageCard({quote}) {
    return(
        <Row>
            <Col span={8} />
            <Col span={8} style={{ 
                    margin: '1em',
                    justifyContent: 'center'
                }} key={quote?.id}>
                <Card style={{
                    textAlign: 'center'
                }} 
                    title={`${quote?.message}`}>
                </Card>
            </Col>
            <Col span={8} />
        </Row>
    )
}
