function ProfileInfo(){
    return(
        <section className='bg-[#1f2937] flex flex-col gap-5 p-5' >
                    <h3>Personal Information</h3>
                    <hr />
                    <div>
                        <h4>Profile Photo</h4>
                        <input type="file" name="profilePic" id="profilePic" className='hidden' />
                        <label htmlFor="profilePic" className='w-fit'>
                            <img className='rounded w-[7rem]' src="https://media.licdn.com/dms/image/v2/D5635AQFHTw9ZRWAl2Q/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1721458863973?e=1726747200&v=beta&t=XYr5eZ3bdTGL184PeEyk1Irt7YtKNOrRSNFyHCuVpKY" alt="" />
                        </label>
                        <br />
                        <h4>Intro Video</h4>
                        <input type="file" name="introVideo" id="introVideo" className='hidden' />
                        <label htmlFor="introVideo">
                            <div className='flex justify-center p-4 rounded bg-[#263835] border-2 border-[#3d4c4b]'>
                                <p>+ Click to add intro video</p>
                            </div>
                        </label>
                        <br />
                        <div className="flex justify-between">

                            <div className='w-[47%]'>
                                <h4>LinkedIn</h4>
                                <input className='font-[Arial] bg-transparent rounded px-5 py-1 w-full border border-[#888888]' type="text" placeholder='LinkedIn Profile URL' />
                            </div>
                            <div className='w-[47%]'>
                                <h4>StackOverFlow</h4>
                                <input className='font-[Arial] bg-transparent rounded px-5 py-1 w-full border border-[#888888]' type="text" placeholder='StackOverFlow Profile URL' />
                            </div>
                        </div>
                    </div>
                    <button
                        className='max-xl:hidden w-fit px-[1.5rem] py-[.25rem]  rounded-xl bg-[#7c35c7] hover:bg-[#4d217b] text-xl'

                    >
                        Save
                    </button>
                </section>
    );
}

export default ProfileInfo;