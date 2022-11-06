import React from 'react'
import { Link } from 'react-router-dom'
import { data } from '../data/Data'
import { DataType } from '../data/Data.interface'
import {
    Img,
    Card,
    Name,
    Title,
    Quote,
    Layout,
    Photos,
    Article,
    Wrapper,
    Profile,
    Testimony,
    Position,
    Underline,
    UnderLine,
    Paragraph,
    Contentrow,
    SectionOne,
    Testimonies,
    Contentrows,
    Contentsrow,
    SectionTwo,
    Description,
    GraphicTitle,
    Columnsection,
    ContentrowTwo,
    ContentImage,
    ContentImage2,
    Testimonytitle,
    GraphicSection,
    Contentwrapper,
    Columnsections,
} from './Main.styles'

const Main:React.FC<DataType>= () => {
  return (
    <Layout>
        <Contentwrapper>
            <SectionOne>
              <Contentrow>
                <Article>
                <Title>Transform your brand</Title>
                <Paragraph>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</Paragraph>

                <Underline>
                <Link to='#' className='learn-more'>Learn more</Link>
                </Underline>
                </Article>
              </Contentrow>

              <ContentImage>
                
              </ContentImage>
            </SectionOne>

           
            <SectionTwo>
              <ContentrowTwo>
                <Article>
                  <Title>Stand out to the right audience</Title>
                  <Paragraph>Using a collaborative formula of designers, researchers, photographers
                    , videographers, and copywriters, we'll build and extend your brand in digital places.
                  </Paragraph>

                  <UnderLine>
                  <Link to='#' className='learn-graphics'>Learn more</Link>
                  </UnderLine>
                </Article>
              </ContentrowTwo>

              <ContentImage2>
                {/* <Image src='../images/desktop/image-stand-out.jpg' alt=''/> */}
              </ContentImage2>
              
            </SectionTwo>

            <GraphicSection>
              <Contentsrow>
                <Columnsection>
                <GraphicTitle>Graphic Design</GraphicTitle>
                <Description>Great design makes you memorable.We deliver artwork that undersource your brand message and captures potential client attention. </Description>
                </Columnsection>
              </Contentsrow>

              <Contentrows>
                <Columnsections>
                  <GraphicTitle>Photography</GraphicTitle>
                  <Description>Increase your credibility by getting most stunning high-quality photos that improve your business image.</Description>
                </Columnsections>
              </Contentrows>
            </GraphicSection>
        </Contentwrapper>

        <Testimony>
          <Testimonytitle>Clients Testimonials</Testimonytitle>

        <Wrapper>
          {data.map((data)=>(
            <Testimonies>
            <Card key={data.id}>
              <picture>
                <Img src={data.image} alt='emily photo'/>
              </picture>

              <Quote>{data.quote}</Quote>

              <Profile>
                <Name>
                  {data.name}
                </Name>

                <Position>
                  {data.position}
                </Position>
              </Profile>
            </Card>
          </Testimonies>
          ))}
          </Wrapper>
        </Testimony>


        <Photos>
            <picture className='pictures'>
            </picture>

            <picture className='pictures'>
            </picture>

            <picture className='pictures'>
            </picture>

            <picture className='pictures'>
            </picture>
        </Photos>
    </Layout>
  )
}

export default Main