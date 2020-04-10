import React from 'react'
import { Card, Row, Col, Divider, Tag } from 'antd'
import data from './data.json'

const Experience = () => (
  <>
    <h3 id="experience" className="text-center mt-10 mb-5">Work experience</h3>
    <Card className="work-experience rounded-lg">
      {data.workExperience.map((item, i) => (
        <Row type="flex" justify="space-around" key={item.company.name}>
          <Divider orientation="left" className={i === 0 && 'mt-0'}>
            {item.company.period}
          </Divider>
          <Col span={4} className="hide-mobile">
            {item.company.logo ? (
              <div className="mt-10 ml-10 xl:ml-20">
                <img
                  src={`/companies/${item.company.logo}`}
                  alt={item.company.name}
                  height={item.company.logoHeight}
                  className="max-w-3/4 inline"
                />
              </div>
            ) : (
                <h2 className="text-2xl">{item.company.name}</h2>
              )}
          </Col>
          <Col xs={24} sm={24} md={20} lg={20} xl={20}>
            {item.projects.map((project, i) => (
              <Row type="flex" justify="space-around" key={project.name} className="mb-5">
                {project.logo && (
                  <Col span={5} className="mt-10">
                    <img
                      src={`/companies/${project.logo}`}
                      alt={project.name}
                      height={project.logoHeight}
                      className="max-w-3/4 inline"
                    />
                  </Col>
                )}
                <Col span={project.logo ? 19 : 24} className="text-lg">
                  <h3>{project.role}</h3>
                  <p>{project.description}</p>
                  {project.achievements && (
                    <ul>
                      {project.achievements.map(achievement => (
                        <li key={achievement}>{achievement}</li>
                      ))}
                    </ul>
                  )}
                  <div className="py-1">
                    {project.stack.me &&
                      project.stack.me.map(tech => (
                        <Tag color="#285e61" key={tech} className="mb-1 text-md">
                          {tech}
                        </Tag>
                      ))}
                    {project.stack.all &&
                      project.stack.all.map(tech => (
                        <Tag color="#595959" key={tech} className="mb-1 text-md">
                          {tech}
                        </Tag>
                      ))}
                  </div>
                </Col>
                {item.projects.length - 1 > i && <Divider />}
              </Row>
            ))}
          </Col>
        </Row>
      ))}
    </Card>
  </>
)

export default Experience
