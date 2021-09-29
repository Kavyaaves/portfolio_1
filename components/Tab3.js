function Tab3({ notes }) {
    return (

        <div className="w-full md:flex pl-8">
            <div className="md:w-1/2">
                {notes.map((d, i) => {
                    return (
                        <ul key={i}>
                            <li className="text-left text-base text-white list-disc">
                                <a href={"/files/Algal Notes/" + d.name + ".pdf"} target="blank" >
                                    <span className="hover:underline cursor-pointer">{d.name}</span></a>
                            </li>
                        </ul>
                    )
                })}
            </div>

        </div>

    )
}

export default Tab3
