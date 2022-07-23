const Menu = ({ showSidebar }) => {
    return (
        <div className="px-8 w-full h-full flex items-center justify-center">
            <h1 className={`${showSidebar ? "" : "hidden"} font-bold italic text-2xl text-center`}>
                Menu will be available soon :D
            </h1>
        </div>
    );
};

export default Menu;