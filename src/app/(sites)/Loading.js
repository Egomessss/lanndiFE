import { Loader } from '@mantine/core'

const Loading = () => {
    return (
        <div className="flex min-h-screen w-full items-center justify-center flex-col gap-2">
            <Loader color="blue" />
            <p>Loading...</p>
        </div>
    )
}

export default Loading




