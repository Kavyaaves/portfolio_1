import { useState, useEffect } from 'react';
import Image from "next/image"
import parse from 'html-react-parser'


const Blog = ({ data }) => {
    return (
        <div className="md:p-5 select-none">

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
                    <p className=" font-bold text-lg">Class</p>
                    <p>{data?.class}</p>
                </div>
                <div className="text-left gap-14 flex">
                    <p className=" font-bold text-lg">Order</p>
                    <p>{data?.order}</p>
                </div>
                <div className="text-left gap-12 flex">
                    <p className=" font-bold text-lg">Family</p>
                    <p>{data?.family}</p>
                </div>

            </div>
            {data.basionym != "" &&
                <div className="flex gap-10">
                    <span className="font-bold text-lg">Basionym</span>
                    <span className="">{parse(data.basionym)}</span>
                </div>}
            {data.synonym != "" &&
                <div className="flex gap-10">
                    <span className="font-bold text-lg">Synonym</span>
                    <span className="">{parse(data.synonym)}</span>
                </div>}
            <br />
            {data.img1 &&

                <>
                    <div className="w-full items-center justify-evenly flex p-5">
                        <Image className="self-center" src={data.img1} layout="intrinsic" width={data.orientation1.split('x')[0] * 100} height={data.orientation1.split('x')[1] * 100} />
                    </div>
                    <p>{data.img1Caption}</p>
                    <br />
                </>}
            {data.para1 !== "" &&
                <>
                    <p>{data.para1}</p>
                    <br />
                </>
            }
            {data.para2 !== "" &&
                <>
                    <p>{data.para2}</p>
                    <br />
                </>
            }
            {data.para3 !== "" &&
                <>
                    <p>{data.para3}</p>
                    <br />
                </>
            }
            {data.para4 !== "" &&
                <>
                    <p>{data.para4}</p>
                    <br />
                </>
            }
            {data.para5 !== "" &&
                <>
                    <p>{data.para5}</p>
                    <br />
                </>
            }
            {data.ecology != "" &&
                <>
                    <div className="">
                        <p className=" font-bold text-lg">Ecology</p>
                        <p>{parse(data.ecology)}</p>

                    </div>
                    <br />
                </>
            }

            {data.distribution &&
                <div className="" >
                    <p className="font-bold text-lg">Distribution in India </p>
                    <p>{parse(data.distribution)}</p>
                </div>
            }
            {data.img2 &&
                <>
                    <div className="w-full items-center justify-evenly flex p-5">
                        <Image className="self-center" src={data.img2} layout="intrinsic" width={data.orientation1.split('x')[0] * 100} height={data.orientation1.split('x')[1] * 100} />
                    </div>
                    <p>{data.img2Caption}</p>

                    <br />
                </>
            }
            {data.img3 &&
                <>
                    <div className="w-full items-center justify-evenly flex p-5">
                        <Image className="self-center" src={data.img3} layout="intrinsic" width={data.orientation1.split('x')[0] * 100} height={data.orientation1.split('x')[1] * 100} />
                    </div>
                    <p>{data.img3Caption}</p>
                    <br />
                </>
            }

            {data.img4 &&
                <>
                    <div className="w-full items-center justify-evenly flex p-5">
                        <Image className="self-center" src={data.img4} layout="intrinsic" width={data.orientation1.split('x')[0] * 100} height={data.orientation1.split('x')[1] * 100} />
                    </div>
                    <p>{data.img4Caption}</p>
                    <br />

                </>
            }


            {data.img5 &&
                <>
                    <div className="w-full items-center justify-evenly flex p-5">

                        <Image className="self-center" src={data.img5} layout="intrinsic" width={data.orientation1.split('x')[0] * 100} height={data.orientation1.split('x')[1] * 100} />

                    </div>
                    <p>{data.img5Caption}</p>
                    <br />
                </>
            }
            {data.img6 &&
                <>
                    <div className="w-full items-center justify-evenly flex p-5">

                        <Image className="self-center" src={data.img6} layout="intrinsic" width={data.orientation1.split('x')[0] * 100} height={data.orientation1.split('x')[1] * 100} />

                    </div>
                    <p>{data.img6Caption}</p>
                    <br />
                </>
            }

        </div>
    )
}

export default Blog

