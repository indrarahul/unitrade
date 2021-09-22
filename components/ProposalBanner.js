import Image from 'next/image';

function ProposalBanner() {
    return (
        <div className="pt-5 px-5 md:px-10">
            <div className="w-full pt-5 px-5 py-4 md:px-8 md:py-10 space-y-3 md:space-y-5 h-36 md:h-[150px] rounded-3xl bg-gradient-to-br from-[#C37BF9] to-[#6C5DD3]">

                <div className="grid grid-cols-1 space-y-4 pt-4 md:pt-1" >
                    
                    <Image
                        src="https://distracted-carson-bbeb54.netlify.app/static/media/plus.055abc84.svg"
                        objectFit="contain"
                        height="30px"
                        width="30px"
                    />

                    <h1 className="text-white text-md md:text-xl mx-auto">Create Proposal</h1>
                </div>

            </div>
        </div>
    )
}

export default ProposalBanner
