import React from 'react'
import { Card, Row, Col, Divider } from 'antd'
import data from './data.json'

const Education = () => (
  <>
    <Card><div id="education" className="text-black text-4xl text-center mt-5 mb-2">Education</div></Card>
    <Card className="education rounded-lg">
      {data.education.map((institution, i) => (
        <Row
          type="flex"
          justify="space-around"
          key={institution.place}
          className="text-lg"
        >
          <Divider orientation="left" className={i === 0 && 'mt-0'}>
            {institution.period}
          </Divider>
          <Col span={5}>
            <h3>{institution.degree}</h3>
          </Col>
          <Col span={16}>
            <div className="text-xl text-black">{institution.place}</div>
          </Col>
        </Row>
      ))}
    </Card>
  </>
)

export default Education
