import indeed from "/indeed.svg"
import shiksha from "/Shiksha.svg"
import internshala from "/Internshala.svg"
import Google from "/Grow-with-Google.svg"
import upgrad from "/upgrad.svg"
import unstop from "/Unstop.svg"

function Companies() {
    return (
        <div className="flex w-[80%] justify-between flex-wrap max-xl:gap-10">
            <div className="flex w-[40%] max-xl:w-full flex-col items-center">
                <h2 >Connected Companies</h2>
                <div className="flex
                flex-row flex-wrap justify-evenly gap-10">
                    <img className="max-w-[8.5rem]" src="https://flexiple.com/_next/static/media/Plivo.0cb93148.svg" alt="" srcset="" />
                    <img className="max-w-[8.5rem]" src="https://flexiple.com/_next/static/media/CertifyOS.9d5f5396.svg" alt="" />
                    <img className="max-w-[8.5rem]" src="https://flexiple.com/_next/static/media/ApnaKlub.b91c6a70.svg" alt="" />
                    <img className="max-w-[8.5rem]" src="https://flexiple.com/_next/static/media/CockroachLabs.d85402fe.svg" alt="" />
                    <img className="max-w-[8.5rem]" src="https://flexiple.com/_next/static/media/StarbourneLabs.40dc21c7.svg" alt="" />
                </div>
            </div>
            <div className="flex w-[40%] max-xl:w-full flex-col items-center">
                <h2>Courses From</h2>
                <div className="flex
                flex-row flex-wrap justify-evenly gap-10">
                    <img className="max-w-[8rem]" src={indeed} alt="" srcset="" />
                    <img className="max-w-[8rem]" src={shiksha} alt="" />
                    <img className="max-w-[8rem]" src={internshala} alt="" />
                    <img className="max-w-[8rem]" src={Google} alt="" />
                    <img className="max-w-[8rem]" src={upgrad} alt="" />
                    <img className="max-w-[8rem]" src={unstop} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Companies;