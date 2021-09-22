import Image from 'next/image';
import Button from './Button';

function ProposalCard({img, title, loveNumber, hateNumber}) {
    return (
        <div className="pt-5 px-5 md:px-10">
            <div className="p-4 items-center md:p-4 space-y-3 md:space-y-5 rounded-3xl bg-[#21212A]">
                <div className="flex items-center space-x-4">
                    <Image
                        className="bg-black rounded-full"
                        src={img}
                        objectFit="contain"
                        height="35px"
                        width="35px"
                    />

                    <h1 className="font-bold text-white text-md md:text-xl">{title}</h1>
                </div>

                <div className="flex space-x-4">
                    <Button img="https://distracted-carson-bbeb54.netlify.app/static/media/heart.8cdb5f9c.svg" 
                    type="Love"
                    number={loveNumber}
                    />
                    <Button img="https://distracted-carson-bbeb54.netlify.app/static/media/cross.2376434d.svg" 
                    type="Hate"
                    number={hateNumber}
                    />
                    <Button img="https://distracted-carson-bbeb54.netlify.app/static/media/heart.8cdb5f9c.svg" 
                    type="Details"
                    number={loveNumber}
                    />
                </div>
            </div>
        </div>
    )
}

export default ProposalCard
