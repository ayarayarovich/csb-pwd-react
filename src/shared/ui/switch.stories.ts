import '@/index.css'

import type { Meta, StoryObj } from '@storybook/react'

import Switch from './switch'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'UI/Switch',
    component: Switch,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered'
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs']
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    // args: { onKeyDown: fn() }
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
        isSelected: false,
        isDisabled: false
    }
}

export const Disabled: Story = {
    args: {
        isDisabled: true,
        isSelected: false
    }
}

export const Selected: Story = {
    args: {
        isSelected: true,
        isDisabled: false
    }
}

export const WithLabel: Story = {
    args: {
        isSelected: true,
        isDisabled: false,
        children: 'Label'
    }
}

export const WithLabelDisabled: Story = {
    args: {
        isSelected: true,
        isDisabled: true,
        children: 'Disabled'
    }
}
