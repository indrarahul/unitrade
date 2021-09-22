import Image from 'next/image';
import Button2 from './Button2';
import ProposalCard from './ProposalCard';

function ProposalsBar() {

    const data = [
        {
            key: 1,
            img: "https://distracted-carson-bbeb54.netlify.app/static/media/logo.3249f576.svg",
            title: "Reduce the UNI proposal submission threshold to 2.5M",
            loveNumber: 12923,
            hateNumber: 4211,
        },
        {
            key: 2,
            img: "https://distracted-carson-bbeb54.netlify.app/static/media/logo.3249f576.svg",
            title: "UniTrade Grants Program v0.1",
            loveNumber: 12923,
            hateNumber: 4211,
        },
        {
            key: 3,
            img: "https://distracted-carson-bbeb54.netlify.app/static/media/logo.3249f576.svg",
            title: "UniTrade Grants Program v0.1",
            loveNumber: 12923,
            hateNumber: 4211,
        },
        {
            key: 4,
            img: "https://distracted-carson-bbeb54.netlify.app/static/media/logo.3249f576.svg",
            title: "Retroactive Proxy Contract Airdrop — Phase One",
            loveNumber: 12923,
            hateNumber: 4211,
        }
    ]

    return (
        <div>
            <div style={{}} className="grid grid-cols-1 space-y-3 md:space-y-0 md:grid-cols-2 px-6 md:px-10 pt-10">
                <div>
                    <h1 className="text-white text-xl font-bold">Proposals</h1>
                </div>


                <div className="flex space-x-4 md:space-x-8">
                    <Button2
                        img="https://distracted-carson-bbeb54.netlify.app/static/media/energy.8bc6d4f6.svg"
                        type="In Progress"
                        number="8"
                        selected="1"
                    />
                    <Button2
                        img="https://distracted-carson-bbeb54.netlify.app/static/media/check.d92b78a7.svg"
                        type="Accepted"
                        number="4"
                        selected="0"
                    />
                    <Button2
                        img="https://distracted-carson-bbeb54.netlify.app/static/media/times.1214773f.svg"
                        type="Failed"
                        number="2"
                        selected="0"
                    />
                </div>
            </div>
            {data?.map(({ key, img, title, loveNumber, hateNumber }) => (
                <ProposalCard key={key} img={img} title={title} loveNumber={loveNumber} hateNumber={hateNumber} />
            ))}
        </div>
    )
}

export default ProposalsBar
