import { type FC } from "react"

const ErrorMessage: FC<{ error: string }> = ({ error }) => {
    return (
        <div className="flex justify-center mb-4">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Errore!</strong>
                <span className="block sm:inline ml-2">{error}</span>
            </div>
        </div>
    )
}

export default ErrorMessage