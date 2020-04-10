import React from 'react'
import { Card, Row, Col, Tag } from 'antd'
import data from './data.json'

const SkillList = () => (
  <div className="rounded-lg">
    <Row type="flex" justify="space-around">
      <Col span={10}>
        <h3 className="text-center ml-10 mt-10 mb-5">Tech Stack</h3>
      </Col>
      <Col span={12}>
        <h3 className="text-center mt-10 mb-5">Industry Knowledge & Soft skills</h3>
      </Col>
    </Row>
    <Card className="">
      <Row type="flex" justify="space-around">
        <Col span={11}>
          <div>
            {data.skills.tech.map(skill => (
              <Tag color="#006d75" key={skill} className="mb-1 text-md">
                {skill}
              </Tag>
            ))}
          </div>
          {data.skills.otherTech.map(skill => (
            <Tag color="cyan" key={skill} className="mb-1 text-md">
              {skill}
            </Tag>
          ))}
        </Col>
        <Col span={11}>
          <div>
            {data.skills.soft.map(skill => (
              <Tag color="#002766" key={skill} className="mb-1 text-md">
                {skill}
              </Tag>
            ))}
          </div>
          {data.skills.otherSoft.map(skill => (
            <Tag color="geekblue" key={skill} className="mb-1 text-md">
              {skill}
            </Tag>
          ))}
        </Col>
      </Row>
    </Card>
  </div>
)

export default SkillList
