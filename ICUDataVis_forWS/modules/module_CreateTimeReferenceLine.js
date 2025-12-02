import * as THREE from "three";
//文字を表示
import { TextSprite } from "./module_TextSprite.js";
export { TimeReferenceLine };

class TimeReferenceLine {
  constructor(
    linewidth,
    color,
    scale,
    width,
    depth,
    periodMin,
    periodMax,
    center_pos,
    fontSize) {
    this.color = color;
    this.linewidth = linewidth;
    //時間の補助線を用意する
    this.lineArray = [];
    // this.period_hour = 24 * 30 * 12;
    this.period_day = getTimeDiff(periodMin, periodMax) / (60 * 60) / 24;
    // this.cycle_hour = 24;

    // 白いマテリアルの生成
    this.date_line_material = new THREE.LineBasicMaterial({
      color: this.color,
      linewidth: 0.01, //this.linewidth
      blending: THREE.AdditiveBlending,
    });
    // 3頂点を持つジオメトリの生成


    for (let day = 0; day < this.period_day; day += 1) {
      this.points = [];
      let day_date = new Date(periodMin);
      day_date.setDate(day_date.getDate() + day);
      this.n_date = normalizeDate(day_date, periodMin, periodMax)
      this.points.push(
        new THREE.Vector3(
          width * scale,
          center_pos.y,
          this.n_date * depth
        )
      );
      this.points.push(
        new THREE.Vector3(
          0,
          center_pos.y,
          this.n_date * depth
        )
      );

      this.date_line_geometry = new THREE.BufferGeometry().setFromPoints(
        this.points
      );
      // ラインの生成
      this.date_line = new THREE.Line(
        this.date_line_geometry,
        this.date_line_material
      );
      this.lineArray.push(this.date_line);
      scene.add(this.date_line);

      //日付を表示する
      //console.log(day_date.toLocaleDateString())
      this.textSprite = new TextSprite(
        0,
        center_pos.y,
        this.n_date * depth,
        2000,
        280,
        fontSize,
        day_date.toLocaleDateString());
      scene.add(this.textSprite.sprite)
    }
  }
  update() {
    for (let day = 0; day < this.lineArray.length; day++) {
      for (
        let i = 0;
        i < this.lineArray[day].geometry.attributes.position.array.length;
        i++
      ) {
        if (i == 1 || i == 4 || i == 7) {
          this.lineArray[day].geometry.attributes.position.array[i] =
            this.n_date * maxHeight
        }
      }
      //更新を通知するフラグ
      this.lineArray[hour].geometry.attributes.position.needsUpdate = true;
    }
  }
}

//指定した範囲に値を丸める（processingのmap関数と同じ）　https://twilightdve.hatenablog.com/entry/2014/06/23/142555
function map(value, originMin, originMax, targetMin, targetMax) {
  return (
    targetMin +
    (targetMax - targetMin) * ((value - originMin) / (originMax - originMin))
  );
}

//時刻の差を取得する
function getTimeDiff(date1, date2) {
  var diffTime = date2.getTime() - date1.getTime();
  var diffSecond = Math.floor(diffTime / 1000);
  return diffSecond;
}


//時間を正規化する
function normalizeDate(date, min, max) {
  const n_date = map(
    new Date(date).getTime(),
    min.getTime(),
    max.getTime(),
    0,
    1
  );
  return n_date;
}
//数値を正規化する
function normalizeNumber(number, min, max) {
  const n_date = map(
    number,
    min,
    max,
    0,
    1
  );
  return n_date;
}
// 座標をスケールする
function scalePosition(x, y, z, scale) {
  const scaledX = x * scale;
  const scaledY = y * scale;
  const scaledZ = z * scale;
  return { x: scaledX, y: scaledY, z: scaledZ };
}