import * as React from "react"
import { HeadFC, Link } from "gatsby"
import { css, Global } from "@emotion/react"
import styled from "@emotion/styled"
import { mainSketch } from "../sketches/main_sketch"
import loadable from "@loadable/component"

const P5c = loadable(() => import('react-p5-wrapper'), {
  resolveComponent: (components) => components.ReactP5Wrapper,
  ssr: false,
})
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
    <P5c sketch={mainSketch} />
    <OverFlowWrapper>
      <TitleStacker>
        <WhiteText>Antman Portfolio / </WhiteText>
        <h2 style={{ display: 'inline', color: 'white' }}>
          Likes: Flutter MachineLearning Linux / <Link to="https://zenn.dev/antman" target="_blank" style={{ color: 'white' }}>Zenn</Link> / <Link target="_blank" to="https://github.com/yama-yeah" style={{ color: 'white' }}>GitHub </Link> / <Link target="_blank" to="https://pub.dev/publishers/hiyoko.ga/packages" style={{ color: 'white' }}>pub.dev</Link> / <Link to="https://atcoder.jp/users/unkonown" style={{ color: 'white' }}>AtCoder</Link> / <Link target="_blank" to="https://www.kaggle.com/askeeee" style={{ color: 'white' }}>Kaggle</Link>
        </h2>
      </TitleStacker>
    </OverFlowWrapper>
    <h1>
      this site is a sample Portfolio<br />
      plz review :-)
    </h1>
  </Body>)
export default IndexPage

export const Head: HeadFC = () => <title>Antman Portfolio</title>
