import Link from "next/link"

function Log({ data }) {
    return (
        <div>
            <h2 className='text-center text-2xl italic text-yellow-500 font-bold '>
                <span className=''>MARINE ALGAE</span>
            </h2>
            <br />
            <div className="w-full md:flex p-10 items-center">

                <div className="md:w-1/2">
                    <p className="text-lg text-yellow-500 p-5 pl-0">Red Algae</p>
                    {data.red.map((d, i) => {
                        return (
                            <ul>
                                <li className="text-base text-white list-disc hover:underline">
                                    <Link href={"/marine-algae/" + d.name}>{d.name}</Link>
                                </li>
                            </ul>
                        )
                    })}
                </div>
                <div className="md:w-1/2">
                    <p className="text-lg text-yellow-500 p-5 pl-0">Brown Algae</p>
                    {/* {data.brown.map((d, i) => {
                        return (
                            <ul>
                                <li className="text-base text-white list-disc hover:underline">
                                    <Link href="">{d.name}</Link>
                                </li>
                            </ul>
                        )
                    })} */}
                </div>
            </div>
            <div className="md:w-1/2">
                <p className="text-lg text-yellow-500 p-5 pl-0">Green Algae</p>
                {/* {data.green.map((d, i) => {
                    return (
                        <ul>
                            <li className="text-base text-white list-disc hover:underline">
                                <Link href="">{d.name}</Link>
                            </li>
                        </ul>
                    )
                })} */}
            </div>
        </div>
    )
}

export default Log
