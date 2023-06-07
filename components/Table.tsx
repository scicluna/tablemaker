import { Table } from "./TableSpace"

type TableProps = {
    currentTable: Table
}

export default function Table({ currentTable }: TableProps) {

    return (
        <>
            <h1 className="font-extrabold w-full text-center">{currentTable.header}</h1>
            <div className="flex flex-col gap-1">
                {currentTable.items.map((item, i) => (
                    <div className="flex gap-5 sm:text-sm text-xs" key={item}>
                        <p className="font-bold">{item && i + 1}</p>
                        <p>{item && item}</p>
                    </div>
                ))}
            </div>
        </>
    )
}