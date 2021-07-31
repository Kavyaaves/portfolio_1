import Link from "next/link"
import Image from "next/image"

function ImageGrid({ images, setSelectedImg }) {
    return (
        <div>
            {images && images.map((image, i) => {

                return (<div key={i} className='md:grid md:grid-rows-1 md:grid-flow-col md:gap-3 md:justify-between'>

                    {image && image.map((img, i) => {
                        { console.log(img) }
                        return (
                            // <Link >
                            //     <a>
                            <div className="flex items-center justify-center h-full mb-24">
                                <figure class="relative cursor-pointer items-center" onClick={() => {
                                    setSelectedImg(img);
                                }}>
                                    <Image src={img.url} className="mx-auto" width={300} height={250} layout="intrinsic" />
                                    <figcaption className="text-center w-full absolute text-white px-4">{img.name}</figcaption>
                                </figure>
                            </div>
                        )
                    })}


                </div>
                )
            })}

        </div >
    )
}

export default ImageGrid
