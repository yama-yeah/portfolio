import * as React from "react"
import type { HeadFC } from "gatsby"
import { P5Canvas } from "../components/p5_component"
import { testSketch } from "../sketches/test_sketch"
import { css, Global } from "@emotion/react"
import styled from "@emotion/styled"

const Body = styled.body({
  margin: 0,
  padding: 0,
})

const OverFlowWrapper = styled.div`overflow: hidden;`;
const TitleStacker = styled.div`
position:absolute;
top:0;

`;

const WhiteText = styled.h1`
color:white;
display:inline;
`

const IndexPage = () => (
  <Body>
    <Global styles={{ body: css`padding:0;margin:0px;` }} />
    <OverFlowWrapper>
      <P5Canvas sketch={testSketch} />
      <TitleStacker>
        <WhiteText>Antman Portfolio</WhiteText><h2 style={{display:'inline'}}> github</h2>
      </TitleStacker>
    </OverFlowWrapper>
    <h1>
      this site is a sample Portfolio<br/>
      plz review :-)
    </h1>
  </Body>);

export default IndexPage

export const Head: HeadFC = () => <title>Antman Portfolio</title>
