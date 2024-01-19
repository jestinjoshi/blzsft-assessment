"use client";

import { disableDialog, setDialogValue } from "../store/slices/dialogSlice";
import { addBook, updateBook } from "../store/slices/bookSlice";
import { RootState } from "../store";
import React, { ChangeEvent, FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

export default function BookDialog() {
    const dialog = useAppSelector((state: RootState) => state.dialog);
    const books = useAppSelector((state: RootState) => state.books);
    const dispatch = useAppDispatch();

    // add or update book based on dialog type
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (dialog.type === 'add') {
            dispatch(addBook({ ...dialog.value, id: books.length + 1, }));
        } else {
            dispatch(updateBook(dialog.value));
        }
        dispatch(disableDialog());
    }

    // close dialog when backdrop is clicked
    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.currentTarget === e.target) {
            dispatch(disableDialog());
        }
    }

    // update dialog value when input is updated
    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setDialogValue({
            ...dialog.value,
            [e.target.name]: e.target.value
        }))
    }

    // update dialog value when textarea is updated
    const handleTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(setDialogValue({
            ...dialog.value,
            [e.target.name]: e.target.value
        }))
    }

    return (
        dialog.enabled &&
        <div className="fixed bg-black/50 left-0 top-0 w-full h-dvh z-10" onClick={handleBackdropClick}>
            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12 left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] absolute m-0 min-w-[310px]">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        className="w-full rounded-lg border-gray-200 border p-3 text-sm"
                        placeholder="Book Name"
                        type="text"
                        value={dialog.value.name}
                        onChange={handleInput}
                        name="name"
                        required
                    />
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <input
                            className="w-full rounded-lg border-gray-200 border p-3 text-sm"
                            placeholder="Book Price"
                            type="number"
                            value={dialog.value.price}
                            onChange={handleInput}
                            name="price"
                            required
                        />
                        <input
                            className="w-full rounded-lg border-gray-200 border p-3 text-sm"
                            placeholder="Book Category"
                            type="text"
                            value={dialog.value.category}
                            onChange={handleInput}
                            name="category"
                            required
                        />
                    </div>
                    <textarea
                        className="w-full rounded-lg border-gray-200 border p-3 text-sm"
                        placeholder="Description"
                        rows={8}
                        value={dialog.value.description}
                        onChange={handleTextArea}
                        name="description"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white mt-4 capitalize"
                    >
                        {dialog.type} Book
                    </button>
                </form>
            </div>
        </div>
    )
}