import Image from 'next/image'

export default function About() {
  return (
    <div className="">
      <div className="mt-[100px] mx-auto w-[1360px] flex justify-between">
        <div className="bg-white rounded-[30px] p-[20px] shadow-secondaryShadow">
          <div className="flex items-center">
            <Image
              width={60}
              height={60}
              src="/img/avatar.png"
              alt="avatar"
              className="bg-mainBlue rounded-full "
            />
            <h3 className="ml-[20px] text-secondaryBlue text-[20px] font-extrabold">
              Имя
            </h3>
          </div>
          <div className="mt-[20px] w-[270px] h-[250px] shadow-mainShadow bg-[#F1F5F9] rounded-[30px]"></div>
          <p className="mt-[20px] bg-[#8F33FF] rounded-[45px] px-[10px] py-[2px] text-white text-[14px] w-min font-extrabold">
            Дизайнер
          </p>
        </div>
        <div className="bg-white rounded-[30px] p-[20px] shadow-secondaryShadow">
          <div className="flex items-center">
            <Image
              width={60}
              height={60}
              src="/img/avatar.png"
              alt="avatar"
              className="bg-mainBlue rounded-full "
            />
            <h3 className="ml-[20px] text-secondaryBlue text-[20px] font-extrabold">
              Имя
            </h3>
          </div>
          <div className="mt-[20px] w-[270px] h-[250px] shadow-mainShadow bg-[#F1F5F9] rounded-[30px]"></div>
          <p className="mt-[20px] bg-[#3F3] rounded-[45px] px-[10px] py-[2px] text-secondaryBlue text-[14px] w-min font-extrabold">
            Программист
          </p>
        </div>
        <div className="bg-white rounded-[30px] p-[20px] shadow-secondaryShadow">
          <div className="flex items-center">
            <Image
              width={60}
              height={60}
              src="/img/avatar.png"
              alt="avatar"
              className="bg-mainBlue rounded-full "
            />
            <h3 className="ml-[20px] text-secondaryBlue text-[20px] font-extrabold">
              Имя
            </h3>
          </div>
          <div className="mt-[20px] w-[270px] h-[250px] shadow-mainShadow bg-[#F1F5F9] rounded-[30px]"></div>
          <p className="mt-[20px] bg-[#8F33FF] rounded-[45px] px-[10px] py-[2px] text-white text-[14px] w-min font-extrabold">
            Дизайнер
          </p>
        </div>
        <div className="bg-white rounded-[30px] p-[20px] shadow-secondaryShadow">
          <div className="flex items-center">
            <Image
              width={60}
              height={60}
              src="/img/avatar.png"
              alt="avatar"
              className="bg-mainBlue rounded-full "
            />
            <h3 className="ml-[20px] text-secondaryBlue text-[20px] font-extrabold">
              Имя
            </h3>
          </div>
          <div className="mt-[20px] w-[270px] h-[250px] shadow-mainShadow bg-[#F1F5F9] rounded-[30px]"></div>
          <p className="mt-[20px] bg-[#3F3] rounded-[45px] px-[10px] py-[2px] text-secondaryBlue text-[14px] w-min font-extrabold">
            Программист
          </p>
        </div>
      </div>
      <div className="mt-[20px] flex justify-center">
        <button className="mx-[20px] p-[10px] bg-mainBlue rounded-full">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17 10C17 10.4142 16.6642 10.75 16.25 10.75L5.61208 10.75L9.76983 14.7094C10.0684 14.9965 10.0777 15.4713 9.79062 15.7698C9.50353 16.0684 9.02875 16.0777 8.73017 15.7906L3.23017 10.5406C3.08311 10.3992 3 10.204 3 10C3 9.79599 3.08311 9.60078 3.23017 9.45938L8.73017 4.20938C9.02875 3.92228 9.50353 3.93159 9.79062 4.23017C10.0777 4.52875 10.0684 5.00353 9.76983 5.29063L5.61208 9.25L16.25 9.25C16.6642 9.25 17 9.58579 17 10Z"
              fill="#F1F5F9"
            />
          </svg>
        </button>
        <button className="mx-[20px] p-[10px] bg-mainBlue rounded-full">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3 10C3 10.4142 3.33579 10.75 3.75 10.75L14.3879 10.75L10.2302 14.7094C9.93159 14.9965 9.92228 15.4713 10.2094 15.7698C10.4965 16.0684 10.9713 16.0777 11.2698 15.7906L16.7698 10.5406C16.9169 10.3992 17 10.204 17 10C17 9.79599 16.9169 9.60078 16.7698 9.45938L11.2698 4.20938C10.9713 3.92228 10.4965 3.93159 10.2094 4.23017C9.92228 4.52875 9.93159 5.00353 10.2302 5.29063L14.3879 9.25L3.75 9.25C3.33579 9.25 3 9.58579 3 10Z"
              fill="#F1F5F9"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
