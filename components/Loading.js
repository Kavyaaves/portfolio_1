const Loading = () => {
    return (
        <>
            <div class="h-screen z-50 flex w-screen justify-center items-center bg-transparent overflow-hidden fixed">
                <div class="loader  p-5 rounded-full flex space-x-3">
                    <div class="w-5 h-5 bg-yellow-500 rounded-full animate-bounce"></div>
                    <div class="w-5 h-5 bg-yellow-500 rounded-full animate-bounce"></div>
                    <div class="w-5 h-5 bg-yellow-500 rounded-full animate-bounce"></div>
                </div>

            </div>
        </>
    )
}

export default Loading
