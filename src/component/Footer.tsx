export const Footer = () => {
    return(
        <div className=" text-base grid grid-cols-2   bg-stone-950  text-stone-400  ">
            <div className="p-16 pl-40 ">
                <div className="flex">
                <img src="./logo1.png" alt="logo" width={40} className="relative bottom-2"/>
                <p className="font-p2p text-xl pl-3 text-white ">DevToolbox</p>
                </div>
                <p className="pl-[52px] text-sm">A product by <span className="text-blue-400">Jatin Mehta</span></p>
                <p  className="pl-[52px] mt-1 text-sm">Build in public <span className="text-blue-400">@JatinMehta35630</span></p>

            </div>
             <div className="ml-auto relative right-44 ">
            <a href="https://github.com/JatinMehta007" target="_blank" rel="noopener noreferrer">
            <img src="./footer/github.png" alt="github-icon" className="xl:h-10 h-8 md:mt-8 lg:mt-10 mt-6 ml-2 md:ml-0" />
            </a>
            <a href="https://www.linkedin.com/in/jatin-mehta-a70a0025a/" target="_blank" rel="noopener noreferre">
            <img src="./footer/linkedin.png" alt="github-icon" className="xl:h-10 h-8 md:mt-8 lg:mt-10 mt-3 ml-2 md:ml-0" />
            </a>
          </div>
        </div>
    )
}