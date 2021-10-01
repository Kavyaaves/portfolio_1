
import Image from 'next/image'
function Tab1() {
    return (
        <div className="w-full md:flex">
            <div className='rounded-lg overflow-hidden shadow-lg md:w-1/2 md:justify-between mb-10'>
                <div className='md:flex-shrink-0 flex items-center justify-center'>
                    <Image
                        className='rounded-lg md:rounded-none'
                        width={300}
                        height={350}
                        src='/MOP Iyengar.jpg'
                        alt='MOP Iyengar'
                    />
                </div>
                <div className='flex flex-col flex-grow px-8 py-10 bg-color-333'>
                    <h3 className='font-bold text-xl text-gray-200'>
                        Prof. M.O.P. Iyengar (1886-1963)
                    </h3>
                    <span className='text-base lg:mb-4'>
                        Father of Indian Algology
                    </span>
                    <br />
                    <br />
                    <div className='flex-grow flex justify-evenly w-full'>
                        <button className='text-base text-gray-900 font-semibold hover:text-gray-300 bg-yellow-500 rounded-md p-2 px-4 hover:bg-transparent border-2 border-yellow-500 transform duration-400 ease-in-out '>
                            <p className=' leading-snug truncate-overflow '>
                                <a href="/files/MOP Iyengar.pdf" target="blank">About</a>
                            </p>
                        </button>
                        <button className='text-base text-gray-900 font-semibold hover:text-gray-300 bg-yellow-500 rounded-md p-2 hover:bg-transparent border-2 border-yellow-500 transform duration-400 ease-in-out '>
                            <p className=' leading-snug truncate-overflow '>
                                <a href="/student-corner/iyengarpublications" target="blank">Publications</a>
                            </p>
                        </button>
                    </div>
                </div>

            </div>
            <div className='md:w-1/2 rounded-lg overflow-hidden shadow-lg md:justify-between mb-10'>
                <div className='md:flex-shrink-0 flex items-center justify-center'>
                    <Image
                        className='rounded-lg md:rounded-none'
                        width={300}
                        height={350}
                        src='/Prof VK.jpg'
                        alt='Prof V. Krishnamurthy'
                    />
                </div>
                <div className='flex flex-col flex-grow px-8 py-10 bg-color-333'>
                    <h3 className='font-bold text-xl text-gray-200'>
                        Prof. V. Krishnamurthy
                    </h3>

                    <span className='text-base lg:mb-4'>
                        Founder – 	Krishnamurthy Institute of Algology (KIA, Chennai)
                        <br />
                        Indian Hydrobiology Journal

                    </span>
                    <div className='flex-grow'>
                        <button className='text-base text-gray-900 font-semibold hover:text-gray-300 bg-yellow-500 rounded-md p-2 px-4 hover:bg-transparent border-2 border-yellow-500 transform duration-400 ease-in-out '>
                            <p className=' leading-snug truncate-overflow '>
                                <a href="/files/Prof. V. Krishnamurthy – A Teacher Par Excellence.pdf" target="blank">About</a>
                            </p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tab1
