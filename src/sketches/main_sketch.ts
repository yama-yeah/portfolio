


export function mainSketch(p5: any) {
  var params: any[] = [];
  const n = 8;
  var a = 0;
  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL);
    for (let index = 0; index < n; index++) {
      params = params.concat([[p5.random(0, 255), p5.random(0, 255), p5.random(0, 255)]]);
    }
  };
  p5.draw = () => {
    p5.background(100);
    p5.noFill();
    p5.strokeWeight(15)
    //p5.stroke(60);
    //p5.normalMaterial();
    //p5.stroke(126);
    for (let index = 0; index < n; index++) {
      const element = params[index];
      p5.push();
      p5.rotateZ(p5.frameCount * 0.01 + element[0]);
      p5.rotateX(p5.frameCount * 0.01 + element[1]);
      p5.rotateY(p5.frameCount * 0.01 + element[2]);
      
      p5.box(1300);//
      p5.pop();
    }
  };
}
