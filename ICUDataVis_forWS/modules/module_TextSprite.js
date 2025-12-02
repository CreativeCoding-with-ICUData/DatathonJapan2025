import * as THREE from "three";
// ここからがSprite関係
export { TextSprite }

class TextSprite {
  constructor(pos_x, pos_y, pos_z, canvasWidth, canvasHeight, fontSize, text) {
    const scaleMaster = 50;
    const highResCanvasWidth = canvasWidth * 4; // 解像度を4倍に
    const highResCanvasHeight = canvasHeight * 4; // 解像度を4倍に
    const canvas = this.createCanvasForTexture(highResCanvasWidth, highResCanvasHeight, text, fontSize * 4); // フォントサイズも4倍に
    const canvasRectTexture = new THREE.CanvasTexture(canvas);
    canvasRectTexture.anisotropy = 16; // テクスチャの異方性フィルタリングを有効に
    this.sprite = this.createSprite(
      canvasRectTexture,
      {
        x: scaleMaster,
        y: scaleMaster * (canvasHeight / canvasWidth),
        z: scaleMaster,
      },
      { x: pos_x, y: pos_y, z: pos_z }
    );
  }

  createCanvasForTexture(canvasWidth, canvasHeight, text, fontSize) {
    const canvasForText = document.createElement('canvas');
    const ctx = canvasForText.getContext('2d');
    ctx.canvas.width = canvasWidth;
    ctx.canvas.height = canvasHeight;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.0)';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = 'white';
    ctx.font = `${fontSize}px sanserif`;
    ctx.fillText(
      text,
      (canvasWidth - ctx.measureText(text).width) / 2,
      canvasHeight / 2 + ctx.measureText(text).actualBoundingBoxAscent / 2
    );
    return canvasForText;
  };

  createSprite(texture, scale, position) {
    const spriteMaterial = new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: false });
    const sprite = new THREE.Sprite(spriteMaterial);
    sprite.scale.set(scale.x, scale.y, scale.z);
    sprite.position.set(position.x, position.y, position.z);
    return sprite;
  };
}
