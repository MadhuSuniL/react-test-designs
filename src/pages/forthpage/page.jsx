import React from 'react'

const Page4 = () => {
  return (
    <div>
        {/* header */}

<div className='flex justify-between p-2 px-5 items-center'>
    <h1 className='text-xl md:text-3xl font-serif'>Ship<span className='text-indigo-500'>mate</span></h1>
    <div className='flex'>
    <button className='hover:scale-105 ease-linear duration-100 hover:shadow-2xl border-4 border-indigo-500 font-bold p-2 md:px-3 text-sm m-2 rounded-xl flex items-center'><svg width="18" height="28" viewBox="0 0 18 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.34424 18.66C2.34424 21.24 4.32424 23.32 6.78424 23.32H11.8042C13.9442 23.32 15.6842 21.5 15.6842 19.26C15.6842 16.82 14.6242 15.96 13.0442 15.4L4.98424 12.6C3.40424 12.04 2.34424 11.18 2.34424 8.74C2.34424 6.5 4.08424 4.68 6.22424 4.68H11.2442C13.7042 4.68 15.6842 6.76 15.6842 9.34M9.00024 2V26" stroke="#6F57E9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 </button>
    <button className='hover:scale-105 ease-linear duration-100 hover:shadow-2xl bg-indigo-500 border-2 font-bold border-indigo-500 p-2 text-sm md:px-10 m-2 rounded-lg text-white'>Track shipment</button>
    </div>
</div>

{/* {main head} */}
<div className='md:max-w-[800px] mx-auto flex items-center'>
        <div className='flex flex-col items-center p-5'>
        <div className='rounded-[50%] px-3 p-2 bg-[#D3B0FF] w-9 h-9 text-white font-bold'>1</div><span className='text-black text-sm font-normal m-0 text-center'>Search</span>
        </div>
        <svg width="131" height="2" viewBox="0 0 131 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="1" x2="131" y2="1" stroke="#D3B0FF" stroke-width="2"/>
</svg>
        <div className='flex flex-col items-center p-5'>
        <div className='rounded-[50%] px-3 p-2 bg-[#D3B0FF] w-9 h-9 text-white font-bold'>2</div><span className='text-black text-sm font-normal m-0 text-center'>Recommended services</span>
        </div><svg width="131" height="2" viewBox="0 0 131 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="1" x2="131" y2="1" stroke="#D3B0FF" stroke-width="2"/>
</svg>
        <div className='flex flex-col items-center p-5'>
        <div className='rounded-[50%] px-3 p-2 bg-[#D3B0FF] w-9 h-9 text-white font-bold'>3</div><span className='text-black text-sm font-normal m-0 text-center'>Results</span>
        </div><svg width="131" height="2" viewBox="0 0 131 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="1" x2="131" y2="1" stroke="#D3B0FF" stroke-width="2"/>
</svg>
<div className='flex flex-col items-center p-5'>
        <div className='rounded-[50%] px-3 p-2 bg-gray-400 w-9 h-9 text-white font-bold'></div><span className='text-black text-sm font-normal m-0 text-center'>Booking</span>
        </div>

    </div>


{/* {median} */}

<div className='max-w-[1245px] mx-auto md:mt-6 p-3 md:px-10 rounded-lg shadow-lg mt-5 shadow-gray-300 border-0 border-gray-500 grid md:grid-cols-5 gap-1'>

    <h1 className='flex justify-center m-3'><svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.61995 7.49C3.58995 -1.17 16.42 -1.16 18.38 7.5C19.53 12.58 16.37 16.88 13.6 19.54C12.632 20.4735 11.3397 20.9952 9.99495 20.9952C8.6502 20.9952 7.35788 20.4735 6.38995 19.54C3.62995 16.88 0.469953 12.57 1.61995 7.49Z" stroke="#868686" stroke-width="1.5"/>
<svg width="18" height="10" viewBox="0 -3 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 7.43C4.40973 7.43 4.81544 7.3493 5.19398 7.19251C5.57251 7.03571 5.91646 6.80589 6.20618 6.51618C6.4959 6.22646 6.72571 5.88251 6.88251 5.50397C7.0393 5.12544 7.12 4.71973 7.12 4.31C7.12 3.90028 7.0393 3.49457 6.88251 3.11603C6.72571 2.73749 6.4959 2.39355 6.20618 2.10383C5.91646 1.81411 5.57251 1.58429 5.19398 1.4275C4.81544 1.2707 4.40973 1.19 4 1.19C3.17253 1.19 2.37895 1.51872 1.79383 2.10383C1.20872 2.68894 0.880005 3.48253 0.880005 4.31C0.880005 5.13748 1.20872 5.93106 1.79383 6.51618C2.37895 7.10129 3.17253 7.43 4 7.43Z" stroke="#868686" stroke-width="1.5"/>
</svg>

</svg>
Origin, Port, City
</h1>
    <h1 className='flex justify-center m-3'><svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.61995 7.49C3.58995 -1.17 16.42 -1.16 18.38 7.5C19.53 12.58 16.37 16.88 13.6 19.54C12.632 20.4735 11.3397 20.9952 9.99495 20.9952C8.6502 20.9952 7.35788 20.4735 6.38995 19.54C3.62995 16.88 0.469953 12.57 1.61995 7.49Z" stroke="#868686" stroke-width="1.5"/>
<svg width="18" height="10" viewBox="0 -3 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 7.43C4.40973 7.43 4.81544 7.3493 5.19398 7.19251C5.57251 7.03571 5.91646 6.80589 6.20618 6.51618C6.4959 6.22646 6.72571 5.88251 6.88251 5.50397C7.0393 5.12544 7.12 4.71973 7.12 4.31C7.12 3.90028 7.0393 3.49457 6.88251 3.11603C6.72571 2.73749 6.4959 2.39355 6.20618 2.10383C5.91646 1.81411 5.57251 1.58429 5.19398 1.4275C4.81544 1.2707 4.40973 1.19 4 1.19C3.17253 1.19 2.37895 1.51872 1.79383 2.10383C1.20872 2.68894 0.880005 3.48253 0.880005 4.31C0.880005 5.13748 1.20872 5.93106 1.79383 6.51618C2.37895 7.10129 3.17253 7.43 4 7.43Z" stroke="#868686" stroke-width="1.5"/>
</svg>
</svg>
Destination, Port, City
</h1>
    <h1 className='flex items-center justify-center m-3'>
<svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 1V4M14 1V4M1.5 8.09H18.5M19 7.5V16C19 19 17.5 21 14 21H6C2.5 21 1 19 1 16V7.5C1 4.5 2.5 2.5 6 2.5H14C17.5 2.5 19 4.5 19 7.5Z" stroke="#868686" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<svg width="10" height="26" viewBox="-5 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.69495 1.7H8.70395M8.69495 4.7H8.70395M4.99495 1.7H5.00495M4.99495 4.7H5.00495M1.29395 1.7H1.30395M1.29395 4.7H1.30395" stroke="#868686" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</svg>

13 April 2023
</h1>
    <h1 className='flex items-center justify-center m-3'><svg width="16" height="12" viewBox="0 0 0 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 7V10.8L9.49 8.59C8.53 8.21 7.47 8.21 6.51 8.59L1 10.8V7C1 5.35 2.35 4 4 4H12C13.65 4 15 5.35 15 7ZM10.5 4H5.5V2C5.5 1.45 5.95 1 6.5 1H9.5C10.05 1 10.5 1.45 10.5 2V4Z" stroke="#868686" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 14V2M19.42 4.37C20.29 4.72 20.83 5.75 20.63 6.66L20.22 8.52C19.51 11.72 17 14 13.38 14H8.61998C4.99998 14 2.48998 11.72 1.77998 8.52L1.36998 6.66C1.16998 5.75 1.70998 4.72 2.57998 4.37L3.99998 3.8L9.50998 1.59C10.47 1.21 11.53 1.21 12.49 1.59L18 3.8L19.42 4.37Z" stroke="#868686" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

Load
</h1>
<center>

<button className='bg-indigo-0 justify-center p-2 rounded-md m-3'><svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.2601 2.6L2.0501 11.29C1.7401 11.62 1.4401 12.27 1.3801 12.72L1.0101 15.96C0.880096 17.13 1.7201 17.93 2.8801 17.73L6.1001 17.18C6.5501 17.1 7.1801 16.77 7.4901 16.43L15.7001 7.74C17.1201 6.24 17.7601 4.53 15.5501 2.44C13.3501 0.370003 11.6801 1.1 10.2601 2.6Z" stroke="#9747FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<svg width="20" height="19" viewBox="-1 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.89 1.05C10.0996 2.39086 10.7486 3.62414 11.735 4.55625C12.7214 5.48836 13.9894 6.06653 15.34 6.2M1 18H19" stroke="#9747FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</svg>

</button>
</center>

</div>


{/* menu select
 */}

<div className='bg-indigo-50 rounded-xl shadow-lg shadow-gray-300 px-2 max-w-[800px] mx-auto md:flex flex-cols justify-between p-0 items-center m-2 font-semibold text-gray-500'>

<h1 className='bg-white my-4 md:my-0 text-indigo-500 p-3 shadow-lg shadow-gray-500 rounded-xl'>Best Value 5-5 days. $3,121</h1>
<h1 className='my-4 mx-2 md:mx-0 md:my-0'>Quickest 5-5 days. $3,121</h1>
<h1 className='my-4 mx-2 md:mx-0 md:my-0'>Cheapest 5-5 days. $3,121</h1>

</div>


{/* cards */}


<div className='grid grid-cols-5 p-2 m-2 rounded-xl shadow-lg shadow-gray-300'>
    <div className='col-span-4'>
        <div className='flex items-center justify-between px-2'>
    <h1 className='bg-green-400 rounded-lg p-2 '>Best Value </h1>
    <span className='text-red-500'>Express</span> | 
    <span className='text-red-500'>Est. 5 days</span> 
        </div>
    </div>

</div>



    </div>
  )
}

export default Page4