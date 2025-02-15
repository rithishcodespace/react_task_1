let Login = () =>{
    return(
            <div className="h-auto mx-auto flex items-center justify-center relative top-40">
                <div className="mx-auto w-96 border-slate-300 border-[2px]">
                <p className="text-black text-2xl font-semibold text-center mt-4">Login page</p>
                    <form action="" className="flex flex-col items-center">
                        <input type="text" className="border-[2px] border-black m-5 h-12 w-72 rounded-md"/><br />
                        <input type="password" className="border-[2px] border-black mt-5 h-12 w-72 rounded-md"/><br />
                        <button className="h-12 w-24 bg-black text-white rounded-2xl mb-2">submit</button>
                    </form>
                </div>
            </div>
    )
}
export default Login;