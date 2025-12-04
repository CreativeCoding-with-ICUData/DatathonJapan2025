# 概要
*  DatathonJapan2025内ハンズオンセミナー「データ可視化の最前線：生体情報モニターデータを３次元動的可視化でリデザイン」で使用する資料です。

# 環境構築
*  [HANDS-ON SEMINARS事前準備.pdf](https://github.com/CreativeCoding-with-ICUData/DatathonJapan2025/blob/main/HANDS-ON%20SEMINARS%E4%BA%8B%E5%89%8D%E6%BA%96%E5%82%99.pdf)を参考に準備をお願いします
*  [VisualStudio Code](https://azure.microsoft.com/ja-jp/products/visual-studio-code)のインストールが必要です（VSCodeと互換性のある[Cursor](https://cursor.com/ja)や使い慣れているウェブ開発ツールでもOK）
*  VSCodeのエクステンションである「Live Server」をインストール
*  ウインドウ右下の「Go Live」ボタン押下、またはCtrl＋Shft＋Pで出てくる候補から「Live Server:Open With Live Server」を選択
*  自動でブラウザが立ち上がり実行されます

# コードについて
## ファイル構成
* section2-1-threeJSBasic1-filled.html : ThreeJSの基本テンプレ
* section2-2-threeJSBasic2-filled.html : ThreeJSの基本テンプレ２
* section2-3-addCube-filled.html : ThreeJSを使った簡単な図形描画サンプル
* section2-4-camera-filled.html : ThreeJSのカメラのサンプル
* section2-5-animation-filled.html : ThreeJSのアニメーションのサンプル
* section3-1-dataImport-filled.html : CSVインポートのサンプル
* section3-2-dataVisualize-filled.html : インポートしたデータを用いたThreeJSのサンプル
* section3-3-dataVisualizeColor-filled.html : インポートしたデータから色を変化させるサンプル
* section4-1-progression-filled.html : インポートしたデータとアニメーションを組み合わせたサンプル
* section4-2-halfPipe-filled.html : インポートしたデータから図形を変形させるサンプル
* その他のhtml：作業用ファイル

## 基本的な処理の流れ
* csvファイルを読み込む（csvFilesObj.k6eまたは.RIOでデータにアクセス）
* 各パラメーターごとに値を格納する配列を用意
* データ一行ずつ処理を行い、座標と色情報を配列に格納
* 格納した座標と色の配列を元に各パラメーターごとに点と線のオブジェクトを追加
* 各パラメーターごとに動く点のオブジェクトを追加
   
## 補足
* ★がついているところをコメントアウトしたりして、見え方を切り替えられます。
* カメラがアニメーションで動いている間は、右ドラックで向いている方向を変えられます。アニメーションを停めたら自由に移動できます。


