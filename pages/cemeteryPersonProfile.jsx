import Head from "next/head";
import Image from "next/image";

export default function State() {
    return(
        <>
        <section className="pt-[63px] pb-[75px] " 
            style={{
                background: "linear-gradient(rgb(6, 21, 36,0.5),rgb(6, 21, 36,0.5)), url('hero-bg.jpg')", 
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}
        >
            <div className="max-w-[1010px] mx-auto">

                <div className="flex flex-col lg:flex-row gap-0">
                    <div className="left-main flex flex-gow-1">
                        <Image className="w-full lg:max-w-[400px] object-cover rounded-tr-lg lg:rounded-tr-none lg:rounded-bl-lg rounded-tl-lg lg:rounded-l-lg h-full lg:h-[100%]" src="/cemeteryProfile.jpg" width="300" height="203" alt="cyber fraud" />
                    </div>

                    <div className="w-full lg:max-w-[740px] px-10 py-9 col-span-3 bg-jungleGreen/[0.7] lg:rounded-bl-none  rounded-b-lg lg:rounded-r-lg">

                        <h1 className="text-3xl font-semibold font-poppins text-white mb-11">John Smith</h1>

                        <div className="pb-[21px] flex flex-row gap-3 sm:gap-[129px]">
                            <div className="font-medium font-poppins text-[16px]  sm:text-xl text-[#9cc83b] uppercase">Birth :</div>
                            <div className="font-normal font-poppins text-[16px] sm:text-lg text-white flex flex-grow">1947</div>
                        </div>

                        <div className="py-8 flex flex-row gap-3 sm:gap-[120px]">
                            <div className="font-medium font-poppins text-[16px] sm:text-xl text-[#9cc83b] uppercase">Death :</div>
                            <div className="font-normal font-poppins text-[16px] sm:text-lg text-white flex flex-grow">8 Apr 1807 (aged 5960) Hollis, Hillsborough County, New Hampshire, USA</div>
                        </div>

                        <div className="py-8 flex flex-grow gap-3 sm:gap-[120px]">
                            <div className="font-medium font-poppins text-[16px] sm:text-xl text-[#9cc83b] uppercase">burial :</div>
                            <div className="font-normal font-poppins text-[16px] sm:text-lg text-white "><span className="text-[#9cc83b]">Congregational Church Cemetery</span> Hollis, Hillsborough County, New Hampshire, USA</div>
                        </div>

                        <div className="py-8 flex flex-row gap-3 sm:gap-[60px]">
                            <div className="font-medium font-poppins text-[16px] sm:text-xl text-[#9cc83b] uppercase">Memorial ID :</div>
                            <div className="font-normal font-poppins text-[16px] sm:text-lg text-white flex flex-grow">78797133</div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <section className="py-20 bg-white">
            <div className="max-w-[1010px] mx-auto">
                <div className="mb-10 rounded-lg bg-white p-10 border border-[#9cc83b]">
                    <div className="flex flex-col lg:flex-row gap-[120px]">

                        <div>
                            <Image className="w-full lg:max-w-[688px] rounded-lg h-[412px]" src="/cemeteryProfile.jpg" width="300" height="203" alt="cyber fraud" />
                        </div>

                        <div className="r-content flex flex-grow flex-col">
                            <div className="w-[68px] mb-7 rounded-full p-[20px] bg-[#f5f9eb]">
                                <Image className="w-6 h-6" src="/cemeteryProfile.jpg" width="300" height="203" alt="cyber fraud" />
                            </div>

                            <div className="content-title mb-[29px]">
                                <h3 className="text-[26px] text-black font-poppins font-semibold">Memorial</h3>
                            </div>

                            <div className="content-para max-w-[492px]">

                                <p className="text-base font-poppins font-normal text-[#38404a]">
                                    Came to Hollis from Nottingham West New Hampshire around 1775 and settled near the Nashua River on Depot Road. 
                                    He was a farmer and blacksmith. Did he have two wives or are the children of John and Mary buried in his lot in the Church Yard Cemetery his Grandchildren
                                    Neither Spaulding or Worcester town Historians give him a son John but non mention a second wife either. 
                                    Tombstones do not say John Smith Jr, so it seems likely that they are this children by a second wife.
                                </p>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section>
          <div className="max-w-[1010px] mx-auto border rounded-lg border-yellowGreen mt-[60px] p-10">
                <div className="flex justify-between">
                    <h3 className="font-poppins font-bold text-[29.97px] ">Photos</h3>
                    <button type="submit" className="text-black font-poppins text-[18px] font-bold uppercase bg-[#9cc83b] w-[195px] h-[55px] inline-flex items-center justify-center rounded-md">
                        <span>
                            <Image src="/add-photo.png" className="h-[19px] pr-3" width="19" height="19" alt="" />
                        </span> ADD PHOTO
                    </button>
                </div> 
                <div className="md:columns-2 lg:columns-3 gap-2 mt-10">

                    <Image className="rounded-md" src="/gallery-img-1.png" width="320" height="412" alt="Gallery image" />
                    <Image className="rounded-md" src="/gallery-img-2.png" width="320" height="201" alt="Gallery image" />
                    <Image className="rounded-md mt-2" src="/gallery-img-3.png" width="320" height="201" alt="Gallery image" />
                    <Image className="rounded-md" src="/gallery-img-3.png" width="320" height="412" alt="Gallery image" />
                        
                </div>
            </div>
        </section>


        {/* Family members */}

        <section>

            <div class="max-w-[1010px] m-auto my-10">
                <div class="mb-10 rounded-lg p-[41px] bg-white border border-[#9cc83b]">
                    <h2 class="text-[26px] font-poppins font-semibold text-black mb-6">Family Members</h2>
                    <div class="bg-[#f6faec] p-[31px] rounded-lg mb-[30px]">
                        <h3 class="text-xl font-poppins font-semiblod text-[#38404a] mb-[25px] ">Spouse</h3>
                        <div class="flex flex-row gap-4">
                            <div class="profile-pic">
                                <Image className="w-[65px] h-[65px] object-cover rounded-full" src="/family-members.png" width="65" height="65" alt="family members" />
                            </div>
                            <div class="profile-content content-center">
                                <div class="spouse-title text-[17px] text-[#38404a] font-poppins font-semibold mb-2">Sara Merrill Smith</div>
                                <span class="spouse-date text-[15px] font-poppins font-normal text-[#38404a]">1780-1830</span>
                            </div>
                        </div>
                    </div>

                <div class=" mb-[30px] bg-[#f6faec] p-8 rounded-lg">
                    <h3 class="text-xl font-poppins font-semiblod text-[#38404a] mb-[25px]">Children</h3>
                    <div class="gap-y-[19px] grid grid-cols-1 sm:grid-cols-2   lg:grid-cols-3 lg:grid-rows-3">
                        <div class="flex flex-row gap-4">
                            <div>
                                <Image class="w-[65px] h-[65px] object-cover object-center rounded-full" width="65" height="65" src="" alt="" />
                            </div>
                            <div class="leading-7">
                                <div class="text-[17px] font-poppins font-semibold text-[#38404a]">Alec Johnston</div>
                                <span class="text-[15px] font-poppins font-normal text-[#38404a]">1780-1830</span>
                            </div>
                        </div>
                        <div class="flex flex-row gap-4">
                            <div>
                            <Image class="w-[65px] h-[65px] object-cover object-center rounded-full" width="65" height="65" src="/children-eight.png" alt="" />
                            </div>
                            <div class="leading-7">
                                <div class="text-[17px] font-poppins font-semibold text-[#38404a]">Jerusa Smith</div>
                                <span class="text-[15px] font-poppins font-normal text-[#38404a]">1782-1828</span>
                            </div>
                        </div>
                        <div class="flex flex-row gap-4">
                            <div>
                            <Image class="w-[65px] h-[65px] object-cover object-center rounded-full" width="65" height="65" src="/children.png" alt="" />
                            </div>
                            <div class="leading-7">
                            <div class="text-[17px] font-poppins font-semibold text-[#38404a]">Dustin Kimball Smith</div>
                            <span class="text-[15px] font-poppins font-normal text-[#38404a]">1799-1841</span>
                            </div>
                        </div>
                        <div class="flex flex-row gap-4">
                            <div>
                            <Image class="w-[65px] h-[65px] object-cover object-center rounded-full" width="65" height="65" src="/children-six.png" alt="" />
                            </div>
                            <div class="leading-7">
                            <div class="text-[17px] font-poppins font-semibold text-[#38404a]">Sara Smaith</div>
                            <span class="text-[15px] font-poppins font-normal text-[#38404a]">1680-1800</span>
                            </div>
                        </div>
                        <div class="flex flex-row gap-4">
                        <div>
                        <Image class="w-[65px] h-[65px] object-cover object-center rounded-full" width="65" height="65" src="/children-seven.png" alt="" />   
                        </div>
                        <div class="leading-7">
                        <div class="text-[17px] font-poppins font-semibold text-[#38404a]">Alec Johnston</div>
                        <span class="text-[15px] font-poppins font-normal text-[#38404a]">1780-1826</span>          
                        </div>
                        </div>
                        <div class="flex flex-row gap-4">
                            <div>
                            <Image class="w-[65px] h-[65px] object-cover object-center rounded-full" width="65" height="65" src="/children-four.png" alt="" /> 
                        </div>
                        <div class="leading-7">
                        <div class="text-[17px] font-poppins font-semibold text-[#38404a]">Alec Johnston</div>
                        <span class="text-[15px] font-poppins font-normal text-[#38404a]">1780-1830</span>          
                        </div>
                        </div>
                        <div class="flex flex-row gap-4">
                        <div>
                            <Image class="w-[65px] h-[65px] object-cover object-center rounded-full" width="65" height="65" src="/children.png" alt="" /> 
                        </div>
                        <div class="leading-7">
                        <div class="text-[17px] font-poppins font-semibold text-[#38404a]">Daniel Smith</div>
                        <span class="text-[15px] font-poppins font-normal text-[#38404a]">1780-1830</span>          
                        </div>
                        </div>
                        <div class="flex flex-row gap-4">
                        <div>
                            <Image class="w-[65px] h-[65px] object-cover object-center rounded-full" width="65" height="65" src="/children-five.png" alt="" /> 
                        </div>
                        <div class="leading-7">
                        <div class="text-[17px] font-poppins font-semibold text-[#38404a]">Benjamin Smith</div>
                        <span class="text-[15px] font-poppins font-normal text-[#38404a]">1779-1812</span>          
                        </div>
                        </div>
                        <div class="flex flex-row gap-4">
                        <div>
                            <Image class="w-[65px] h-[65px] object-cover object-center rounded-full" width="65" height="65" src="/children-eight.png" alt="" /> 
                        </div>
                        <div class="leading-7">
                        <div class="text-[17px] font-poppins font-semibold text-[#38404a]">Sarah Smith</div>
                        <span class="text-[15px] font-poppins font-normal text-[#38404a]">1779-1838</span>          
                        </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>

        <section>
            <div className="max-w-[1010px] mx-auto">

                <div class="mb-10 rounded-lg p-[39px] bg-white border border-[#9cc83b]">
                    <h2 class="text-[26px] font-poppins font-semibold text-black mb-[30px]">Flowers</h2>
                    <div class="md:grid-flow-col-dense grid grid-cols-1 lg:grid-cols-2 gap-7">
                        <div class="md:mb-3  lg:p-4 bg-[#f6faec] flex flex-row gap-[48px] rounded-lg">
                            <div class="f-img">
                                <Image class="rounded-lg object-cover w-[154px] h-[166px]" src="/flower-two.png" width="154" height="166"  alt="flower one" />
                            </div>
                            <div class="f-content pt-2">
                                <p class="text-[17px] font-poppins font-normal text-[#38404a]">5th Great Grandfather Thanks for posting</p>
                                <p class="text-[17px] font-poppins font-normal text-[#38404a]">Left by<span class="font-bold">Aaron Allen</span> on 15 Jan 2016</p>
                            </div>
                        </div>
                        <div class="p-4 bg-[#f6faec] flex flex-row gap-[48px] rounded-lg">
                        <div class="f-img">
                                <Image class="rounded-lg object-cover w-[154px] h-[166px]" src="/flower-one.png" width="154" height="166"  alt="flower two" />
                            </div>
                            <div class="f-content pt-2">
                                <p class="text-[17px] font-poppins font-normal text-[#38404a]">5th Great Grandfather Thanks for posting</p>
                                <p class="text-[17px] font-poppins font-normal text-[#38404a]">Left by<span class="font-bold">Aaron Allen</span> on 15 Jan 2016</p>
                            </div>
                        </div>
                    </div>
                    <div class="text-center mt-8">
                        <div class="button-send cursor-pointer"><a href="#" class=" py-[21px] px-9 items-center justify-center rounded-lg bg-[#9cc83b] text-lg font-bold font-poppins text-black uppercase decoration-transparent" >Leave a flower</a></div>
                    </div>
                </div>

            </div>
        </section>


        <section>
            <div className="max-w-[1010px] mx-auto">
                <div class="mb-10 rounded-lg p-[39px] bg-white border border-[#9cc83b]">
                    <h2 class="text-[26px] font-poppins font-semibold text-black mb-[30px]">Send Flowers</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7">
                        <div class="flex-wrap lg:p-4 bg-[#f6faec] flex flex-row gap-[48px] rounded-lg">
                            <div class="f-img">
                                <Image class="under-img lg:rounded-lg object-cover w-[154px] h-[166px]" src="/flower-one.png" width="154" height="166" alt="flower one" />
                            </div>
                            <div class="f-content pt-2">
                                <p class="text-[17px] font-poppins font-normal text-[#38404a]">5th Great Grandfathe Thanks for posting</p>

                            
                                <p class="text-[17px] font-poppins font-normal text-[#38404a]">Left by<span class="font-bold">Aaron Allen</span> o 15 Jan 2016</p>
                            </div>
                        </div>
                        <div class="flex-wrap lg:p-4 bg-[#f6faec] flex flex-row gap-[48px] rounded-lg">
                        <div class="f-img">
                                <Image class="under-img rounded-lg object-cover w-[154px] h-[166px]" src="/flower-two.png" width="154" height="166" alt="flower two" />
                            </div>
                            <div class="f-content pt-2">
                                <p class="text-[17px] font-poppins font-normal text-[#38404a]">5th Great Grandfathe Thanks for posting</p>
                                <p class="text-[17px] font-poppins font-normal text-[#38404a]">Left by<span class="font-bold">Aaron Allen</span> o 15 Jan 2016</p>
                            </div>
                        </div>
                    </div>
                    <div class="text-center mt-8">
                        <div class="button-send cursor-pointer"><a href="#" class=" py-[21px] px-9 items-center justify-center rounded-lg bg-[#9cc83b] text-lg font-bold font-poppins text-black uppercase decoration-transparent" >Send flowers</a></div>
                    </div>
                </div>
            </div>
        </section>


        
        </>
    )
}