import { useState } from "react";


function SortTaskForm({onFilterTask, onSortTask}) {

    const [filterTaskName, setFilterTaskName] = useState('')
    const [sortType, setSortType] = useState('descend')

    const handleSelectChange = (e) => {
        setSortType(e.target.value)
        onSortTask(sortType)
    }
    
    return (
        <div className="flex flex-col items-center justify-center p-5">
            <div className="flex items-center space-x-4 mb-4">
                <input 
                    className="border border-green-500 border-2 px-3 py-1 rounded-lg text-sm"
                    type="text" 
                    placeholder="Enter the task name"
                    value={filterTaskName}
                    onChange={e => setFilterTaskName(e.target.value)}
                    
                />
                <button
                    className="border border-green-500 border-2 px-3 py-1 rounded-lg text-white bg-green-500 hover:bg-green-600"
                    onClick={() => onFilterTask(filterTaskName)}
                >
                    Find
                </button>
                <select 
                    className="border border-green-500 border-2 px-3 py-1 rounded-lg text-sm"
                    value={sortType}
                    onChange={handleSelectChange}
                >
                    <option value="descend">Descend</option>
                    <option value="ascend">Ascend</option>
                </select>
            </div>
        </div>
        
    )
}

export default SortTaskForm;