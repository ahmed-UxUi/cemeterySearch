import Head from "next/head";
import { Input } from "postcss";
import Image from "next/image"; 
import react from "react";




export default function City () {
    return (
        <>
        <section class="pt-[63px] pb-[75px] " 
        style={{
            background: "linear-gradient(rgb(6, 21, 36,0.5),rgb(6, 21, 36,0.5)), url('hero-bg.jpg')", 
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }}
        >
                <div className="max-w-[1140px] mx-auto px-4 md:px-10 xl:px-0">
                    <div className="flex flex-col lg:flex-row ">
                        <div className="max-w-[360px] w-full mx-auto lg:mx-0 flex items-center ">
                            <Image  className="rounded-md  mt-1" src="/Layer-41.jpg" width="350"
                                height="400" alt="cyber fraud" />
                        </div>
                        <div className="flex flex-col  max-w-[800px]  w-full md:pl-10 text-center md:text-start mt-5 md:mt-0">
                            <h1 className="text-white text-[25px] md:text-[38px] font-bold font-poppins">Congregational Church <span
                                    className="text-yellowGreen">Cemetery</span></h1>
                            <p className="text-white font-poppins font-normal text-[16px] md:text-[20px]">Also known as Old
                                Churchyard Cemetery</p>
                            <div className="flex flex-row bg-black/[0.5]	rounded	 border border-gray-400 p-1 mt-1 items-center ">
                                <Image  className="mx-2 " src="/location-1.png" height="17" width="14" alt="cyber fraud" />
                                <p className="text-white font-poppins font-normal opacity-100 pl-2">Hollis, Hillsborough County, New
                                    Hampshire, USA</p>
                            </div>
                            <div className="">
                                {/* <form action="" className="bg-black/[0.6] p-4 rounded my-3">
                                    <div
                                        className="grid grid-cols-1 sm:grid-rows-3 lg:grid-rows-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 py-2 text-left">
                                        <div class="">
                                            <label className="block text-white text-base font-poppins font-normal mb-[5px]"
                                                for="first name">First Name:</label>
                                            <Input type="text" id="first-name" name="cemetery" placeholder="Robert"
                                                className="focus:outline-none focus:ring focus:ring-yellowGreen w-full text-sm px-4 py-[13px] font-poppins rounded-md block placeholder-spaniInput" />
                                        </div>
        
                                        <div className="">
                                            <label className="block text-white text-base font-poppins font-normal mb-[5px]"
                                                for="first name">Middle Name:</label>
                                            <Input type="text" id="middle-name" name="cemetery" placeholder="Maria"
                                                className="focus:outline-none focus:ring focus:ring-yellowGreen w-full text-sm px-4 py-[13px] font-poppins rounded-md block placeholder-spanish" />
                                        </div>
                                        <div className="">
                                            <label className="block text-white text-base font-poppins font-normal mb-[5px]"
                                                for="first name">Last Name:</label>
                                            <Input type="text" id="last-name" name="cemetery" placeholder="Smith"
                                                class="focus:outline-none focus:ring focus:ring-yellowGreen w-full text-sm px-4 py-[13px] font-poppins rounded-md block placeholder-spanish" />
                                        </div>
                                        <div class="">
                                            <label className="block text-white text-base font-poppins font-normal mb-[5px]"
                                                for="first name">Year Born:</label>
                                            <Input type="text" id="year-born" name="cemetery" placeholder="Exact"
                                                className="focus:outline-none focus:ring focus:ring-yellowGreen w-full text-sm px-4 py-[13px] font-poppins rounded-md block placeholder-black" />
                                        </div>
                                        <div className="">
                                            <label className="block text-white text-base font-poppins font-normal mb-[5px]"
                                                for="first name">Year Died:</label>
                                            <Input type="text" id="year-died" name="cemetery" placeholder="Exact"
                                                className="focus:outline-none focus:ring focus:ring-yellowGreen w-full text-sm px-4 py-[13px] font-poppins rounded-md block placeholder-black" />
                                        </div>
                                        <div className="">
                                            <label className="block text-white text-base font-poppins font-normal mb-[5px]"
                                                for="first name">Cemetery Location:</label>
                                            <Input type="text" id="cemetery location" name="cemetery" placeholder="Smith"
                                                className="focus:outline-none focus:ring focus:ring-yellowGreen w-full text-sm px-4 py-[13px] font-poppins rounded-md block placeholder-spanish" />
                                        </div>
                                    </div>
                                </form> */}
                            </div>
                            <div className="flex flex-col md:flex-row items-center ">
                                <button type="submit"
                                    className="text-black font-poppins text-xl font-bold uppercase bg-[#9cc83b] w-[180px] h-[60px] inline-flex items-center justify-center rounded-md">
                                    Search
                                </button>
                                <div className="ms-option text-left  md:ml-[59px]">
        
                                    <select id="countries" className="bg-transparent font-poppins text-base">
                                        <option selected className="text-white">More Search Option</option>
                                        <option value="US">United States</option>
                                        <option value="CA">Canada</option>
                                        <option value="FR">France</option>
                                        <option value="DE">Germany</option>
                                    </select>
        
                                </div>
        
                                <div className="s-tips md:ml-[29px] ">
                                    <select id="countries" className="bg-transparent font-poppins text-base">
                                        <option selected class="text-white">Search Tips</option>
                                        <option value="US">United States</option>
                                        <option value="CA">Canada</option>
                                        <option value="FR">France</option>
                                        <option value="DE">Germany</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
        
                </div>
            </section>

            {/* <!-- Map section --> */}

<section className="my-20 mx-6">
<div className="max-w-[1010px] mx-auto border rounded-lg border-[#9cc83b] p-10">
    <div className="flex flex-col md:flex-row gap-7">
        <div
            className="direction bg-[#f6faec] rounded-lg px-6 py-10  md:w-[350px] flex flex-col items-center md:items-start">
            <a href="#"
                className="px-7 py-3  font-poppins font-semibold rounded-md bg-[#9cc83b] text-black ml-7">GET
                DIRECTIONS</a>
            <div className="flex mt-5 gap-4">
                <Image src="/location-1.png" className="mt-1 h-[23px]" width="19" height="23" alt="cemetery" />
                <p className="w-[250px] text-left text-[18px] font-poppins">3 Monument Square the common Hollis,
                    New Hampshire, 03049 USA</p>
            </div>
            <div className="flex mt-4 gap-4">
                <Image src="/send-icon.png" className="mt-1 h-[21px]" width="21" height="23" alt="cemetery" />
                <p className="w-[250px] text-left text-[18px] font-poppins ">Coordinates: 42.74034, -71.58885
                </p>
            </div>
        </div>
        <div className="md:w-[650]  flex-grow">
            <Image src="/map.png" className="w-full" alt="" width="560" height="365" />
        </div>
    </div>
</div>



{/* <!-- <------------About------------>  */}


        <div class="max-w-[1010px] mx-auto border rounded-lg border-[#9cc83b] mt-[60px]">
            <div class="about p-6">
                <h3 class="text-[26px] font-poppins font-semibold text-yellowGreen">About</h3>
                <p class="font-normal text-[#38404a]">The cemetery is located behind the Congregational Church which was
                    established on the 20th of April 1743. It is very well kept and the stones are in remarkable
                    condition.</p>
            </div>
        </div>


        {/* <!-- <----------------Memorials-------------> --> */}
        <div className="max-w-[1010px] mx-auto  mt-[60px] ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="flex flex-col item-center bg-[#F6FAEC] py-5 items-center rounded-md ">
                    <div className="bg-[#9cc83b] rounded-full px-3 py-4 flex items-center w-[76px] h-[76px]">
                        <Image src="/Cemetery-Search-Profile-Page_03.png" width="30" height="32" className="mx-auto" alt="" />
                    </div>
                    <a href="">
                        <h3 className="text-[18px] font-semibold font-poppins text-center pt-4 leading-7 m-0">View 
                            Memorials</h3>
                    </a>
                    <p className="font-bold mt-5">333</p>
                </div>

                <div className="flex flex-col item-center bg-[#F6FAEC] py-5 items-center rounded-md ">
                    <div className="bg-[#9cc83b] rounded-full  flex items-center w-[76px] h-[76px]">
                        <Image src="/card-2_03.png" width="30" height="32" className="mx-auto" alt="" />
                    </div>
                    <a href="">
                        <h3 className="text-[18px] font-semibold font-poppins text-center pt-4 leading-7 m-0 max-w-[85px]">Recent
                            Memorials</h3>
                    </a>
                </div>
                <div className="flex flex-col item-center bg-[#F6FAEC] py-5 items-center rounded-md ">
                    <div className="bg-[#9cc83b] rounded-full  flex items-center w-[76px] h-[76px]">
                        <Image src="/card-3_05.png" width="30" height="32" className="mx-auto max-w-[85px]" alt="" />
                    </div>
                    <a href="">
                        <h3 className="text-[18px] font-semibold font-poppins text-center pt-4 leading-7 m-0 max-w-[85px]">Add a
                            memorial</h3>
                    </a>
                </div>
                <div className="flex flex-col item-center bg-[#F6FAEC] py-5 items-center rounded-md ">
                    <div className=" rounded-full  flex items-center w-[76px] h-[76px]">
                        <Image src="/card-4_03.png" width="53" height="52" className="mx-auto w-[52px] h-[50px]" alt="" />
                    </div>
                    <a href="">
                        <h3 className="text-[18px] font-semibold font-poppins text-center pt-4 leading-7 m-0 max-w-[85px]">Upload 
                            Headstone  Photos</h3>
                    </a>
                </div>
            </div>
        </div>
    
        {/* <!-- Circular Progress bar --> */}
        <div className="max-w-[1010px] mx-auto border rounded-lg border-[#9cc83b] mt-[60px] p-10">
            <h3
                className="poppins text-20px md:text-[26px] text-[#9cc83b] font-semibold leading-9 text-center md:text-left max-w-[648px]">
                Number of Memorials, % of Photograpped Memorials,
                Number of Memorials with GPS Coordinates</h3>
            <div className="flex mt-20 flex-col md:flex-row">
                <div className="w-full md:w-1/2  flex items-center justify-center">
                    <div className=" w-[155px] h-[148px] bg-[#eff5fa] rounded-full flex items-center">
                        <Image src="/circular-img_03.png" className="w-[90px] h-[85px] mx-auto" width="92" height="88" alt="" />
                    </div>
                </div>
                <div class="w-ful md:w-1/2 flex flex-col justify-center md:justify-start md:items-left mt-10 md:mt-0">
                    <div className="flex  items-baseline space-x-5 justify-center ">
                        <div className="h-[48px] w-[48px] bg-[#6d7a87] rounded-full flex items-center"><Image
                                src="/memorials-1_03.png " className="w-[17px] h-[19px] mx-auto" width="17" height="19" alt="" /></div>
                        <div className="flex-grow">
                            <p className="text-[20px] sm:text-[26px] text-[#6d7a87] font-medium">959 Memorials</p>
                        </div>
                    </div>
                    <div className="flex items-baseline space-x-5 mt-3 flex-grow">
                        <div className="h-[48px] w-[48px] bg-[#9cc83b] rounded-full flex items-center"><Image
                                src="/Cemetery-Search-Profile-Page_03.png"
                                className="w-[17px] h-[19px] mx-auto" width="17" height="19" alt="" /></div>
                        <div className="flex-grow">
                            <p className="text-[20px] sm:text-[26px] text-[#9cc83b] font-medium">34% with gps</p>
                        </div>
                    </div>
                    <div className="flex items-baseline space-x-5 mt-3 flex-grow">
                        <div className="h-[48px] w-[48px] bg-[#00407f] rounded-full flex items-center"><Image
                                src="/memorials-3_03.png" class="w-[17px] h-[19px] mx-auto" width="17" height="19" alt="" /></div>
                        <div className="flex-grow">
                            <p className="text-[20px] sm:text-[26px] text-[#00407f] font-medium">959 Memorials</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        {/* <!-- Image Gallery --> */}

<div className="max-w-[1010px] mx-auto border rounded-lg border-[#9cc83b] mt-[60px] p-10">
    <div className="flex justify-between">
        <h3 className="font-poppins font-bold text-[29.97px] ">Photos</h3>
        <button type="submit"
            className="text-black font-poppins text-[18px] font-bold uppercase bg-[#9cc83b] w-[195px] h-[55px] inline-flex items-center justify-center rounded-md"><span><Image
                    src="/add-photo.png"
                    className="h-[19px] w-[32] pr-3" width="32" height="20" alt="" /></span> ADD PHOTO
        </button>
    </div>
    <div className="columns-3 gap-3 max-w-[930px] mx-auto mt-10 ">
        <Image src="/Cemetery-Search-Profile-Page.png" class="rounded-md" width="300" height="410" alt="" />
        <Image src="/gallery-img-2.png" className="rounded-md" width="300" height="200" alt="" />
        <Image src="/gallery-img-3.png" className="rounded-md mt-2" width="300" height="200" alt="" />
        <Image src="/gallery-img-4.png" className="rounded-md"  width="300" height="410" alt="" />

    </div>
</div>

<div className="max-w-[1010px] mx-auto border rounded-lg border-[#9cc83b] mt-[60px] p-10">
            <h3 className="font-poppins font-semibold text-[26px] text-yellowGreen">Nearby Cemeteries</h3>
            <div className="bg-[#F6FAEC] rounded-md p-4 mt-4">
                <div className="flex flex-col sm:flex-row border-b border-[#dde1d4] pb-6">
                    <div>
                        <Image src="/nearest-1.png" className="w-full sm:w-[117px] sm:h-[117px] rounded" width="117" height="117" alt="" />
                    </div>
                    <div className="grow sm:pl-10 pt-5 sm:pt-0">
                        <div className="flex flex-col">
                            <div className="flex justify-between pr-3">
                                <h4
                                    className="text-[16px] sm:text-[20px] font-poppins font-semibold text-[#9cc83b] underline underline-offset-8">
                                    South Cemetery</h4>
                                <p className="text-[12px] sm:text-[16px]">1.1 Km</p>
                            </div>

                            <p className="font-poppins font-normal text-[38404a] pt-2 sm:pt-4 text-[12px] sm:text-[16px]">
                                Hollis, Hillsborough County, New Hampshire, USA</p>
                            <div className="flex flex-row mt-6">
                                <div className="flex items-center">
                                    <Image src="/semon1.png" class="w-[15px] h-[16px]" width="15" height="16" alt="" />
                                    <p className="font-poppins font-normal text-[#38404a] px-2 text-[12px] sm:text-[16px]">
                                        648</p>
                                </div>
                                <div className="flex items-center px-3">
                                    <Image src="/semon2.png" className="w-[18px] h-[15px]" width="18" height="15" alt="" />
                                    <p className="font-poppins font-normal text-[#38404a] px-2 text-[12px] sm:text-[16px]">
                                        82%</p>
                                </div>
                                <div class="flex items-center">
                                    <Image src="/semon3.png" class="w-[13px] h-[17px]" width="13" height="17" alt="" />
                                    <p className="font-poppins font-normal text-[#38404a] px-2 text-[12px] sm:text-[16px]">
                                        4%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row underline-offset-8 pt-7 border-b border-[#dde1d4] pb-6 ">
                    <div>
                        <Image src="/nearest-2.png" className="w-full sm:w-[117px] sm:h-[117px] rounded" width="117" height="117" alt="" />
                    </div>
                    <div className="grow sm:pl-10 pt-5 sm:pt-0">
                        <div className="flex flex-col">
                            <div className="flex justify-between pr-3">
                                <h4
                                    className="text-[16px] sm:text-[20px] font-poppins font-semibold text-[#9cc83b] underline underline-offset-8">
                                    East Cemetery</h4>
                                <p className="text-[12px] sm:text-[16px]">1.1 Km</p>
                            </div>

                            <p className="font-poppins font-normal text-[38404a] pt-2 sm:pt-4 text-[12px] sm:text-[16px]">
                                Hollis, Hillsborough County, New Hampshire, USA</p>
                            <div className="flex flex-row mt-6">
                                <div className="flex items-center">
                                    <Image src="/semon1.png" className="" width="15" height="16" alt="" />
                                    <p className="font-poppins font-normal text-[#38404a] px-2 text-[12px] sm:text-[16px]">
                                        648</p>
                                </div>
                                <div className="flex items-center px-3">
                                    <Image src="/semon2.png" className="" width="18" height="15" alt="" />
                                    <p className="font-poppins font-normal text-[#38404a] px-2 text-[12px] sm:text-[16px]">
                                        82%</p>
                                </div>
                                <div className="flex items-center">
                                    <Image src="/semon3.png" className="w-[13px] h-[17px]" width="13" height="17" alt="" />
                                    <p className="font-poppins font-normal text-[#38404a] px-2 text-[12px] sm:text-[16px]">
                                        4%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row underline-offset-8 pt-7 border-b border-[#dde1d4] pb-6 ">
                    <div>
                        <Image src="/nearest-3.png" className="w-full sm:w-[117px] sm:h-[117px] rounded" width="117" height="117" alt="" />
                    </div>
                    <div className="grow sm:pl-10 pt-5 sm:pt-0">
                        <div className="flex flex-col">
                            <div className="flex justify-between pr-3">
                                <h4
                                    className="text-[16px] sm:text-[20px] font-poppins font-semibold text-[#9cc83b] underline underline-offset-8">
                                    North Cemetery</h4>
                                <p className="text-[12px] sm:text-[16px]">4.2 Km</p>
                            </div>

                            <p className="font-poppins font-normal text-[38404a] pt-2 sm:pt-4 text-[12px] sm:text-[16px]">
                                Hollis, Hillsborough County, New Hampshire, USA</p>
                            <div className="flex flex-row mt-6">
                                <div className="flex items-center">
                                    <Image src="/semon1.png" className="" width="15" height="16" alt="" />
                                    <p className="font-poppins font-normal text-[#38404a] px-2 text-[12px] sm:text-[16px]">
                                        648</p>
                                </div>
                                <div class="flex items-center px-3">
                                    <Image src="/semon2.png" className="" width="18" height="15" alt="" />
                                    <p className="font-poppins font-normal text-[#38404a] px-2 text-[12px] sm:text-[16px]">
                                        82%</p>
                                </div>
                                <div className="flex items-center">
                                    <Image src="/semon3.png" className="w-[13px] h-[17px]" width="13" height="17" alt="" />
                                    <p className="font-poppins font-normal text-[#38404a] px-2 text-[12px] sm:text-[16px]">
                                        4%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row underline-offset-8 pt-7  ">
                    <div>
                        <Image src="/nearest-4.png" className="w-full sm:w-[117px] sm:h-[117px] rounded" width="117" height="117" alt="" />
                    </div>
                    <div class="grow sm:pl-10 pt-5 sm:pt-0 ">
                        <div className="flex flex-col">
                            <div className="flex justify-between pr-3">
                                <h4
                                    className="text-[16px] sm:text-[20px] font-poppins font-semibold text-[#9cc83b] underline underline-offset-8">
                                    Lawrence Cemetery</h4>
                                <p className="text-[12px] sm:text-[16px]">5.6 Km</p>
                            </div>

                            <p className="font-poppins font-normal text-[38404a] pt-2 sm:pt-4 text-[12px] sm:text-[16px]">
                                Hollis, Hillsborough County, New Hampshire, USA</p>
                            <div className="flex flex-row mt-6">
                                <div className="flex items-center">
                                    <Image src="/semon1.png" className="" width="15" height="16" alt="" />
                                    <p className="font-poppins font-normal text-[#38404a] px-2 text-[12px] sm:text-[16px]">
                                        648</p>
                                </div>
                                <div className="flex items-center px-3">
                                    <Image src="/semon2.png" className="" width="18" height="15" alt="" />
                                    <p className="font-poppins font-normal text-[#38404a] px-2 text-[12px] sm:text-[16px]">
                                        82%</p>
                                </div>
                                <div class="flex items-center">
                                    <Image src="/semon3.png"  width="13" height="17" className="w-[13px] h-[17px]" alt="" />
                                    <p className="font-poppins font-normal text-[#38404a] px-2 text-[12px] sm:text-[16px]">
                                        4%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        {/* <!-- Reviews --> */}

        <div className="max-w-[1010px] mx-auto border rounded-lg border-[#9cc83b] mt-[60px] p-10">
            <div className="flex justify-between">
                <h3 className="font-poppins font-bold text-[29.97px] ">Reviews</h3>
                <button type="submit"
                    className="text-black font-poppins text-xl font-bold uppercase bg-[#9cc83b] w-[141px] h-[px] inline-flex items-center justify-center rounded-md">NEWEST
                    <span className="pl-2"><Image src="/toogle.png" width="12" height="18" alt="" /></span>
                </button>
            </div>
            <div className="bg-[#F6FAEC] rounded-lg p-5 md:p-10 mt-10 ">
                <div className="h-[335px] overflow-hidden overflow-y-scroll">
                    <div className="reviews border-b border-[#dde1d4] pb-6">
                        <div className="flex flex-col">
                            <h6 className="font-medium font-poppins text-[20px] font">by a robat</h6>
                            <div className="flex pt-3">
                                <div className="flex">
                                <span><Image src="/stars_03.png" width="27" height="17" class="pr-2" alt="" /></span>
                                    <span><Image src="/stars_03.png" width="27" height="17" class="pr-2" alt="" /></span>
                                    <span><Image src="/stars_03.png" width="27" height="17"  class="pr-2" alt="" /></span>
                                    <span><Image src="/stars_03.png" width="27" height="17" class="pr-2" alt="" /></span>
                                    <span><Image src="/stars_03.png" width="20" height="17" alt="" /></span>
                                </div>
                                <div className="px-3 flex-grow">
                                    <p className="text-[12px] md:text-[16px]">(March 26, 2012)</p>
                                </div>
                            </div>
                            <p className="pr-5 text-[12px] md:text-[16px]">“Aliquam id placerat nisl. Sed nisl elit,
                                ultrices et ex id, porttitor pulvinar sapien. Aliquam sit amet ornare felis, eleifend
                                bibendum velit. Cras cursus convallis lectus lobortis lacinia. Nullam quis ultrices
                                nibh, a tincidunt quam”.</p>
                        </div>
                    </div>
                    <div className="reviews border-b border-[#dde1d4] pb-6 pt-5">
                        <div className="flex flex-col">
                            <h6 className="font-medium font-poppins text-[20px] font">by a robat</h6>
                            <div className="flex pt-3">
                                <div className="flex">
                                <span><Image src="/stars_03.png" width="27" height="17" class="pr-2" alt="" /></span>
                                    <span><Image src="/stars_03.png" width="27" height="17" class="pr-2" alt="" /></span>
                                    <span><Image src="/stars_03.png" width="27" height="17"  class="pr-2" alt="" /></span>
                                    <span><Image src="/stars_03.png" width="27" height="17" class="pr-2" alt="" /></span>
                                    <span><Image src="/stars_03.png" width="20" height="17" alt="" /></span>
                                </div>
                                <div className="px-3 flex-grow">
                                    <p className="text-[12px] md:text-[16px]">(March 26, 2012)</p>
                                </div>
                            </div>
                            <p className="pr-5 text-[12px] md:text-[16px]">“Aliquam id placerat nisl. Sed nisl elit,
                                ultrices et ex id, porttitor pulvinar sapien. Aliquam sit amet ornare felis, eleifend
                                bibendum velit. Cras cursus convallis lectus lobortis lacinia. Nullam quis ultrices
                                nibh, a tincidunt quam”.</p>
                        </div>
                    </div>
                    <div className="reviews border-b border-[#dde1d4] pb-6 pt-5">
                        <div className="flex flex-col">
                            <h6 className="font-medium font-poppins text-[20px] font">by a robat</h6>
                            <div className="flex pt-3">
                                <div className="flex">
                                <span><Image src="/stars_03.png" width="27" height="17" class="pr-2" alt="" /></span>
                                    <span><Image src="/stars_03.png" width="27" height="17" class="pr-2" alt="" /></span>
                                    <span><Image src="/stars_03.png" width="27" height="17"  class="pr-2" alt="" /></span>
                                    <span><Image src="/stars_03.png" width="27" height="17" class="pr-2" alt="" /></span>
                                    <span><Image src="/stars_03.png" width="20" height="17" alt="" /></span>
                                </div>
                                <div class="px-3 flex-grow">
                                    <p class="text-[12px] md:text-[16px]">(March 26, 2012)</p>
                                </div>
                            </div>
                            <p className="pr-5 text-[12px] md:text-[16px]">“Aliquam id placerat nisl. Sed nisl elit,
                                ultrices et ex id, porttitor pulvinar sapien. Aliquam sit amet ornare felis, eleifend
                                bibendum velit. Cras cursus convallis lectus lobortis lacinia. Nullam quis ultrices
                                nibh, a tincidunt quam”.</p>
                        </div>
                    </div>
                    <div className="reviews border-b border-[#dde1d4] pb-6 pt-5">
                        <div className="flex flex-col">
                            <h6 className="font-medium font-poppins text-[20px] font">by a robat</h6>
                            <div className="flex pt-3">
                                <div className="flex">
                                <span><Image src="/stars_03.png" width="27" height="17" class="pr-2" alt="" /></span>
                                    <span><Image src="/stars_03.png" width="27" height="17" class="pr-2" alt="" /></span>
                                    <span><Image src="/stars_03.png" width="27" height="17"  class="pr-2" alt="" /></span>
                                    <span><Image src="/stars_03.png" width="27" height="17" class="pr-2" alt="" /></span>
                                    <span><Image src="/stars_03.png" width="20" height="17" alt="" /></span>
                                </div>
                                <div className="px-3 flex-grow">
                                    <p className="text-[12px] md:text-[16px]">(March 26, 2012)</p>
                                </div>
                            </div>
                            <p className="pr-5 text-[12px] md:text-[16px]">“Aliquam id placerat nisl. Sed nisl elit,
                                ultrices et ex id, porttitor pulvinar sapien. Aliquam sit amet ornare felis, eleifend
                                bibendum velit. Cras cursus convallis lectus lobortis lacinia. Nullam quis ultrices
                                nibh, a tincidunt quam”.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-7">
                <button type="submit"
                    className="text-black font-poppins text-[18PX] font-bold uppercase bg-[#9cc83b] w-[180px] h-[60px] inline-flex items-center justify-center rounded-md">
                    WRITE YOUR VIEW
                </button>
            </div>
        </div>
    </section>

    <footer className="p-10 flex items-center bg-[#38404a] justify-center mt-5">
        <p className="text-white text-center">© 2022 Cemetery Search. All Rights Reserved.</p>
    </footer>



        
          </>
        
    )
}