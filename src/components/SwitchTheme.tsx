import { useState } from 'react'

export default function SwitchTheme() {
  const [dark, setDark] = useState(false)

  return (
    <div className="flex ml-[40px] bg-gradient-to-br from-[#ebf1f6] from-60% to-white rounded-[76px] p-[2px] mr-[40px] shadow-mainShadow">
      <div className="bg-[#F1F5F9] flex h-full items-center rounded-[76px]">
        <div
          className={
            !dark
              ? 'p-[10px] bg-gradient-to-br from-[#C9D9E8] to-white mx-[20px] my-[10px] rounded-[25px] cursor-pointer'
              : 'p-[10px] rounded-[25px] bg-mainBlue mx-[20px] my-[10px] shadow cursor-pointer'
          }
          onClick={() => setDark(false)}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0003 1.66699C10.4606 1.66699 10.8337 2.04009 10.8337 2.50033V3.33366C10.8337 3.7939 10.4606 4.16699 10.0003 4.16699C9.54009 4.16699 9.16699 3.7939 9.16699 3.33366V2.50033C9.16699 2.04009 9.54009 1.66699 10.0003 1.66699ZM15.8929 4.10776C16.2184 4.4332 16.2184 4.96084 15.8929 5.28627L15.3037 5.87553C14.9782 6.20097 14.4506 6.20097 14.1252 5.87553C13.7997 5.55009 13.7997 5.02246 14.1252 4.69702L14.7144 4.10776C15.0398 3.78233 15.5675 3.78233 15.8929 4.10776ZM4.10776 4.10776C4.4332 3.78233 4.96084 3.78233 5.28627 4.10776L5.87553 4.69702C6.20097 5.02246 6.20097 5.55009 5.87553 5.87553C5.55009 6.20097 5.02246 6.20097 4.69702 5.87553L4.10776 5.28627C3.78233 4.96084 3.78233 4.4332 4.10776 4.10776ZM10.0003 6.66699C8.15938 6.66699 6.66699 8.15938 6.66699 10.0003C6.66699 11.8413 8.15938 13.3337 10.0003 13.3337C11.8413 13.3337 13.3337 11.8413 13.3337 10.0003C13.3337 8.15938 11.8413 6.66699 10.0003 6.66699ZM5.00032 10.0003C5.00032 7.2389 7.2389 5.00032 10.0003 5.00032C12.7617 5.00032 15.0003 7.2389 15.0003 10.0003C15.0003 12.7617 12.7617 15.0003 10.0003 15.0003C7.2389 15.0003 5.00032 12.7617 5.00032 10.0003ZM1.66699 10.0003C1.66699 9.54009 2.04009 9.16699 2.50033 9.16699H3.33366C3.7939 9.16699 4.16699 9.54009 4.16699 10.0003C4.16699 10.4606 3.7939 10.8337 3.33366 10.8337H2.50033C2.04009 10.8337 1.66699 10.4606 1.66699 10.0003ZM15.8337 10.0003C15.8337 9.54009 16.2068 9.16699 16.667 9.16699H17.5003C17.9606 9.16699 18.3337 9.54009 18.3337 10.0003C18.3337 10.4606 17.9606 10.8337 17.5003 10.8337H16.667C16.2068 10.8337 15.8337 10.4606 15.8337 10.0003ZM4.69702 14.1251C5.02246 13.7997 5.55009 13.7997 5.87553 14.1251C6.20097 14.4505 6.20097 14.9782 5.87553 15.3036L5.28627 15.8929C4.96084 16.2183 4.4332 16.2183 4.10776 15.8929C3.78233 15.5674 3.78233 15.0398 4.10776 14.7144L4.69702 14.1251ZM14.1252 15.3036C13.7997 14.9782 13.7997 14.4505 14.1252 14.1251C14.4506 13.7997 14.9782 13.7997 15.3037 14.1251L15.8929 14.7144C16.2184 15.0398 16.2184 15.5674 15.8929 15.8929C15.5675 16.2183 15.0398 16.2183 14.7144 15.8929L14.1252 15.3036ZM10.0003 15.8337C10.4606 15.8337 10.8337 16.2068 10.8337 16.667V17.5003C10.8337 17.9606 10.4606 18.3337 10.0003 18.3337C9.54009 18.3337 9.16699 17.9606 9.16699 17.5003V16.667C9.16699 16.2068 9.54009 15.8337 10.0003 15.8337Z"
              fill={!dark ? '#36597D' : '#fff'}
            />
          </svg>
        </div>

        <div
          className={
            dark
              ? 'p-[10px] bg-gradient-to-br from-[#C9D9E8] to-white mr-[20px] my-[10px] rounded-[25px] cursor-pointer'
              : 'p-[10px] rounded-[25px] bg-mainBlue mr-[20px] my-[10px] shadow cursor-pointer'
          }
          onClick={() => setDark(true)}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.80064 0.7441C6.05491 0.998368 6.11741 1.38706 5.95565 1.70821C5.5339 2.54559 5.29601 3.49197 5.29601 4.49632C5.29601 7.92474 8.07529 10.704 11.5037 10.704C12.508 10.704 13.4544 10.4661 14.2918 10.0444C14.613 9.88262 15.0017 9.94511 15.2559 10.1994C15.5102 10.4536 15.5727 10.8423 15.4109 11.1635C14.1163 13.7339 11.4524 15.5 8.37436 15.5C4.02547 15.5 0.5 11.9746 0.5 7.62567C0.5 4.54767 2.26617 1.88368 4.83653 0.589093C5.15769 0.42734 5.54638 0.489833 5.80064 0.7441ZM3.68475 3.55802C2.73864 4.64786 2.16667 6.07027 2.16667 7.62567C2.16667 11.0541 4.94594 13.8334 8.37436 13.8334C9.92975 13.8334 11.3522 13.2614 12.442 12.3153C12.1342 12.3519 11.8211 12.3707 11.5037 12.3707C7.15481 12.3707 3.62934 8.84521 3.62934 4.49632C3.62934 4.17895 3.64816 3.86581 3.68475 3.55802Z"
              fill={dark ? '#36597D' : '#fff'}
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
