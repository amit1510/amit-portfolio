import React from 'react'
import { Card, Row, Col, Tag } from 'antd'
import data from './data.json'

const SkillList = () => (
  <div id="techstack">
    <Card className="border-0">
      <Row type="flex" justify="space-around">
        <Col span={10}>
          <div className="text-black text-2xl text-center ml-10 mt-5 mb-2">Tech Stack</div>
        </Col>
        <Col span={12}>
          <div className="text-black text-2xl text-center ml-10 mt-5 mb-2">Industry Knowledge & Soft skills</div>
        </Col>
      </Row>
    </Card>
    <Card className="">
      <Row type="flex" justify="space-around">
        <Col span={11}>
          <div>
            {data.skills.tech.map(skill => (
              <Tag color="#553C9A" key={skill} className="mb-1 text-md">
                {skill}
              </Tag>
            ))}
          </div>
          {data.skills.otherTech.map(skill => (
            <Tag color="purple" key={skill} className="mb-1 text-md">
              {skill}
            </Tag>
          ))}
        </Col>
        <Col span={11}>
          <div>
            {data.skills.soft.map(skill => (
              <Tag color="#e39f1c" key={skill} className="mb-1 text-md">
                {skill}
              </Tag>
            ))}
          </div>
          {data.skills.otherSoft.map(skill => (
            <Tag style={{ color: "#e39f1c", backgroundColor: "#fffbd9", borderColor: "#FFCC80" }} key={skill} className="mb-1 text-md">
              {skill}
            </Tag>
          ))}
        </Col>
      </Row>
    </Card>
  </div>
)

export default SkillList
