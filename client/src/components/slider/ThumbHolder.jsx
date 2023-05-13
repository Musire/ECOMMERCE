const ThumbHolder = ({ children }) => {
    return ( 
        <div id="thumbnail-container" className="w-[85%] h-auto xs:hidden md:flex spaced md:gap-x-3 lg:gap-x-6">
            {children}
        </div>
     );
}
 
export default ThumbHolder;