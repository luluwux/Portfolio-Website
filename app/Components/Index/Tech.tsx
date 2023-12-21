import Skills from '../../Api/Skills';

function Technologies() {
    return (
        <>
            <div className="pb-8 sm:pb-16 md:pb-32">
                <div>
                    <h1 className="max-w-6xl font-display font-bold tracking-normal ml-2 sm:ml-8 pb-4 sm:pb-8">
                        <p className='text-5xl sm:text-8xl text-left overflow-hidden text-white text-opacity-5 absolute font-bold text-[#06b7d2]'>Technologies</p>
                        <p className='pt-4 sm:pt-6 pl-1 text-4xl sm:text-7xl font-bold '>Technologies</p>
                    </h1>
                    <Skills />
                </div>
            </div>
        </>
    )
}

export default Technologies;
