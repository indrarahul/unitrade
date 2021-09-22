import Image from 'next/image';

function Button({ img, type, number }) {
    if (type == "Love") {
        return (
            <div className="flex items-center space-x-4 border-2 border-green-400 p-2 rounded-lg" >
                <Image
                    src={img}
                    height="15px"
                    width="15px"
                    objectFit="contain"
                />
                <h1 className="text-green-400 text-sm md:text-lg">{number}</h1>
            </div>
        )
    }

    else if (type === "Details") {
        return (
            <div className="flex px-5 items-center rounded-lg bg-gradient-to-br from-[#C37BF9] to-[#6C5DD3]">
                <h1 className="text-white text-sm md:text-lg font-bold">Details</h1>
            </div>
        )
    }

    else {
        return (
            <div className="flex space-x-4 border-2 border-red-400 p-2 rounded-lg" >
                <Image
                    src={img}
                    height="15px"
                    width="15px"
                    objectFit="contain"
                />
                <h1 className="text-red-400 text-sm md:text-lg">{number}</h1>
            </div>
        )
    }
}

export default Button
