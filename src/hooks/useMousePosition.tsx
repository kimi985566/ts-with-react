import React, { useEffect, useState } from "react";

const useMousePostion = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const updateTracker = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY })
        }
        document.addEventListener('mousemove', updateTracker)

        return () => {
            document.removeEventListener('mousemove', updateTracker)
        }
    })

    return position
}

export default useMousePostion