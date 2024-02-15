import * as Checkbox from '@radix-ui/react-checkbox'

import { keyframes, styled } from '../../styles'

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',
  width: '$6',
  height: '$6',
  backgroundColor: '$gray900',
  border: '2px solid $ignite900',
  borderRadius: '$xs',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '&[data-state="checked"]': {
    backgroundColor: '$ignite300',
  },

  '&:focus, &[data-state="checked"]': {
    border: '2px solid $ignite300',
  },
})

const slideInAnimation = keyframes({
  from: {
    transform: 'translateY(-100%)',
  },
  to: {
    transform: 'translateY(0)',
  },
})

const slideOutAnimation = keyframes({
  from: {
    transform: 'translateY(0)',
  },
  to: {
    transform: 'translateY(-100%)',
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: '$white',
  width: '$4',
  height: '$4',

  '&[data-state="checked"]': {
    animation: `${slideInAnimation} 200ms ease-out`,
  },

  '&[data-state="unchecked"]': {
    animation: `${slideOutAnimation} 200ms ease-out`,
  },
})
