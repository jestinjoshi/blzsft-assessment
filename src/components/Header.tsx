import BookAddButton from "./BookAdd";

export default function Header() {
    return (
        <header className="bg-gray-100 mb-10 p-10 px-0 sticky top-0">
            <div className="mx-auto max-w-screen-xl px-2.5 sm:px-4 flex justify-between items-center">
                <h1 className="text-xl">Blazesoft Assessment</h1>
                <BookAddButton />
            </div>
        </header>
    )
}