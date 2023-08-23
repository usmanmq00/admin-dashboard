import { ReactComponent as Question } from '../../../assets/images/coupon/question.svg'

const General = () => {
    return (
        <>
            <section className='mt-[14px] pl-[12px]'>
                <div className='flex gap-[50px]'>
                    <label className='font-normal text-[#555555] text-[14px] w-[130px]'>Discount type</label>
                    <div className='flex gap-[7px] items-center'>
                        <div className='w-[330px] border-[1px] border-[#8C8F94]'>
                            <select name='percentage' className='w-[322px] pl-[6px] outline-none py-[3px]'>
                                <option value="percentage discount" disabled selected>Percentage Discount</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='flex gap-[50px] mt-[22px]'>
                    <label className='font-normal text-[#555555] text-[14px] w-[130px]'>Coupon amount</label>
                    <div className='flex gap-[7px] items-center'>
                        <div className='w-[330px] border-[1px] border-[#8C8F94]'>
                            <input name='amount' className='w-[322px] pl-[6px] outline-none py-[3px] appearance-none' type='text' />
                        </div>
                        <div className='cursor-pointer'>{<Question />}</div>
                    </div>
                </div>
                <div className='flex gap-[50px] mt-[22px]'>
                    <label className='font-normal text-[#555555] text-[14px] w-[130px]'>Coupon expiry date</label>
                    <div className='flex gap-[7px] items-center'>
                        <div className='w-[330px] border-[1px] border-[#8C8F94]'>
                            <input name='date' className='w-[322px] pl-[6px] outline-none py-[3px] appearance-none' type='date' />
                        </div>
                        <div className='cursor-pointer'>{<Question />}</div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default General
