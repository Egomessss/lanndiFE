import { IconFaceIdError } from '@tabler/icons-react';

const ErrorMessage = () => {
    return (
        <div className="flex min-h-screen w-full items-center justify-center flex-col gap-2">
            <IconFaceIdError size="1rem" color="red"/>
            <p>Error fetching data, please try again!</p>
        </div>
    )
}

export default ErrorMessage
