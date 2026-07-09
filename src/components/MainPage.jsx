function MainPage() {
  return (
    <section id="main" className="flex flex-col md:flex-row md:items-center md:justify-between">
      
      {/* Text and button part */}
      <div className="flex flex-col w-full md:w-1/2">
        {/* Name and position */}
        <section className="flex flex-col items-start px-4 md:px-8 lg:px-16 pt-[28px] md:pt-[130px] gap-1 md:gap-[4px]">
          <h1 className="text-2xl font-bold text-black md:text-[60px] md:leading-[150%]">
            Hey, I'm Nick
          </h1>
          <p className="text-sm font-normal text-[#696969] md:text-[20px] md:leading-[150%]">
            Frontend developer
          </p>
        </section>

        {/* Separator and description */}
        <section className="flex flex-col items-start px-4 md:px-8 lg:px-16 pt-[35px] md:pt-[80px] gap-6">
          <div className="w-[25px] h-0 border-t-[3px] border-[#7E3AF2]"></div>
          <p className="text-sm font-normal text-[#696969] leading-[150%] max-w-[290px] md:text-[20px] md:max-w-[445px]">
            Help you to create high-quality digital products that your clients will love and let your business thrive
          </p>
        </section>

        {/* Button */}
        <section className="flex flex-col items-start px-4 md:px-8 lg:px-16 pt-[29px] md:pt-[50px]">
          <button className="flex items-center gap-2 px-[13px] py-[9px] bg-[#7E3AF2] rounded-[50px]">
            <span className="text-sm font-semibold text-white leading-[150%]">
              Get in touch
            </span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.9576 8.71518C14.0903 8.64867 14.2019 8.54655 14.2799 8.42024C14.3579 8.29393 14.3992 8.14842 14.3992 7.99998C14.3992 7.85154 14.3579 7.70603 14.2799 7.57972C14.2019 7.45341 14.0903 7.35129 13.9576 7.28478L2.75762 1.68478C2.61875 1.6153 2.46266 1.58773 2.30839 1.60544C2.15412 1.62316 2.00834 1.68538 1.88883 1.78453C1.76933 1.88369 1.68126 2.01547 1.63537 2.16382C1.58949 2.31217 1.58777 2.47067 1.63042 2.61998L2.77362 6.61998C2.82144 6.78716 2.92243 6.93421 3.06129 7.03886C3.20016 7.14352 3.36934 7.20008 3.54322 7.19998L7.20002 7.19998C7.4122 7.19998 7.61568 7.28427 7.76571 7.4343C7.91574 7.58432 8.00002 7.78781 8.00002 7.99998C8.00002 8.21215 7.91574 8.41564 7.76571 8.56567C7.61568 8.71569 7.4122 8.79998 7.20002 8.79998H3.54322C3.36934 8.79988 3.20016 8.85644 3.06129 8.9611C2.92243 9.06575 2.82144 9.2128 2.77362 9.37998L1.63122 13.38C1.58848 13.5292 1.5901 13.6877 1.63588 13.8361C1.68165 13.9844 1.76961 14.1163 1.88903 14.2155C2.00844 14.3147 2.15415 14.3771 2.30838 14.3949C2.46262 14.4128 2.61871 14.3853 2.75762 14.316L13.9576 8.71598V8.71518Z" fill="white"/>
            </svg>
          </button>
        </section>
      </div>

      {/* Photo (mobile version) */}
      <section className="flex md:hidden justify-end w-full mt-8">
        <img 
          src="/images/photoMobileMP.png" 
          alt="Nick photo"
          className="w-full max-w-[400px] h-auto"
        />
      </section>

      {/* Photo (web and tablet version) */}
      <section className="relative hidden md:flex justify-end w-full md:w-1/2 min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
        <picture className="absolute right-0 top-0 w-full h-full">
          <source 
            srcSet="/images/photoDesktopMP.png" 
            media="(min-width: 768px)"
          />
          <img 
            src="/images/photoMobileMP.png" 
            alt="Nick photo"
            className="w-full h-full object-cover"
          />
        </picture>
      </section>
    </section>
  )
}

export default MainPage