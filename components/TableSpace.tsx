'use client'
import DropDown from "./DropDown"
import Table from "./Table"
import Roller from "./Roller"
import tables from "../inputs/tables.json"
import { useEffect, useState } from "react"
import tableSmasher from "@/utils/tableSmasher"

export type Table = {
    header: string
    items: string[]
}

export default function TableSpace() {
    const processedTables: Table[] = tableSmasher(tables)
    const [currentTable, setCurrentTable] = useState<Table>(processedTables[0])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            if (processedTables.length < tables.length) {
                setLoading(false)
                clearInterval(interval)
            }
        }, 50)
    }, [])

    if (loading) return <div>Loading...</div>

    return (
        <div className="w-full h-full flex flex-col gap-4 justify-center items-center">
            <DropDown tableList={processedTables} currentTable={currentTable} setCurrentTable={setCurrentTable} />
            <Roller currentTable={currentTable} />
            <Table currentTable={currentTable} />
        </div>
    )
}