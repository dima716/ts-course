interface RenderImplementation {
  drawCircle(x: number, y: number, radius: number, options?: any): void;

  drawRectangle(
    x: number,
    y: number,
    width: number,
    height: number,
    options?: any
  ): void;
}

class SvgRenderer implements RenderImplementation {
  drawCircle(x: number, y: number, radius: number, options?: any): void {
    console.log(
      `SVG: Drawing circle at (${x}, ${y}) with radius ${radius}. Options:`,
      options
    );
  }

  drawRectangle(
    x: number,
    y: number,
    width: number,
    height: number,
    options?: any
  ): void {
    console.log(
      `SVG: Drawing rectangle at (${x}, ${y}) with width ${width} and height ${height}. Options:`,
      options
    );
  }
}

class CanvasRenderer implements RenderImplementation {
  drawCircle(x: number, y: number, radius: number, options?: any): void {
    console.log(
      `Canvas: Drawing circle at (${x}, ${y}) with radius ${radius}. Options:`,
      options
    );
  }

  drawRectangle(
    x: number,
    y: number,
    width: number,
    height: number,
    options?: any
  ): void {
    console.log(
      `Canvas: Drawing rectangle at (${x}, ${y}) with width ${width} and height ${height}. Options:`,
      options
    );
  }
}

abstract class Renderer {
  protected implementation: RenderImplementation;

  constructor(implementation: RenderImplementation) {
    this.implementation = implementation;
  }

  setImplementation(implementation: RenderImplementation) {
    this.implementation = implementation;
  }

  abstract renderCircle(x: number, y: number, radius: number): void;

  abstract renderRectangle(
    x: number,
    y: number,
    width: number,
    height: number
  ): void;
}

class SimpleRenderer extends Renderer {
  renderCircle(x: number, y: number, radius: number) {
    this.implementation.drawCircle(x, y, radius);
  }

  renderRectangle(x: number, y: number, width: number, height: number) {
    this.implementation.drawRectangle(x, y, width, height);
  }
}

class DetailedRenderer extends Renderer {
  renderCircle(x: number, y: number, radius: number) {
    const options = { shadow: true, gradient: 'radial' };
    this.implementation.drawCircle(x, y, radius, options);
  }

  renderRectangle(x: number, y: number, width: number, height: number) {
    const options = { gradient: 'linear' };
    this.implementation.drawRectangle(x, y, width, height, options);
  }
}

const simpleRenderer = new SimpleRenderer(new CanvasRenderer());
simpleRenderer.renderCircle(1, 2, 50);
simpleRenderer.renderRectangle(0, 0, 100, 200);

simpleRenderer.setImplementation(new SvgRenderer());

simpleRenderer.renderCircle(1, 2, 50);
simpleRenderer.renderRectangle(0, 0, 100, 200);

const detailedRenderer = new DetailedRenderer(new SvgRenderer());
detailedRenderer.renderCircle(1, 2, 50);
detailedRenderer.renderRectangle(0, 0, 100, 200);

detailedRenderer.setImplementation(new CanvasRenderer());

detailedRenderer.renderCircle(1, 2, 50);
detailedRenderer.renderRectangle(0, 0, 100, 200);
