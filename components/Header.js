import Image from 'next/image';

function Header() {
    return (
        <header style={{justifyContent:"space-between"}} className="flex py-3 px-4 md:py-4 md:px-10">
            <div className="flex items-center space-x-3">
                <Image
                    src="https://distracted-carson-bbeb54.netlify.app/static/media/logo.3249f576.svg"
                    objectFit="contain"
                    height="40px"
                    width="40px"
                />

                <h1 className="text-white text-md md:text-[18px] font-bold">UniTrade</h1>
            </div>

            <div className="flex space-x-4 md:space-x-10 items-center">
                <Image
                    src="https://distracted-carson-bbeb54.netlify.app/static/media/bell.54fa2ca1.svg"
                    objectFit="contain"
                    height="30px"
                    width="30px"
                />

                <div>
                    <div className="flex space-x-2 border-[0.1rem] border-gray-800 rounded-xl px-4 py-2 md:px-[30px] md:py-[12px]">
                        <Image
                            src="https://distracted-carson-bbeb54.netlify.app/static/media/deposit.0559e34e.svg"
                            objectFit="contain"
                            height="12px"
                            width="12px"
                        />
                        <p className="text-white text-xs md:text-sm font-bold">Connect Wallet</p>
                    </div>

                </div>

                <div className="flex items-center">
                    <Image
                        src="https://distracted-carson-bbeb54.netlify.app/static/media/avatar.d5ebaf04.svg"
                        objectFit="contain"
                        height="28px"
                        width="28px"
                    />
                </div>

            </div>

        </header>
    )
}

export default Header
