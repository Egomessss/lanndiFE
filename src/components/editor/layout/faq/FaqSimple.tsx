import React from "react";

export default function FaqSimple() {
    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div className="mb-10 md:mb-16">
                    <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                        Frequently asked questions
                    </h2>

                    <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                        This is a section of some simple filler text, also known
                        as placeholder text. It shares some characteristics of a
                        real written text but is random or otherwise generated.
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:gap-16">
                    <div>
                        <h3 className="mb-2 text-lg font-semibold text-indigo-500 md:text-xl">
                            How does the product work?
                        </h3>
                        <p className="text-gray-500">
                            This is a section of some simple filler text, also
                            known as placeholder text. It shares some
                            characteristics of a real written text.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-2 text-lg font-semibold text-indigo-500 md:text-xl">
                            What are the features?
                        </h3>
                        <p className="text-gray-500">
                            This is a section of some simple filler text, also
                            known as placeholder text. It shares some
                            characteristics of a real written text.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-2 text-lg font-semibold text-indigo-500 md:text-xl">
                            What about integrations?
                        </h3>
                        <p className="text-gray-500">
                            This is a section of some simple filler text, also
                            known as placeholder text. It shares some
                            characteristics of a real written text.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-2 text-lg font-semibold text-indigo-500 md:text-xl">
                            Is support available?
                        </h3>
                        <p className="text-gray-500">
                            This is a section of some simple filler text, also
                            known as placeholder text. It shares some
                            characteristics of a real written text.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-2 text-lg font-semibold text-indigo-500 md:text-xl">
                            How does one upgrage a plan?
                        </h3>
                        <p className="text-gray-500">
                            This is a section of some simple filler text, also
                            known as placeholder text. It shares some
                            characteristics of a real written text.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-2 text-lg font-semibold text-indigo-500 md:text-xl">
                            Which payment methods are available?
                        </h3>
                        <p className="text-gray-500">
                            This is a section of some simple filler text, also
                            known as placeholder text. It shares some
                            characteristics of a real written text.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
