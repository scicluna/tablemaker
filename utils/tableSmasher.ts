
import { Table } from "@/components/TableSpace";

export default function tableSmasher(tables: Table[]) {
    const smashedTables: Table[] = []
    for (let i = 0; i < tables.length; i++) {
        const table = tables[i]
        const nextTable = tables[i + 1]
        const previousTable = tables[i - 1]

        if (headerEquality(table, nextTable)) {
            for (let i = 0; i < nextTable.items.length; i++) {
                table.items.push(nextTable.items[i])
            }
        }

        if (!headerEquality(previousTable, table)) {
            table.header = table.header.replace(/1$/, "")

            let words = table.header.split(' ')
            words[2] = words[2].charAt(0).toUpperCase() + words[2].slice(1)

            table.header = words.join(" ")

            smashedTables.push(table)
        }
    }
    return smashedTables
}

function headerEquality(table: Table, nextTable: Table) {
    if (!table || !nextTable) return false
    const tableHeader = table.header.split(" ")
    const nextTableHeader = nextTable.header.split(" ")

    if ((tableHeader[2].toLowerCase() == nextTableHeader[2].toLowerCase())) {
        return true
    } return false
}