import React from "react";
import fetchData from "../fetchData";

const data = fetchData('https://jsonplaceholder.typicode.com/todos/1')

const DogShowTodo: React.FC = () => {
    const todoData = data.read()
    return (
        <h2>{todoData.title}</h2>
    )
}

export default DogShowTodo