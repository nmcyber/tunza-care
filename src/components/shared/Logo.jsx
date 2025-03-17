import { logo } from '@/assets'

export default function Logo() {
  return (
    <a href='/' className=' flex  ~text-sm/2xl items-center mb-6  '>
    <img
      src={logo}
      className=" ~w-36 "
      alt="logo"
    />
    </a>
  )
}
