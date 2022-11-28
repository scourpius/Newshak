import './popup.css'

function Popup(props) {
    return (props.trigger) ? (
        <div>
            <div className="popup">
                <div className="popup-inner">
                    <div className='header'>
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
            <div className='btn'><button  className="close-btn" onClick={() => props.setTrigger(false)}>Close</button></div>
        </div>
    ) : "";
}

export default Popup;