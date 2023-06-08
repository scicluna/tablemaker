import { Table } from "./TableSpace"
import { Dispatch, SetStateAction } from "react"
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/20/solid"

type TableNavigatorProps = {
    direction: number,
    tableList: Table[],
    index: number,
    setCurrentTable: Dispatch<SetStateAction<Table | null>>
}

export default function TableNavigator({ direction, tableList, index, setCurrentTable }: TableNavigatorProps) {

    if (!tableList[index + direction]) return <div className="hidden sm:flex sm:flex-col justify-center items-center w-2/12 text-center"></div>

    return (
        <div className="hidden sm:flex sm:flex-col justify-center items-center w-2/12 text-center">
            <button className="h-1/2" onClick={() => setCurrentTable(tableList[index + direction])}>
                {direction === -1 ? <ArrowLeftIcon className="h-5 w-5 text-gray-400 hover:text-gray-900" aria-hidden="true" /> : <ArrowRightIcon className="h-5 w-5 text-gray-400 hover:text-gray-900" aria-hidden="true" />}
            </button>
            <h1 className="h-1/2 text-xs">{tableList[index + direction]?.header}</h1>
        </div>
    )
}