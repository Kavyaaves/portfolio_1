
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

                    <div className='flex-grow'>
                        <p className='text-base text-gray-100 leading-snug truncate-overflow'>

                        </p>
                    </div>
                </div>

            </div>
            <div className='md:w-1/2 rounded-lg overflow-hidden shadow-lg md:justify-between mb-10'>
                <div className='md:flex-shrink-0 flex items-center justify-center'>
                    <Image
                        className='rounded-lg md:rounded-none'
                        width={300}
                        height={400}
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
                        Indian Hydrobiology Journal

                    </span>
                </div>
            </div>
        </div>
    )
}

export default Tab1
