import { useEffect, useState } from 'react'

export default function Possibilities() {
  const [contentIndex, setContentIndex] = useState(0)
  const [fixed, setFixed] = useState(2)

  useEffect(() => {
    function handleScroll() {
      const thresholds = [0.455, 0.555, 0.651, 0.75]

      const scrollPercentage =
        window.scrollY / (document.body.scrollHeight - window.innerHeight)

      let newIndex = 0
      for (let i = 0; i < thresholds.length; i++) {
        if (scrollPercentage > thresholds[i]) {
          newIndex = i + 1
        }
      }
      setContentIndex(newIndex)

      if (scrollPercentage <= 0.455) {
        setFixed(0)
      } else if (scrollPercentage >= 0.805) {
        setFixed(2)
      } else {
        setFixed(1)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div className="mt-[100px] mx-auto w-[1360px] h-[1500px] relative">
      <div
        className={
          fixed === 1
            ? 'flex fixed top-[350px] max-w-[1360px]'
            : fixed === 2
              ? 'flex pt-[900px] max-w-[1360px]'
              : 'flex max-w-[1360px]'
        }
      >
        <div className="h-[600px] min-w-[620px] rounded-[30px] shadow-mainShadow"></div>
        <div className="ml-[76px] flex flex-col justify-center">
          <div className={contentIndex > 0 ? 'relative' : 'hidden'}>
            <h2
              className={
                contentIndex > 1
                  ? 'text-secondaryBlue font-extrabold text-[20px] decoration-line line-through'
                  : 'text-mainBlue font-extrabold text-[20px]'
              }
            >
              Отслеживайте ваш путь к успеху
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              className="absolute top-[5px] left-[-36px]"
            >
              <circle cx="11" cy="11" r="6" fill="#3360FF" />
              <circle cx="11" cy="11" r="10.5" stroke="#3360FF" />
            </svg>
            <p
              className={
                contentIndex > 1
                  ? 'text-secondaryBlue text-[18px] line-through'
                  : 'text-secondaryBlue text-[18px]'
              }
            >
              Анализ продуктивности в “Название” поможет увидеть реальный
              прогресс и мотивирует достигать еще большего.
            </p>
            <svg
              width="2"
              height="94"
              viewBox="0 0 2 94"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[-26px] top-[44px]"
            >
              <line
                x1="1"
                y1="1"
                x2="0.999996"
                y2="93"
                stroke="#3360FF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-dasharray="8 8"
              />
            </svg>
          </div>
          <div className={contentIndex > 1 ? 'relative mt-[60px]' : 'hidden'}>
            <h2 className="text-mainBlue font-extrabold text-[20px] ">
              Создавайте и редактируйте задачи
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              className="absolute top-[5px] left-[-36px]"
            >
              <circle cx="11" cy="11" r="6" fill="#3360FF" />
              <circle cx="11" cy="11" r="10.5" stroke="#3360FF" />
            </svg>
            <p className="text-secondaryBlue text-[18px]">
              Вы можете организовывать свои задачи по разным критериям, таким
              как дата, проект, статус или важность, чтобы видеть только то, что
              вам нужно.
            </p>
            <svg
              width="2"
              height="94"
              viewBox="0 0 2 94"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[-26px] top-[44px]"
            >
              <line
                x1="1"
                y1="1"
                x2="0.999996"
                y2="93"
                stroke="#3360FF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-dasharray="8 8"
              />
            </svg>
          </div>
          <div className={contentIndex > 2 ? 'relative mt-[60px]' : 'hidden'}>
            <h2 className="text-mainBlue font-extrabold text-[20px] ">
              Синхронизируйте задачи с разными устройствами и сервисами
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              className="absolute top-[5px] left-[-36px]"
            >
              <circle cx="11" cy="11" r="6" fill="#3360FF" />
              <circle cx="11" cy="11" r="10.5" stroke="#3360FF" />
            </svg>
            <p className="text-secondaryBlue text-[18px]">
              Вы можете доступать к своему списку задач с любого устройства, а
              также интегрировать его с другими популярными сервисами.
            </p>
            <svg
              width="2"
              height="94"
              viewBox="0 0 2 94"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[-26px] top-[44px]"
            >
              <line
                x1="1"
                y1="1"
                x2="0.999996"
                y2="93"
                stroke="#3360FF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-dasharray="8 8"
              />
            </svg>
          </div>
          <div className={contentIndex > 3 ? 'relative mt-[60px]' : 'hidden'}>
            <h2 className="text-mainBlue font-extrabold text-[20px] ">
              Делитесь своими задачами с другими людьми
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              className="absolute top-[5px] left-[-36px]"
            >
              <circle cx="11" cy="11" r="6" fill="#3360FF" />
              <circle cx="11" cy="11" r="10.5" stroke="#3360FF" />
            </svg>
            <p className="text-secondaryBlue text-[18px]">
              Вы можете приглашать других пользователей к совместной работе над
              задачами, назначать им ответственных, обмениваться комментариями и
              отслеживать прогресс.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
