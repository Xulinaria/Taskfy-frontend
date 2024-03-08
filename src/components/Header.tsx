import SwitchTheme from './SwitchTheme'

export default function Header() {
  return (
    <header className="flex justify-between items-center mx-[40px] mt-[40px]">
      <div className="flex items-center">
        <div className="">
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_116_2456)">
              <path
                d="M34.8936 38.9951C35.4399 40.0927 34.9959 41.4369 33.8492 41.871C29.08 43.6763 23.8092 43.7921 18.9316 42.1564C13.3491 40.2844 8.73891 36.2713 6.11523 31.0001C3.49155 25.729 3.06929 19.6314 4.94135 14.0489C6.57702 9.17132 9.84711 5.036 14.1628 2.3194C15.2004 1.66622 16.5405 2.12235 17.0869 3.22002C17.6332 4.31769 17.1765 5.63932 16.1555 6.31825C12.8875 8.49135 10.4122 11.7003 9.15113 15.4606C7.65348 19.9266 7.99129 24.8047 10.0902 29.0216C12.1892 33.2386 15.8773 36.449 20.3433 37.9466C24.1037 39.2077 28.1562 39.1674 31.8602 37.8703C33.0174 37.465 34.3472 37.8974 34.8936 38.9951Z"
                fill="#3360FF"
              />
              <path
                d="M25.1855 20.2315C24.6392 19.1338 25.0832 17.7897 26.2299 17.3556C30.9991 15.5503 36.2699 15.4345 41.1475 17.0701C46.73 18.9422 51.3402 22.9552 53.9639 28.2264C56.5876 33.4976 57.0098 39.5951 55.1377 45.1777C53.5021 50.0552 50.232 54.1906 45.9163 56.9072C44.8787 57.5603 43.5386 57.1042 42.9922 56.0065C42.4459 54.9089 42.9026 53.5872 43.9236 52.9083C47.1916 50.7352 49.6669 47.5263 50.928 43.7659C52.4256 39.2999 52.0878 34.4219 49.9889 30.2049C47.8899 25.988 44.2018 22.7776 39.7358 21.2799C35.9754 20.0189 31.9229 20.0591 28.2189 21.3563C27.0617 21.7616 25.7319 21.3292 25.1855 20.2315Z"
                fill="#3360FF"
              />
            </g>
            <defs>
              <clipPath id="clip0_116_2456">
                <rect width="60" height="60" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>

        <div className="ml-[40px] bg-gradient-to-br from-[#ebf1f6] from-60% to-white rounded-[76px] p-[2px] shadow-mainShadow">
          <div className="bg-[#F1F5F9] flex h-full items-center rounded-[76px]">
            <a
              href=""
              className="px-[30px] py-[20px] text-secondaryBlue text-[20px] font-extrabold"
            >
              О приложении
            </a>
            <a
              href=""
              className="px-[30px] py-[20px] text-secondaryBlue text-[20px] font-extrabold"
            >
              Возможности
            </a>
            <a
              href=""
              className="px-[30px] py-[20px] text-mainBlue text-[20px] font-extrabold bg-[#EBEFFF] rounded-[76px] "
            >
              О нас
            </a>
          </div>
        </div>
      </div>

      <div className="flex">
        <SwitchTheme />
        <div className=" bg-gradient-to-br from-[#1c35ff] from-50% to-white p-[2px] flex rounded-[76px] shadow-mainShadow">
          <a
            href="#"
            className="bg-mainBlue rounded-[76px] px-[30px] py-[20px] text-[#fff] font-extrabold leading-[20px] text-[20px]"
          >
            Начать работу
          </a>
        </div>
      </div>
    </header>
  )
}
