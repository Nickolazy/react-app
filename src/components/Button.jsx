import { Link as ScrollLink } from "react-scroll"

const Button = ({ width = 150, height = 50, text, targetId }) => {

  return (
    <ScrollLink
      to={targetId}
      smooth={true}
      duration={500}
    >
      <div 
        style={{width, height}}
        className="bg-red-600 hover:border-[1px] hover:border-black rounded-full 
          font-bold text-lg flex justify-center items-center select-none"
      >
        {text}
      </div>
    </ScrollLink>
  )
}

export default Button
