import GithubProjects from '../../Api/Github';

function Repositories() {
    return (
        <>
            <div className="pb-96">
                <div>
                    <h1 className="max-w-4xl font-display font-bold tracking-normal ml-2 sm:ml-8 pb-4 sm:pb-8">
                        <p className='text-5xl sm:text-8xl text-left overflow-hidden text-white text-opacity-5 absolute font-bold text-[#06b7d2]'>Repositories</p>
                        <p className='pt-5 sm:pt-6 pl-1 text-4xl sm:text-6xl font-bold '>Repositories</p>
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