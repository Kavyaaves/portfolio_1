import react from 'react';
import Image from "next/image"
import parse from 'html-react-parser'


const Blog = ({ data }) => {
    console.log(data)
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
            <div className="w-full items-center justify-evenly flex p-5">
                <Image className="self-center" src={data.img1} layout="intrinsic" width={data.orientation1 == "5x7" ? 500 : 700} height={data.orientation1 == "5x7" ? 700 : 500} />
                <p>{data.imgCaption1}</p>
            </div>
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
                        <p>{data.ecology}</p>

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
                        <Image className="self-center" src={data.img2} layout="intrinsic" width={data.orientation2 == "5x7" ? 500 : 700} height={data.orientation2 == "5x7" ? 700 : 500} />
                        <p>{data.imgCaption2}</p>
                    </div>
                    <br />
                </>
            }
            {data.img3 &&
                <>
                    <div className="w-full items-center justify-evenly flex p-5">
                        <Image className="self-center" src={data.img3} layout="intrinsic" width={data.orientation3 == "5x7" ? 500 : 700} height={data.orientation3 == "5x7" ? 700 : 500} />
                        <p>{data.imgCaption3}</p>
                    </div>
                    <br />
                </>
            }

            {data.img4 &&
                <>
                    <div className="w-full items-center justify-evenly flex p-5">
                        <Image className="self-center" src={data.img4} layout="intrinsic" width={data.orientation4 == "5x7" ? 500 : 700} height={data.orientation4 == "5x7" ? 700 : 500} />
                        <p>{data.imgCaption4}</p>
                    </div>
                    <br />

                </>
            }


            {data.img5 &&
                <>
                    <div className="w-full items-center justify-evenly flex p-5">

                        <Image className="self-center" src={data.img5} layout="intrinsic" width={data.orientation5 == "5x7" ? 500 : 700} height={data.orientation5 == "5x7" ? 700 : 500} />
                        <p>{data.imgCaption5}</p>

                    </div>
                    <br />
                </>
            }

        </div>
    )
}

export default Blog

