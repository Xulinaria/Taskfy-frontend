export default function Motivational() {
  return (
    <div className="flex flex-col justify-center items-center mt-[100px]">
      <h1 className="w-[750px] leading-[70px] text-center font-semibold text-secondaryBlue text-[70px] mt-[140px]">
        <span className="text-mainBlue">Организуйте</span> задачи под любую
        ситуацию
      </h1>
      <p className="w-[660px] text-[18px] text-center leading-[25.2px] text-secondaryBlue mt-[25px]">
        “Название” поможет вам организовать свою работу и жизнь, повысить
        продуктивность и достичь своих целей. Начните работу уже сегодня и
        создайте свой идеальный список задач!
      </p>
      <div className="mt-[25px] bg-gradient-to-br from-[#1c35ff] from-50% to-white p-[2px] flex rounded-[76px] shadow-mainShadow">
        <a
          href="#"
          className="bg-mainBlue rounded-[76px] px-[30px] py-[20px] text-[#fff] font-extrabold leading-[20px] text-[20px]"
        >
          Начать работу
        </a>
      </div>
    </div>
  )
}
