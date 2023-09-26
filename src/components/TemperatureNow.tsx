import { CloudRain, Drop, MapPin, Wind } from '@phosphor-icons/react';

export function TemperatureNow() {
  return (
    <div
      id='location'
      className="relative z-0 w-[480px] h-[480px] rounded-lg bg-cover bg-center bg-no-repeat">
      <svg
        className='absolute z-0 -top-14 -left-14'
        width="176" height="176" viewBox="0 0 176 176" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M155.809 80.6055C155.755 80.6055 155.704 80.6211 155.65 80.6211C156.651 78.3136 157.211 75.7635 157.211 73.0804C157.211 62.5672 148.688 54.0409 138.172 54.0409C134.456 54.0409 131 55.1204 128.069 56.9664C124.106 47.3293 114.635 40.5396 103.572 40.5396C88.9422 40.5396 77.082 52.3982 77.082 67.0338C77.082 68.1367 77.1712 69.2162 77.3026 70.2878C77.2283 70.2878 77.1563 70.28 77.082 70.28C67.2728 70.28 59.3206 78.2275 59.3206 88.0367C59.3206 97.8459 67.2728 105.801 77.082 105.801H155.809C162.766 105.801 168.405 100.161 168.405 93.2072C168.405 86.2453 162.766 80.6055 155.809 80.6055Z" fill="#C2CEF2" />
        <path d="M124.246 97.1804C124.18 97.1804 124.12 97.1961 124.054 97.1961C125.261 94.4035 125.937 91.3294 125.937 88.0987C125.937 75.4188 115.659 65.148 102.982 65.148C98.5012 65.148 94.3342 66.4465 90.8008 68.6681C86.0214 57.0519 74.604 48.862 61.2638 48.862C43.6245 48.862 29.3245 63.169 29.3245 80.8083C29.3245 82.1381 29.4324 83.4445 29.5912 84.7351C29.5013 84.7351 29.4145 84.7195 29.3245 84.7195C17.498 84.7195 7.91013 94.3097 7.91013 106.136C7.91013 117.963 17.498 127.551 29.3245 127.551H124.246C132.634 127.551 139.434 120.751 139.434 112.364C139.434 103.976 132.634 97.1804 124.246 97.1804Z" fill="white" />
      </svg>
      <div
        className='flex-1 flex gap-1 justify-end items-center mt-8 mr-8'>
        <MapPin
          weight="fill"
          className='text-[#C2BFF4] w-5 h-5'
        />
        <p
          className='text-[#C2BFF4]
          text-sm font-bold'
        >Ítajai, SC</p>
      </div>
      <div className='flex-1 mt-28 flex-col flex justify-center items-center'>
        <div className='flex flex-row items-center'>
          <h1 className='text-[88px] text-white font-bold'>18</h1>
          <p className='w-[26px] h-[29px] mb-12 font-bold text-2xl'>ºC</p>
        </div>
        <div className='flex-row flex gap-1 '>
          <p className='text-white font-bold text-xl'>22º</p>
          <p className='text-xl font-bold text-white'>16º</p>
        </div>
      </div>
      <div className='w-[full] h-[60px] mt-20 mx-3 flex gap-2'>
        <div className='flex gap-3 h-full w-full items-center px-4 py-3 rounded-md bg-[#6660C860]'>
          <Wind size={32} />
          <div className='flex flex-col'>
            <p className='text-xs text-white'>Vento</p>
            <div className='flex flex-rowv gap-1'>
              <p className='text-lg text-white font-bold'>17</p>
              <p className='text-lg text-white font-bold'>km/h</p>
            </div>
          </div>
        </div>
        <div className='flex gap-3 h-full w-full items-center px-4 py-3 rounded-md bg-[#6660C860]'>
          <Drop size={32} />
          <div>
            <div>
              <p className='text-xs text-white'>Umidade</p>
              <div className='flex flex-rowv gap-1'>
                <p className='text-lg text-white font-bold'>31</p>
                <p className='text-lg text-white font-bold'>%</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex gap-3 h-full w-full items-center px-4 py-3 rounded-md bg-[#6660C860]'>
          <CloudRain size={32} />
          <div className='flex flex-col'>
            <p className='text-xs text-white'>Chuva</p>
            <div className='flex flex-rowv gap-1'>
              <p className='text-lg text-white font-bold'>10</p>
              <p className='text-lg text-white font-bold'>%</p>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}