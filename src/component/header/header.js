import './header.css';
import headerimg from '../../assets/header.jpg';
import {Drawer, Menu} from 'antd';
import {MenuOutlined, SearchOutlined, ShoppingCartOutlined, UserOutlined} from '@ant-design/icons';
import { useState } from 'react';
function Header() {
    const [menu,setMenu]=useState(false)
    return ( <>
    <div className='header'>
    <div className='header___mid'>
        Mid-season Sale up to 50% off. <span>Shop now!</span>
    </div>
      
    <div className='header___menu'>
        <img src={headerimg} />
        <div className='header_content'>
        <h1>Luxury for Every Women</h1>
        <p>Chic jackets reinvented for a modern look paired with our</p>
        <p>exclusive accessories will show off your class</p>
        <button>DISCOVER</button>
        </div>
        <div className='menu_mobile' ><MenuOutlined onClick={()=>setMenu(true)}/></div>
        {/* <AppMenu /> */}
        <Menu
        mode='horizontal'
        items={[
            {
                label:'New Id',
                key:'newId',
                onClick:()=>{
                    window.scroll({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                    });
                }
            },
            {
                label:'Trend',
                key:'trend',
                onClick:()=>{
                    window.scroll({
                    top: 1200,
                    left: 0,
                    behavior: 'smooth'
                    });
                }
            },{
                label:'Collections',
                key:'collections',
                onClick:()=>{
                    window.scroll({
                    top: 2000,
                    left: 0,
                    behavior: 'smooth'
                    });
                }
            },{
                label:'LookBook',
                key:'lookbook',
                onClick:()=>{
                    window.scroll({
                    top: 2800,
                    left: 0,
                    behavior: 'smooth'
                    });
                }
            }
            ,{
                label:'Child Themes',
                key:'childTheme',
                onClick:()=>{
                    window.scroll({
                    top: 3600,
                    left: 0,
                    behavior: 'smooth'
                    });
                }
            }
            ,{
                label:'Classy',
                key:'classy',
                className:'header__classy',
                onClick:()=>{
                    window.scroll({
                    top: 4000,
                    left: 0,
                    behavior: 'smooth'
                    });
                }
            }
            ,{
                label:'Blog',
                key:'blog',
                onClick:()=>{
                    window.scroll({
                    top: 5000,
                    left: 0,
                    behavior: 'smooth'
                    });
                }
            }
            ,{
                label:'Pages',
                key:'pages'
            }
            ,{
                label:'About',
                key:'about'
            }
            ,{
                label:'Contact Us',
                key:'contactUs'
            }
            ,{
                label:<UserOutlined />,
                key:'UserOutlined'
            }
            ,{
                label:<SearchOutlined />,
                key:'SearchOutlined'
            }
            ,{
                label:<ShoppingCartOutlined />,
                key:'ShoppingCartOutlined'
            }
            ,{
                label:<MenuOutlined />,
                key:'MenuOutlined',
                className:'header__outlined',
                onClick:()=>{
                    menu?setMenu(false):setMenu(true)
                }
            }
        ]}
        >
        </Menu>
        <Drawer open={menu} onClose={()=>setMenu(false)} closable={false} placement={'left'} >
        <Menu
        mode='inline'
        items={[
            {
                label:'New Id',
                key:'newId'
            },
            {
                label:'Trend',
                key:'trend'
            },{
                label:'Collections',
                key:'collections'
            },{
                label:'LookBook',
                key:'lookbook'
            }
            ,{
                label:'Child Themes',
                key:'childTheme'
            }
            ,{
                label:'Classy',
                key:'classy',
                className:'header__classy'
            }
            ,{
                label:'Blog',
                key:'blog'
            }
            ,{
                label:'Pages',
                key:'pages'
            }
            ,{
                label:'About',
                key:'about'
            }
            ,{
                label:'Contact Us',
                key:'contactUs'
            }
            ,{
                label:<UserOutlined />,
                key:'UserOutlined'
            }
            ,{
                label:<SearchOutlined />,
                key:'SearchOutlined'
            }
            ,{
                label:<ShoppingCartOutlined />,
                key:'ShoppingCartOutlined'
            }
            ,{
                label:<MenuOutlined />,
                key:'MenuOutlined',
                className:'header__outlined',
                onClick:()=>{
                    menu?setMenu(false):setMenu(true)
                }
            }
        ]}
        ></Menu>
        </Drawer>
    </div>
  

    </div>
    </> );
}
function AppMenu({isInline=false}){
    return(
        <Menu
        mode={isInline?'inline':'horizontal'}
        items={[
            {
                label:'New Id',
                key:'newId'
            },
            {
                label:'Trend',
                key:'trend'
            },{
                label:'Collections',
                key:'collections'
            },{
                label:'LookBook',
                key:'lookbook'
            }
            ,{
                label:'Child Themes',
                key:'childTheme'
            }
            ,{
                label:'Classy',
                key:'classy',
                className:'header__classy'
            }
            ,{
                label:'Blog',
                key:'blog'
            }
            ,{
                label:'Pages',
                key:'pages'
            }
            ,{
                label:'About',
                key:'about'
            }
            ,{
                label:'Contact Us',
                key:'contactUs'
            }
            ,{
                label:<UserOutlined />,
                key:'UserOutlined'
            }
            ,{
                label:<SearchOutlined />,
                key:'SearchOutlined'
            }
            ,{
                label:<ShoppingCartOutlined />,
                key:'ShoppingCartOutlined'
            }
            ,{
                label:<MenuOutlined />,
                key:'MenuOutlined',
            }
        ]}
        >
        </Menu>
    )
}

export default Header;