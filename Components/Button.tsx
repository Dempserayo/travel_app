import Image from "next/image"
type ButtonProps = {
    type: 'button' | 'submit'
    title: string;
    icon?: string; 
    variant: string;
}

const Button = ( {type, title, icon, variant}: ButtonProps ) => {
  return (
    <button  className='flex items-center justify-center gap-3 rounded-full border  bg-green-90 px-8 py-4 text-white transition-all hover:bg-black' type={type}> 
    {icon && <Image src={icon} alt={title} width={24} height={24}/>}
        <label className="font-semibold whitespace-nowrap">{title}</label>
    </button>
  )
}

export default Button