import dynamic from "next/dynamic";

const BookDialog = dynamic  (() => import('@/components/BookDialog'));
const BookList = dynamic(() => import('@/components/BookList'), { ssr: false });

export default function Content() {
    return (
        <>
            <BookDialog />
            <BookList />
        </>
    )
}