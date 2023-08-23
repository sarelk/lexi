import Image from 'next/image';
import coins from "../assets/layout/coins.svg"

const Progress = (props) => {
    const pageBack = () => {
        props.setPage(props.page - 1);
        props.setX(1000);
    }
    return (
        <div className={`step-title ${props.onlyBack ? "back-arrow" : ""}`}>
            {!props.onlyBack && (
                <div className="progress-bar">
                    {
                        <div
                            style={{ width: props.width }}
                        ></div>
                    }
                </div>
            )}
            <span className='flex center-f gap10 space-between'>
                <Image src={coins} alt="coins" />
                {!props.hidden && (
                    <svg onClick={pageBack} width="33" height="28" viewBox="0 0 33 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31 15.75C31.9665 15.75 32.75 14.9665 32.75 14C32.75 13.0335 31.9665 12.25 31 12.25V15.75ZM0.762562 12.7626C0.0791435 13.446 0.0791435 14.554 0.762562 15.2374L11.8995 26.3744C12.5829 27.0578 13.6909 27.0578 14.3744 26.3744C15.0578 25.691 15.0578 24.5829 14.3744 23.8995L4.47487 14L14.3744 4.1005C15.0578 3.41709 15.0578 2.30905 14.3744 1.62563C13.6909 0.942214 12.5829 0.942214 11.8995 1.62563L0.762562 12.7626ZM31 12.25L2 12.25V15.75L31 15.75V12.25Z" fill="url(#paint0_linear_3056_12076)" />
                        <defs>
                            <linearGradient id="paint0_linear_3056_12076" x1="40.5" y1="2" x2="21.6552" y2="-5.77254" gradientUnits="userSpaceOnUse">
                                <stop offset="0.353289" stop-color="#6FC5C3" />
                                <stop offset="0.946549" stop-color="#CA94DF" />
                            </linearGradient>
                        </defs>
                    </svg>

                )}
                {/* {props.title} */}
            </span>
        </div>
    )
}

export default Progress;