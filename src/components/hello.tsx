import React from "react";

interface IHelloImpl {
    message?: string;
}

const Hello: React.FC<IHelloImpl> = (props) => {
    return <h2>{props.message}</h2>
}
Hello.defaultProps = {
    message: "Hello Moto"
}

export default Hello