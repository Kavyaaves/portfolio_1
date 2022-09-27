import Link from "next/link"

function Log2({ data }) {
    return (
        <div>
            <h2 className='text-center text-2xl italic text-yellow-500 font-bold '>
                <span className=''>FRESHWATER ALGAE</span>
            </h2>
            <div className="w-full md:flex flex-direction-row pl-8 ">
                <div className="md:w-full">
                    <p className="text-lg text-yellow-500 p-5 pl-0 font-bold">CHAROPHYTA</p>
                    {data.charophyta.map((d, i) => {
                        return (
                            <ul key={i} className="pr-8">
                                <li className="text-base text-white  list-disc w-full">
                                    <Link href={"/freshwater-algae/" + d.name} >
                                        <span className="hover:underline cursor-pointer"><i>{d.name}</i></span></Link>
                                </li>
                            </ul>
                        )
                    })}
                </div>
                <div className="md:w-full">

                    <p className="text-lg text-yellow-500 p-5 pl-0 font-bold ">CHLOROPHYTA</p>
                    {data.chlorophyta.map((d, i) => {
                        return (
                            <ul key={i}>
                                <li className="text-base text-white  list-disc">
                                    <Link href={"/freshwater-algae/" + d.name} scroll={true} shallow={true} >
                                        <span className="hover:underline cursor-pointer text-right"><i>{d.name}</i></span></Link>
                                </li>
                            </ul>
                        )
                    })}
                </div>

            </div>
            <br />
            <div className="w-full md:flex flex-direction-row pl-8 ">

                <div className="md:w-full">
                    <p className="text-lg text-yellow-500 p-5 pl-0 font-bold">EUGLENOPHYTA</p>
                    {data.euglenophyta.map((d, i) => {
                        return (
                            <ul key={i} className="pr-8">
                                <li className="text-base text-white  list-disc w-full">
                                    <Link href={"/freshwater-algae/" + d.name} scroll={true} shallow={true} >
                                        <span className="hover:underline cursor-pointer"><i>{d.name}</i></span></Link>
                                </li>
                            </ul>
                        )
                    })}
                </div>
                <div className="md:w-full">
                    <div className="md:min-w-full">
                        <p className="text-lg text-yellow-500 p-5 pl-0 font-bold">RHODOPHYTA</p>
                        {data.rhodophyta.map((d, i) => {
                            return (
                                <ul key={i} className="pr-8">
                                    <li className="text-base text-white  list-disc w-full">
                                        <Link href={"/freshwater-algae/" + d.name} scroll={true} shallow={true} >
                                            <span className="hover:underline cursor-pointer"><i>{d.name}</i></span></Link>
                                    </li>
                                </ul>
                            )
                        })}
                    </div>
                </div>
            </div>
            <br />
            <div className="w-full md:flex flex-direction-row pl-8 ">
                <div className="md:w-full">
                    <div className="md:min-w-full">
                        <p className="text-lg text-yellow-500 p-5 pl-0 font-bold">OCHROPHYTA</p>
                        {data.ochrophyta.map((d, i) => {
                            return (
                                <ul key={i}>
                                    <li className="text-base text-white  list-disc">
                                        <Link href={"/freshwater-algae/" + d.name} scroll={true} shallow={true} >
                                            <span className="hover:underline cursor-pointer text-right"><i>{d.name}</i></span></Link>
                                    </li>
                                </ul>
                            )
                        })}
                    </div>
                </div>
                <div className="md:w-full">
                    <p className="text-lg text-yellow-500 p-5 pl-0 font-bold">GLAUCOPHYTA</p>
                    {data.glaucophyta.map((d, i) => {
                        return (
                            <ul key={i} className="pr-8">
                                <li className="text-base text-white  list-disc w-full">
                                    <Link href={"/freshwater-algae/" + d.name} scroll={true} shallow={true} >
                                        <span className="hover:underline cursor-pointer"><i>{d.name}</i></span></Link>
                                </li>
                            </ul>
                        )
                    })}
                </div>

            </div>
            <br />
            <div className="w-full md:flex flex-direction-row pl-8 ">

            </div>
            <br />
            <p className="px-5 pt-5">* Classification as on October 2021 - Guiry M. D. &amp; Guiry G. M. 2021 - {' '}
                <a href="http://www.algaebase.org" target="blank" className="hover:underline">AlgaeBase</a>
            </p>
        </div >
    )
}

export default Log2
