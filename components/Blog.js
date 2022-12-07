import { useState, useEffect } from "react";
import Image from "next/image";
import parse from "html-react-parser";
import useSWR from "swr";

const Blog = ({ data }) => {
	
	const [images, setImages] = useState([]);
	
	const fetcher = (url) => fetch(url).then((res) => res.json());
	let im = useSWR("/api/filespec/?name=" + data.name, fetcher);
	
	useEffect(() => {
	setImages(im?.data)
	}, [im])

	return (
		<div className='md:p-5 select-none'>
			<h2 className='text-center text-2xl text-yellow-500 font-bold '>
				<span className=''>{parse(data.title)}</span>
			</h2>
			<br />
			<div className='w-full align-left'>
				<table className='table-auto w-full'>
					<thead>
						<tr className=''>
							<th className='md:w-1/6 w-1/5'></th>
							<th className='md:w-5/6 w-4/5'></th>
						</tr>
					</thead>
					<tbody className='w-full'>
						{data?.division && (
							<tr>
								<td className=' font-bold text-lg'>
									Division&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								</td>
								<td className='text-left'>{data?.division}</td>
							</tr>
						)}
						{data?.class && (
							<tr>
								<td className=' font-bold text-lg'>
									Class&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								</td>
								<td>{data?.class}</td>
							</tr>
						)}
						{data?.order && (
							<tr>
								<td className=' font-bold text-lg'>
									Order&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								</td>
								<td>{data?.order}</td>
							</tr>
						)}
						{data?.family && (
							<tr>
								<td className=' font-bold text-lg'>
									Family&nbsp;&nbsp;&nbsp;&nbsp;
								</td>
								<td>{data?.family}</td>
							</tr>
						)}

						{data.basionym != "" && data.basionym.length <= 100 && (
							<tr>
								<td className='font-bold text-lg'>
									Basionym&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								</td>
								<td className=''>{parse(data.basionym)}</td>
							</tr>
						)}
						{data.synonym != "" && data.synonym.length <= 100 && (
							<tr className='w-full'>
								<td
									valign='top'
									className='font-bold w-1/2 align-top inline-block text-lg'>
									Synonym
								</td>
								<td className='w-1/2'>{parse(data.synonym)}</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
			{data.basionym != "" && data.basionym.length >= 100 && (
				<div className='block w-full'>
					<span
						valign='top'
						className='font-bold align-top inline-block text-lg w-1/2'>
						Basionym
					</span>
					<span className='clear-none inline-block'>
						{parse(data.basionym)}
					</span>
				</div>
			)}

			{data.synonym != "" && data.synonym.length >= 100 && (
				<div className='block w-full'>
					<span
						valign='top'
						className='font-bold align-top inline-block text-lg w-1/2'>
						Synonym
					</span>
					<span className='clear-none inline-block'>{parse(data.synonym)}</span>
				</div>
			)}
			<br />

			{images && images[0]?.includes("001") && (
				<>
					<div className='w-full items-center justify-evenly flex p-5'>
						<Image
							priority
							className='self-center'
							src={process.env.BUCKET_ALGAE_URL + data.name +"/"+ images[0]}
							layout='intrinsic'
							width={
								images[0]?.split("-")[1]?.toLowerCase()?.split("x")[0] * 100
							}
							height={
								images[0]
									?.split("-")[1]
									?.toLowerCase()
									?.split("x")[1]
									?.replace(".webp","") * 100
							}
							alt={data.name}
						/>
					</div>
					<p>
						{data?.img1Caption?.includes("~001")
							? data.img1Caption.split("~001" + "=")[1]?.split("~")[0]
							: ""}
					</p>
					<br />
				</>
			)}
			{data.para1 !== "" && (
				<>
					<p>{data.para1}</p>
					<br />
				</>
			)}
			{data.para2 !== "" && (
				<>
					<p>{data.para2}</p>
					<br />
				</>
			)}
			{data.ecology != "" && (
				<>
					<div className=''>
						<p className=' font-bold text-lg'>Ecology</p>
						<p>{parse(data.ecology)}</p>
					</div>
					<br />
				</>
			)}
			{data.distribution && (
				<div className=''>
					<p className='font-bold text-lg'>Distribution in India </p>
					<p>{parse(data.distribution)}</p>
				</div>
			)}
			
			{images
				?.filter((i) => !i.includes("001"))
				?.map((img, i) => (
					<div key={i}>
						<div className='w-full items-center justify-evenly flex p-5'>
							<Image
							    priority
								className='self-center'
								src={process.env.BUCKET_ALGAE_URL + data.name + "/"+img}
								layout='intrinsic'
								width={(img?.toLowerCase()?.split("-")[1]?.split("x")[0]) * 100}
								height={
									(img
										?.toLowerCase()
										?.split("-")[1]
                                        ?.split("x")[1]
                                        ?.replace(".webp","")
                                    )* 100
								}
								alt={data.name}
							/>
						</div>
						<p className="text-center">
							{data?.img1Caption?.includes(img?.substring(0, 3))
								? data.img1Caption
										.split("~" + img?.substring(0, 3) + "=")[1]
										?.split("~")[0]
								: ""}
						</p>
					</div>
				))}
		</div>
	);
};

export default Blog;
