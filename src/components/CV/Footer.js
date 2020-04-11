import React from 'react'
import { Card } from 'antd'
import { getContactHref, getIcon } from '../../utils'
import Icon from '../Icon'

const Footer = ({ contacts }) =>
    (
        <>
            <Card className="border-0">
                <div className="text-center">
                    <ul className="p-0">
                        {Object.keys(contacts).map(name => (
                            <li key={name} className="inline-block overflow-hidden m-5 leading-none">
                                <a
                                    className="text-black inline-block leading-none"
                                    href={getContactHref(name, contacts[name])}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <Icon icon={getIcon(name)} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mt-5 text-center no-print">amit-portfolio.netlify.com © 2020</div>
            </Card>
        </>
    )
export default Footer
