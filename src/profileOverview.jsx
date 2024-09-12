function ProfileOverview() {
    return (
        <form className='bg-[#1f2937] flex flex-col gap-5 p-5' >
            <h3>Profile overview</h3>
            <hr />
            <h4>Engineer Category</h4>
            <input required className='font-[Arial] bg-transparent rounded px-5 py-2 w-full border border-[#888888]' type="text" placeholder='Ex: Web Frontend' />
            <h4>Total Software years of experience</h4>
            <input required className='font-[Arial] bg-transparent rounded px-5 py-2 w-full border border-[#888888]' type="number" placeholder='In years' />
            <h4>Total Software years of experience</h4>
            <textarea required className='font-[Arial] bg-transparent rounded px-5 py-2 w-full border border-[#888888]' type="number" placeholder='Your introduction' />
            <button
                className='max-xl:hidden w-fit px-[1.5rem] py-[.25rem]  rounded-xl bg-[#7c35c7] hover:bg-[#4d217b] text-xl'>
                Save
            </button>
        </form>
    );
}
export default ProfileOverview;