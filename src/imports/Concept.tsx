import svgPaths from "./svg-uuyk2lyiix";
import imgNoise from "@/assets/b1b492b467327e373268d8c777b3bb8b425c81c9.png";

function Component() {
  return (
    <div className="absolute inset-[8.75%_7.5%_11.25%_12.5%]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
        <g id="Component 1">
          <circle cx="3.29412" cy="3.29412" fill="var(--fill-0, #50ADBB)" id="a1" r="3.29412" />
          <circle cx="3.29412" cy="11.2" fill="var(--fill-0, #50ADBB)" fillOpacity="0.6" id="a2" r="3.29412" />
          <ellipse cx="3.29412" cy="19.1059" fill="var(--fill-0, #50ADBB)" fillOpacity="0.3" id="a3" rx="3.29412" ry="3.29412" />
          <ellipse cx="11.2" cy="3.29412" fill="var(--fill-0, #50ADBB)" fillOpacity="0.01" id="b1" rx="3.29412" ry="3.29412" />
          <ellipse cx="11.2" cy="11.2" fill="var(--fill-0, #50ADBB)" fillOpacity="0.9" id="b2" rx="3.29412" ry="3.29412" />
          <ellipse cx="11.2" cy="19.1059" fill="var(--fill-0, #50ADBB)" fillOpacity="0.6" id="b3" rx="3.29412" ry="3.29412" />
          <circle cx="19.1059" cy="3.29412" fill="var(--fill-0, #50ADBB)" fillOpacity="0.01" id="c1" r="3.29412" />
          <circle cx="19.1059" cy="11.2" fill="var(--fill-0, #50ADBB)" fillOpacity="0.01" id="c2" r="3.29412" />
          <ellipse cx="19.1059" cy="19.1059" fill="var(--fill-0, #50ADBB)" id="c3" rx="3.29412" ry="3.29412" />
        </g>
      </svg>
    </div>
  );
}

function V() {
  return (
    <div className="overflow-clip relative shrink-0 size-[28px]" data-name="v3">
      <Component />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <V />
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.3] relative shrink-0 text-[20.679px] text-center text-nowrap text-white tracking-[-0.8272px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        RollingBoard
      </p>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="chevron-down">
          <path d="M3 4.5L6 7.5L9 4.5" id="Vector" stroke="var(--stroke-0, #909296)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.55] relative shrink-0 text-[#909296] text-[16px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        English
      </p>
      <ChevronDown />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[40px] items-start relative shrink-0">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.55] relative shrink-0 text-[#909296] text-[16px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Projects
      </p>
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.55] relative shrink-0 text-[#909296] text-[16px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Profile
      </p>
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.55] relative shrink-0 text-[#909296] text-[16px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Search
      </p>
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.55] relative shrink-0 text-[#909296] text-[16px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        About
      </p>
      <Frame14 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.55] relative shrink-0 text-[16px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Sign out
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame />
    </div>
  );
}

function Header() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#25262b] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[100px] py-[10px] relative size-full">
          <Frame13 />
          <Frame16 />
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Noise() {
  return <div className="absolute bg-repeat bg-size-[256px_256px] bg-top-left inset-0 mix-blend-soft-light" data-name="Noise" style={{ backgroundImage: `url('${imgNoise}')` }} />;
}

function Gradient() {
  return (
    <div className="blur-[100px] filter relative size-[1500px]" data-name="Gradient">
      <div className="absolute flex inset-[7.62%_8.92%_7.52%_6.22%] items-center justify-center">
        <div className="flex-none rotate-[225deg] scale-y-[-100%] size-[900px]">
          <div className="relative size-full">
            <div className="absolute inset-[-29.41%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1430 1430">
                <g filter="url(#filter0_f_2001_6918)" id="Ellipse 264">
                  <ellipse cx="714.688" cy="714.688" fill="url(#paint0_linear_2001_6918)" rx="450" ry="450" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1429.38" id="filter0_f_2001_6918" width="1429.38" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_2001_6918" stdDeviation="132.344" />
                  </filter>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2001_6918" x1="714.688" x2="714.688" y1="264.688" y2="1164.69">
                    <stop stopColor="#FF6161" />
                    <stop offset="0.358793" stopColor="#43FFDD" />
                    <stop offset="0.676507" stopColor="#45BCFF" />
                    <stop offset="1" stopColor="#D795FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[9.5%] items-center justify-center">
        <div className="flex-none rotate-[45deg] size-[859.135px]">
          <div className="rounded-[200px] size-full" style={{ backgroundImage: "linear-gradient(rgb(255, 220, 97) 0%, rgb(67, 255, 221) 35.879%, rgb(69, 188, 255) 67.651%, rgb(215, 149, 255) 100%)" }} />
        </div>
      </div>
      <Noise />
    </div>
  );
}

function NoiseAnimation() {
  return <div className="absolute bg-repeat bg-size-[256px_256px] bg-top-left inset-[0_0_2px_0] mix-blend-soft-light" data-name="Noise-Animation" style={{ backgroundImage: `url('${imgNoise}')` }} />;
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.55] relative shrink-0 text-[20px] text-center text-nowrap text-white tracking-[-0.8px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Project Management App
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0">
      <Frame17 />
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[60px] text-center text-white tracking-[-2.4px] w-[662px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Colaborate and build faster, together.
      </p>
    </div>
  );
}

function ButtonFilledMLFalseTrueFalseDefault() {
  return (
    <div className="bg-[#1098ad] content-stretch flex items-start px-[14px] py-[4px] relative rounded-[8px] shrink-0" data-name="Button/Filled/M/L/False/True/False/Default">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.55] relative shrink-0 text-[18px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Create Kanban Board
      </p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.55] relative shrink-0 text-[#909296] text-[18px] text-center w-[457px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Create, share, and get feedback with collaborative boards for rapid development.
      </p>
      <ButtonFilledMLFalseTrueFalseDefault />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0">
      <Frame2 />
      <Frame22 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="h-[452px] relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[75px] items-center justify-center pl-[84px] pr-[100px] py-[100px] relative size-full">
          <div className="absolute flex items-center justify-center left-[780.44px] size-[1837.117px] top-[-468.56px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none rotate-[105deg]">
              {[...Array(2).keys()].map((_, i) => (
                <Gradient key={i} />
              ))}
            </div>
          </div>
          <div className="absolute flex items-center justify-center left-[-1117px] size-[1837.117px] top-[-412px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none rotate-[105deg]" />
          </div>
          <NoiseAnimation />
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Group">
          <path d="M20 0H0V40H20V0Z" fill="url(#paint0_linear_2001_6924)" id="Vector" />
          <path d="M40 0H20V40H40V0Z" fill="var(--fill-0, #306870)" id="Vector_2" />
          <path d={svgPaths.p265e4f80} fill="var(--fill-0, #50ADBB)" id="Vector_3" />
          <path d="M30 10H20V30H30V10Z" fill="var(--fill-0, #306870)" id="Vector_4" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2001_6924" x1="10" x2="10" y1="0" y2="40">
            <stop stopColor="#183438" />
            <stop offset="1" stopColor="#183438" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center leading-[1.55] relative shrink-0 text-center w-full">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[18px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Integrate
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#909296] text-[16px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        The ability to quickly set up and customize workflows for just about anything.
      </p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#101113] gap-[27px] items-center px-[20px] py-[60px] relative rounded-[17px] shrink-0 to-[rgba(16,17,19,0)] w-[320px]">
      <div aria-hidden="true" className="absolute border border-[#343a40] border-solid inset-0 pointer-events-none rounded-[17px]" />
      <Group />
      <Frame24 />
    </div>
  );
}

function Group1() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Group">
          <path d={svgPaths.p108b8e80} fill="var(--fill-0, #489CA8)" id="Vector" />
          <path d={svgPaths.pc26b340} fill="var(--fill-0, #306870)" id="Vector_2" opacity="0.6" />
          <path d={svgPaths.p1757ce00} fill="var(--fill-0, #50ADBB)" id="Vector_3" />
          <path d={svgPaths.p12878800} fill="var(--fill-0, #489CA8)" id="Vector_4" opacity="0.8" />
        </g>
      </svg>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center leading-[1.55] relative shrink-0 text-center w-full">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[18px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Colaborate
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#909296] text-[16px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Manage projects, organize tasks, and build team spirit—all in one place.
      </p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#101113] gap-[27px] h-full items-center px-[20px] py-[60px] relative rounded-[17px] shrink-0 to-[rgba(16,17,19,0)] w-[320px]">
      <div aria-hidden="true" className="absolute border border-[#343a40] border-solid inset-0 pointer-events-none rounded-[17px]" />
      <Group1 />
      <Frame26 />
    </div>
  );
}

function Group2() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Group">
          <path d={svgPaths.p1fd92980} fill="url(#paint0_linear_2001_6892)" id="Vector" />
          <path d={svgPaths.pb6f8200} fill="url(#paint1_linear_2001_6892)" id="Vector_2" />
          <path d={svgPaths.p2f4ed900} fill="var(--fill-0, #3E8C97)" id="Vector_3" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2001_6892" x1="20" x2="20" y1="0" y2="40">
            <stop stopColor="#46E8FF" stopOpacity="0.71" />
            <stop offset="1" stopColor="#489CA8" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_2001_6892" x1="20" x2="20" y1="10" y2="40">
            <stop stopColor="#167785" />
            <stop offset="1" stopColor="#167785" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center leading-[1.55] relative shrink-0 text-center w-full">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[18px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Succeed
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#909296] text-[16px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Every single part of your task can be managed, tracked, and shared with teammates.
      </p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#101113] gap-[27px] items-center px-[20px] py-[60px] relative rounded-[17px] shrink-0 to-[rgba(16,17,19,0)] w-[320px]">
      <div aria-hidden="true" className="absolute border border-[#343a40] border-solid inset-0 pointer-events-none rounded-[17px]" />
      <Group2 />
      <Frame27 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame 211317">
          <rect height="19" stroke="var(--stroke-0, black)" width="19" x="0.5" y="0.5" />
          <path d={svgPaths.p2633b000} id="Vector" stroke="var(--stroke-0, #15AABF)" />
          <g id="check">
            <path d="M15 7.25L8.125 14.125L5 11" id="Vector_2" stroke="var(--stroke-0, #15AABF)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame20 />
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.3] relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[-0.64px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Universal
      </p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <Frame28 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 w-full">
      <Frame29 />
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[1.1] min-w-full relative shrink-0 text-[42px] text-white tracking-[-1.68px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Build the workflow you want
      </p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <div className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.55] relative shrink-0 text-[#909296] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">Manage your boards using Drag-n-Drop, create adittional boards and tasks.</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-[436px]">
      <Frame4 />
      <Frame30 />
    </div>
  );
}

function BootstrapIcon() {
  return (
    <div className="relative shrink-0 size-[14.02px]" data-name="Bootstrap Icon 1.6.1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Bootstrap Icon 1.6.1">
          <path clipRule="evenodd" d={svgPaths.p3fcb1100} fill="var(--fill-0, #868E96)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[11.684px] py-[0.701px] relative w-full">
          <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#adb5bd] text-[12.618px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[1.55]">Search Board...</p>
          </div>
          <BootstrapIcon />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col h-[30.845px] items-start justify-center px-0 py-[4.206px] relative rounded-[5.608px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ced4da] border-[0.701px] border-solid inset-0 pointer-events-none rounded-[5.608px]" />
      <Frame6 />
    </div>
  );
}

function TextInput() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[175px]" data-name="textInput">
      <Frame7 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[25px] items-center relative shrink-0 w-full">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[23.834px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Projects(7)
      </p>
      <TextInput />
    </div>
  );
}

function Cursors() {
  return (
    <div className="absolute left-[152.82px] size-[16.824px] top-[1.4px]" data-name="Cursors">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g filter="url(#filter0_d_2001_6903)" id="Cursors">
          <path d={svgPaths.p2240af00} fill="var(--fill-0, white)" id="arrow border" />
          <path clipRule="evenodd" d={svgPaths.pf4c6280} fill="var(--fill-0, black)" fillRule="evenodd" id="arrow" />
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="19.3479" id="filter0_d_2001_6903" width="19.3479" x="-1.26182" y="-0.56081">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="0.701013" />
            <feGaussianBlur stdDeviation="0.630911" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.65 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2001_6903" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_2001_6903" mode="normal" result="shape" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[5.608px] items-center relative shrink-0 w-full">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.55] relative shrink-0 text-[12.618px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Package
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.55] min-w-full relative shrink-0 text-[#909296] text-[11.216px] text-center w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Sets targets and objectives and actively works towards them, whilst raising the quality of the outcomes. `}</p>
      <div className="absolute inset-[-69.85%_-24.31%_30.88%_50.2%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 133 131">
          <ellipse cx="66.2457" cy="65.0439" fill="url(#paint0_radial_2001_6874)" id="Ellipse 265" opacity="0.1" rx="66.2457" ry="65.0439" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(66.2457 65.0439) rotate(90) scale(65.0439 66.2457)" gradientUnits="userSpaceOnUse" id="paint0_radial_2001_6874" r="1">
              <stop stopColor="#D9D9D9" />
              <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <Cursors />
    </div>
  );
}

function ButtonFilledSSFalseFalseFalseDefault() {
  return (
    <div className="absolute bg-[#25262b] content-stretch flex items-start left-0 px-[12.618px] py-[5.959px] rounded-[2.804px] top-0" data-name="Button/Filled/S/S/False/False/False/Default">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.55] relative shrink-0 text-[9.814px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Open Board
      </p>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[27.339px] relative shrink-0 w-[82.719px]" data-name="button">
      <ButtonFilledSSFalseFalseFalseDefault />
    </div>
  );
}

function ButtonFilledSSFalseFalseFalseDefault1() {
  return (
    <div className="absolute bg-[#25262b] content-stretch flex items-start left-0 px-[12.618px] py-[5.959px] rounded-[2.804px] top-0" data-name="Button/Filled/S/S/False/False/False/Default">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.55] relative shrink-0 text-[9.814px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Edit
      </p>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[27.339px] relative shrink-0 w-[43.463px]" data-name="button">
      <ButtonFilledSSFalseFalseFalseDefault1 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[5.608px] items-start relative shrink-0">
      <Button />
      <Button1 />
    </div>
  );
}

function X() {
  return (
    <div className="absolute left-[177.36px] size-[16.824px] top-[11.92px]" data-name="x">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="x">
          <path d={svgPaths.p34a91400} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.981418" />
          <path d={svgPaths.p1db58e00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.981418" />
        </g>
      </svg>
    </div>
  );
}

function Frame32() {
  return (
    <div className="bg-gradient-to-b from-[#320606] h-[182.263px] relative rounded-[11.917px] shrink-0 to-[rgba(19,5,5,0)] w-[206.799px]">
      <div className="content-stretch flex flex-col gap-[18.927px] items-center overflow-clip pb-[42.061px] pt-[21.03px] px-[14.02px] relative rounded-[inherit] size-full">
        <Frame31 />
        <Frame9 />
        <X />
      </div>
      <div aria-hidden="true" className="absolute border-[#c9472a] border-[0.701px] border-solid inset-0 pointer-events-none rounded-[11.917px]" />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[5.608px] items-center leading-[1.55] relative shrink-0 text-center w-full">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[12.618px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Deals app
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#909296] text-[11.216px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Goes out of their way to help the physical, mental, or emotional pains of another and themselves.
      </p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#321e06] h-[182.263px] items-center px-[14.02px] py-[42.061px] relative rounded-[11.917px] shrink-0 to-[rgba(19,5,5,0)] w-[206.799px]">
      <div aria-hidden="true" className="absolute border-[#c9762a] border-[0.701px] border-solid inset-0 pointer-events-none rounded-[11.917px]" />
      <Frame33 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[5.608px] items-center leading-[1.55] relative shrink-0 text-center w-full">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[12.618px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Brochure products
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#909296] text-[11.216px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Conscious and aware of their own character, feelings and behaviour. `}</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#063218] h-[182.263px] items-center px-[14.02px] py-[42.061px] relative rounded-[11.917px] shrink-0 to-[rgba(19,5,5,0)] w-[206.799px]">
      <div aria-hidden="true" className="absolute border-[#2ac97d] border-[0.701px] border-solid inset-0 pointer-events-none rounded-[11.917px]" />
      <Frame35 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[5.608px] items-center leading-[1.55] relative shrink-0 text-center w-full">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[12.618px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Static printing
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#909296] text-[11.216px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Do what they say and say what they do. They bring their whole self to work.
      </p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#320630] h-[182.263px] items-center px-[14.02px] py-[42.061px] relative rounded-[11.917px] shrink-0 to-[rgba(19,5,5,0)] w-[206.799px]">
      <div aria-hidden="true" className="absolute border-[#b32ac9] border-[0.701px] border-solid inset-0 pointer-events-none rounded-[11.917px]" />
      <Frame37 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[14.02px] items-start relative shrink-0">
      <Frame32 />
      <Frame34 />
      <Frame36 />
      <Frame38 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[5.608px] items-center leading-[1.55] relative shrink-0 text-center w-full">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[12.618px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Article
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#909296] text-[11.216px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Accepts and craves responsibility; owns their actions and commits to get things done.
      </p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#091c43] h-[182.263px] items-center px-[14.02px] py-[42.061px] relative rounded-[11.917px] shrink-0 to-[rgba(16,17,19,0)] w-[206.799px]">
      <div aria-hidden="true" className="absolute border-[#205d9a] border-[0.701px] border-solid inset-0 pointer-events-none rounded-[11.917px]" />
      <Frame39 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col gap-[5.608px] items-center leading-[1.55] relative shrink-0 text-center w-full">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[12.618px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Social advertising
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#909296] text-[11.216px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Assess and initiate things with minimal direction or guidance. `}</p>
    </div>
  );
}

function Frame42() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#09201e] h-[182.263px] items-center px-[14.02px] py-[42.061px] relative rounded-[11.917px] shrink-0 to-[rgba(16,17,19,0)] w-[206.799px]">
      <div aria-hidden="true" className="absolute border-[#0d6c72] border-[0.701px] border-solid inset-0 pointer-events-none rounded-[11.917px]" />
      <Frame41 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col gap-[5.608px] items-center leading-[1.55] relative shrink-0 text-center w-full">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[12.618px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        OLO
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#909296] text-[11.216px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Can be trusted and counted on to deliver quality outcomes.
      </p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#191d09] h-[182.263px] items-center px-[14.02px] py-[42.061px] relative rounded-[11.917px] shrink-0 to-[rgba(16,17,19,0)] w-[206.799px]">
      <div aria-hidden="true" className="absolute border-[#688517] border-[0.701px] border-solid inset-0 pointer-events-none rounded-[11.917px]" />
      <Frame43 />
    </div>
  );
}

function BootstrapIcon1() {
  return (
    <div className="relative shrink-0 size-[16.824px]" data-name="Bootstrap Icon 1.6.1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g clipPath="url(#clip0_2001_6870)" id="Bootstrap Icon 1.6.1">
          <g id="Vector"></g>
          <path d={svgPaths.p1109500} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_2001_6870">
            <rect fill="white" height="16.8243" width="16.8243" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex gap-[5.608px] items-center justify-center relative shrink-0 w-full">
      <BootstrapIcon1 />
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.55] relative shrink-0 text-[12.618px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Create Board
      </p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col h-[182.263px] items-center justify-center px-[14.02px] py-[42.061px] relative rounded-[11.917px] shrink-0 w-[206.799px]">
      <div aria-hidden="true" className="absolute border-[#343a40] border-[0.701px] border-solid inset-0 pointer-events-none rounded-[11.917px]" />
      <Frame45 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[14.02px] items-start relative shrink-0">
      <Frame40 />
      <Frame42 />
      <Frame44 />
      <Frame46 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[14.02px] items-start relative shrink-0">
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[573.484px] items-center px-[70.101px] py-[45.566px] relative rounded-[2.804px] w-[1000.619px]">
      <Frame8 />
      <Frame12 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[-206.5px] top-[-22px]" data-name="Group">
      <div className="absolute flex h-[787px] items-center justify-center left-[-206.5px] top-[-22px] w-[1363.243px]" style={{ "--transform-inner-width": "1712", "--transform-inner-height": "105" } as React.CSSProperties}>
        <div className="flex-none rotate-[29.998deg] skew-x-[333.432deg]">
          <Frame15 />
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-gradient-to-b from-[#0d0d0d] h-[420px] relative rounded-[14.244px] shrink-0 to-[rgba(0,0,0,0)] w-[640px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Group3 />
        <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] h-[233px] left-[3.5px] to-[#000000] top-[190px] w-[636px]" />
        <div className="absolute left-[384.5px] size-[353px] top-[-198px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 353 353">
            <circle cx="176.5" cy="176.5" fill="url(#paint0_radial_2001_6914)" id="Ellipse 265" opacity="0.1" r="176.5" />
            <defs>
              <radialGradient cx="0" cy="0" gradientTransform="translate(176.5 176.5) rotate(90) scale(176.5)" gradientUnits="userSpaceOnUse" id="paint0_radial_2001_6914" r="1">
                <stop stopColor="#D9D9D9" />
                <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#404040] border-[0.89px] border-solid inset-0 pointer-events-none rounded-[14.244px]" />
    </div>
  );
}

function Frame47() {
  return (
    <div className="h-[267px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[75px] items-center justify-center pb-[60px] pt-[241px] px-[100px] relative size-full">
          <Frame5 />
          <Frame21 />
        </div>
      </div>
    </div>
  );
}

export default function Concept() {
  return (
    <div className="bg-black content-stretch flex flex-col items-center justify-center relative size-full" data-name="Concept">
      <Header />
      <Frame23 />
      <div className="content-stretch flex gap-[48px] items-center justify-center px-0 py-[50px] relative shrink-0 w-full">
        <Frame25 />
        <div className="flex flex-row items-center self-stretch">
          <Frame18 />
        </div>
        <Frame19 />
      </div>
      <Frame47 />
    </div>
  );
}
