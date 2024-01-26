
import {
    Box,
    PasswordInput,
    Popover,
    Progress,
    Text,
    TextInput,
} from '@mantine/core'
import { IconCheck, IconX } from '@tabler/icons-react'
import { useState } from 'react'
import { useDisclosure } from '@mantine/hooks'

function PasswordRequirement({
    meets,
    label,
}: {
    meets: boolean
    label: string
}) {
    return (
        <Text
            className={`flex items-center ${
                meets ? 'text-green-500' : ' text-red-500'
            }`}
            mt={7}
            size="sm"
        >
            {meets ? <IconCheck size="1.4rem" color='green' /> : <IconX size="1.4rem"  color='red'/>}{' '}
            <Box ml={10}>{label}</Box>
        </Text>
    )
}

const requirements = [
    { re: /[0-9]/, label: 'Includes number' },
    { re: /[a-z]/, label: 'Includes lowercase letter' },
    { re: /[A-Z]/, label: 'Includes uppercase letter' },
    { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Includes special symbol - e.g: [$&+,:;=?@#|\'<>.^*()%!-]' },
]

function getStrength(password: string) {
    let multiplier = password.length > 5 ? 0 : 1

    requirements.forEach((requirement) => {
        if (!requirement.re.test(password)) {
            multiplier += 1
        }
    })

    return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10)
}

export default function PasswordInputStrengthMeter({
    text,
    value,
    setData,
    errors,
}: {
    text: string
    value: string
    setData: any
    errors: any
}) {
    const [popoverOpened, setPopoverOpened] = useState(false)
    const checks = requirements.map((requirement, index) => (
        <PasswordRequirement
            key={index}
            label={requirement.label}
            meets={requirement.re.test(value)}
        />
    ))

    const strength = getStrength(value)
    const color = strength === 100 ? 'teal' : strength > 50 ? 'yellow' : 'red'
    const [visible, { toggle }] = useDisclosure(true)

    return (
        <Box>
            <Popover
                opened={popoverOpened}
                position="bottom"
                width="target"
                transitionProps={{ transition: 'pop' }}
            >
                <Popover.Target>
                    <div
                        onFocusCapture={() => setPopoverOpened(true)}
                        onBlurCapture={() => setPopoverOpened(false)}
                    >
                        <PasswordInput
                            required
                            label={text}
                            placeholder="Your password"
                            type="password"
                            name="password"
                            value={value}
                            onChange={setData}
                            className="mt-1 block w-full"
                            autoComplete="current-password"
                            withAsterisk
                            visible={visible}
                            onVisibilityChange={toggle}
                            error={errors}
                        />

                    </div>
                </Popover.Target>
                <Popover.Dropdown>
                    <Progress
                        color={color}
                        value={strength}
                        size={5}
                        mb="xs"
                    />
                    <PasswordRequirement
                        label="Includes at least 8 characters"
                        meets={value.length > 7}
                    />
                    {checks}
                </Popover.Dropdown>
            </Popover>
        </Box>
    )
}
