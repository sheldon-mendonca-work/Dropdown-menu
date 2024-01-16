export const CrossIcon2: React.FC<{className: string, onClick:React.MouseEventHandler<SVGSVGElement>}> = ({className, onClick}) => {
    return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  onClick={onClick} className={`${className}`} viewBox="0 0 24 24">
        <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
    </svg>
    )

}