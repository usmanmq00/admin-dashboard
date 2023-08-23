import Account from "../../../components/common/account"
import Form from '../../../components/common/form'
import Lock3 from '../../../assets/images/account/Lock3.png' 
import { CiUnlock } from 'react-icons/ci'
import { BiHide } from 'react-icons/bi'

const Reset = () => {

  return (
    <section className="w-full">
      <section className='w-100% h-[100vh] flex'>
        <Account Img={Lock3} />
        <Form title='Reset password!' desc='Reset your account' text='Reset Password' type1='password' type2='password' holder1='Previous Password' holder2='New Password' img1={<CiUnlock className='fill-gray-500' />} img2={<CiUnlock className='fill-gray-500' />} img3={<BiHide className='fill-gray-500' />} text2=' Admin Login' path='/' />
      </section>
    </section>
  )
}

export default Reset 