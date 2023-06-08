'use client'
import { MouseEvent, useEffect, useState } from "react"
import { Table } from "./TableSpace"

type RollerProps = {
    currentTable: Table
}

export default function Roller({ currentTable }: RollerProps) {
    const [result, setResult] = useState<number | null>(null)

    function rollResult(e: MouseEvent) {
        e.preventDefault()
        setResult(Math.ceil(Math.random() * currentTable.items.length))
    }

    useEffect(() => {
        setResult(null)
    }, [currentTable])

    return (
        <form className="flex flex-col justify-center items-center w-full gap-2">
            <button className="flex justify-center items-center w-32 bg-teal-700 text-teal-100 py-2 px-1 text-xl rounded-full hover:bg-teal-500 hover:text-teal-950" onClick={e => rollResult(e)}>Roll</button>
            <div className="min-h-[4rem] w-full shadow-md shadow-gray">
                {result && (
                    <div className="flex gap-5 w-full justify-center p-2">
                        <h1 className="text-center font-bold">{result}</h1>
                        <p>{currentTable.items[result - 1]}</p>
                    </div>
                )}
            </div>
        </form>
    )
}