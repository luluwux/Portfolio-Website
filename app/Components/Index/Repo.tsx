import GithubProjects from '../../Api/Github';

function Repositories() {
    return (
        <>
            <div className="pb-32">
                <div>
                    <h1 className="flex mx-auto max-w-5xl font-display font-bold tracking-normal ml-32 pb-10">
                        <p className='text-8xl text-left overflow-hidden text-white text-opacity-5 absolute font-bold text-[#00dc83] '>Repositories</p>
                        <p className='pt-11 pl-1 text-6xl font-bold '>Repositories</p>
                    </h1>
                    <GithubProjects />
                    <div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Repositories;