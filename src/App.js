import icon1 from './assets/icon1.png';
import roll from './assets/roll.png';
import roll2 from './assets/roll2.png';
import './App.css';

function App() {
  return (
    <>
     <div class="h-97 md:h-35
      bg-[url('./assets/bg1.png')] bg-no-repeat bg-cover bg-center
      flex flex-col justify-center items-center
      text-white
      ">
        <span class="font-dmsans text-mobile16 md:text-pc18">Every year,  there are</span>
        <span class="font-polysans text-mobile32 font-semibold md:text-pc50">100,00,00</span>
        <span class="font-dmsans text-mobile16 md:text-pc18">end-of-use electronics,</span>
        <span class="font-polysans text-mobile32 font-semibold mt-5 md:text-pc50">2000€</span>
        <span class="font-dmsans text-mobile16 md:text-pc18">value is ignored, and eventually</span>
        <span class="font-polysans text-mobile32 font-semibold mt-5 md:text-pc50">1000KG</span>
        <span class="font-dmsans text-mobile16 md:text-pc18">waste is generate</span>
     </div>
     <div class="flex flex-col justify-center items-center pb-13 relative
      md:flex-row md:items-center md:justify-start md:h-pc595 md:pb-0
      ">
        <div class="flex flex-col justify-center items-center text-grey pt-mobile72 px-5
        md:items-start md:ml-pc34 md:w-26% md:pt-0 md:px-0
        ">
          <span class="font-dmsans text-mobile16 md:text-pc16">We believe</span>
          <span class="font-polysans text-mobile24 font-semibold text-center mt-2 mb-6
          md:text-left md:text-pc35
          ">Save planet is something everyone can do</span>
        </div>
        <div class="
        flex flex-col items-start
        text-grey bg-pink border border-solid border-grey w-mobile89.6 rounded-5 pb-6
        md:w-pc736 md:h-pc355 md:flex-row md:items-center md:pb-0
        md:pl-pc22 md:absolute md:top-50% md:-translate-y-50% md:-rotate-7 md:left-29%
        ">
          <div class="w-full h-50
           bg-[url('./assets/card1.png')] bg-no-repeat bg-cover bg-center
           md:w-22 md:h-21
           "></div>
           <div class="flex flex-col items-start md:w-40%">
            <span class="font-polysans text-mobile18 font-semibold mt-6 pl-5 md:text-xl">Sustainability</span>
            <span class="font-dmsans text-mobile14 text-left mt-2 pl-5 md:text-base md:font-bold md:text-1.11">donate the value of your product to Stichting Leergeld.</span>
            <div class="h-mobile36 w-mobile120 bg-blue rounded-20 text-white font-dmsans text-mobile14 leading-mobile36 pl-3.2 ml-5 mt-8
            bg-[url('./assets/arrow.png')] bg-no-repeat bg-mobile16 bg-arrow
            md:w-pc161 md:h-pc60 md:text-pc16 md:leading-pc60 md:pl-pc22 md:bg-pc26 md:mt-pc14 md:bg-pcarrow md:text-pc16
            ">Know more</div>
           </div>
        </div>
        <div class="flex flex-col items-start
        text-grey bg-yellow border border-solid border-grey w-mobile89.6 rounded-5 pb-6 mt-5 
        md:w-23 md:h-24 md:pb-0 md:mt-0 md:absolute md:top-50% md:-translate-y-50% md:rotate-8.5
        md:left-73% md:items-center md:justify-center
        ">
          <div class="
          w-full h-50 bg-[url('./assets/card2.png')] bg-no-repeat bg-cover bg-center
          md:w-20.34 md:h-21
          "></div>
          <span class="font-polysans text-mobile18 font-semibold mt-6 pl-5 md:hidden">Sustainability</span>
          <span class="font-dmsans text-sm text-left mt-2 pl-5 md:hidden">donate the value of your product to Stichting Leergeld.</span>
          <div class="h-mobile36 w-mobile120 bg-blue rounded-20 text-white font-dmsans text-mobile14 leading-mobile36 pl-3.2 ml-5 mt-8
            bg-[url('./assets/arrow.png')] bg-no-repeat bg-mobile16 bg-arrow md:hidden
            ">Know more</div>
        </div>  
     </div>
     <div class="bg-grey1 w-full pt-72 px-5 border-t border-grey border-solid pb-10 md:pt-78 relative overflow-hidden md:overflow-visible">
     <img src={roll} class="w-mobile128 h-mobile128 absolute -top-mobile64 right-4 md:w-pc217 md:h-pc217 md:-top-pc108 md:right-10%"/>  
     <img src={roll2} class="w-mobile128 h-mobile171 absolute top-36% left-0 md:w-pc217 md:h-pc291 md:top-17% md:right-10%"/>     
      <div class="text-grey text-center">
        <p class="font-polysans text-mobile24 font-semibold md:text-pc35">Come and join us!</p>
        <p class="font-dmsans text-base mt-2">together with our 134,000 members, Valyuu has already</p>
      </div>
      <div class="bg-white border border-solid border-grey rounded-2.5 px-5 mt-6 rounded-10 relative z-10
      md:w-95 md:flex md:flex-row md:items-center md:justify-between md:py-[34px] md:px-0 md:pr-37">
        <div class="flex flex-row items-center py-8 border-b border-grey border-solid
        md:py-0 md:border-0 md:pl-37">
          <img src={icon1} class="w-64 h-64 md:w-6.94 md:h-6.94" />
          <div class="flex flex-col items-start justify-between ml-4 text-grey">
            <p class="font-dmsans text-base md:text-lg">Saved CO₂</p>
            <p class="font-polysans text-8 font-semibold md:text-3.47">90,000g</p>
            <p class="font-dmsans text-sm md:text-lg">From Paris to New York</p>
          </div>
        </div>
        <div class="flex flex-row items-center py-8 border-b border-grey border-solid
        md:py-0 md:border-0  md:pl-37 md:border-l">
          <img src={icon1} class="w-64 h-64 md:w-6.94 md:h-6.94" />
          <div class="flex flex-col items-start justify-between ml-4 text-grey">
            <p class="font-dmsans text-base md:text-lg">Saved CO₂</p>
            <p class="font-polysans text-8 font-semibold md:text-3.47">90,000g</p>
            <p class="font-dmsans text-sm md:text-lg">From Paris to New York</p>
          </div>
        </div>
        <div class="flex flex-row items-center py-8
        md:py-0 md:border-0  md:pl-37 md:border-l md:border-grey md:border-solid">
          <img src={icon1} class="w-64 h-64 md:w-6.94 md:h-6.94" />
          <div class="flex flex-col items-start justify-between ml-4 text-grey">
            <p class="font-dmsans text-base md:text-lg">Saved CO₂</p>
            <p class="font-polysans text-8 font-semibold md:text-3.47">90,000g</p>
            <p class="font-dmsans text-sm md:text-lg">From Paris to New York</p>
          </div>
        </div>
      </div>
     </div>
     </>
  );
}

export default App;
