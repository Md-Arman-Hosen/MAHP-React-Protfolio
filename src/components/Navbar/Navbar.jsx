import { styles } from '../../styles'
import { navLinks } from '../../constants'
import { logo, menu, close } from '../../assets'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaPhoneAlt } from "react-icons/fa";
import { TfiEmail } from 'react-icons/tfi';
import { LuExternalLink } from "react-icons/lu";

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"
            }`}>
            <div className='flex w-full justify-between items-center max-w-7xl mx-auto'>
                <Link to='/'
                    className='flex items-center gap-2'
                    onClick={() => {
                        setActive('');
                        window.scrollTo(0, 0);
                    }}>
                    <img src={logo} alt="logo" className='w-9 h-9 object-contain' />
                    <p className='text-white hover:text-[#915eff] text-[18px] font-bold cursor-pointer flex '>
                        Md Arman&nbsp;<span className='sm:block hidden'>Hosen Patoary</span>
                    </p>
                </Link>
                <ul className='list-none hidden sm:flex flex-row items-center gap-10'>
                    {
                        navLinks.map((link) => (
                            <li key={link.id}
                                className={`${active === link.title ? 'text-[#915eff]' : 'text-secondary'
                                    } hover:text-[#915eff] text-[18px] font-medium cursor-pointer transition ease-out hover:scale-125`}
                                onClick={() => setActive(link.title)}
                            >
                                <a href={`#${link.id}`}>{link.title}</a>
                            </li>
                        ))
                    }
                    <a href="https://drive.google.com/file/d/1YO4jqmfg2ZGJrSH7yCH_GnTOJWdzwnBu/view?usp=sharing" target='_blank' rel='noreferrer' className='text-secondary hover:text-[#915eff] transition ease-out hover:scale-125 text-[18px] font-medium cursor-pointer flex items-center'>Resume &nbsp; <LuExternalLink /></a>
                </ul>

                <div className='sm:hidden flex flex-1 justify-end items-center'>
                    <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={() => setToggle(!toggle)} />

                    <div className={`${!toggle ? 'hidden' : 'flex'}`}>

                        {/* <ul className='list-none flex justify-end items-start flex-col gap-4'>
                            {
                                navLinks.map((link) => (
                                    <li key={link.id}
                                        className={`${active === link.title ? 'text-white' : 'text-secondary'} font-poppins font-medium cursor-pointer text-[16px]`}
                                        onClick={() => {
                                            setToggle(!toggle);
                                            setActive(link.title);
                                        }}
                                    >
                                        <a href={`#${link.id}`}>{link.title}</a>
                                    </li>
                                ))
                            }
                            <a href="https://drive.google.com/file/d/1QyyNUnaj3dhWjjlnxV_awH4kMLJR4fBp/view?usp=sharing" target='_blank' rel='noreferrer' className='text-secondary text-[18px] font-medium cursor-pointer'>Resume</a>
                        </ul> */}


                        <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
                            <div className="flex flex-col gap-8 py-2 relative">
                                <div>
                                    <div className='flex items-center gap-2'>
                                        <img src={logo} alt="logo" className='w-9 h-9 object-contain' />
                                        <p className='text-white text-[18px] font-bold cursor-pointer flex'>
                                            Md Arman &nbsp;<span className=''>Hosen Patoary</span>
                                        </p>
                                    </div>
                                    <p className="text-sm text-gray-400 mt-2">
                                        I am a front-end web developer specializing in React.js. With a strong foundation in HTML, CSS, and JavaScript.
                                    </p>
                                </div>
                                <ul className='list-none flex justify-end items-start flex-col gap-4'>
                                    {
                                        navLinks.map((link) => (
                                            <li key={link.id}
                                                className={`${active === link.title ? 'text-white' : 'text-secondary'} font-poppins font-medium cursor-pointer text-[16px]`}
                                                onClick={() => {
                                                    setToggle(!toggle);
                                                    setActive(link.title);
                                                }}
                                            >
                                                <a href={`#${link.id}`}>{link.title}</a>
                                            </li>
                                        ))
                                    }
                                    <a href="https://drive.google.com/file/d/1AxwpKb4ULvulSW1yyYvQA3pFsZ9iHEAl/view?usp=sharing" target='_blank' rel='noreferrer' className='text-secondary hover:text-[#915eff] text-[18px] font-medium cursor-pointer flex items-center'>Resume &nbsp; <LuExternalLink /></a>
                                </ul>
                                <div className="flex flex-col gap-4">
                                    <h2 className="text-base uppercase font-titleFont mb-4">
                                        Find me in
                                    </h2>
                                    <div className="flex gap-4">
                                        <span className="w-16 h-16 bg-black bg-opacity-25 text-gray-200 text-lg inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300;">
                                            <a href="https://www.facebook.com/mdArmanHosenPatoary" target="_blank" rel="noreferrer"><FaFacebookF /></a>
                                        </span>
                                        <span className="w-16 h-16 bg-black bg-opacity-25 text-gray-200 text-lg inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300;">
                                            <a href="https://x.com/Arman_Fam" target="_blank" rel="noreferrer"><FaTwitter /></a>
                                        </span>
                                        <span className="w-16 h-16 bg-black bg-opacity-25 text-gray-200 text-lg inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300;">
                                            <a href="https://github.com/Md-Arman-Hosen" target="_blank" rel="noreferrer"><FaGithub /></a>
                                        </span>
                                        <span className="w-16 h-16 bg-black bg-opacity-25 text-gray-200 text-lg inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300;">
                                            <a href="https://www.linkedin.com/in/md-arman-hosen-patoary-5b409b20b" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
                                        </span>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <p className=" text-gray-500 text-lg flex items-center gap-2">
                                        <span>
                                            <FaPhoneAlt />
                                        </span>
                                        <span><a href="tel:+8801627884903" target="_blank" rel="noreferrer">Call Now</a></span>
                                    </p>
                                    <p className=" text-gray-500 text-lg flex items-center  gap-2">
                                        <span>
                                            <TfiEmail />
                                        </span>
                                        <span>
                                            <a href="mailto:armaanhasan6499@gmail.com" target="_blank" rel="noreferrer">armaanhasan6499@gmail.com</a>
                                        </span>
                                    </p>
                                </div>
                                {/* <span
                                    onClick={() => setShowMenu(false)}
                                    className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
                                >
                                    <MdClose />
                                </span> */}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
