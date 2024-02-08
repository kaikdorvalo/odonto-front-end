import { CSSProperties } from "react"

interface props {
    photoUrl: string
}

export const MenuPhoto = (props: props) => {
    const photoDivUrl: CSSProperties = {
        backgroundColor: props.photoUrl 
    }

    return (
        <div 
            className="w-32 h-32 rounded-full bg-[url('https://static1.topspeedimages.com/wordpress/wp-content/uploads/jpg/201902/volkswagen-jetta-gli-150.jpg')] bg-cover bg-center"
        >
        </div>
    )
}