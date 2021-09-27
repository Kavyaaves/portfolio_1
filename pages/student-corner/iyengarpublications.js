import Link from "next/link"
import prisma from '../../utils/db'
function IyengarPublications({ data }) {
    console.log(data)
    return (
        <div>
            <h2 className='text-center text-2xl italic text-yellow-500 font-bold '>
                <span className=''>Publications of MOP Iyengar</span>
            </h2>
            <div className="w-full md:flex pl-8">
                <div className="md:w-1/3 ">
                    <p className="text-lg text-yellow-500 p-5 pl-0 font-semibold"></p>
                    {data && data.map((d, i) => {
                        return (
                            <ul key={i}>
                                <li className="text-base text-white list-disc">
                                    <Link href={"/student-corner/" + d.name}  >
                                        <span className="hover:underline cursor-pointer"><i>{d.name}</i></span></Link>
                                </li>
                            </ul>
                        )
                    })}
                </div>

            </div>
            <br />

        </div>
    )
}

export default IyengarPublications

export const getStaticProps = async () => {
    const mopPub = await prisma.marine.findMany({ orderBy: { "name": "asc" } });
    console.log("bb", mopPub)
    return { props: { mopPub: mopPub ? mopPub : [] } };
};
