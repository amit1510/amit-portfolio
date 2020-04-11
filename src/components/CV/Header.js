import React from 'react'
import { Card, Row, Col } from 'antd'

const Header = () => (
  <>
    <div id="top"></div>
    <Card className="border-0">
      <Row type="flex" justify="space-around" align="middle">
        <Col span={4} className="text-right">
          <span className="ml-8 hide-desktop">
            <a href="/">
              <img
                src="/photo.jpg"
                alt="Amit Singh"
                width={90}
                className="rounded-full"
              />
            </a>
          </span>
        </Col>
        <Col span={16} className="text-center">
          <div className="text-black text-center pt-5">
            <div className="text-4xl">Amit Singh</div>
            <div className="text-3xl">C# Developer | CSM</div>
            <div>Singapore</div>
            <div>
              Linkedin:{' '}
              <a href="https://www.linkedin.com/in/amit1510/" target="_blank" rel="noopener noreferrer">amit1510</a>
            </div>
            <div>
              github: <a href="https://github.com/amit1510">amit1510</a>
            </div>
            <div>Email: <a href="mailto:amit1510@gmail.com">amit1510@gmail.com</a></div>
          </div>
        </Col>
        <Col span={4}></Col>
      </Row>
    </Card>
  </>
)

export default Header
