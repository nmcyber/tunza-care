import { logo } from '@/assets'

export default function Logo() {
  return (
    <a href='/' className=' flex  ~text-sm/2xl items-center   '>
    <img
      src={logo}
      className=" ~w-36 size-28 "
      alt="logo"
    />
    </a>
  )
}
