function About() {
  return (
    <section id="about" className="flex flex-col items-start px-4 pt-[40px] gap-4">
      {/* About me */}
      <section className="flex flex-col items-start w-full gap-4">
        <h2 className="text-xl font-semibold text-black">
          About me
        </h2>
      </section>

      {/* Photo */}
      <section className="flex flex-col items-start w-full">
        <div className="w-full flex justify-center pt-[20px] pb-[20px]">
          <img 
            src="/images/photoAbout.png" 
            alt="Nick photo circle"
            className="w-full max-w-[290px] h-auto object-cover"
          />
        </div>
      </section>

      {/* Separator */}
      <section className="flex flex-col items-start w-full">
        <div className="w-[25px] h-0 border-t-[3px] border-[#7E3AF2]"></div>
      </section>

      {/* Description */}
      <section className="flex flex-col items-start w-full">
        <p className="text-sm text-black leading-[150%]">
          <span className="font-semibold">Nick Richardson</span>
          <span className="font-normal text-[#696969]"> - specialist in Frontend development. Clear code is my passion. Solving issues through negotiations</span>
        </p>
      </section>

      {/* Interests */}
      <section className="flex flex-col items-start w-full gap-4 pt-[24px]">
        <h3 className="text-xl font-semibold text-black pb-[15px]">
          Interests
        </h3>
        <div className="flex flex-col gap-[24px]">
          
          {/* Music */}
          <div className="flex items-center gap-3">
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="22" cy="22" r="21" fill="#FCFBFA" stroke="#7E3AF2" strokeWidth="2"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M27.8314 14.4107C27.8994 14.462 27.9545 14.5284 27.9924 14.6046C28.0303 14.6809 28.05 14.7649 28.05 14.85V25.1555C28.0499 25.6336 27.8941 26.0985 27.6062 26.4801C27.3183 26.8617 26.9139 27.1392 26.4542 27.2705L25.4862 27.5469C25.2488 27.6182 24.9995 27.6416 24.7529 27.6158C24.5063 27.5899 24.2673 27.5154 24.0498 27.3964C23.8322 27.2774 23.6405 27.1165 23.4857 26.9228C23.3309 26.7291 23.2161 26.5066 23.1479 26.2682C23.0798 26.0298 23.0597 25.7803 23.0888 25.5341C23.1179 25.2878 23.1956 25.0498 23.3174 24.8339C23.4392 24.6179 23.6027 24.4283 23.7984 24.2761C23.9941 24.1238 24.2181 24.012 24.4574 23.947L26.1521 23.463C26.3819 23.3974 26.5841 23.2586 26.7281 23.0678C26.872 22.877 26.9499 22.6445 26.95 22.4055V18.3289L20.35 20.2151V27.3555C20.3499 27.8336 20.1941 28.2985 19.9062 28.6801C19.6183 29.0617 19.2139 29.3392 18.7542 29.4705L17.7862 29.7469C17.5485 29.8192 17.2987 29.8434 17.0515 29.8181C16.8043 29.7928 16.5646 29.7186 16.3463 29.5997C16.1281 29.4808 15.9357 29.3197 15.7804 29.1257C15.6251 28.9317 15.51 28.7087 15.4417 28.4697C15.3735 28.2308 15.3535 27.9806 15.3829 27.7339C15.4124 27.4871 15.4906 27.2487 15.6131 27.0325C15.7357 26.8163 15.9 26.6267 16.0966 26.4746C16.2932 26.3226 16.518 26.2112 16.7581 26.147L18.4521 25.663C18.6819 25.5974 18.8841 25.4586 19.0281 25.2678C19.172 25.077 19.2499 24.8445 19.25 24.6055V19.8125V17.05C19.25 16.9305 19.289 16.8142 19.3609 16.7188C19.4329 16.6234 19.534 16.5541 19.6489 16.5213L27.3489 14.3213C27.4308 14.2978 27.517 14.2937 27.6007 14.3092C27.6844 14.3247 27.7634 14.3595 27.8314 14.4107Z" fill="#7E3AF2"/>
            </svg>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-black leading-[150%] pb-[5px]">Music</span>
              <span className="text-sm font-normal text-black leading-[150%]">Indie rock | Reggae</span>
            </div>
          </div>

          {/* Art */}
          <div className="flex items-center gap-3">
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="22" cy="22" r="21" fill="#FCFBFA" stroke="#7E3AF2" strokeWidth="2"/>
              <g clipPath="url(#clip0_31_3747)">
                <path fillRule="evenodd" clipRule="evenodd" d="M28.3059 14.3C28.0302 14.3 27.7611 14.3814 27.5323 14.5347L23.8069 17.017C22.8721 17.6404 22.0173 18.376 21.2615 19.2075C22.8139 19.9372 24.0628 21.1861 24.7925 22.7385C25.624 21.9825 26.3596 21.1274 26.983 20.1923L29.4661 16.4677C29.6059 16.2577 29.6861 16.0137 29.6982 15.7617C29.7103 15.5097 29.6538 15.2591 29.5348 15.0367C29.4157 14.8142 29.2386 14.6282 29.0222 14.4985C28.8058 14.3688 28.5582 14.3002 28.3059 14.3ZM22.2193 24.585C22.7 24.318 23.1643 24.0224 23.6097 23.6999C23.3137 22.9512 22.8673 22.2712 22.298 21.702C21.7288 21.1327 21.0488 20.6863 20.3001 20.3903C19.9776 20.8354 19.682 21.2995 19.415 21.78L19.2111 22.1467C19.839 22.3273 20.4106 22.6644 20.8725 23.1265C21.3344 23.5885 21.6714 24.1602 21.8519 24.7881L22.22 24.5843L22.2193 24.585ZM18.15 23.1C17.4206 23.1 16.7212 23.3897 16.2054 23.9055C15.6897 24.4212 15.4 25.1207 15.4 25.85C15.4 26.0007 15.3691 26.1498 15.3091 26.2881C15.2491 26.4264 15.1614 26.5508 15.0513 26.6538C14.9412 26.7567 14.8111 26.8359 14.6691 26.8865C14.5272 26.9371 14.3763 26.958 14.2259 26.9478C14.1265 26.9411 14.0271 26.9616 13.9384 27.007C13.8497 27.0524 13.775 27.1211 13.7223 27.2056C13.6696 27.2902 13.6408 27.3875 13.6391 27.4871C13.6374 27.5868 13.6628 27.685 13.7126 27.7713C14.1356 28.5063 14.7895 29.081 15.5726 29.4062C16.3558 29.7314 17.2244 29.789 18.0436 29.57C18.8628 29.351 19.5868 28.8676 20.1032 28.195C20.6196 27.5223 20.8994 26.698 20.8993 25.85C20.8993 25.4889 20.8281 25.1313 20.6899 24.7976C20.5517 24.464 20.3492 24.1608 20.0938 23.9055C19.8384 23.6501 19.5353 23.4475 19.2016 23.3093C18.868 23.1711 18.5104 23.1 18.1493 23.1H18.15Z" fill="#7E3AF2"/>
              </g>
              <defs>
                <clipPath id="clip0_31_3747">
                  <rect width="17.6" height="17.6" fill="white" transform="translate(13.2 13.2)"/>
                </clipPath>
              </defs>
            </svg>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-black leading-[150%] pb-[5px]">Art</span>
              <span className="text-sm font-normal text-black leading-[150%]">Edvard Munch | Frida Kahlo</span>
            </div>
          </div>

          {/* Photography */}
          <div className="flex items-center gap-3">
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="22" cy="22" r="21" fill="#FCFBFA" stroke="#7E3AF2" strokeWidth="2"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M14.2999 17.6C14.2999 17.1624 14.4738 16.7427 14.7832 16.4333C15.0926 16.1238 15.5123 15.95 15.9499 15.95H28.0499C28.4875 15.95 28.9072 16.1238 29.2167 16.4333C29.5261 16.7427 29.6999 17.1624 29.6999 17.6V26.4C29.6999 26.8376 29.5261 27.2573 29.2167 27.5667C28.9072 27.8762 28.4875 28.05 28.0499 28.05H15.9499C15.5123 28.05 15.0926 27.8762 14.7832 27.5667C14.4738 27.2573 14.2999 26.8376 14.2999 26.4V17.6ZM15.3999 24.9773V26.4C15.3999 26.7036 15.6463 26.95 15.9499 26.95H28.0499C28.1958 26.95 28.3357 26.8921 28.4388 26.7889C28.542 26.6858 28.5999 26.5459 28.5999 26.4V24.9773L26.6273 23.0054C26.421 22.7994 26.1414 22.6837 25.8499 22.6837C25.5584 22.6837 25.2788 22.7994 25.0726 23.0054L24.4273 23.65L25.1386 24.3613C25.1926 24.4117 25.236 24.4724 25.266 24.5399C25.2961 24.6073 25.3123 24.6802 25.3136 24.754C25.3149 24.8279 25.3013 24.9012 25.2736 24.9697C25.246 25.0382 25.2048 25.1004 25.1526 25.1526C25.1003 25.2049 25.0381 25.246 24.9696 25.2737C24.9011 25.3013 24.8278 25.3149 24.7539 25.3136C24.6801 25.3123 24.6073 25.2962 24.5398 25.2661C24.4723 25.236 24.4116 25.1927 24.3613 25.1387L20.5773 21.3554C20.371 21.1494 20.0914 21.0337 19.7999 21.0337C19.5084 21.0337 19.2288 21.1494 19.0226 21.3554L15.3999 24.9781V24.9773ZM22.8249 19.25C22.8249 19.0312 22.9118 18.8214 23.0666 18.6666C23.2213 18.5119 23.4311 18.425 23.6499 18.425C23.8687 18.425 24.0786 18.5119 24.2333 18.6666C24.388 18.8214 24.4749 19.0312 24.4749 19.25C24.4749 19.4688 24.388 19.6786 24.2333 19.8334C24.0786 19.9881 23.8687 20.075 23.6499 20.075C23.4311 20.075 23.2213 19.9881 23.0666 19.8334C22.9118 19.6786 22.8249 19.4688 22.8249 19.25Z" fill="#7E3AF2"/>
            </svg>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-black leading-[150%] pb-[5px]">Photography</span>
              <span className="text-sm font-normal text-black leading-[150%]">Portraits</span>
            </div>
          </div>
        </div>
      </section>

      {/* Education and experience */}
      <section className="flex flex-col items-start w-full gap-4 pt-[24px]">
        <h3 className="text-xl font-semibold text-black pb-[17px]">
          Education & Experience
        </h3>

        <div className="flex flex-col w-full max-w-[290px] gap-3">
          {/* Work 1 */}
          <div className="flex flex-col w-full border-b border-[#E5E7EB] pb-3 gap-1">
            <div className="flex w-full">
              <span className="text-sm font-normal text-black w-[130px] flex-shrink-0">2008 - Present</span>
              <div className="flex flex-col flex-1">
                <span className="text-sm font-semibold text-black pb-[10px]">Middle Frontend developer</span>
                <span className="text-sm font-normal text-black">Ozon</span>
              </div>
            </div>
          </div>

          {/* Work 2 */}
          <div className="flex flex-col w-full border-b border-[#E5E7EB] pb-3 gap-1">
            <div className="flex w-full">
              <span className="text-sm font-normal text-black w-[130px] flex-shrink-0">2006 - 2007</span>
              <div className="flex flex-col flex-1">
                <span className="text-sm font-semibold text-black pb-[10px]">Junior Frontend Developer</span>
                <span className="text-sm font-normal text-black">Facebook</span>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="flex flex-col w-full border-b border-[#E5E7EB] pb-3 gap-1">
            <div className="flex w-full">
              <span className="text-sm font-normal text-black w-[130px] flex-shrink-0">2000 - 2005</span>
              <div className="flex flex-col flex-1">
                <span className="text-sm font-semibold text-black pb-[10px]">Frontend Developer</span>
                <span className="text-sm font-normal text-black">Stanford University</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Button */}
      <section className="flex flex-col items-start px-4 pt-[29px] pb-[50px]">
        <button className="flex items-center gap-2 px-[13px] py-[9px] bg-[#7E3AF2] rounded-[50px]">
          <span className="text-sm font-semibold text-white leading-[150%]">
            Get in touch
          </span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.9576 8.71518C14.0903 8.64867 14.2019 8.54655 14.2799 8.42024C14.3579 8.29393 14.3992 8.14842 14.3992 7.99998C14.3992 7.85154 14.3579 7.70603 14.2799 7.57972C14.2019 7.45341 14.0903 7.35129 13.9576 7.28478L2.75762 1.68478C2.61875 1.6153 2.46266 1.58773 2.30839 1.60544C2.15412 1.62316 2.00834 1.68538 1.88883 1.78453C1.76933 1.88369 1.68126 2.01547 1.63537 2.16382C1.58949 2.31217 1.58777 2.47067 1.63042 2.61998L2.77362 6.61998C2.82144 6.78716 2.92243 6.93421 3.06129 7.03886C3.20016 7.14352 3.36934 7.20008 3.54322 7.19998L7.20002 7.19998C7.4122 7.19998 7.61568 7.28427 7.76571 7.4343C7.91574 7.58432 8.00002 7.78781 8.00002 7.99998C8.00002 8.21215 7.91574 8.41564 7.76571 8.56567C7.61568 8.71569 7.4122 8.79998 7.20002 8.79998H3.54322C3.36934 8.79988 3.20016 8.85644 3.06129 8.9611C2.92243 9.06575 2.82144 9.2128 2.77362 9.37998L1.63122 13.38C1.58848 13.5292 1.5901 13.6877 1.63588 13.8361C1.68165 13.9844 1.76961 14.1163 1.88903 14.2155C2.00844 14.3147 2.15415 14.3771 2.30838 14.3949C2.46262 14.4128 2.61871 14.3853 2.75762 14.316L13.9576 8.71598V8.71518Z" fill="white"/>
          </svg>
        </button>
      </section>

    </section>
  )
}

export default About