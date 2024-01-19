"use client";

import { useAppDispatch } from "@/store/hooks";
import { setDialogType } from "@/store/slices/dialogSlice";

export default function BookAddButton() {
    const dispatch = useAppDispatch();

    const addBookDialog = () => {
        dispatch(setDialogType('add'));
    }

    return (
        <span className="inline-flex -space-x-px overflow-hidden rounded-md border bg-white shadow-sm">
            <button onClick={addBookDialog} className="inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative">
                Add a Book
            </button>
        </span>
    )
}