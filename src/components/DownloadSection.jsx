import React from 'react'

const DownloadSection = () => {
  return (
    <div className="overflow-hidden bg-[#f8f8f8] bg-[url('../../images/downloadappbg.png')] w-full h-[100%] bg-no-repeat">
        <div className='flex flex-col max-w-[1280px] mx-auto'>
            <div className='w-[500px] px-32 md:px-5 mt-20 flex flex-col gap-10 ml-0 md:ml-32'>
                <h1 className='text-4xl font-bold'>Download our app to get most out of it</h1>
                <p>Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. Incommode so intention defective at convinced. Led income months itself and houses you.</p>
                <div className='flex flex-col md:flex-row gap-5 mb-20'>
                    <img src="../../images/googleplay.svg" alt="" />
                    <img src="../../images/appstore.svg" alt="" />
                </div>
            </div>
        </div>

    </div>
  )
}

export default DownloadSection