import react from 'react';
import Image from "next/image"
import parse from 'html-react-parser'


const Blog = ({ data }) => {
    return (
        <div className="p-5 select-none">
            <h2 className='text-center text-2xl text-yellow-500 font-bold '>
                <span className=''>{parse(data.title)}</span>
            </h2>
            <br />
            <div className="w-full align-left">
                <div className="flex text-left gap-10">
                    <p className=" font-bold text-lg">Division</p>
                    <p>{parse(data?.division)}</p>

                </div>
                <div className="text-left gap-14 flex">
                    <p className=" font-bold text-lg">Order</p>
                    <p>{data?.order}</p>
                </div>
                <div className="text-left gap-14 flex">
                    <p className=" font-bold text-lg">Class</p>
                    <p>{data?.class}</p>
                </div>
                <div className="text-left gap-12 flex">
                    <p className=" font-bold text-lg">Family</p>
                    <p>{data?.family}</p>
                </div>

            </div>
            {data.basionym &&
                <div className="flex gap-10">
                    <span className="font-bold text-lg">Basionym</span>
                    <span className="">{parse(data.basionym)}</span>
                </div>}

            <div className="w-full items-center justify-evenly flex p-5">
                <Image className="self-center" src={data.img1} layout="intrinsic" width={700} height={500} />
            </div>
            <p>{data.para1}</p>
            <br />
            <p>{data.para2}</p>
            <br />
            <p>{data.para3}</p>
            <br />
            <p>{data.para4}</p>

            <br />
            {data.img2 && <div className="w-full items-center justify-evenly flex p-5">
                <Image className="self-center" src={data.img2} layout="intrinsic" width={400} height={600} />
            </div>
            }
            <br />
            {data.img3 && <div className="w-full items-center justify-evenly flex p-5">
                <Image className="self-center" src={data.img3} layout="intrinsic" width={500} height={700} />
            </div>}
            <br />

            {data.img4 && <div className="w-full items-center justify-evenly flex p-5">
                <Image className="self-center" src={data.img4} layout="intrinsic" width={500} height={700} />
            </div>
            }
            <br />

            {data.img5 && <div className="w-full items-center justify-evenly flex p-5">
                <Image className="self-center" src={data.img5} layout="intrinsic" width={400} height={500} />
            </div>
            }
            <br />
            {data.ecology &&
                <div className="flex gap-14 "><span className=" font-bold text-lg">Ecology</span>
                    <span>{data.ecology}</span></div>
            }
            <br />
            {data.distribution &&
                <div>
                    <p className="font-bold text-lg">Distribution in India </p>
                    <p>{parse(data.distribution)}</p>
                </div>
            }
        </div>
    )
}

export default Blog

