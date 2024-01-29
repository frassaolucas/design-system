import type { Meta, StoryObj } from '@storybook/react'

import { Box, MultiStep, MultiStepProps } from '@dobra-ui/react'

export default {
  title: 'Form/Multi Step',
  component: MultiStep,
  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    (Story) => {
      return (
        <Box css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {}

export const Completed: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
}
