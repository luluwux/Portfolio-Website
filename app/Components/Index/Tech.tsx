import Skills from '../../Api/Skills'

function Technologies() {
    return (
        <>

            <div className="pb-32">
                <div>
                    <h1 className="flex mx-auto max-w-5xl font-display font-bold tracking-normal ml-32 pb-10">
                        <p className='text-8xl text-left overflow-hidden text-white text-opacity-5 absolute font-bold text-[#06b7d2]'>Technologies</p>
                        <p className='pt-11 pl-1 text-6xl font-bold '>Technologies</p>
                    </h1>
                    <Skills />
                    <div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Technologies;