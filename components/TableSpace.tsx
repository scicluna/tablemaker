'use client'
import DropDown from "./DropDown"
import Table from "./Table"
import Roller from "./Roller"
import tables from "../inputs/tables.json"
import { useEffect, useMemo, useState } from "react"
import tableSmasher from "@/utils/tableSmasher"

export type Table = {
    header: string
    items: string[]
}

export default function TableSpace() {
    const processedTables = useMemo(() => tableSmasher(tables), []);
    const [currentTable, setCurrentTable] = useState<Table | null>(null)

    useEffect(() => {
        setCurrentTable(processedTables[0])
    }, [processedTables])

    if (!currentTable || !processedTables) return <div>Loading...</div>

    return (
        <div className="w-full h-full flex flex-col gap-4 justify-center items-center">
            <DropDown tableList={processedTables} currentTable={currentTable} setCurrentTable={setCurrentTable} />
            <Roller currentTable={currentTable} />
            <Table currentTable={currentTable} />
        </div>
    )
}