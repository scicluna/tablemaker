'use client'
import DropDown from "./DropDown"
import Table from "./Table"
import Roller from "./Roller"
import tables from "../inputs/tables.json"
import { useState, useEffect } from "react"

export type Table = {
    header: string
    items: string[]
}

export default function TableSpace() {
    const [tableList, setTableList] = useState<{}[]>([])
    const [currentTable, setCurrentTable] = useState<Table>()

    useEffect(() => {
        setTableList(tables)
        setCurrentTable(tables[0])
    }, [])

    console.log(currentTable)

    return (
        <>
            <DropDown />
            {currentTable ? <Table currentTable={currentTable} /> : <h1>Loading...</h1>}
            <Roller />
        </>
    )
}