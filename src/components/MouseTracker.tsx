import React, { useEffect, useState } from "react";

const MouserTracker: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const updateTracker = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY })
        }
        document.addEventListener('click', updateTracker)

        return () => {
            document.removeEventListener('click', updateTracker)
        }
    })

    return (
        <p>
            X: {position.x},Y: {position.y}
        </p>
    )
}

export default MouserTracker