import signup_logo from '/signup.svg'
function SignUp({ isOpen, onClose }) {
    if (!isOpen) return null;
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here
      onClose(); // Close the popup after submission
    };
    return (
        <section className='flex flex-row justify-center items-center bg-[aliceblue] mx-auto w-fit rounded-2xl fixed z-10 top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]'>
            <img src={signup_logo} alt="" />
            <section className='px-10 gap-10 flex flex-col'>
                <div>
                    <h1 className='text-[1.5rem] text-[#3D52A0]'>Create a new account</h1>
                    <a className='cursor-pointer text-[1.25rem] font-Stylus font-bold text-[#3D52A0]'>Already have an account?</a>
                </div>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <button className=' font-Arial font-bold text-xl flex justify-between text-black border-slate-300 border-2 rounded-xl w-[100%] items-center px-10 py-3' > <img className='w-[1.7rem] ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png" alt="" />Continue with google</button>

                    <button className='font-Arial font-bold text-xl flex justify-between text-black border-slate-300 border-2 rounded-xl w-[100%] items-center px-10 py-3' > <img className='w-[1.7rem] ' src="https://www.svgrepo.com/show/14478/email.svg" alt="" />Continue with Mail</button>
                    <p className='text-black text-2xl font-bold'>Or</p>
                    <div className='flex flex-row'>
                        <button className=' font-Arial font-bold text-xl flex justify-between text-black border-slate-300 border-2 rounded-xl w-[100%] items-center px-10 py-3' > <img className='w-[1.7rem] ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjvzC_QRv6moAhgNb5C6e3yicKgFND1g2RwA&s" alt="" />Facebook</button>

                        <button className='font-Arial font-bold text-xl flex justify-between text-black border-slate-300 border-2 rounded-xl w-[100%] items-center px-10 py-3' > <img className='w-[1.7rem] ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvpQr7jRfGRZXz54j5HdGf6MDP8w5l53a3UQ&s" alt="" />Apple</button>
                    </div>
                </div>
                    <p className='font-Arial text-[0.8rem] text-black'>By joining, you agree to the Fiverr Terms of Service and to occasionally receive <br /> emails from us.<br />
                        Please read our Privacy Policy to learn how we use your personal data.</p>
            </section>
            <button><img className='w-8 absolute top-5 right-5' onClick={onClose} src="https://cdn-icons-png.flaticon.com/512/106/106830.png" alt="" /></button>


        </section>
    )
}
export default SignUp;