import './popup2.css'

function Popup2(props) {
    return (props.trigger) ? (
        <div>
            <div className="popup2">
                <div className="popup-inner2">
                    <div className='header2'>
                        <h1>Newshak</h1>
                        <h2>Your project delivery platform</h2>
                        <br></br>
                        <br></br>
                        <hr></hr>
                        <br></br>
                    </div>
                    { props.children }
                </div>
            </div>
            <div className='btn2'><button  className="close-btn2" onClick={() => props.setTrigger(false)}>Close</button></div>
        </div>
    ) : "";
}

export default Popup2;