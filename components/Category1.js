import Link from "next/link"
import { useRouter } from 'next/router'

const Category1 = ({ data }) => {
    return (
        <div>
            <h2 className='text-center text-2xl min-h-2xl  italic text-yellow-500 font-bold '>
                <span className=''>FRESHWATER ALGAE</span>
            </h2>
            <br />
            <div className="container grid md:grid-cols-3 grid-cols-1 gap-4 mx-auto">
                <Link href={`/freshwater-algae/Charophyta`} data={data.charophyta} className="w-full h-full rounded-lg cursor-pointer">
                    <div className="flex flex-wrap m-auto relative  items-center  justify-center cursor-pointer overflow-hidden">
                        <img src="/charophyta/Netrium naegelii.jpg" className="object-cover w-full h-full overflow-hidden hover:opacity-70 opacity-50 transition transform duration-700 ease-in-out hover:-translate-y-1 hover:scale-110 " />
                        <div className=" text-lg text-white font-bold text-center absolute">Charophyta</div>
                    </div>
                </Link>
                <Link href={`/freshwater-algae/Chlorophyta`} data={data.chlorophyta} className="w-full h-full rounded-lg cursor-pointer">
                    <div className="flex flex-wrap m-auto relative  items-center  justify-center cursor-pointer overflow-hidden">
                        <img src="/chlorophyta/Pediastrum duplex  01   IMG_0015.JPG" className="object-cover w-full h-full overflow-hidden hover:opacity-70 opacity-50 transition transform duration-700 ease-in-out hover:-translate-y-1 hover:scale-110 " />
                        <div className=" text-lg text-white font-bold text-center absolute">Chlorophyta</div>
                    </div>
                </Link>
                <Link href={`/freshwater-algae/Euglenophyta`} data={data.euglenophyta} className="w-full h-full rounded-lg cursor-pointer">
                    <div className="flex flex-wrap m-auto relative  items-center  justify-center cursor-pointer overflow-hidden">
                        <img src="/euglenophyta/Lepocinclis oxyuris.webp" className="object-cover w-full h-full overflow-hidden hover:opacity-70 opacity-50 transition transform duration-700 ease-in-out hover:-translate-y-1 hover:scale-110 " />
                        <div className=" text-lg text-white font-bold text-center absolute">Euglenophyta</div>
                    </div>
                </Link>
                <Link href={`/freshwater-algae/Glaucophyta`} data={data.glaucophyta} className="w-full h-full rounded-lg cursor-pointer">
                    <div className="flex flex-wrap m-auto relative  items-center  justify-center cursor-pointer overflow-hidden">
                        <img src="/glaucophyta/01 Glaucocystis nostochinearum  V 06  IMG_0034.JPG" className="object-cover w-full h-full overflow-hidden hover:opacity-70 opacity-50 transition transform duration-700 ease-in-out hover:-translate-y-1 hover:scale-110 " />
                        <div className=" text-lg text-white font-bold text-center absolute">Glaucophyta</div>
                    </div>
                </Link>
                <Link href={`/freshwater-algae/Ochrophyta`} data={data.ochrophyta} className="w-full h-full rounded-lg cursor-pointer">
                    <div className="flex flex-wrap m-auto relative  items-center  justify-center cursor-pointer overflow-hidden">
                        <img src="/ochrophyta/03 Centritractus belonophorus  V 02 IMG_0042.JPG" className="object-cover w-full h-full overflow-hidden hover:opacity-70 opacity-50 transition transform duration-700 ease-in-out hover:-translate-y-1 hover:scale-110 " />
                        <div className=" text-lg text-white font-bold text-center absolute">Ochrophyta</div>
                    </div>
                </Link>
                <Link href={`/freshwater-algae/Rhodophyta`} data={data.rhodophyta} className="w-full h-full rounded-lg cursor-pointer">
                    <div className="flex flex-wrap m-auto relative  items-center  justify-center cursor-pointer overflow-hidden">
                        <img src="/rhodophyta/Compsopogon caeruleus 02.jpg" className="object-cover w-full h-full overflow-hidden hover:opacity-70 opacity-50 transition transform duration-700 ease-in-out hover:-translate-y-1 hover:scale-110 " />
                        <div className=" text-lg text-white font-bold text-center absolute">Rhodophyta</div>
                    </div>
                </Link>
            </div>
        </div >
    )
}

export default Category1