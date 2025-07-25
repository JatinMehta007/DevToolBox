export const Footer = () => {
    return(
        <div className=" text-base grid grid-cols-2   bg-stone-950  text-stone-400  ">
            <div className="md:p-16 lg:pl-32 pl-9 py-5">
                <div className="flex">
                <img src="./logo1.png" alt="logo" width={40} className="relative bottom-2"/>
                <p className="font-p2p text-xl pl-3 text-white hidden md:block">DevToolbox</p>
                </div>
                <p className="md:pl-[52px] pl-[10px] text-xs sm:text-sm">A product by <a href="https://portfolio-jatinmehta.vercel.app/">
                    <span className="text-blue-400">Jatin Mehta</span></a></p>
                <p  className="md:pl-[52px] pl-[10px] mt-1 text-xs sm:text-sm">Build in public <a href="https://twitter.com/JatinMehta35630"><span className="text-blue-400">@JatinMehta35630</span></a></p>

            </div>
             <div className="ml-auto relative  md:right-20 md:mt-5 lg:mt-0 lg:right-44 right-10 ">
            <a href="https://twitter.com/JatinMehta35630" target="_blank" rel="noopener noreferrer">
            <img src="./footer/twitter.png" alt="twitter-icon" className="xl:h-10 h-8 md:mt-8 lg:mt-10 mt-6 ml-2 md:ml-0" />
            </a>
            <div className="md:flex">
            <a href="https://www.linkedin.com/in/jatin-mehta-a70a0025a/" target="_blank" rel="noopener noreferre">
            <img src="./footer/linkedin.png" alt="github-icon" className="xl:h-10 h-8 md:mt-8 lg:mt-5 mt-3 ml-2 md:ml-0 relative md:-left-9"  />
            </a>
            <a href="https://github.com/JatinMehta007" target="_blank" rel="noopener noreferre">
            <img src="./footer/github.png" alt="github-icon" className="xl:h-10 mb-5 h-8 md:mt-8 lg:mt-5 mt-3 ml-2 md:ml-0" />
            </a>
            </div>
          </div>
        </div>
    )
}