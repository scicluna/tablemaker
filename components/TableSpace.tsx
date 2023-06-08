'use client'
import DropDown from "./DropDown"
import Table from "./Table"
import Roller from "./Roller"
import tables from "../inputs/tables.json"
import { useState } from "react"

export type Table = {
    header: string
    items: string[]
}

export default function TableSpace() {
    const [tableList] = useState<Table[]>(tables)
    const [currentTable, setCurrentTable] = useState<Table>(tables[0])

    return (
        <div className="w-full h-full flex flex-col gap-5 justify-center items-center">
            <DropDown tableList={tableList} currentTable={currentTable} setCurrentTable={setCurrentTable} />
            <Roller currentTable={currentTable} />
            <Table currentTable={currentTable} />
        </div>
    )
}