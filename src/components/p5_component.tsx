import React, { useEffect } from "react";
import { ReactP5Wrapper, Sketch } from "react-p5-wrapper";

export class P5Canvas extends React.Component<{sketch:Sketch}>{
    render(): React.ReactNode {
        return <ReactP5Wrapper sketch={this.props.sketch} ></ReactP5Wrapper>
    }
}

//module.exports=P5Canvas