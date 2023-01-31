import React from 'react';


function Footer(props){
const { desc } = props;
return <footer className='bg-dark text-white p-4 fixed-bottom'>{desc}</footer>
}

export default Footer;