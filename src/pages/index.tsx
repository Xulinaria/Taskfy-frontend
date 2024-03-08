import Image from 'next/image'
import Header from '@/components/Header'
import Possibilities from '@/components/Possibilities'
import About from '@/components/About'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="dark:bg-black">
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

        <div className="bg-mainBlue bg-gradient-to-br from-[#1c35ff] from-70% to-white w-[1360px] rounded-[30px] mx-auto mt-[100px] p-[2px] shadow-mainShadow">
          <div className="bg-mainBlue flex justify-between rounded-[30px] py-[60px] px-[40px]">
            <div className="w-[350px]">
              <div className="bg-[#fff] rounded-full w-[350px] h-[350px] flex justify-center items-center overflow-hidden">
                <Image
                  src="/img/galka.png"
                  width={200}
                  height={248}
                  alt="galka"
                />
              </div>
              <h2 className="text-[#F1F5F9] font-extrabold text-[26px] mt-[40px]">
                Мы ключ к успеху
              </h2>
              <p className="text-[#F1F5F9] text-[18px] mt-[14px]">
                Taskfy предлагает вам золотой ключ к эффективности и
                спокойствию, насладитесь жизнью, а не рутиной.
              </p>
            </div>
            <div className="w-[350px]">
              <div className="bg-[#fff] rounded-full w-[350px] h-[350px] flex justify-center items-center overflow-hidden">
                <Image
                  src="/img/ruki.png"
                  width={350}
                  height={350}
                  alt="ruki"
                />
              </div>
              <h2 className="text-[#F1F5F9] font-extrabold text-[26px] mt-[40px]">
                Почему мы - ваш выбор
              </h2>
              <p className="text-[#F1F5F9] text-[18px] mt-[14px]">
                Мы ваш личный помощник в достижении спокойствия ума и повышении
                продуктивности, благодаря которому каждый ваш день будет
                наполнен смыслом и достижениями.
              </p>
            </div>
            <div className="w-[350px]">
              <div className="bg-[#fff] rounded-full w-[350px] h-[350px] flex justify-center items-center overflow-hidden">
                <Image
                  src="/img/chel.png"
                  width={350}
                  height={350}
                  alt="chel"
                />
              </div>
              <h2 className="text-[#F1F5F9] font-extrabold text-[26px] mt-[40px]">
                Это изменит вашу жизнь
              </h2>
              <p className="text-[#F1F5F9] text-[18px] mt-[14px]">
                Мы не просто приложение для списка задач; мы ваш партнер,
                который стремиться к порядку и ясности в каждом аспекте вашей
                жизни.
              </p>
            </div>
          </div>
        </div>
        <Possibilities />
        <About />
      </main>
      <Footer />
    </>
  )
}
