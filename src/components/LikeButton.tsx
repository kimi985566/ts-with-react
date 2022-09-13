import React, { useState, useEffect, useRef } from "react";

const LikeButton: React.FC = () => {
    const [like, setLike] = useState(0)
    const likeRef = useRef(0)
    const [on, setOn] = useState(true)

    useEffect(() => {
        document.title = `点击了${like}次`
    }, [like])

    function delayAlertLike() {
        setTimeout(() => {
            alert('You have clicked LikeButton ' + likeRef.current+' times.')
        }, 3000)
    }

    return (
        <>
            <button onClick={() => {
                setLike(like + 1); likeRef.current++
            }}>
                {like} 👍🏻
            </button>
            <button onClick={() => { setOn(!on) }}>
                {on ? "ON" : "OFF"}
            </button>
            <button onClick={() => delayAlertLike()}>
                delay alert
            </button>
        </>
    )
}

export default LikeButton