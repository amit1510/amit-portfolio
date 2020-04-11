import React from 'react'
import { Card, Row, Col, Divider, Tag } from 'antd'
import data from './data.json'

const Projects = () => (
  <>
    <Card><div id="projects" className="text-black text-4xl text-center mt-5 mb-2">Projects & Interests</div></Card>
    <Card className="projects rounded-lg">
      {data.projects.map((experiment, i) => (
        <Row type="flex" justify="space-around">
          <Divider orientation="left" className={i === 0 && 'mt-0'}>
          </Divider>
          <Col span={5} className="pl-5" key={i}>
            <h3>
              <div className="text-xl">{experiment.name}</div>
            </h3>
            <div>
              {experiment.builtWith.map(techName => (
                <Tag color="#90A4AE" key={techName} className="mb-1 text-md">
                  {techName}
                </Tag>
              ))}
            </div>
          </Col>
          <Col span={16}>
            <div className="text-xl text-black">{experiment.description}</div>
          </Col>
        </Row>
      ))}
    </Card>
  </>
)

export default Projects
