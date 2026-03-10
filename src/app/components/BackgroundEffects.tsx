import React from 'react';
import imgEllipse262 from "@/assets/7d38a8b54ea6625b67b787837dd011f5aa329e08.png";
import imgEllipse264 from "@/assets/0518ed2dae31629915531b23bcc2802f71ed4868.png";
import imgNoiseAnimation from "@/assets/b1b492b467327e373268d8c777b3bb8b425c81c9.png";

export function GradientBackground() {
  return (
    <>
      {/* Первый градиентный эллипс */}
      <div className="absolute flex inset-[87.75%_34.84%_-74.25%_-58.57%] items-center justify-center pointer-events-none">
        <div className="flex-none h-[922.321px] rotate-[268.701deg] scale-y-[-100%] skew-x-[359.063deg] w-[1209.873px]">
          <div className="relative size-full">
            <div className="absolute inset-[-35.76%_-27.26%]">
              <img alt="" className="block max-w-none size-full opacity-60" height="1582.042" src={imgEllipse262} width="1869.593" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Второй градиентный эллипс */}
      <div className="absolute flex inset-[48.56%_6.39%_-97.44%_-107.17%] items-center justify-center mix-blend-overlay pointer-events-none">
        <div className="flex-none h-[1608.968px] rotate-[214.789deg] scale-y-[-100%] skew-x-[347.486deg] w-[1142.359px]">
          <div className="relative size-full">
            <div className="absolute inset-[-16.45%_-23.17%]">
              <img alt="" className="block max-w-none size-full opacity-60" height="2138.344" src={imgEllipse264} width="1671.734" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function NoiseTexture() {
  return (
    <div 
      className="absolute inset-0 pointer-events-none mix-blend-soft-light opacity-40"
      style={{ 
        backgroundImage: `url('${imgNoiseAnimation}')`,
        backgroundRepeat: 'repeat',
        backgroundSize: '256px 256px'
      }} 
    />
  );
}
