import * as THREE from "three";
export { MovingPoint };



class MovingPoint {
  constructor(positionArray,colorArray,texture) {
    this.positionArray = positionArray;
    this.colorArray = colorArray;
    this.spriteMaterial = new THREE.SpriteMaterial({ map: texture,blending: THREE.AdditiveBlending ,color:this.colorArray[0]});
    this.object = new THREE.Sprite(this.spriteMaterial);
    this.object.position.set(positionArray[0]);
  }



  update(count) {
    if (count >= 0 && count < this.positionArray.length) {
      let pos = this.positionArray[count];
      this.object.position.set(pos.x, pos.y, pos.z);
      let color = this.colorArray[count];
      this.spriteMaterial.color = color;
    } else {
      console.error('Count is out of bounds of the positionArray');
    }
  }
}
