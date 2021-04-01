import './toggleswitch.css';

const ToggleBtn = () => {
    return(
    <label className="switch">
        <input type="checkbox"/>
        <span className="slider round"></span>
    </label>
    )
}

export default ToggleBtn;