import Link from "next/link"

function Log({ data }) {
    return (
        <div>
            <h2 className='text-center text-2xl italic text-yellow-500 font-bold '>
                <span className=''>MARINE ALGAE</span>
            </h2>
            <div className="w-full md:flex pl-8">
                <div className="md:w-1/3 ">
                    <p className="text-lg text-yellow-500 p-5 pl-0 font-semibold">Red Algae</p>
                    {data.red.map((d, i) => {
                        return (
                            <ul key={i}>
                                <li className="text-base text-white list-disc">
                                    <Link href={"/marine-algae/" + d.name} scroll={true} shallow={true} >
                                        <span className="hover:underline cursor-pointer">{d.name}</span></Link>
                                </li>
                            </ul>
                        )
                    })}
                </div>
                <div className="md:w-1/3">
                    <p className="text-lg text-yellow-500 p-5 pl-0 font-semibold">Brown Algae</p>
                    {data.brown.map((d, i) => {
                        return (
                            <ul key={i}>
                                <li className="text-base text-white list-disc">
                                    <Link href={"/marine-algae/" + d.name} scroll={true}>
                                        <span className="hover:underline cursor-pointer">{d.name}</span></Link>
                                </li>
                            </ul>
                        )
                    })}
                </div>
                <div className="md:w-1/3">
                    <p className="text-lg text-yellow-500 p-5 pl-0 font-semibold">Green Algae</p>
                    {data.green.map((d, i) => {
                        return (
                            <ul key={i}>
                                <li className="text-base text-white list-disc">
                                    <Link href={"/marine-algae/" + d.name} scroll={true}>
                                        <span className="hover:underline cursor-pointer">{d.name}</span></Link>
                                </li>
                            </ul>
                        )
                    })}
                </div>
            </div>
            <br />

        </div>
    )
}

export default Log
