
interface ISpinner{
    size?: number,
    borderWidth?: number,
    primaryColor?: string,
    secondaryColor?: string
}

export default function Spinner({size, borderWidth, primaryColor, secondaryColor}: ISpinner) {
  return (
    <div 
        className="spinner"></div>
  )
}
