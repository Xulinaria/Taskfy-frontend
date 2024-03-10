import Image from 'next/image'

export default function AboutApplication() {
  return (
    <div className="bg-mainBlue bg-gradient-to-br from-[#1c35ff] from-70% to-white w-[1360px] rounded-[30px] mx-auto mt-[100px] p-[2px] shadow-mainShadow">
      <div className="bg-mainBlue flex justify-between rounded-[30px] py-[60px] px-[40px]">
        <div className="w-[350px]">
          <div className="bg-[#fff] rounded-full w-[350px] h-[350px] flex justify-center items-center overflow-hidden">
            <Image src="/img/galka.png" width={200} height={248} alt="galka" />
          </div>
          <h2 className="text-[#F1F5F9] font-extrabold text-[26px] mt-[40px]">
            Мы ключ к успеху
          </h2>
          <p className="text-[#F1F5F9] text-[18px] mt-[14px]">
            Taskfy предлагает вам золотой ключ к эффективности и спокойствию,
            насладитесь жизнью, а не рутиной.
          </p>
        </div>
        <div className="w-[350px]">
          <div className="bg-[#fff] rounded-full w-[350px] h-[350px] flex justify-center items-center overflow-hidden">
            <Image src="/img/ruki.png" width={350} height={350} alt="ruki" />
          </div>
          <h2 className="text-[#F1F5F9] font-extrabold text-[26px] mt-[40px]">
            Почему мы - ваш выбор
          </h2>
          <p className="text-[#F1F5F9] text-[18px] mt-[14px]">
            Мы ваш личный помощник в достижении спокойствия ума и повышении
            продуктивности, благодаря которому каждый ваш день будет наполнен
            смыслом и достижениями.
          </p>
        </div>
        <div className="w-[350px]">
          <div className="bg-[#fff] rounded-full w-[350px] h-[350px] flex justify-center items-center overflow-hidden">
            <Image src="/img/chel.png" width={350} height={350} alt="chel" />
          </div>
          <h2 className="text-[#F1F5F9] font-extrabold text-[26px] mt-[40px]">
            Это изменит вашу жизнь
          </h2>
          <p className="text-[#F1F5F9] text-[18px] mt-[14px]">
            Мы не просто приложение для списка задач; мы ваш партнер, который
            стремиться к порядку и ясности в каждом аспекте вашей жизни.
          </p>
        </div>
      </div>
    </div>
  )
}
