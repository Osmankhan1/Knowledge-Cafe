import profile from '../../assets/images/profile.png';



const Header = () => {
    return (
        <div className='flex justify-between p-4 border-b-2 items-center  max-w-7xl mx-auto'>
             <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
             <img className='w-[60px] h-[60px] rounded-full' src={profile} alt="" />
        </div>
    );
};

export default Header;