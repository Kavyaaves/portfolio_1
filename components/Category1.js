import Link from "next/link"
import { useRouter } from 'next/router'

const Category1 = ({ data }) => {

    return (
        <div>
            <h2 className='text-center text-2xl min-h-2xl  italic text-yellow-500 font-bold '>
                <span className=''>FRESHWATER ALGAE</span>
            </h2>
            <br />
            <ul className="list-disc p-8">
                <li
                    className="">
                    <Link href={`/freshwater-algae/Charophyta`} data={data.charophyta}>
                        <span className="text-lg text-gray-100 cursor-pointer hover:underline p-2 pl-0 font-bold">Charophyta</span>
                    </Link>
                </li>
                <li
                    className="">
                    <Link href={`/freshwater-algae/Chlorophyta`} data={data.chlorophyta}>
                        <span className="text-lg text-gray-100 cursor-pointer hover:underline p-2 pl-0 font-bold">Chlorophyta</span>
                    </Link>
                </li>
                <li
                    className="">
                    <Link href={`/freshwater-algae/Euglenophyta`} data={data.euglenophyta}>
                        <span className="text-lg text-gray-100 cursor-pointer hover:underline p-2 pl-0 font-bold">Euglenophyta</span>
                    </Link>
                </li>
                <li
                    className="">
                    <Link href={`/freshwater-algae/Glaucophyta`} data={data.glaucophyta}>
                        <span className="text-lg text-gray-100 cursor-pointer hover:underline p-2 pl-0 font-bold">Glaucophyta</span>
                    </Link>
                </li>
                <li
                    className="">
                    <Link href={`/freshwater-algae/Ochrophyta`} data={data.ochrophyta}>
                        <span className="text-lg text-gray-100 cursor-pointer hover:underline p-2 pl-0 font-bold">Ochrophyta</span>
                    </Link>
                </li>
                <li
                    className="">
                    <Link href={`/freshwater-algae/Rhodophyta`} data={data.rhodophyta}>
                        <span className="text-lg text-gray-100 cursor-pointer hover:underline p-2 pl-0 font-bold">Rhodophyta</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Category1