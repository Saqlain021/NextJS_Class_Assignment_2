export default function Navbar(){
    return(
        <div className=" w-[1200px] h-[91px] m-auto  text-[#FFFFFF] flex justify-around items-center ">
            <div className="w-[187px] h-[58px] place-content-center">
                <h3 className="w-[152px] h-[32px] text-[#FFFFFF] text-2xl leading-8 font-bold" >BrandName</h3>
            </div>
            <div className="w-[815px] h-[58px] left-[364px] font-bold flex justify-between items-center">
                <ul className="w-[375px] h-[24px] top[17px] flex gap-[21px] capitalize " >
                    <li>home</li>
                    <li>product</li>
                    <li>pricing</li>
                    <li>contact</li>
                </ul>
                <div className="w-[189px] h-[52px] flex gap-[45px] items-center">
                    <div className="w-[41px] h-[22px] capitalize">
                        <a href="https://google.com">login</a>
                    </div>
                    <div className="w-[214px] h-[52px]">
                        <button className="w-[115px] h-[52px] px-[25px] py-[15px] uppercase font-bold rounded-[5px] bg-[#23A6F0]">join us</button>
                    </div>
                    <div className="w-[24px] h-[13.71px]">

                    </div>

                </div>
            </div>
        </div>
    )
}