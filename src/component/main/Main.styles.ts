import styled from "styled-components";

export const Layout=styled.main`
display: flex;
flex-direction:Column;
`

export const Contentwrapper=styled.div`
height: 100%;
width: 100%;
border: 1px solid green;

`

export const SectionOne=styled.div`
width: 100%;
display flex;
height: 500px;
background-color: #fed502;


@media screen and (max-width: 820px){
    height: auto;
    flex-direction: column-reverse;
}


`

export const Contentrow=styled.div`
width: 50%;
display: flex;
flex-wrap: wrap;
background-color: #fff;
justify-content: flex-end;
padding: 9.85rem 6.5rem 0 2rem;
transition: all .15s ease-in-out;

@media screen and (max-width: 600px){
    padding: 3.85rem 0.8rem 0 0.8rem;
}

@media screen and (max-width: 820px){
    width: 100%;
    padding: 1rem;
    height: fit-content;
    justify-content: center;
}


@media screen and (max-width: 1024px){
    padding: 5.85rem 3rem 0 3rem;
}

`

export const ContentImage=styled.div`
width: 50%;
height: 500px;
display: flex;
align-items: center;
justify-content: center;
background-repeat: no-repeat;
background-position: center;
background-image: url(../images/desktop/image-transform.jpg);


@media screen and (max-width: 820px){
    width: 100%;
    height: 500px;
    background-size: cover;

}
`

export const Article=styled.article`
max-width: 450px;
margin-bottom: 3rem;

.learn-more{
    color: #2a3140;
    font-size: 1rem;
    font-weight: 800;
    bottom: 0.8rem;
    position: relative;
    text-decoration: none;
    letter-spacing: .035rem;
    text-transform: uppercase;
    font-family: 'Fraunces', serif;
}

@media screen and (max-width: 820px){
    width: 100%;
    display: flex;
    max-width: none;
    height: inherit;
    flex-wrap: wrap;
    padding: 5rem 3rem;
    text-align: center;
    align-items: center;
    justify-content: center;
}

@media screen and (max-width: 600px){
    padding: 3rem .5rem;
}
`

export const Title=styled.h2`
color: #2a3140;
font-size: 3rem;
font-weight: 800;
margin-bottom: 2.02rem;
letter-spacing: .053rem;
line-height: 3.06rem;
font-family: 'Fraunces', serif;



@media screen and (max-width: 600px){
    font-size: 1.9rem;
}

@media screen and (max-width: 920px){
    font-size: 2.2rem;
}
`

export const Paragraph=styled.p`
font-size: 1.1rem;
color: a7a5a7;
line-height: 1.6rem;
margin-bottom: 2rem;


@media screen and (max-width: 820px){
    margin: 0;
}
`

export const UnderLine=styled.div`
width: 136px;
height: 10px;
border: none;
border-radius: .4rem;
margin-top: 3.48rem;
background-color: #f6dfd7;
transition: all .15s ease-in-out;

:hover{
    background-color: #fb8071;
}

`

export const Underline=styled(UnderLine)`
background-color: #faf0bf;

:hover{
    background-color: #fed501;
}
`

export const SectionTwo=styled(SectionOne)`
background-color: #fe7a6b;
flex-direction: row-reverse;


.learn-graphics{
    color: #2a3140;
    font-size: 1rem;
    font-weight: 800;
    bottom: 1rem;
    position: relative;
    text-decoration: none;
    letter-spacing: .035rem;
    text-transform: uppercase;
    font-family: 'Fraunces', serif;
}


@media screen and (max-width: 820px){
    height: auto;
    flex-direction: column-reverse;
}
`

export const ContentrowTwo=styled(Contentrow)`

@media screen and (max-width: 1280px){
    padding: 5.85rem 3rem 0 4rem;
}

@media screen and (max-width: 600px){
    padding: 3.85rem 0.6rem 0 0.6rem;
}


`

export const ContentImage2=styled(ContentImage)`
background-image: url(../images/desktop/image-stand-out.jpg);
`

export const GraphicSection=styled(SectionOne)`
width: 100%;
height: 500px;
display: flex;
background-color: #9edbcb;
transition: all .15s ease-in-out;


@media screen and (max-width: 820px){
    flex-wrap: wrap;
    height: fit-content;
}


`

export const Contentsrow=styled.div`
width: 50%;
height: 500px;
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: flex-end;
background-repeat: no-repeat;
background-position: top left;
background-image: url(../images/desktop/image-graphic-design.jpg);

@media screen and (max-width: 820px){
    width: 100%;
    // padding: 1rem;
    // height: fit-content;
    // justify-content: center;
}

@media screen and (max-width: 1024px){
    background-position: 50%;
}
`

export const Contentrows=styled.div`
width: 50%;
height: 500px;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-end;
background-color: #57c5f9;
background-repeat: no-repeat;
background-position: top left;
background-image: url(../images/desktop/image-photography.jpg);


@media screen and (max-width: 820px){
    width: 100%;
  
}

@media screen and (max-width: 1024px){
    background-position: 50%;
}

`

export const Columnsection=styled.section`
margin-left:0;
margin-right: 11rem;
text-align: center;


@media screen and (max-width: 600px){
    padding: 0 0.8rem;
}

@media screen and (max-width: 1024px){
    margin: 0 auto 3.65rem auto;
}
`

export const Columnsections=styled.section`
margin-right:0;
margin-left: 11rem;
text-align: center;

@media screen and (max-width: 1024px){
    margin: 1.5rem auto 3.65rem auto;
}
}

`

export const GraphicTitle=styled.h3`
color: #2a3140;
font-size: 1.78rem;
text-align: center;
margin-bottom: 1.62rem;
letter-spacing: .03rem;
font-family: 'Fraunces', serif;
transition: all .15s ease-in-out;
`

export const Description=styled(Paragraph)`
max-width: 350px;
`

export const Testimony=styled.article`
width: 100%;
height: 750px;
display: flex;
align-items: center;
flex-direction: column;


@media screen and (max-width: 820px){
    flex-direction: column;
    height: fit-content;
}

@media screen and (max-width: 600px){
    padding: 0 1.5rem;
}
`

export const Testimonytitle=styled.h3`
color: #a7abae;
font-weight: 900;
font-size: 1.5rem;
text-align: center;
margin-top: 10.05rem;
letter-spacing: .357rem;
text-transform: uppercase;
font-family: 'Fraunces', serif;

@media screen and (max-width: 600px){
    margin: 4rem 0;
    font-size: 1.1rem;
}
`

export const Wrapper=styled.div`
width: 100%;
display: flex;
margin-top: 5rem;
align-items: center;
// padding: 0 0 0rem 2rem;
// justify-content: center;

@media screen and (max-width: 820px){
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

@media screen and (max-width: 600px){
    margin: 0;
    // padding: 0 0 1rem 1rem;
}
`

export const Testimonies=styled.div`
display: flex;
justify-content: space-between;


// @media screen and (max-width: 600px){
//     padding: 0 1.5rem;
// }

@media screen and (max-width: 820px){
    align-items: center;
    justify-content: center;
}
`

export const Card=styled.div`
display: flex;
// max-width: 350px;
text-align: center;
margin-left: 2rem;
flex-direction: column;

@media screen and (max-width: 820px){
    width: 100%;
    align-items: center;
    justify-content: center;
    margin: 0;
}
`

export const Quote=styled.blockquote`
color: #2c6b85;
font-size: 1.13rem;
line-height: 2rem;
`

export const Profile=styled.div`
display: flex;
margin-top: 4.35rem;
margin-right: 1rem;
flex-direction: column;


@media screen and (max-width: 600px){
    margin: 3rem 0 4rem 0;
}
`
export const Name=styled.h3`
margin-bottom: 0.7rem;
font-size: 1.145rem;
font-family: 'Fraunces', serif;
`
export const Position=styled.h4`
font-size: .88rem;
font-weight: 500;
color: #a7abae;
letter-spacing: -.005rem;
`

export const Img=styled.img`
width:  50px;
height: 50px;
margin-bottom: 3rem;
border-radius: 50%;
`

export const Photos=styled.div`
width: 100%;
display: flex;
height: 449px;


@media screen and (max-width: 820px){
    flex-wrap: wrap;
}

.pictures{
    width: 25%;
    background-size: cover;
    background-position: center bottom;
    background-image: url(../images/desktop/image-gallery-milkbottles.jpg);


    @media screen and (max-width: 820px){
        width: 50%;
        background-position: center;    
        background-image: url(../images/mobile/image-gallery-milkbottles.jpg);

    }


    &:nth-child(2){
        background-image: url(../images/desktop/image-gallery-orange.jpg);

        @media screen and (max-width: 820px){
            width: 50%;
            background-position: center;        
            background-image: url(../images/mobile/image-gallery-orange.jpg);
    
        }
    }

    &:nth-child(3){
        background-image: url(../images/desktop/image-gallery-cone.jpg);

        @media screen and (max-width: 820px){
            width: 50%;
            background-position: center;        
            background-image: url(../images/mobile/image-gallery-cone.jpg);
    
        }
    }

    :last-child{
        background-image: url(../images/desktop/image-gallery-sugarcubes.jpg);

        @media screen and (max-width: 820px){
            width: 50%;
            background-position: center;        
            background-image: url(../images/mobile/image-gallery-sugar-cubes.jpg);
    
        }
    }
}
`
