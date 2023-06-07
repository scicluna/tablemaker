'use client'
import DropDown from "./DropDown"
import Table from "./Table"
import Roller from "./Roller"
import tables from "../inputs/tables.json"


export default function TableSpace() {
    return (
        <>
            <DropDown />
            <Table />
            <Roller />
        </>
    )
}