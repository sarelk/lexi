const Progress = (props) => {
    const pageBack = () => {
        props.setPage(props.page - 1);
        props.setX(1000);
    }
    return (
        <div className={`step-title ${props.onlyBack ? "back-arrow" : ""}`}>
            <span className='flex center-f gap10 space-between padding-right-10'>
                {!props.hidden && (
                    <svg onClick={pageBack} width="55" height="32" viewBox="0 0 55 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M39 17.25C39.6904 17.25 40.25 16.6904 40.25 16C40.25 15.3096 39.6904 14.75 39 14.75V17.25ZM15.1161 15.1161C14.628 15.6043 14.628 16.3957 15.1161 16.8839L23.0711 24.8388C23.5592 25.327 24.3507 25.327 24.8388 24.8388C25.327 24.3507 25.327 23.5592 24.8388 23.0711L17.7678 16L24.8388 8.92893C25.327 8.44078 25.327 7.64932 24.8388 7.16117C24.3507 6.67301 23.5592 6.67301 23.0711 7.16117L15.1161 15.1161ZM39 14.75L16 14.75V17.25L39 17.25V14.75Z" fill="#10A19D" />
                    </svg>

                )}
                {props.title}
            </span>
            {!props.onlyBack && (
                <div className="progress-bar">
                    {
                        <div
                            style={{ width: props.width }}
                        ></div>
                    }
                </div>
            )}
        </div>
    )
}

export default Progress;