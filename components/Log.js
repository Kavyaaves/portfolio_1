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
                                    <Link href={"/marine-algae/" + d.name}  >
                                        <span className="hover:underline cursor-pointer"><i>{d.name}</i></span></Link>
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
                                        <span className="hover:underline cursor-pointer"><i>{d.name}</i></span></Link>
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
                                        <span className="hover:underline cursor-pointer"><i>{d.name}</i></span></Link>
                                </li>
                            </ul>
                        )
                    })}
                </div>
            </div>
            <p className="px-5 pt-5">* Classification as on October 2021 - Guiry M. D. &amp; Guiry G. M. 2021 - {' '}
                <a href="http://www.algaebase.org" target="blank" className="hover:underline">AlgaeBase</a>
            </p>
        </div>
    )
}

export default Log
