import React from 'react'
import { Row, Col, Button } from 'antd'
import { FilePdfOutlined } from '@ant-design/icons';

const Header = () => (
  <>
    <div id="top"></div>
    <Row type="flex" justify="space-around" align="middle">
      <Col span={4} className="text-right">
        <span className="hide-desktop">
          <a href="/">
            <img
              src="/photo.jpg"
              alt="Amit Singh"
              width={80}
              className="rounded-full max-w-3/4"
            />
          </a>
        </span>
      </Col>
      <Col span={16} className="text-center">
        <h1 >Amit Singh</h1>
        <h4>C# Developer | CSM</h4>
        <div>Singapore</div>
        <div>
          Linkedin:{' '}
          <a href="https://www.linkedin.com/in/amit1510/" target="_blank" rel="noopener noreferrer">
            amit1510
        </a>
        </div>
        <div>
          github: <a href="https://github.com/amit1510">amit1510</a>
        </div>
      </Col>
      <Col span={4}></Col>
    </Row>
  </>
)

export default Header
