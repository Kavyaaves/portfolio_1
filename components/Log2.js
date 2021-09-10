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
                                    <Link href={"/freshwater-algae/" + d.name} scroll={true} shallow={true} >
                                        <span className="hover:underline cursor-pointer">{d.name}</span></Link>
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
                                        <span className="hover:underline cursor-pointer text-right">{d.name}</span></Link>
                                </li>
                            </ul>
                        )
                    })}
                </div>

            </div>
            <br />
            <div className="w-full md:flex flex-direction-row pl-8 ">
                <div className="md:w-full">
                    <p className="text-lg text-yellow-500 p-5 pl-0 font-bold">RHODOPHYTA</p>
                    {data.rhodophyta.map((d, i) => {
                        return (
                            <ul key={i} className="pr-8">
                                <li className="text-base text-white  list-disc w-full">
                                    <Link href={"/freshwater-algae/" + d.name} scroll={true} shallow={true} >
                                        <span className="hover:underline cursor-pointer">{d.name}</span></Link>
                                </li>
                            </ul>
                        )
                    })}
                </div>
                <div className="md:w-full">
                    <div className="md:min-w-full">

                        <p className="text-lg text-yellow-500 p-5 pl-0 font-bold">OCHROPHYTA</p>
                        {data.ochrophyta.map((d, i) => {
                            return (
                                <ul key={i}>
                                    <li className="text-base text-white  list-disc">
                                        <Link href={"/freshwater-algae/" + d.name} scroll={true} shallow={true} >
                                            <span className="hover:underline cursor-pointer text-right">{d.name}</span></Link>
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
                    <p className="text-lg text-yellow-500 p-5 pl-0 font-bold">GLAUCOPHYTA</p>
                    {data.glaucophyta.map((d, i) => {
                        return (
                            <ul key={i} className="pr-8">
                                <li className="text-base text-white  list-disc w-full">
                                    <Link href={"/freshwater-algae/" + d.name} scroll={true} shallow={true} >
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

export default Log2
