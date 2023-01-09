import React from 'react'
function Card({children, getClasses}){
    const styles = {
        container: 'w-[370px] bg-white px-6 py-12 flex flex-col justify-center shadow-sm'
    }
    return <div className={`${styles.container} ${getClasses}`}>
            {children}
        </div>
    
}

export default Card;