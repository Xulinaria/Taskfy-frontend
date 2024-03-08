export default function Footer() {
  return (
    <footer className="mt-[100px] mb-[32px] mx-auto w-[1360px] shadow-secondaryShadow p-[40px] rounded-[30px]">
      <div className="">
        <h3 className="text-secondaryBlue text-[20px] font-extrabold flex">
          Главная
        </h3>
        <a href="">О приложении</a>
        <a href="">Возможности</a>
        <a href="">О нас</a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="130"
          viewBox="0 0 17 130"
          fill="none"
        >
          <path
            d="M2 111H16"
            stroke="#D6DFFF"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2 65H16"
            stroke="#D6DFFF"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2 19H16"
            stroke="#D6DFFF"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1 1L1.00001 129"
            stroke="#D6DFFF"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </footer>
  )
}
