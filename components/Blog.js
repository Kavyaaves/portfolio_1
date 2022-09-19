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
                        {data?.division &&
                            <tr>
                                <td className=" font-bold text-lg">Division&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                <td className="text-left">{parse(data?.division)}</td>
                            </tr>}
                        {data?.class &&
                            <tr>
                                <td className=" font-bold text-lg">Class&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                <td>{data?.class}</td>
                            </tr>}
                        {data?.order &&
                            <tr>
                                <td className=" font-bold text-lg">Order&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                <td>{data?.order}</td>
                            </tr>
                        }
                        {data?.family && <tr>
                            <td className=" font-bold text-lg">Family&nbsp;&nbsp;&nbsp;&nbsp;</td>
                            <td>{data?.family}</td>
                        </tr>}

                        {data.basionym != "" && data.basionym.length <= 100 &&
                            <tr >
                                <td className="font-bold text-lg">Basionym&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                <td className="">{parse(data.basionym)}</td>
                            </tr>}
                        {data.synonym != "" && data.synonym.length <= 100 &&
                            <tr className="w-full">
                                <td valign="top" className="font-bold w-1/2 align-top inline-block text-lg">Synonym</td>
                                <td className="w-1/2">{parse(data.synonym)}</td>
                            </tr>}
                    </tbody>
                </table>
            </div>
            {data.basionym != "" && data.basionym.length >= 100 &&
                <div className="block w-full">
                    <span valign="top" className="font-bold align-top inline-block text-lg w-1/2">Basionym</span>
                    <span className="clear-none inline-block">{parse(data.basionym)}</span>
                </div>}

            {data.synonym != "" && data.synonym.length >= 100 &&
                <div className="block w-full">
                    <span valign="top" className="font-bold align-top inline-block text-lg w-1/2">Synonym</span>
                    <span className="clear-none inline-block">{parse(data.synonym)}</span>
                </div>}
            <br />

            {
                data.img1 &&

                <>
                    <div className="w-full items-center justify-evenly flex p-5">
                        <Image className="self-center" src={data.img1} layout="intrinsic" width={data.orientation1.split('x')[0] * 100} height={data.orientation1.split('x')[1] * 100} alt={data.name} />
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
                        <Image className="self-center" src={data.img2} layout="intrinsic" alt={data?.name} width={data.orientation2.split('x')[0] * 100} height={data.orientation2.split('x')[1] * 100} />
                    </div>
                    <p className="text-center">{parse(data.img2Caption)}</p>

                    <br />
                </>
            }
            {
                data.img3 &&

                <>
                    <div className="w-full items-center justify-evenly flex p-5">
                        <Image className="self-center" src={data.img3} alt={data?.name} layout="intrinsic" width={data.orientation3.split('x')[0] * 100} height={data.orientation3.split('x')[1] * 100} />
                    </div>
                    <p className="text-center">{parse(data.img3Caption)}</p>
                    <br />
                </>
            }

            {
                data.img4 &&
                <>
                    <div className="w-full items-center justify-evenly flex p-5">
                        <Image className="self-center" src={data.img4} alt={data?.name} layout="intrinsic" width={data.orientation4.split('x')[0] * 100} height={data.orientation4.split('x')[1] * 100} />
                    </div>
                    <p className="text-center">{parse(data.img4Caption)}</p>
                    <br />

                </>
            }


            {
                data.img5 &&
                <>
                    <div className="w-full items-center justify-evenly flex p-5">
                        <Image className="self-center" src={data.img5} alt={data?.name} layout="intrinsic" width={data.orientation5.split('x')[0] * 100} height={data.orientation5.split('x')[1] * 100} />
                    </div>
                    <p>{parse(data.img5Caption)}</p>
                    <br />
                </>
            }
            {
                data.img6 &&
                <>
                    <div className="w-full items-center justify-evenly flex p-5">
                        <Image className="self-center" src={data.img6} alt={data?.name} layout="intrinsic" width={data.orientation1.split('x')[0] * 100} height={data.orientation1.split('x')[1] * 100} />
                    </div>
                    <p className="text-center">{parse(data.img6Caption)}</p>
                    <br />
                </>
            }

            {
                data.additionalImages &&
                <>
                    {data.additionalImages?.split(",").map((img, i) => (
                        <div key={i}>
                            <div className="w-full items-center justify-evenly flex p-5">
                                <Image className="self-center" src={img.split("&")[0]} alt={"AdditionalImage"+i} layout="intrinsic" width={img.split("&")[1].split("x")[0]*100} height={img?.split("&")[1]?.split("x")[1]*100}/>
                            </div>
                            <br />
                        </div>
                    ))}
                    
                </>
            }

        </div >
    )
}

export default Blog

