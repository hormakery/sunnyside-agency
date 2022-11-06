import styled from "styled-components";

export const Maxwidth=styled.div`
width: 100%;
height: 800px;
display: flex;
justify-content: center;
background-color: #3dbdff;
transition: all .3s ease-in-out;

@media screen and (max-width: 600px){
  height: 500px;
}

`
export const Header=styled.header`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: flex-start;
background-size: cover;
background-repeat: no-repeat;
background-position: center bottom;
background-image: url(../images/image-header.jpg);


@media screen and (max-width: 600px){
  background-size: 200%;
}
`

export const NavbarWrapper=styled.nav`
height: 100px;
display: flex;
width: 100%;
color: #fff;
position: relative;
align-items: center;
padding: 1.2rem 3rem;
background-image: url(../images/image-header.jpg);
justify-content: space-between;
transition: 0.5s all ease-in-out;


@media screen and (max-width: 768px){
    padding: 0 3rem;
}

`

export const Logo=styled.img`

`

export const Menu=styled.button`
border: 0;
top: 50%;
right: 25px;
height: 40px;
width: 40px;
  display: none;
  padding: 0.5rem;
  cursor: pointer;
  position: absolute;
  transform: rotate(45deg);
  background-color: inherit;
  transform: translateY(-50%);
  transition:  all 0.6s ease-in-out;

  @media screen and (max-width: 768px){
    display: block;
  }
`

export const NavWrapper=styled.div`
margin: end;
display: flex;
align-items: center;


.nav-links-mobile{
    right: 0;
    top: 100px;
    width: 90%;
    left: 0;
    color: #000;
    display: block;
    margin: 0 auto;
    z-index: 999999;
    height: 300px;
    border-radius: .4rem;
    align-items: center;
    position: absolute;
    list-styling: none;
    background-color: #fff;
    transition: all 0.5s ease-out;
    padding: 1.4rem 2rem 2.8rem 2rem;


    
  @media screen and (max-width: 600px){
    // top: 7rem;
  }
  }

.triangle{
    display: none;

    @media screen and (max-width: 768px){
        width: 0;
        right: 0;
        height: 0;
        top: -2rem;
        display: block;
        position: absolute;
        border-right: 30px solid #fff;
        border-top: 40px solid transparent;
        border-bottom: 40px solid transparent;
    }
}
`

export const NavMenu=styled.ul`
display: flex;
align-items: center;
transition: .15s all ease-in-out;

@media screen and (max-width: 768px){
    display: none;
   
  }
}

`

export const List=styled.li`
color: #fff;
margin: 0 1rem;
text-decoration: none;
list-style-type: none;

.links{
    color: #fff;
    width: 100%;
    display: block;
    text-align: center;
    justify-content: center;
    align-items: center;
    text-decoration: none;

    @media screen and (max-width: 768px){
        // width: 80%;
        color: darkgrey;
        // margin: 1rem ;
        padding: 1.1rem 1rem;
    }

    &:nth-child(2){
      color: #fff;

      @media screen and (max-width: 768px){
        color: darkgrey;
        // margin: 1rem 1rem;
      }
    }

    &:nth-child(3){
      color: #fff;

      @media screen and (max-width: 768px){
        color: darkgrey;
        margin: 1rem 0;
      }
    }

    &:last-child{
      color: #000;

      @media screen and (max-width: 768px){
        color: #000;
        
        // background-color: #fed502; 
      }
    }


   
}

&:nth-child(4){
    margin: 0;
    color: #000;
    display: block;
    font-size: 1rem;
    font-weight: 700;
    text-align: center;
    padding: 1rem 1.5rem;
    border-radius: 1.5rem;
    text-decoration: none;
    background-color: #fff;
    text-transform: uppercase;
    font-family: 'Fraunces', serif;

    :hover{
      color: #fff;
      background-color: inherit;
  }

  @media screen and (max-width: 768px){
      color: #000;
      background-color: #fed502; 
  }
}

@media screen and (max-width: 768px){
    // width: 100%;
    text-align: center;
    transition: all 0.5s ease-out;
  }
`

export const HeaderSection=styled.section`
height: 540px;
display: flex;
padding: 0 1.5rem;
align-items: center;
text-align: center;
flex-direction: column;

.header-arrow{
  transform: translateY(7.7058px);
}
`


export const Title=styled.h1`
color: #fff;
font-weight: 900;
font-size: 5.5rem
text-align: center;
margin-bottom: 5rem;
letter-spacing: .50rem;
text-transform: uppercase;
font-family: 'Fraunces', serif;
transition: all .22s ease-in-out;
`

export const Arrowimage=styled.img`
// transform: translateY(453.069px);
`

export const Figure=styled.div`
top: -1rem;
position: relative;
background-repeat: no-repeat;
background-position: center;




// @media screen and (max-width: 600px){
//   margin: 0;
// }
`

// style={{transform: 'translateY(-453.069px)'}}

