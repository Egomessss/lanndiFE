
import AuthLayout from '@/layouts/AuthLayout'

import { Head, Link, useForm } from "@inertiajs/react";
import { Button, Title } from "@mantine/core";
import { FormEventHandler } from "react";

export default function VerifyEmail({ status }: { status?: string }) {
    const { post, processing } = useForm({});

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("verification.send"));
    };

    return (
        <AuthLayout>
            <Head title="Verify Email" />

            <div className="flex w-full min-h-screen justify-center items-center flex-col  px-4 md:px-8 lg:px-14 xl:px-20 ">
                <Title className="whitespace-nowrap text-start mb-6" order={1}>
                    Verify Your spsFeed Account
                </Title>{" "}
                <p className="mb-4 text-base text-center">
                    Thanks for signing up! Verify your email address by clicking
                    on the link we just emailed to you?! If you didn't receive
                    the email, we will gladly send you another.
                </p>
                {status === "verification-link-sent" && (
                    <div className="mb-4 font-medium text-sm text-green-600">
                        A new verification link has been sent to the email
                        address you provided during registration.
                    </div>
                )}
                <form onSubmit={submit}>
                    <div className="mt-4 ">
                        <Button disabled={processing}>
                            Resend Verification Email
                        </Button>

                        {/* <Link
                        href={route("logout")}
                        method="post"
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <button>Log Out</button>
                    </Link> */}
                    </div>
                </form>
            </div>
        </AuthLayout>
    );
}
