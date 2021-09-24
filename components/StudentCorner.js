
import Tabs from './Tabs';
function StudentCorner() {
    return (
        <div className='max-w-4xl m-auto bg-primary rounded-lg'>
            <div className='p-10'>
                <h2 className='text-center text-2xl italic text-yellow-500 font-bold '>
                    <span className=''>STUDENT CORNER</span>
                </h2>
                <br />
                <div className=' text-center'>
                    <Tabs />
                </div>
            </div>
        </div>
    )
}

export default StudentCorner
