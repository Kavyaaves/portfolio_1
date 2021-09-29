function Tab2({ syllabus }) {
    console.log(syllabus)
    return (

        <div className="w-full md:flex pl-8">
            <div className="md:w-1/2">
                <p className="text-lg text-yellow-500 p-5 pl-0 font-semibold">B. Sc</p>
                {syllabus.bsc.map((d, i) => {
                    return (
                        <ul key={i}>
                            <li className="text-base text-white list-disc">
                                <a href={"/marine-algae/" + d.name}  >
                                    <span className="hover:underline cursor-pointer">{d.name}</span></a>
                            </li>
                        </ul>
                    )
                })}
            </div>
            <div className="md:w-1/2">
                <p className="text-lg text-yellow-500 p-5 pl-0 font-semibold">M. Sc</p>
                {syllabus.msc.map((d, i) => {
                    return (
                        <ul key={i}>
                            <li className="text-base text-white list-disc">
                                <a href={"/marine-algae/" + d.name} scroll={true}>
                                    <span className="hover:underline cursor-pointer"><i>{d.name}</i></span></a>
                            </li>
                        </ul>
                    )
                })}
            </div>
        </div>

    )
}

export default Tab2
