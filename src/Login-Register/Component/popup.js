import './popup.css'

function Popup(props) {
    return (props.trigger) ? (
        <div>
            <div className="popup">
                <div className="popup-inner">
                    <div className='header'>
                        <h1 className='header1'>Newshak</h1>
                        <h2 className='header2'>Your project delivery platform</h2>
                        <br></br>
                        <br></br>
                        <hr></hr>
                        <br></br>
                    </div>
                    <div >
                    { props.children }
                    </div>
                </div>
                <div className='btnPOP'><button  className="close-btnPOP" onClick={() => props.setTrigger(false)}>Close</button></div>
            </div>
        </div>
    ) : "";
}

export default Popup;