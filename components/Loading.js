const Loading = () => {
    return (
        <>
            <div className="h-screen z-50 flex w-screen justify-center items-center bg-transparent overflow-hidden fixed">
                <div className="loader  p-5 rounded-full flex space-x-3">
                    <div className="w-5 h-5 bg-yellow-500 rounded-full animate-bounce"></div>
                    <div className="w-5 h-5 bg-yellow-500 rounded-full animate-bounce"></div>
                    <div className="w-5 h-5 bg-yellow-500 rounded-full animate-bounce"></div>
                </div>
            </div>
        </>
    )
}

export default Loading
