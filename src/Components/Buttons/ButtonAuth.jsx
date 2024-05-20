const ButtonAuth = ({...props}) => {
    return (
        <button {...props} className="w-full py-3 px-3 rounded bg-red-500 text-black hover:bg-blue-500">{props.text}</button>
    );
}

export default ButtonAuth;
