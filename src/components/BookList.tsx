"use client";

import { RootState } from "@/store";
import { useAppDispatch, useAppSelector, useAppStore } from "@/store/hooks";
import { addBook, bookState, deleteBook } from "@/store/slices/bookSlice";
import { setDialogType, setDialogValue } from "@/store/slices/dialogSlice";
import { useRef } from "react";
import bookJson from '@/app/bookData.json';

export default function BookList() {
    const books = useAppSelector((state: RootState) => state.books);
    const dispatch = useAppDispatch();

    // invoke update book dialog when book name is clicked
    const updateBookDialog = (book: bookState) => {
        dispatch(setDialogType('update'));
        dispatch(setDialogValue(book));
    }

    // Initialize the store with books information
    const store = useAppStore();
    const initialized = useRef(false);
    if (!initialized.current) {
        store.dispatch(addBook(bookJson))
        initialized.current = true
    }

    return (
        <div className="mx-auto max-w-screen-xl px-2.5 sm:px-4">
            <ul className="divide-y divide-gray-400 mb-10">
                {books.map((book) => (
                    <li key={book.id} className="flex justify-between gap-x-6 py-5">
                        <div className="flex min-w-0 gap-x-4">
                            <div className="min-w-0 flex-auto">
                                <p onClick={() => updateBookDialog(book)} className="text-sm font-semibold leading-6 hover:underline cursor-pointer">{book.name}</p>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{book.category} | <span className='font-bold'>${book.price}</span></p>
                            </div>
                        </div>
                        <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                            <button
                                className="inline-block p-3 text-gray-700 hover:bg-gray-50 focus:relative rounded-md border bg-white shadow-sm"
                                title="Delete Book"
                                onClick={() => dispatch(deleteBook(book.id))}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-4 w-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                    />
                                </svg>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}