import { Table } from "./TableSpace"

type TableProps = {
    currentTable: Table
}

export default function Table({ currentTable }: TableProps) {

    return (
        <div className="flex flex-col gap-2 shadow-md shadow-gray p-1 w-full">
            <h1 className="font-extrabold w-full text-center">{currentTable.header}</h1>
            <div className="flex flex-col gap-1">
                {currentTable.items.map((item, i) => (
                    <div className="flex gap-5 sm:text-sm text-xs" key={i}>
                        <p className="font-bold w-1/12">{item && i + 1}</p>
                        <p className="w-11/12">{item && item}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}