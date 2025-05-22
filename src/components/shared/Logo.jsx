import { logo } from "@/assets";

export default function Logo() {
  return (
    <a href='/' className=' flex ~text-sm/2xl items-center   '>
      <img src={logo} className=' ~w-48 size-16 ' title='Tunza Care Logo' alt='Tunza Care Logo' />
    </a>
  );
}
