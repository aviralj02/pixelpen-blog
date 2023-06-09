

type Props = {}

const Banner = (props: Props) => {
    return (
        <div className="flex flex-col lg:flex-row lg:space-x-5 font-bold px-10 py-5 mb-10 justify-between">
            <div>
                <h1 className="text-7xl">Daily Tech Blog</h1>
                <h2 className="mt-5 md:mt-0">
                    Welcome to{" "}
                    <span className="underline decoration-4 decoration-[#ffab62]">
                        Every Developers
                    </span>{" "}
                    favourite blog in the Devosphere
                </h2>
            </div>

            <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
                New products features | The latest in technology | The weekly debugging
                nightmares and more! 
            </p>
        </div>
    )
}

export default Banner