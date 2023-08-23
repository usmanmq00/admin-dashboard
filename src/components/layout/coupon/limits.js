import { ReactComponent as Question } from '../../../assets/images/coupon/question.svg'

const Limits = () => {
    return (
        <>
            <section className='mt-[14px] pl-[12px]'>
                <div className='flex gap-[50px] mt-[22px]'>
                    <label className='font-normal text-[#555555] text-[14px] w-[160px]'>Usage limit per coupon</label>
                    <div className='flex gap-[7px] items-center'>
                        <div className='w-[330px] border-[1px] border-[#8C8F94]'>
                            <input name='amount' className='w-[322px] pl-[6px] outline-none py-[3px] appearance-none' type='text' />
                        </div>
                        <div className='cursor-pointer'>{<Question />}</div>
                    </div>
                </div>
                <div className='flex gap-[50px] mt-[22px]'>
                    <label className='font-normal text-[#555555] text-[14px] w-[160px]'>Limit usage to X items</label>
                    <div className='flex gap-[7px] items-center'>
                        <div className='w-[330px] border-[1px] border-[#8C8F94]'>
                            <input name='amount' className='w-[322px] pl-[6px] outline-none py-[3px] appearance-none' type='text' />
                        </div>
                        <div className='cursor-pointer'>{<Question />}</div>
                    </div>
                </div>
                <div className='flex gap-[50px] mt-[22px]'>
                    <label className='font-normal text-[#555555] text-[14px] w-[160px]'>Usage limit per user</label>
                    <div className='flex gap-[7px] items-center'>
                        <div className='w-[330px] border-[1px] border-[#8C8F94]'>
                            <input name='amount' className='w-[322px] pl-[6px] outline-none py-[3px] appearance-none' type='text' />
                        </div>
                        <div className='cursor-pointer'>{<Question />}</div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Limits
