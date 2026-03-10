import svgPaths from "./svg-uoryn5673b";
import imgEllipse262 from "@/assets/7d38a8b54ea6625b67b787837dd011f5aa329e08.png";
import imgEllipse264 from "@/assets/fefc83fe6f59d02d7d6b73d4cca532a098eb7876.png";
import imgNoiseAnimation from "@/assets/b1b492b467327e373268d8c777b3bb8b425c81c9.png";

function Component() {
  return (
    <div className="absolute inset-[8.75%_7.5%_11.25%_12.5%]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
        <g id="Component 1">
          <circle cx="3.29412" cy="3.29412" fill="var(--fill-0, #50ADBB)" id="a1" r="3.29412" />
          <ellipse cx="3.29412" cy="11.2" fill="var(--fill-0, #50ADBB)" fillOpacity="0.6" id="a2" rx="3.29412" ry="3.29412" />
          <ellipse cx="3.29412" cy="19.1059" fill="var(--fill-0, #50ADBB)" fillOpacity="0.3" id="a3" rx="3.29412" ry="3.29412" />
          <ellipse cx="11.2" cy="3.29412" fill="var(--fill-0, #50ADBB)" fillOpacity="0.01" id="b1" rx="3.29412" ry="3.29412" />
          <ellipse cx="11.2" cy="11.2" fill="var(--fill-0, #50ADBB)" fillOpacity="0.9" id="b2" rx="3.29412" ry="3.29412" />
          <ellipse cx="11.2" cy="19.1059" fill="var(--fill-0, #50ADBB)" fillOpacity="0.6" id="b3" rx="3.29412" ry="3.29412" />
          <ellipse cx="19.1059" cy="3.29412" fill="var(--fill-0, #50ADBB)" fillOpacity="0.01" id="c1" rx="3.29412" ry="3.29412" />
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

function Frame50() {
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

function Frame51() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.55] relative shrink-0 text-[#909296] text-[16px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        English
      </p>
      <ChevronDown />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex gap-[40px] items-start relative shrink-0">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.55] relative shrink-0 text-[#909296] text-[16px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        About
      </p>
      <Frame51 />
    </div>
  );
}

function ButtonFilledMSFalseFalseFalseDefault() {
  return (
    <div className="absolute content-stretch flex items-start left-0 px-[18px] py-[8.5px] rounded-[8px] top-0" data-name="Button/Filled/M/S/False/False/False/Default">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.55] relative shrink-0 text-[14px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Sign Up
      </p>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[39px] relative shrink-0 w-[87px]" data-name="button">
      <ButtonFilledMSFalseFalseFalseDefault />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.55] relative shrink-0 text-[16px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Login
      </p>
      <Button />
    </div>
  );
}

function Header() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#25262b] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[100px] py-[10px] relative size-full">
          <Frame50 />
          <Frame54 />
          <Frame />
        </div>
      </div>
    </div>
  );
}

function B() {
  return (
    <div className="bg-black h-[1440px] overflow-clip relative w-[507px]" data-name="B">
      <div className="absolute flex inset-[87.75%_1.42%_-74.25%_-88.61%] items-center justify-center">
        <div className="flex-none h-[922.322px] rotate-[268.701deg] scale-y-[-100%] skew-x-[359.063deg] w-[1209.873px]">
          <div className="relative size-full">
            <div className="absolute inset-[-35.76%_-27.26%]">
              <img alt="" className="block max-w-none size-full" height="1582.042" src={imgEllipse262} width="1869.593" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[46.55%_-87.45%_-108.09%_-162.13%] items-center justify-center mix-blend-overlay">
        <div className="flex-none h-[1640.053px] rotate-[214.789deg] scale-y-[-100%] skew-x-[347.486deg] w-[1411.148px]">
          <div className="relative size-full">
            <div className="absolute inset-[-16.14%_-18.76%]">
              <img alt="" className="block max-w-none size-full" height="2169.429" src={imgEllipse264} width="1940.523" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NoiseAnimation() {
  return <div className="absolute bg-repeat bg-size-[256px_256px] bg-top-left inset-[0_0_2px_0] mix-blend-soft-light" data-name="Noise-Animation" style={{ backgroundImage: `url('${imgNoiseAnimation}')` }} />;
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.55] relative shrink-0 text-[20px] text-center text-nowrap text-white tracking-[-0.8px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Project Management App
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0">
      <Frame61 />
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

function Frame62() {
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
      <Frame1 />
      <Frame62 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="h-[452px] relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[75px] items-center justify-center p-[100px] relative size-full">
          <div className="absolute flex h-[507px] items-center justify-center left-0 top-0 w-[1440px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none rotate-[270deg]">
              <B />
            </div>
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

function Frame64() {
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

function Frame65() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#101113] gap-[27px] items-center px-[20px] py-[60px] relative rounded-[17px] shrink-0 to-[rgba(16,17,19,0)] w-[320px]">
      <div aria-hidden="true" className="absolute border border-[#343a40] border-solid inset-0 pointer-events-none rounded-[17px]" />
      <Group />
      <Frame64 />
    </div>
  );
}

function Group2() {
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

function Frame66() {
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

function Frame55() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#101113] gap-[27px] h-full items-center px-[20px] py-[60px] relative rounded-[17px] shrink-0 to-[rgba(16,17,19,0)] w-[320px]">
      <div aria-hidden="true" className="absolute border border-[#343a40] border-solid inset-0 pointer-events-none rounded-[17px]" />
      <Group2 />
      <Frame66 />
    </div>
  );
}

function Group3() {
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

function Frame67() {
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

function Frame56() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#101113] gap-[27px] items-center px-[20px] py-[60px] relative rounded-[17px] shrink-0 to-[rgba(16,17,19,0)] w-[320px]">
      <div aria-hidden="true" className="absolute border border-[#343a40] border-solid inset-0 pointer-events-none rounded-[17px]" />
      <Group3 />
      <Frame67 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex gap-[48px] items-center justify-center px-0 py-[50px] relative shrink-0 w-full">
      <Frame65 />
      <div className="flex flex-row items-center self-stretch">
        <Frame55 />
      </div>
      <Frame56 />
    </div>
  );
}

function Frame57() {
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

function Frame69() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame57 />
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.3] relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[-0.64px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Universal
      </p>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <Frame69 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 w-full">
      <Frame70 />
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[1.1] min-w-full relative shrink-0 text-[42px] text-white tracking-[-1.68px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Build the workflow you want
      </p>
    </div>
  );
}

function Frame71() {
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
      <Frame71 />
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

function Frame72() {
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

function Button1() {
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

function Button2() {
  return (
    <div className="h-[27.339px] relative shrink-0 w-[43.463px]" data-name="button">
      <ButtonFilledSSFalseFalseFalseDefault1 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[5.608px] items-start relative shrink-0">
      <Button1 />
      <Button2 />
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

function Frame73() {
  return (
    <div className="bg-gradient-to-b from-[#320606] h-[182.263px] relative rounded-[11.917px] shrink-0 to-[rgba(19,5,5,0)] w-[206.799px]">
      <div className="content-stretch flex flex-col gap-[18.927px] items-center overflow-clip pb-[42.061px] pt-[21.03px] px-[14.02px] relative rounded-[inherit] size-full">
        <Frame72 />
        <Frame9 />
        <X />
      </div>
      <div aria-hidden="true" className="absolute border-[#c9472a] border-[0.701px] border-solid inset-0 pointer-events-none rounded-[11.917px]" />
    </div>
  );
}

function Frame74() {
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

function Frame75() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#321e06] h-[182.263px] items-center px-[14.02px] py-[42.061px] relative rounded-[11.917px] shrink-0 to-[rgba(19,5,5,0)] w-[206.799px]">
      <div aria-hidden="true" className="absolute border-[#c9762a] border-[0.701px] border-solid inset-0 pointer-events-none rounded-[11.917px]" />
      <Frame74 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-col gap-[5.608px] items-center leading-[1.55] relative shrink-0 text-center w-full">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[12.618px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Brochure products
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#909296] text-[11.216px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Conscious and aware of their own character, feelings and behaviour. `}</p>
    </div>
  );
}

function Frame77() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#063218] h-[182.263px] items-center px-[14.02px] py-[42.061px] relative rounded-[11.917px] shrink-0 to-[rgba(19,5,5,0)] w-[206.799px]">
      <div aria-hidden="true" className="absolute border-[#2ac97d] border-[0.701px] border-solid inset-0 pointer-events-none rounded-[11.917px]" />
      <Frame76 />
    </div>
  );
}

function Frame78() {
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

function Frame79() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#320630] h-[182.263px] items-center px-[14.02px] py-[42.061px] relative rounded-[11.917px] shrink-0 to-[rgba(19,5,5,0)] w-[206.799px]">
      <div aria-hidden="true" className="absolute border-[#b32ac9] border-[0.701px] border-solid inset-0 pointer-events-none rounded-[11.917px]" />
      <Frame78 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[14.02px] items-start relative shrink-0">
      <Frame73 />
      <Frame75 />
      <Frame77 />
      <Frame79 />
    </div>
  );
}

function Frame80() {
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

function Frame81() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#091c43] h-[182.263px] items-center px-[14.02px] py-[42.061px] relative rounded-[11.917px] shrink-0 to-[rgba(16,17,19,0)] w-[206.799px]">
      <div aria-hidden="true" className="absolute border-[#205d9a] border-[0.701px] border-solid inset-0 pointer-events-none rounded-[11.917px]" />
      <Frame80 />
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex flex-col gap-[5.608px] items-center leading-[1.55] relative shrink-0 text-center w-full">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[12.618px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Social advertising
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#909296] text-[11.216px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Assess and initiate things with minimal direction or guidance. `}</p>
    </div>
  );
}

function Frame83() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#09201e] h-[182.263px] items-center px-[14.02px] py-[42.061px] relative rounded-[11.917px] shrink-0 to-[rgba(16,17,19,0)] w-[206.799px]">
      <div aria-hidden="true" className="absolute border-[#0d6c72] border-[0.701px] border-solid inset-0 pointer-events-none rounded-[11.917px]" />
      <Frame82 />
    </div>
  );
}

function Frame84() {
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

function Frame85() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#191d09] h-[182.263px] items-center px-[14.02px] py-[42.061px] relative rounded-[11.917px] shrink-0 to-[rgba(16,17,19,0)] w-[206.799px]">
      <div aria-hidden="true" className="absolute border-[#688517] border-[0.701px] border-solid inset-0 pointer-events-none rounded-[11.917px]" />
      <Frame84 />
    </div>
  );
}

function BootstrapIcon1() {
  return (
    <div className="relative shrink-0 size-[16.824px]" data-name="Bootstrap Icon 1.6.1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g clipPath="url(#clip0_2011_26139)" id="Bootstrap Icon 1.6.1">
          <g id="Vector"></g>
          <path d={svgPaths.p1109500} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_2011_26139">
            <rect fill="white" height="16.8243" width="16.8243" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex gap-[5.608px] items-center justify-center relative shrink-0 w-full">
      <BootstrapIcon1 />
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.55] relative shrink-0 text-[12.618px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Create Board
      </p>
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex flex-col h-[182.263px] items-center justify-center px-[14.02px] py-[42.061px] relative rounded-[11.917px] shrink-0 w-[206.799px]">
      <div aria-hidden="true" className="absolute border-[#343a40] border-[0.701px] border-solid inset-0 pointer-events-none rounded-[11.917px]" />
      <Frame86 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[14.02px] items-start relative shrink-0">
      <Frame81 />
      <Frame83 />
      <Frame85 />
      <Frame87 />
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

function Frame52() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[573.484px] items-center px-[70.101px] py-[45.566px] relative rounded-[2.804px] w-[1000.619px]">
      <Frame8 />
      <Frame12 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[-206.5px] top-[-22px]" data-name="Group">
      <div className="absolute flex h-[787px] items-center justify-center left-[-206.5px] top-[-22px] w-[1363.243px]" style={{ "--transform-inner-width": "1712.28125", "--transform-inner-height": "336.9375" } as React.CSSProperties}>
        <div className="flex-none rotate-[29.998deg] skew-x-[333.432deg]">
          <Frame52 />
        </div>
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="bg-gradient-to-b from-[#0d0d0d] h-[420px] relative rounded-[14.244px] shrink-0 to-[rgba(0,0,0,0)] w-[640px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Group4 />
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

function Frame88() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[75px] items-center justify-center pb-[60px] pt-0 px-[100px] relative w-full">
          <Frame5 />
          <Frame58 />
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[12.512px] items-center relative shrink-0">
      <div className="h-[12.512px] relative shrink-0 w-[6.256px]">
        <div className="absolute inset-[-6.63%_-13.26%_-6.63%_-26.52%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 15">
            <path d={svgPaths.p2b87c0e6} id="Vector 2" stroke="var(--stroke-0, white)" strokeWidth="2.34608" />
          </svg>
        </div>
      </div>
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[26.589px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Package
      </p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[9.384px] items-start relative shrink-0 w-full">
      <Frame13 />
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.55] relative shrink-0 text-[#909296] text-[12.512px] w-[969.712px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Sets targets and objectives and actively works towards them, whilst raising the quality of the outcomes. `}</p>
    </div>
  );
}

function Frame89() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative rounded-[3.128px] shrink-0">
      <div aria-hidden="true" className="absolute border-[#343a40] border-[0.782px] border-solid inset-0 pointer-events-none rounded-[3.128px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start px-[9.384px] py-[3.128px] relative size-full">
          <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.55] relative shrink-0 text-[14.076px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
            Backlog
          </p>
        </div>
      </div>
    </div>
  );
}

function X1() {
  return (
    <div className="relative shrink-0 size-[18.769px]" data-name="x">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="x">
          <path d={svgPaths.p8f90d80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.09484" />
          <path d={svgPaths.p3be080a0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.09484" />
        </g>
      </svg>
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex gap-[6.256px] items-center relative shrink-0 w-full">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Frame89 />
      </div>
      <X1 />
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Open_Sans:SemiBold',sans-serif] font-semibold grow leading-[1.55] min-h-px min-w-px relative shrink-0 text-[12.512px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Proof of Concept
      </p>
    </div>
  );
}

function Frame92() {
  return (
    <div className="bg-[#25262b] relative rounded-[5.474px] shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[15.641px] py-[9.384px] relative w-full">
          <Frame91 />
        </div>
      </div>
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="basis-0 font-['Open_Sans:SemiBold',sans-serif] font-semibold grow leading-[1.55] min-h-px min-w-px relative shrink-0 text-[12.512px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Regression Test
      </p>
    </div>
  );
}

function Frame94() {
  return (
    <div className="bg-[#25262b] relative rounded-[5.474px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[15.641px] py-[9.384px] relative w-full">
          <Frame93 />
        </div>
      </div>
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Open_Sans:SemiBold',sans-serif] font-semibold grow leading-[1.55] min-h-px min-w-px relative shrink-0 text-[12.512px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Set up Monitoring and Controlling processes
      </p>
    </div>
  );
}

function Frame59() {
  return (
    <div className="bg-[#25262b] relative rounded-[5.474px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[15.641px] py-[9.384px] relative w-full">
          <Frame95 />
        </div>
      </div>
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Open_Sans:SemiBold',sans-serif] font-semibold grow leading-[1.55] min-h-px min-w-px relative shrink-0 text-[12.512px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Requirements Analysis Completed
      </p>
    </div>
  );
}

function Frame60() {
  return (
    <div className="bg-[#25262b] relative rounded-[5.474px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[15.641px] py-[9.384px] relative w-full">
          <Frame96 />
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[6.256px] items-start relative shrink-0 w-full">
      <Frame92 />
      <Frame94 />
      <Frame59 />
      <Frame60 />
    </div>
  );
}

function Cursors1() {
  return (
    <div className="absolute left-[115.74px] size-[18.769px] top-[29.72px]" data-name="Cursors">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g filter="url(#filter0_d_2011_26128)" id="Cursors">
          <path d={svgPaths.p197d5f0} fill="var(--fill-0, white)" id="arrow border" />
          <path clipRule="evenodd" d={svgPaths.p1b742e00} fill="var(--fill-0, black)" fillRule="evenodd" id="arrow" />
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="21.5839" id="filter0_d_2011_26128" width="21.5839" x="-1.40765" y="-0.62562">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="0.782026" />
            <feGaussianBlur stdDeviation="0.703823" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.65 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2011_26128" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_2011_26128" mode="normal" result="shape" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function BootstrapIcon2() {
  return (
    <div className="relative shrink-0 size-[18.769px]" data-name="Bootstrap Icon 1.6.1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g clipPath="url(#clip0_2011_26175)" id="Bootstrap Icon 1.6.1">
          <g id="Vector"></g>
          <path d={svgPaths.p39fa3200} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_2011_26175">
            <rect fill="white" height="18.7686" width="18.7686" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex gap-[6.256px] items-center relative shrink-0 w-full">
      <BootstrapIcon2 />
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.55] relative shrink-0 text-[14.076px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Add task
      </p>
    </div>
  );
}

function Frame98() {
  return (
    <div className="bg-[#141517] content-stretch flex flex-col gap-[12.512px] items-center justify-center p-[15.641px] relative rounded-[6.256px] shrink-0 w-[231.48px]">
      <div aria-hidden="true" className="absolute border-[#343a40] border-[0.782px] border-solid inset-0 pointer-events-none rounded-[6.256px]" />
      <Frame90 />
      <Frame15 />
      <Cursors1 />
      <Frame97 />
    </div>
  );
}

function X2() {
  return (
    <div className="relative shrink-0 size-[18.769px]" data-name="x">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="x">
          <path d={svgPaths.p8f90d80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.09484" />
          <path d={svgPaths.p3be080a0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.09484" />
        </g>
      </svg>
    </div>
  );
}

function Frame99() {
  return (
    <div className="h-[28.153px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[9.384px] pr-0 py-0 relative size-full">
          <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.55] relative shrink-0 text-[14.076px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
            To Do
          </p>
          <X2 />
        </div>
      </div>
    </div>
  );
}

function Frame100() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="basis-0 font-['Open_Sans:SemiBold',sans-serif] font-semibold grow leading-[1.55] min-h-px min-w-px relative shrink-0 text-[12.512px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Final Check
      </p>
    </div>
  );
}

function Frame101() {
  return (
    <div className="bg-[#25262b] relative rounded-[5.474px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[15.641px] py-[9.384px] relative w-full">
          <Frame100 />
        </div>
      </div>
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Open_Sans:SemiBold',sans-serif] font-semibold grow leading-[1.55] min-h-px min-w-px relative shrink-0 text-[12.512px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Desktop Publishing
      </p>
    </div>
  );
}

function Frame103() {
  return (
    <div className="bg-[#25262b] relative rounded-[5.474px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[15.641px] py-[9.384px] relative w-full">
          <Frame102 />
        </div>
      </div>
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Open_Sans:SemiBold',sans-serif] font-semibold grow leading-[1.55] min-h-px min-w-px relative shrink-0 text-[12.512px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Linguistic Review
      </p>
    </div>
  );
}

function Frame105() {
  return (
    <div className="bg-[#25262b] relative rounded-[5.474px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[15.641px] py-[9.384px] relative w-full">
          <Frame104 />
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[6.256px] items-start relative shrink-0 w-full">
      <Frame101 />
      <Frame103 />
      <Frame105 />
    </div>
  );
}

function BootstrapIcon3() {
  return (
    <div className="relative shrink-0 size-[18.769px]" data-name="Bootstrap Icon 1.6.1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g clipPath="url(#clip0_2011_26124)" id="Bootstrap Icon 1.6.1">
          <g id="Vector"></g>
          <path d={svgPaths.p1df71780} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_2011_26124">
            <rect fill="white" height="18.7686" width="18.7686" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex gap-[6.256px] items-center relative shrink-0 w-full">
      <BootstrapIcon3 />
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.55] relative shrink-0 text-[14.076px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Add task
      </p>
    </div>
  );
}

function Frame107() {
  return (
    <div className="bg-[#141517] content-stretch flex flex-col gap-[12.512px] items-center justify-center p-[15.641px] relative rounded-[6.256px] shrink-0 w-[229.916px]">
      <div aria-hidden="true" className="absolute border-[#343a40] border-[0.782px] border-solid inset-0 pointer-events-none rounded-[6.256px]" />
      <Frame99 />
      <Frame16 />
      <Frame106 />
    </div>
  );
}

function BootstrapIcon4() {
  return (
    <div className="relative shrink-0 size-[18.769px]" data-name="Bootstrap Icon 1.6.1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g clipPath="url(#clip0_2011_26120)" id="Bootstrap Icon 1.6.1">
          <g id="Vector"></g>
          <path d={svgPaths.p36a1b0f0} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_2011_26120">
            <rect fill="white" height="18.7686" width="18.7686" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex gap-[6.256px] items-center justify-center relative shrink-0 w-full">
      <BootstrapIcon4 />
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.55] relative shrink-0 text-[14.076px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Add column
      </p>
    </div>
  );
}

function Frame109() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[15.641px] py-[12.512px] relative rounded-[6.256px] shrink-0 w-[230.698px]">
      <div aria-hidden="true" className="absolute border-[#495057] border-[0.782px] border-solid inset-0 pointer-events-none rounded-[6.256px]" />
      <Frame108 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[15.641px] items-start relative shrink-0 w-full">
      <Frame98 />
      <Frame107 />
      <Frame109 />
    </div>
  );
}

function Frame110() {
  return (
    <div className="content-stretch flex flex-col gap-[31.281px] h-[276.793px] items-center px-[78.203px] py-[50.832px] relative rounded-[3.128px] w-[919.451px]">
      <Frame14 />
      <Frame17 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[70px] top-[-40px]" data-name="Group">
      <div className="absolute flex h-[598.083px] items-center justify-center left-[70px] top-[-40px] w-[1036px]" style={{ "--transform-inner-width": "1100.203125", "--transform-inner-height": "431.546875" } as React.CSSProperties}>
        <div className="flex-none rotate-[29.998deg] skew-x-[333.432deg]">
          <Frame110 />
        </div>
      </div>
    </div>
  );
}

function Frame111() {
  return (
    <div className="bg-gradient-to-b from-[#0d0d0d] h-[420px] relative rounded-[14.244px] shrink-0 to-[rgba(0,0,0,0)] w-[640px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Group5 />
        <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] h-[233px] left-[1.5px] to-[#000000] top-[190px] w-[636px]" />
        <div className="absolute left-[-105.5px] size-[353px] top-[-198px]">
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

function Frame112() {
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

function Frame113() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame112 />
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.3] relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[-0.64px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Optimized
      </p>
    </div>
  );
}

function Frame114() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <Frame113 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 w-full">
      <Frame114 />
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[1.1] min-w-full relative shrink-0 text-[42px] text-white tracking-[-1.68px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Everything you need in one place
      </p>
    </div>
  );
}

function Frame115() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.55] relative shrink-0 text-[#909296] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        You can specify additional info in task description and assign users.
      </p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-[436px]">
      <Frame18 />
      <Frame115 />
    </div>
  );
}

function Frame116() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[75px] items-center justify-center px-[100px] py-[60px] relative w-full">
          <Frame111 />
          <Frame19 />
        </div>
      </div>
    </div>
  );
}

function Frame117() {
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

function Frame118() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame117 />
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.3] relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[-0.64px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Unlimited
      </p>
    </div>
  );
}

function Frame119() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <Frame118 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 w-full">
      <Frame119 />
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-none min-w-full relative shrink-0 text-[42px] text-white tracking-[-1.68px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        No limits for all users.
      </p>
    </div>
  );
}

function Frame120() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.55] relative shrink-0 text-[#909296] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Unlimited kanban boards, columns and tasks.
      </p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-[436px]">
      <Frame20 />
      <Frame120 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-start pb-[2.925px] pt-0 px-0 relative shrink-0">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.55] relative shrink-0 text-[#868e96] text-[10.237px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Description
      </p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[2.194px] items-start relative shrink-0">
      <Frame23 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-start pb-[17.548px] pt-0 px-0 relative shrink-0 w-full">
      <div className="basis-0 flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#f8f9fa] text-[10.237px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.55]">An exercise in which work is focused on determining whether an idea can be turned into a reality.</p>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-[#1a1b1e] relative rounded-[5.849px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#f1f3f5] border-[0.731px] border-solid inset-0 pointer-events-none rounded-[5.849px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start px-[8.774px] py-[7.312px] relative w-full">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="textarea">
      <Frame24 />
      <Frame25 />
    </div>
  );
}

function Textarea1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[260.916px]" data-name="textarea">
      <Textarea />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex items-start pb-[2.925px] pt-0 px-0 relative shrink-0">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.55] relative shrink-0 text-[#868e96] text-[10.237px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Assigned to
      </p>
    </div>
  );
}

function Frame27() {
  return <div className="content-stretch flex flex-col items-start pb-[2.925px] pt-0 px-0 shrink-0" />;
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[2.194px] items-start relative shrink-0">
      <Frame26 />
      <Frame27 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex items-center pl-[8.774px] pr-[7.312px] py-[0.731px] relative shrink-0">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#f8f9fa] text-[10.237px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.55]">Alex</p>
      </div>
    </div>
  );
}

function ChevronDown1() {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-1/2" data-name="chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 9">
        <g id="chevron-down">
          <path d="M6 3L9 6L12 3" id="Vector" stroke="var(--stroke-0, #868E96)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function ChevronDown2() {
  return (
    <div className="relative size-full" data-name="chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 9">
        <g id="chevron-down">
          <path d="M6 3L9 6L12 3" id="Vector" stroke="var(--stroke-0, #868E96)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function ChevronUpdown() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="chevron-updown">
      <ChevronDown1 />
      <div className="absolute bottom-1/2 flex items-center justify-center left-0 right-0 top-0">
        <div className="flex-none h-[9px] scale-y-[-100%] w-[18px]">
          <ChevronDown2 />
        </div>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex h-[21.935px] items-center overflow-clip p-[6.581px] relative shrink-0">
      <ChevronUpdown />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex h-[26.322px] items-center justify-between px-0 py-[4.387px] relative rounded-[2.925px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#343a40] border-[0.731px] border-solid inset-0 pointer-events-none rounded-[2.925px]" />
      <Frame29 />
      <Frame30 />
    </div>
  );
}

function Select() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[260.916px]" data-name="select">
      <Frame28 />
      <Frame31 />
    </div>
  );
}

function Cursors2() {
  return (
    <div className="absolute inset-[50.61%_-1071.32%_-1829.05%_83.16%] overflow-clip shadow-[0px_0.731px_1.316px_0px_rgba(0,0,0,0.65)]" data-name="Cursors">
      <div className="absolute flex h-[11.641px] items-center justify-center left-[calc(50%+0.38px)] top-[calc(50%-0.77px)] translate-x-[-50%] translate-y-[-50%] w-[5.165px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-[5.165px] relative w-[11.641px]" data-name="beam">
            <div className="absolute inset-[-15.02%_-6.28%_-15.05%_-6.28%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 7">
                <path d={svgPaths.p2741aa00} fill="var(--fill-0, black)" id="beam" stroke="var(--stroke-0, white)" strokeWidth="0.731179" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame121() {
  return (
    <div className="content-stretch flex flex-col gap-[14.624px] items-start justify-center relative shrink-0 w-full">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.55] relative shrink-0 text-[14.624px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Proof of Concept
      </p>
      <Textarea1 />
      <Select />
      <Cursors2 />
    </div>
  );
}

function X3() {
  return (
    <div className="absolute right-[14.51px] size-[17.548px] top-[13.16px]" data-name="x">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="x">
          <path d={svgPaths.p347612e0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.02365" />
          <path d={svgPaths.p2e280100} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.02365" />
        </g>
      </svg>
    </div>
  );
}

function ButtonFilledSXsFalseFalseFalseDefault() {
  return (
    <div className="absolute bg-[#25262b] content-stretch flex items-start left-0 px-[10.237px] py-[5.118px] rounded-[2.925px] top-0" data-name="Button/Filled/S/XS/False/False/False/Default">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.55] relative shrink-0 text-[8.774px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Save
      </p>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[24.129px] relative shrink-0 w-[39.484px]" data-name="button">
      <ButtonFilledSXsFalseFalseFalseDefault />
    </div>
  );
}

function ButtonFilledSXsFalseFalseFalseDefault1() {
  return (
    <div className="absolute bg-[#25262b] content-stretch flex items-start left-0 px-[10.237px] py-[5.118px] rounded-[2.925px] top-0" data-name="Button/Filled/S/XS/False/False/False/Default">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.55] relative shrink-0 text-[8.774px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Delete
      </p>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[24.129px] relative shrink-0 w-[48.258px]" data-name="button">
      <ButtonFilledSXsFalseFalseFalseDefault1 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[5.849px] items-start relative shrink-0">
      <Button3 />
      <Button4 />
    </div>
  );
}

function Frame122() {
  return (
    <div className="bg-[#101113] content-stretch flex flex-col gap-[19.742px] h-[304.12px] items-center px-[29.247px] py-[43.871px] relative rounded-[12.43px] w-[319.411px]">
      <div aria-hidden="true" className="absolute border-[#343a40] border-[0.731px] border-solid inset-0 pointer-events-none rounded-[12.43px]" />
      <Frame121 />
      <X3 />
      <Frame32 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex items-start pb-[2.99px] pt-0 px-0 relative shrink-0">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.55] relative shrink-0 text-[#868e96] text-[10.465px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Name
      </p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame33 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex items-center px-[8.97px] py-[0.747px] relative shrink-0">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#f8f9fa] text-[10.465px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.55]">Alex</p>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="bg-[#1a1b1e] content-stretch flex flex-col items-start px-0 py-[4.485px] relative rounded-[2.99px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#f1f3f5] border-solid inset-0 pointer-events-none rounded-[2.99px]" />
      <Frame35 />
    </div>
  );
}

function TextInput1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[240.028px]" data-name="textInput">
      <Frame34 />
      <Frame36 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex items-start pb-[2.99px] pt-0 px-0 relative shrink-0">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.55] relative shrink-0 text-[#868e96] text-[10.465px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Login
      </p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame37 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex items-center px-[8.97px] py-[0.747px] relative shrink-0">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#f8f9fa] text-[10.465px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.55]">Overlaped</p>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col items-start px-0 py-[4.485px] relative rounded-[2.99px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#343a40] border-[0.747px] border-solid inset-0 pointer-events-none rounded-[2.99px]" />
      <Frame39 />
    </div>
  );
}

function TextInput2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[240.028px]" data-name="textInput">
      <Frame38 />
      <Frame40 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex items-start pb-[2.99px] pt-0 px-0 relative shrink-0">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.55] relative shrink-0 text-[#868e96] text-[10.465px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Password
      </p>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame41 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex items-center px-[8.97px] py-[0.747px] relative shrink-0">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#f8f9fa] text-[10.465px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.55]">************</p>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col items-start px-0 py-[4.485px] relative rounded-[2.99px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#343a40] border-[0.747px] border-solid inset-0 pointer-events-none rounded-[2.99px]" />
      <Frame43 />
    </div>
  );
}

function TextInput3() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[240.028px]" data-name="textInput">
      <Frame42 />
      <Frame44 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex font-['Open_Sans:Regular',sans-serif] font-normal gap-[2.99px] items-start leading-[1.55] relative shrink-0 text-[11.96px] text-center text-nowrap w-[185.374px]">
      <p className="relative shrink-0 text-[#909296]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Already have an account?
      </p>
      <p className="relative shrink-0 text-[#c1c2c5]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Sign in
      </p>
    </div>
  );
}

function Frame123() {
  return (
    <div className="content-stretch flex flex-col gap-[14.95px] items-start justify-center relative shrink-0 w-full">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.55] relative shrink-0 text-[14.95px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Sign up
      </p>
      <TextInput1 />
      <TextInput2 />
      <TextInput3 />
      <Frame45 />
    </div>
  );
}

function X4() {
  return (
    <div className="absolute right-[15.04px] size-[17.939px] top-[13.45px]" data-name="x">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="x">
          <path d={svgPaths.p3c4b8000} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.04647" />
          <path d={svgPaths.p1703f400} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.04647" />
        </g>
      </svg>
    </div>
  );
}

function ButtonFilledSSFalseFalseFalseDefault2() {
  return (
    <div className="absolute bg-[#25262b] content-stretch flex items-start left-0 px-[13.455px] py-[6.354px] rounded-[2.99px] top-0" data-name="Button/Filled/S/S/False/False/False/Default">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.55] relative shrink-0 text-[10.465px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Create an Account
      </p>
    </div>
  );
}

function Button5() {
  return (
    <div className="h-[29.152px] relative shrink-0 w-[120.344px]" data-name="button">
      <ButtonFilledSSFalseFalseFalseDefault2 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Button5 />
    </div>
  );
}

function Frame124() {
  return (
    <div className="bg-[#101113] content-stretch flex flex-col gap-[20.182px] h-[370.285px] items-center pb-[29.899px] pt-[44.849px] px-[29.899px] relative rounded-[12.707px] w-[299.826px]">
      <div aria-hidden="true" className="absolute border-[#343a40] border-[0.747px] border-solid inset-0 pointer-events-none rounded-[12.707px]" />
      <Frame123 />
      <X4 />
      <Frame46 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[calc(50%+8.45px)] top-[calc(50%-28.48px)] translate-x-[-50%] translate-y-[-50%]" data-name="Group">
      <div className="absolute flex h-[335.033px] items-center justify-center left-[calc(50%+8.45px)] top-[calc(50%-28.48px)] translate-x-[-50%] translate-y-[-50%] w-[580.345px]" style={{ "--transform-inner-width": "174.875", "--transform-inner-height": "139.0625" } as React.CSSProperties}>
        <div className="flex-none rotate-[29.998deg] skew-x-[333.432deg]">
          <Frame124 />
        </div>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-[calc(50%-0.94px)] top-[calc(50%+20.67px)] translate-x-[-50%] translate-y-[-50%]" data-name="Group">
      <div className="absolute flex h-[311.745px] items-center justify-center left-[calc(50%-30.5px)] top-[calc(50%+81.46px)] translate-x-[-50%] translate-y-[-50%] w-[540.006px]" style={{ "--transform-inner-width": "438.453125", "--transform-inner-height": "86.09375" } as React.CSSProperties}>
        <div className="flex-none rotate-[29.998deg] skew-x-[333.432deg]">
          <Frame122 />
        </div>
      </div>
      <Group6 />
    </div>
  );
}

function Frame125() {
  return (
    <div className="bg-gradient-to-b from-[#0d0d0d] h-[420px] relative rounded-[14.244px] shrink-0 to-[rgba(0,0,0,0)] w-[640px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Group7 />
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
        <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] h-[233px] left-[1.5px] to-[#000000] top-[190px] w-[636px]" />
      </div>
      <div aria-hidden="true" className="absolute border-[#404040] border-[0.89px] border-solid inset-0 pointer-events-none rounded-[14.244px]" />
    </div>
  );
}

function Frame53() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[75px] items-center justify-center px-[100px] py-[60px] relative w-full">
          <Frame22 />
          <Frame125 />
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="h-[24px] relative shrink-0 w-[32px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 24">
        <g clipPath="url(#clip0_2011_6691)" id="Frame 32">
          <path d={svgPaths.p93f7e80} id="rslang" stroke="var(--stroke-0, #909296)" strokeWidth="1.4" />
        </g>
        <defs>
          <clipPath id="clip0_2011_6691">
            <rect fill="white" height="24" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[30px]">
      <Frame21 />
    </div>
  );
}

function Group1() {
  return (
    <div className="font-['Open_Sans:SemiBold',sans-serif] font-semibold grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[1.55] place-items-start relative shrink-0 text-[#909296] text-[14px] text-nowrap">
      <p className="[grid-area:1_/_1] ml-0 mt-0 relative" style={{ fontVariationSettings: "'wdth' 100" }}>
        GeoBo
      </p>
      <p className="[grid-area:1_/_1] ml-[75px] mt-0 relative" style={{ fontVariationSettings: "'wdth' 100" }}>
        Mrdoker1
      </p>
      <p className="[grid-area:1_/_1] ml-[175px] mt-0 relative" style={{ fontVariationSettings: "'wdth' 100" }}>
        makrakvladislav
      </p>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame47 />
      <Group1 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <Frame48 />
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.55] relative shrink-0 text-[#5c5f66] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        © 2022. React 2022Q1
      </p>
    </div>
  );
}

export default function Homepage() {
  return (
    <div className="bg-black content-stretch flex flex-col items-center justify-center relative size-full" data-name="Homepage">
      <Header />
      <Frame63 />
      <Frame68 />
      <Frame88 />
      <Frame116 />
      <Frame53 />
      <div className="relative shrink-0 w-full" data-name="Footer">
        <div aria-hidden="true" className="absolute border-[#25262b] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[100px] py-[20px] relative w-full">
            <Frame49 />
          </div>
        </div>
      </div>
    </div>
  );
}
