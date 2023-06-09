import { Table } from "@/components/TableSpace";

export default function tableSmasher(tables: Table[]) {
    const smashedTables: Table[] = []
    for (let i = 0; i < tables.length; i++) {
        let table = tables[i]
        const nextTable = tables[i + 1]

        if (headerEquality(table, nextTable)) {
            table = recursiveHeaderCheck(table, nextTable, tables, i + 1)
        }

        if (!headerEquality(table, tables[i - 1])) {
            table.header = formatTableHeader(table.header)

            smashedTables.push(table)
        }
    }
    return smashedTables
}

function formatTableHeader(header: string): string {
    header = header.replace(/1$/, "")

    let words = header.split(' ')
    words[2] = words[2].charAt(0).toUpperCase() + words[2].slice(1)

    return words.join(" ")
}

function headerEquality(table1: Table, table2: Table): boolean {
    if (!table1 || !table2) return false
    const header1 = table1.header.split(":")
    const header2 = table2.header.split(":")

    const title1 = header1[1].replace(/\d+$/, '').toLowerCase();
    const title2 = header2[1].replace(/\d+$/, '').toLowerCase();

    if (title1 == title2) {
        return true
    }

    return false
}

function recursiveHeaderCheck(table: Table, nextTable: Table, tables: Table[], index: number): Table {
    if (!headerEquality(table, nextTable)) return table

    for (let i = 0; i < nextTable.items.length; i++) {
        table.items.push(nextTable.items[i])
    }

    return recursiveHeaderCheck(table, tables[index + 1], tables, index + 1)
}
