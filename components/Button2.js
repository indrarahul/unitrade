import Image from 'next/image';

function Button2({ img, type, number, selected }) {
    if (selected === "1") {

        return (
            <div className="flex items-center py-2 px-3 space-x-2 bg-[#31313F] rounded-full" >
                <Image
                    src={img}
                    height="20px"
                    width="20px"
                    objectFit="contain"
                />
                <h1 className="text-white text-[10px] md:text-sm">{type} </h1>
                <h1 className="text-white rounded-full text-[10px] md:text-xs px-1 bg-[#21212A]">{number}</h1>
            </div>
        )
    } else {
        return (
            <div className="flex items-center space-x-2 rounded-full" >
                <Image
                    src={img}
                    height="20px"
                    width="20px"
                    objectFit="contain"
                />
                <h1 className="text-white text-[10px] md:text-sm">{type} </h1>
                <h1 className="text-white rounded-full text-[10px] md:text-xs px-1 bg-[#21212A]">{number}</h1>
            </div>
        )
    }

}

export default Button2
