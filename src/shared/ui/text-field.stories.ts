import '@/index.css'

import type { Meta, StoryObj } from '@storybook/react'

import TextField from './text-field'

const component = TextField

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'UI/TextField',
    component,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
} satisfies Meta<typeof component>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
        label: 'Label'
    }
}

export const Disabled: Story = {
    args: {
        label: 'Label',
        isDisabled: true
    }
}

export const Invalid: Story = {
    args: {
        label: 'Label',
        isInvalid: true
    }
}

export const InvalidWithMessage: Story = {
    args: {
        label: 'Label',
        isInvalid: true,
        errorMessage: 'Some error...'
    }
}

export const DisabledInvalidWithMessage: Story = {
    args: {
        label: 'Label',
        isInvalid: true,
        errorMessage: 'Some error...',
        isDisabled: true,
        value: 'Some value...'
    }
}
