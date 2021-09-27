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
                <table className="table-auto w-full">
                    <thead>
                        <tr className="">
                            <th className="md:w-1/6 w-1/5"></th>
                            <th className="md:w-5/6 w-4/5"></th>
                        </tr>
                    </thead>
                    <tbody className="w-full">
                        <tr>
                            <td className=" font-bold text-lg">Division&nbsp;&nbsp;&nbsp;</td>
                            <td className="text-left">{parse(data?.division)}</td>
                        </tr>
                        <tr>
                            <td className=" font-bold text-lg">Class&nbsp;&nbsp;&nbsp;</td>
                            <td>{data?.class}</td>
                        </tr>
                        <tr>
                            <td className=" font-bold text-lg">Order&nbsp;&nbsp;&nbsp;</td>
                            <td>{data?.order}</td>
                        </tr>
                        <tr>
                            <td className=" font-bold text-lg">Family&nbsp;&nbsp;&nbsp;</td>
                            <td>{data?.family}</td>
                        </tr>

                        {data.basionym != "" &&
                            <tr >
                                <td className="font-bold text-lg">Basionym&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                <td className="">{parse(data.basionym)}</td>
                            </tr>}
                        {data.synonym != "" && data.synonym.length > 100 &&
                            <tr className="w-full">
                                <td valign="top" className="font-bold w-1/2 align-top inline-block text-lg">Synonym</td>
                                <td className="w-1/2">{parse(data.synonym)}</td>
                            </tr>}
                    </tbody>
                </table>
                {/* <div className="flex text-left max-w-xl">
                    <p className=" font-bold text-lg">Division</p>
                    <p className="text-left">{parse(data?.division)}</p>
                </div>

                <div className="text-left flex">
                    <p className=" font-bold text-lg w-10">Class</p>
                    <p>{data?.class}</p>
                </div>
                <div className="text-left flex">
                    <p className=" font-bold text-lg w-10">Order</p>
                    <p>{data?.order}</p>
                </div>
                <div className="text-left flex">
                    <p className=" font-bold text-lg w-10">Family</p>
                    <p>{data?.family}</p>
                </div> */}

            </div>
            {/* {data.synonym != "" && data.synonym.length >= 100 &&
                <div className="block w-full">
                    <span valign="top" className="font-bold align-top inline-block text-lg w-1/2">Synonym</span>
                    <span className="clear-none inline-block">{parse(data.synonym)}</span>
                </div>} */}
            <br />

            {
                data.img1 &&

                <>
                    <div className="w-full items-center justify-evenly flex p-5">
                        <Image className="self-center" src={data.img1} layout="intrinsic" width={data.orientation1.split('x')[0] * 100} height={data.orientation1.split('x')[1] * 100} />
                    </div>
                    <p>{parse(data.img1Caption)}</p>
                    <br />
                </>
            }
            {
                data.para1 !== "" &&
                <>
                    <p>{data.para1}</p>
                    <br />
                </>
            }
            {
                data.para2 !== "" &&
                <>
                    <p>{data.para2}</p>
                    <br />
                </>
            }
            {
                data.para3 !== "" &&
                <>
                    <p>{parse(data.para3)}</p>
                    <br />
                </>
            }
            {
                data.para4 !== "" &&
                <>
                    <p>{data.para4}</p>
                    <br />
                </>
            }
            {
                data.para5 !== "" &&
                <>
                    <p>{data.para5}</p>
                    <br />
                </>
            }
            {
                data.ecology != "" &&
                <>
                    <div className="">
                        <p className=" font-bold text-lg">Ecology</p>
                        <p >{parse(data.ecology)}</p>

                    </div>
                    <br />
                </>
            }

            {
                data.distribution &&
                <div className="" >
                    <p className="font-bold text-lg">Distribution in India </p>
                    <p>{parse(data.distribution)}</p>
                </div>
            }
            {
                data.img2 &&
                <>
                    <div className="w-full items-center justify-evenly flex p-5">
                        <Image className="self-center" src={data.img2} layout="intrinsic" width={data.orientation2.split('x')[0] * 100} height={data.orientation2.split('x')[1] * 100} />
                    </div>
                    <p className="text-center">{parse(data.img2Caption)}</p>

                    <br />
                </>
            }
            {
                data.img3 &&

                <>
                    <div className="w-full items-center justify-evenly flex p-5">
                        <Image className="self-center" src={data.img3} layout="intrinsic" width={data.orientation3.split('x')[0] * 100} height={data.orientation3.split('x')[1] * 100} />
                    </div>
                    <p className="text-center">{parse(data.img3Caption)}</p>
                    <br />
                </>
            }

            {
                data.img4 &&
                <>
                    <div className="w-full items-center justify-evenly flex p-5">
                        <Image className="self-center" src={data.img4} layout="intrinsic" width={data.orientation4.split('x')[0] * 100} height={data.orientation4.split('x')[1] * 100} />
                    </div>
                    <p className="text-center">{parse(data.img4Caption)}</p>
                    <br />

                </>
            }


            {
                data.img5 &&
                <>
                    <div className="w-full items-center justify-evenly flex p-5">
                        <Image className="self-center" src={data.img5} layout="intrinsic" width={data.orientation5.split('x')[0] * 100} height={data.orientation5.split('x')[1] * 100} />
                    </div>
                    <p>{parse(data.img5Caption)}</p>
                    <br />
                </>
            }
            {
                data.img6 &&
                <>
                    <div className="w-full items-center justify-evenly flex p-5">
                        <Image className="self-center" src={data.img6} layout="intrinsic" width={data.orientation1.split('x')[0] * 100} height={data.orientation1.split('x')[1] * 100} />
                    </div>
                    <p className="text-center">{parse(data.img6Caption)}</p>
                    <br />
                </>
            }

        </div >
    )
}

export default Blog

