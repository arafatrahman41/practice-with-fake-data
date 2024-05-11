import boy from'../../assets/images/boy1.png'

const Header = () => {
    return (
       <div className='py-8 border-b'>
         <div className='flex justify-between items-center'>
           <h1 className='text-4xl font-bold bg-gradient-to-r from-[#6047EC99] via-[#6047EC] to-[#4f30ff] bg-clip-text text-transparent'>Programmer World</h1> 
           <img className='w-16' src={boy} alt="" />
        </div>
       </div>
    );
};


export default Header;