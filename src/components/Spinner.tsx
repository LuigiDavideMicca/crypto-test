import { type FC } from "react";

const Spinner: FC = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex space-x-2">
                <div className="w-4 h-4 bg-gray-500 rounded-full animate-dotFlashing"></div>
                <div className="w-4 h-4 bg-gray-500 rounded-full animate-dotFlashing delay-200"></div>
                <div className="w-4 h-4 bg-gray-500 rounded-full animate-dotFlashing delay-400"></div>
            </div>
        </div>
    )
}

export default Spinner;