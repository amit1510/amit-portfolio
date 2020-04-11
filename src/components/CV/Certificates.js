import React from 'react'
import { Card, Col, Divider, Row } from 'antd'
import data from './data.json'

const Certificates = () => (
  <>
    <Card><div className="text-black text-4xl text-center mt-5 mb-2">Certificates & Courses</div></Card>
    <Card className="rounded-lg">
      {data.certificates.map((activity, i) => (
        <Row type="flex" justify="space-around" key={activity.place} className="text-lg">
          <Divider orientation="left" className={i === 0 && 'mt-0'}>
            {activity.period}
          </Divider>
          <Col span={5}>
            <div className="flex-1 text-left pl-5">
              <img
                src={`/companies/${activity.logo}`}
                alt={activity.place}
                height={activity.logoHeight}
                className="max-w-3/4 inline"
              />
            </div>
          </Col>
          <Col span={16}>
            <div className="text-xl text-black">{activity.description.map(desc => (
              <li>{desc}</li>
            ))}</div>
            <div>{activity.place}</div>
          </Col>
        </Row>
      ))}
    </Card>
  </>
)

export default Certificates
