import testimonialback from '/testimonialback.svg';
function Features() {
    return (
    <div className='w-[90%] -z-10'>
        <div className="-mt-[6rem] -mb-[10rem] max-xl:-mt-[rem] flex flex-col scale-110  justify-center items-center h-screen bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${testimonialback})` }}>

            <h1 className='max-xl:w-[90%] text-center mb-[5rem] text-5xl max-xl:text-3xl max-xl:mb-[2rem]'>Tech hiring made easy</h1>

            <div className='items-center flex w-full flex-row justify-center gap-[10rem] max-xl:flex-col max-xl:items-center max-xl:gap-10'>
                <img className='w-[30%] max-xl:w-[90%]' src="https://flexiple.com/_next/static/media/1.c0338260.webp" alt="" />
                <div className='flex flex-col w-[30%] max-xl:w-[90%] max-xl:gap-5'>

                    <p className='font-bold max-xl:text-sm'>Quality talent</p>
                    <h2 className=' max-xl:text-xl'>Access pre-vetted quality engineers</h2>
                    <p className=' max-xl:text-sm'>Stop evaluating 100s of candidates and directly get access to Flexiple’s talent who are carefully vetted through an extensive screening process.</p>
                </div>
            </div>
        </div>
{/* **************************************************************** */}
        <div className=" flex flex-col scale-110  justify-center items-center h-screen">

            <div className='items-center flex w-full flex-row justify-center gap-[10rem] max-xl:flex-col max-xl:items-center max-xl:gap-10'>
                <div className='flex flex-col w-[30%] max-xl:w-[90%] max-xl:gap-5'>
                    <p className='font-bold max-xl:text-sm'>Save time</p>
                    <h2 className=' max-xl:text-xl'>Talk to engineers tailored to your requirements</h2>
                    <p className=' max-xl:text-sm'>Focus on building your product while we handpick engineers who match the exact talent persona you’re looking for & ensure each conversation is worth your time.</p>
                </div>
                <img className='w-[30%] max-xl:w-[90%]' src="https://flexiple.com/_next/static/media/2.b1d2dea1.webp" alt="" />
            </div>
        </div>
    </div>

    )
}

export default Features;