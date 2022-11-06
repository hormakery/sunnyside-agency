import styled from "styled-components";

export const FooterWrapper=styled.footer`
display: flex;
align-items: center;
padding: 4rem 6rem;
flex-direction: column;
justify-content: center;
background-color: #90d4c6;
transition: .5s all ease-in-out;


.logo{
    width: 50%;
    margin-bottom: 2rem;
}
`

export const ContactUs=styled.div`
display: flex;
// margin-bottom: 4rem;
justify-contents: space-between;


.contact-link{
    color: #2c7364;
    font-weight: 500; 
    margin: 0 1.5rem;
    text-decoration: none;

    :hover{
        color: #fff;
    }
}
`

export const Icons=styled(ContactUs)`
margin-top: 5rem;
.icons{
    margin: 0 1.5rem;

    :hover{
        color: #fff;
    }
}
`