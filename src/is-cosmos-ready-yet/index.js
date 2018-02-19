import React from 'react'
import styled from 'styled-components'

import { Heading, Logo } from '../components'
import Center from '../components/_helpers/center'
import { colors } from '../tokens'

/* Get sources from the file generated by tooling/update-progress */
import componentList from './components.json'
const components = componentList
  .filter(c => ['../components', './dummy-components'].includes(c.source))
  .filter(c => c.name !== 'Dummy')

const Node = styled.span`
  margin: 10px;
  display: inline-block;
  g {
    fill: ${props => (props.pass ? 'normal' : colors.grayLightest)};
  }
`

const totalComponents = components.length
const realComponents = components.filter(c => c.source === '../components').length
const percentage = parseInt(100 * realComponents / totalComponents, 10)

export default () => (
  <Center style={{ width: '75%' }}>
    <Heading size={1}>Milestone 1: Manage PoC {components['']}</Heading>
    <Heading size={2}>{percentage}%</Heading>
    <div>
      {components.map((component, index) => (
        <Node title={component.name} key={index} pass={component.source === '../components'}>
          <Logo />
        </Node>
      ))}
    </div>
  </Center>
)
