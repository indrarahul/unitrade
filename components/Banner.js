import Image from 'next/image';

function Banner() {
    return (
        <div className="pt-10 px-5 md:pt-8 md:px-10">
            <div className="px-5 py-4 md:p-8  h-40 md:h-[220px] rounded-3xl bg-gradient-to-br from-[#FF9E50] to-[#fd6315]">
                <div className="grid grid-cols-2">
                    <div className="space-y-3 md:space-y-5">
                        <h1 className="text-xl md:text-4xl w-7 text-white font-bold">UniTrade Governance</h1>

                        <div className="flex space-x-3 md:space-x-4 items-center">
                            <div className="h-10">
                                <Image
                                    className="bg-black rounded-full"
                                    src="https://distracted-carson-bbeb54.netlify.app/static/media/logo.3249f576.svg"
                                    objectFit="contain"
                                    height="35px"
                                    width="35px"
                                />
                            </div>

                            <p className="font-bold max-w-[250px] md:max-w-sm text-white text-xs md:text-sm">UNITRADE tokens represent voting shares in UniTrade governance.</p>
                        </div>
                    </div>

                    <div className="relative">
                        <Image
                            src="https://distracted-carson-bbeb54.netlify.app/static/media/pages.c72f72b9.svg"
                            objectFit="contain"
                            layout="fill"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
