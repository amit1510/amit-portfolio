import React from 'react'
import { Button } from 'antd'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { FilePdfOutlined } from '@ant-design/icons';

const Menu = ({ menu }) => (
  <>
    <nav className="sidebar-navigation">
      <ul className="list-none pl-0">
        {menu.map(item => (
          <li className="mb-3" key={item.path}>
            <AnchorLink to={item.path} className="" activeClassName="current-page">
              {item.label}
            </AnchorLink>
          </li>
        ))}
      </ul>
    </nav>
    <div>
      <ul className="list-none pl-0">
        <li>
          <span className="hide-mobile">
            <Button ghost className="border-0 pl-0 hover:border-blue-700" icon={<FilePdfOutlined />}>
              <a href="/cv.pdf" target="_blank" style={{ color: "white" }} className="no-print"> Download CV</a>
            </Button>
          </span>
        </li>
      </ul>
    </div>
  </>
)

export default Menu
