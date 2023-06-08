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
    const [processedTables, setProcessedTables] = useState<Table[]>([])
    const [currentTable, setCurrentTable] = useState<Table | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        new Promise<Table[]>(resolve => {
            const processed = tableSmasher(tables)
            resolve(processed)
        }).then((processed) => {
            setProcessedTables(processed)
            setCurrentTable(processed[0])
            setLoading(false)
        })
    }, [])

    if (loading || !currentTable) return <div>Loading...</div>

    return (
        <div className="w-full h-full flex flex-col gap-4 justify-center items-center">
            <DropDown tableList={processedTables} currentTable={currentTable} setCurrentTable={setCurrentTable} />
            <Roller currentTable={currentTable} />
            <Table currentTable={currentTable} />
        </div>
    )
}