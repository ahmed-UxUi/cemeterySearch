
import { Input } from "postcss";
import Image from "next/image"; 
import react from "react";




export default function City () {

    return (
        <>
        <section className="pt-[63px] pb-[75px] " 
        style={{
            background: "linear-gradient(rgb(6, 21, 36,0.5),rgb(6, 21, 36,0.5)), url('hero-bg.jpg')", 
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }}
        >
                    <div className="container mx-auto">
            <div className="content-wrapper  z-50">

                <div class="hero-header px-2">
                    <h1 className="text-white text-center text-[25px] md:text-[41px] font-poppins font-bold">
                        Find Gravesites Across The <span class="text-yellowGreen">United States</span>
                    </h1>
                </div>

                <div className="sf-wrapper p-3">

                    <form className="max-w-[1010px] mx-auto ">

                        <div
                            class="f-fields grid md:grid-rows-2 sm:grid-rows-3 grid-flow-row md:grid-cols-3 sm:grid-cols-2 gap-5 bg-jungleGreen/[0.7] max-w-[1010px] mx-auto px-10 pb-[19px] pt-4 rounded-lg mt-5">
                            <div class="">
                                <label className="block text-white text-base font-poppins font-normal mb-[5px]"
                                    for="first name">First Name:</label>
                                <Input type="text" id="first-name" placeholder="Robert"
                                    className="focus:outline-none focus:ring focus:ring-yellowGreen w-full text-sm px-4 py-[13px] font-poppins rounded-md block placeholder-spanish" />
                            </div>

                            <div class="">
                                <label className="block text-white text-base font-poppins font-normal mb-[5px]"
                                    for="first name">Middle Name:</label>
                                <Input type="text" id="middle-name" placeholder="Maria"
                                    className="focus:outline-none focus:ring focus:ring-yellowGreen w-full text-sm px-4 py-[13px] font-poppins rounded-md block placeholder-spanish" />
                            </div>
                            <div class="">
                                <label className="block text-white text-base font-poppins font-normal mb-[5px]"
                                    for="first name">Last Name:</label>
                                <Input type="text" id="last-name" placeholder="Smith"
                                    className="focus:outline-none focus:ring focus:ring-yellowGreen w-full text-sm px-4 py-[13px] font-poppins rounded-md block placeholder-spanish" />
                            </div>
                            <div class="">
                                <label className="block text-white text-base font-poppins font-normal mb-[5px]"
                                    for="first name">Year Born:</label>
                                <Input type="text" id="year-born" placeholder="Exact"
                                    className="focus:outline-none focus:ring focus:ring-yellowGreen w-full text-sm px-4 py-[13px] font-poppins rounded-md block placeholder-black" />
                            </div>
                            <div class="">
                                <label className="block text-white text-base font-poppins font-normal mb-[5px]"
                                    for="first name">Year Died:</label>
                                <Input type="text" id="year-died" placeholder="Exact"
                                    class="focus:outline-none focus:ring focus:ring-yellowGreen w-full text-sm px-4 py-[13px] font-poppins rounded-md block placeholder-black" />
                            </div>
                            <div class="">
                                <label className="block text-white text-base font-poppins font-normal mb-[5px]"
                                    for="first name">Cemetery Location:</label>
                                <Input type="text" id="cemetery location" placeholder="Smith"
                                    className="focus:outline-none focus:ring focus:ring-yellowGreen w-full text-sm px-4 py-[13px] font-poppins rounded-md block placeholder-spanish" />
                            </div>
                        </div>

                        <div class="flex flex-col sm:flex-row items-center justify-center mt-5">

                            <div className="ms-option mt-2 md:mt-0">

                                <select id="countries" className="bg-transparent font-poppins text-base">
                                    <option selected className="text-white">More Search Option</option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="FR">France</option>
                                    <option value="DE">Germany</option>
                                </select>

                            </div>

                            <div className="s-tips ml-[29px] mr-[50px] mt-2 md:mt-0">
                                <select id="countries" class="bg-transparent font-poppins text-base">
                                    <option selected class="text-white">Search Tips</option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="FR">France</option>
                                    <option value="DE">Germany</option>
                                </select>
                            </div>

                            <button type="submit"
                                className="mt-2 md:mt-0 text-black font-poppins text-xl font-bold uppercase bg-yellowGreen w-[180px] h-[60px] inline-flex items-center justify-center rounded-md">
                                Search
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </section>



    <section className="cemeteriesInState px-[15px] xl:px-0 mt-[55px] mb-10">
        <div className="max-w-[1010px] mx-auto">
            <div class="state-content py-10 px-9 border border-[#9cc83b] rounded-lg">
                <div className="s-content-inner">
                    <div className="cemeteries-head bg-[#9cc83b] px-[29px] py-[21px] rounded-t-lg">
                        <h2 className="text-[20px] sm:text-2xl font-bold font-poppins leading-7">Cemeteries in California
                        </h2>
                    </div>
                    <ul className="all-cemeteries rounded-r-lg">
                        <li
                            className="bg-ivory border-b border-alabaster last:border-b-0 last:rounded-br-lg last:rounded-bls-lg px-10 py-[15px] text-[17px] font-semibold font-poppins">
                            1872 Earthquake Victims Graveyard <span>(Inyo, California, United States)</span></li>
                        <li
                            className="bg-ivory border-b border-alabaster last:border-b-0 last:rounded-br-lg last:rounded-bls-lg px-10 py-[15px] text-[17px] font-semibold font-poppins">
                            1872 Earthquake Victims Graveyard <span>(Inyo, California, United States)</span></li>
                        <li
                            className="bg-ivory border-b border-alabaster last:border-b-0 last:rounded-br-lg last:rounded-bls-lg px-10 py-[15px] text-[17px] font-semibold font-poppins">
                            1872 Earthquake Victims Graveyard <span>(Inyo, California, United States)</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Top Cemeteries in State --> */}

    <section className="find_in_state px-[15px] xl:px-0 mt-[55px] mb-10">
        <div className="max-w-[1010px] mx-auto">
            <div class="state__content py-10 px-9 border border-[#9cc83b] rounded-lg">
                <div className="f__cemeteries__head">
                    <h2 className="text-[#9cc83b] text-2xl font-bold font-poppins">Top Cemeteries in California</h2>
                </div>
                <div className="c__content__inner rounded-lg bg-ivory py-[33px] px-[30px] mt-7  ">
                    <div className="c__info__wrapper flex flex-col md:flex-row gap-10 border-b border-[#dde1d4] pb-6">
                        <div className="c__slider">
                            <Image src="/riverside-img.png"
                                className="w-full md:w-[175px] md:h-[175px] rounded-md" width="175" height="175" alt="" />
                        </div>
                        <div class="info__wrapper flex-grow mt-2">
                            <h3 className="text-[#9cc83b] text-[18px] md:text-xl  font-semibold">1. riverside national
                                Cemetery</h3>
                            <div class="info__inner leading-20 mt-5">
                                <div className="flex gap-4 items-baseline mt-1">
                                    <Image src="/location-cali.png"
                                        className="w-[12px] h-[17px]" width="12" height="17" alt="" />
                                    <p className="font-poppins text-[#38404a] font-regular">22495 Van Buren Boulevard
                                        Riverside, 92518</p>
                                </div>
                                <div class="flex gap-3 items-baseline mt-1">
                                    <Image src="/phone.png"
                                        className="w-[16px] h-[19px]" width="16" height="19" alt="" />
                                    <p className="font-poppins text-[#38404a] font-regular">(951)653-8417</p>
                                </div>
                                <div className="flex gap-4 items-baseline mt-1">
                                    <Image src="/ok.png"
                                        className="w-[17px] h-[19px]" width="17" height="19" alt="" />
                                    <p className="font-poppins text-[#38404a] font-regular">305,468</p>
                                </div>
                                <div className="flex gap-5 items-baseline mt-1">
                                    <Image src="/9055368_bxs_id_card_icon.png"
                                        className="w-[16px] h-[12px]" width="16" height="12" alt="" />
                                    <p className="font-poppins text-[#38404a] font-regular">8191</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="c__info__wrapper flex flex-col md:flex-row gap-10 border-b border-[#dde1d4] pb-6 mt-7">
                        <div className="c__slider">
                            <Image src="/riverside-img-2.png"
                                className="w-full md:w-[175px] md:h-[175px] rounded-md" width="175" height="175" alt="" />
                        </div>
                        <div class="info__wrapper flex-grow mt-2">
                            <h3 className="text-[#9cc83b] text-xl font-semibold">2. Mountain view Cemetery</h3>
                            <div className="info__inner leading-20 mt-5">
                                <div className="flex gap-4 items-baseline mt-1">
                                    <Image src="/location-cali.png"
                                        className="w-[12px] h-[17px]" width="12" height="17" alt="" />
                                    <p className="font-poppins text-[#38404a] font-regular">22495 Van Buren Boulevard
                                        Riverside, 92518</p>
                                </div>
                                <div className="flex gap-3 items-baseline mt-1">
                                    <Image src="/phone.png"
                                        className="w-[16px] h-[19px]" width="16" height="19" alt="" />
                                    <p className="font-poppins text-[#38404a] font-regular">(951)653-8417</p>
                                </div>
                                <div className="flex gap-4 items-baseline mt-1">
                                    <Image src="/ok.png"
                                        className="w-[17px] h-[19px]" width="17" height="19" alt="" />
                                    <p className="font-poppins text-[#38404a] font-regular">305,468</p>
                                </div>
                                <div className="flex gap-5 items-baseline mt-1">
                                    <Image src="/9055368_bxs_id_card_icon.png"
                                        className="w-[16px] h-[12px]" width="16" height="12" alt="" />
                                    <p className="font-poppins text-[#38404a] font-regular">8191</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="c__info__wrapper flex flex-col md:flex-row gap-10 pb-6 mt-7">
                        <div className="c__slider">
                            <Image src="/riverside-img-3.png"
                                className="w-full md:w-[175px] md:h-[175px] rounded-md" width="175" height="175" alt="" />
                        </div>
                        <div className="info__wrapper flex-grow mt-2">
                            <h3 className="text-[#9cc83b] text-[18px] md:text-xl font-semibold">3. Old Woodfords Cemetery
                            </h3>
                            <div className="info__inner leading-20 mt-5">
                                <div className="flex gap-4 items-baseline mt-1">
                                    <Image src="/location-cali.png"
                                        className="w-[12px] h-[17px]" width="12" height="17" alt="" />
                                    <p class="font-poppins text-[#38404a] font-regular">22495 Van Buren Boulevard
                                        Riverside, 92518</p>
                                </div>
                                <div className="flex gap-3 items-baseline mt-1">
                                    <Image src="/phone.png"
                                        className="w-[16px] h-[19px]" width="16" height="19" alt="" />
                                    <p className="font-poppins text-[#38404a] font-regular">(951)653-8417</p>
                                </div>
                                <div className="flex gap-4 items-baseline mt-1">
                                    <Image src="/ok.png"
                                        className="w-[17px] h-[19px]" width="17" height="19" alt="" />
                                    <p className="font-poppins text-[#38404a] font-regular" >305,468</p>
                                </div>
                                <div className="flex gap-5 items-baseline mt-1">
                                    <Image src="/9055368_bxs_id_card_icon.png"
                                        className="w-[16px] h-[12px]" width="16" height="12" alt="" />
                                    <p className="font-poppins text-[#38404a] font-regular">8191</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>

    {/* <!-- Find in State --> */}

    <section className="findInState relative px-[15px] xl:px-0 mt-[55px] mb-10">
        <div className="max-w-[1010px] mx-auto">
            <div className="state-content py-10 px-9 border border-yellowGreen rounded-lg">
                <div className="f__cemeteries__head">
                    <h2 className="text-yellowGreen text-2xl font-bold font-poppins mb-5">Top Cemeteries in California</h2>
                    <p className="text-charcoal text-base font-normal font-poppins">Cities in California</p>
                </div>
                <div className="fs__content__inner rounded-lg bg-ivory py-[33px] px-[30px] mt-6">
                    <ul className="city__in__state gap-3 grid grid-flow-row grid-cols-1 sm:grid-cols-3 md:grid-cols-4">
                        <li className="relative text-lg text-charcoal font-poppins pl-[22px]">Los Angeles</li>
                        <li className="relative text-lg text-charcoal font-poppins pl-[22px]">Los Angeles</li>
                        <li className="relative text-lg text-charcoal font-poppins pl-[22px]">Los Angeles</li>
                        <li className="relative text-lg text-charcoal font-poppins pl-[22px]">Los Angeles</li>
                        <li className="relative text-lg text-charcoal font-poppins pl-[22px]">Los Angeles</li>
                        <li className="relative text-lg text-charcoal font-poppins pl-[22px]">Los Angeles</li>
                        <li className="relative text-lg text-charcoal font-poppins pl-[22px]">Santa Clarita</li>
                        <li className="relative text-lg text-charcoal font-poppins pl-[22px]">Los Angeles</li>
                        <li className="relative text-lg text-charcoal font-poppins pl-[22px]">Los Angeles</li>
                        <li className="relative text-lg text-charcoal font-poppins pl-[22px]">Los Angeles</li>
                        <li className="relative text-lg text-charcoal font-poppins pl-[22px]">San Bernardino</li>
                        <li className="relative text-lg text-charcoal font-poppins pl-[22px]">Huntington Beach</li>
                        <li className="relative text-lg text-charcoal font-poppins pl-[22px]">Huntington Beach</li>
                        <li className="relative text-lg text-charcoal font-poppins pl-[22px]">Huntington Beach</li>
                        <li className="relative text-lg text-charcoal font-poppins pl-[22px]">Huntington Beach</li>
                        <li className="relative text-lg text-charcoal font-poppins pl-[22px]">Huntington Beach</li>
                        <li className="relative text-lg text-charcoal font-poppins pl-[22px]">Huntington Beach</li>
                        <li className="relative text-lg text-charcoal font-poppins pl-[22px]">Huntington Beach</li>
                        <li className="relative text-lg text-charcoal font-poppins pl-[22px]">Huntington Beach</li>
                        <li className="relative text-lg text-charcoal font-poppins pl-[22px]">Huntington Beach</li>
                        <li className="relative text-lg text-charcoal font-poppins pl-[22px]">Huntington Beach</li>
                        <li className="relative text-lg text-charcoal font-poppins pl-[22px]">Huntington Beach</li>
                        <li className="relative text-lg text-charcoal font-poppins pl-[22px]">Huntington Beach</li>
                        <li className="relative text-lg text-charcoal font-poppins pl-[22px]">Huntington Beach</li>
                        <li className="relative text-lg text-charcoal font-poppins pl-[22px]">Huntington Beach</li>
                        <li className="relative text-lg text-charcoal font-poppins pl-[22px]">Huntington Beach</li>
                        <li className="relative text-lg text-charcoal font-poppins pl-[22px]">Huntington Beach</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>




        
          </>
        
    )
}