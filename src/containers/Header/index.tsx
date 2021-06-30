import React from 'react'
import { Input } from 'antd';
import { Row, Col } from 'antd';
import { Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';
export const Header = () => {
    const history = useHistory();
    const pathLocation = {
        pathname: '/signin'
    }

    return (
        <div>
            {/* <h1>Header</h1> */}
            {/* <Input placeholder="Basic usage" /> */}
            <Row>
                <Col span={8}>
                    <Input placeholder="input..." />
                </Col>
                <Col span={2}>
                    <Tooltip title="search">
                        <Button shape="circle" icon={<SearchOutlined />} />
                    </Tooltip>
                </Col>
                <Col span={11}></Col>
                <Col span={3}>
                    <Button type="text" danger onClick={() => history.push(pathLocation)}>Sign out</Button>
                </Col>
            </Row>
        </div>
    )
}
