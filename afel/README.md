# Forge Supplements

筋トレ向けサプリ紹介の静的サイトです。`index.html` と `style.css` だけで動くので、無料ホスティングへそのまま公開できます。

## ファイル構成

- `index.html`: サイト本体
- `style.css`: デザイン
- `robots.txt`: 検索エンジン向け設定
- `sitemap.xml`: サイトマップ
- `.nojekyll`: GitHub Pages でそのまま配信するための補助ファイル

## 無料で公開する方法

### 1. GitHub Pages

1. GitHub で新しいリポジトリを作成
2. このフォルダの中身をアップロード
3. GitHub の `Settings` を開く
4. `Pages` を開く
5. `Deploy from a branch` を選ぶ
6. `main` ブランチの `/root` を選んで保存
7. 数分待つと公開URLが発行されます

### 2. Netlify

1. Netlify にログイン
2. `Add new site` から `Deploy manually` を選ぶ
3. このフォルダの中身をドラッグ&ドロップ
4. 数十秒で公開URLが発行されます

## 公開後に必ずやること

1. `robots.txt` の `https://example.com/sitemap.xml` を本番URLへ変更
2. `sitemap.xml` の `https://example.com/` を本番URLへ変更
3. `affiliate-links.js` の `siteProfile` をあなたの情報へ変更
4. `affiliate-links.js` の `affiliateLinks.*.url` に正式なアフィリエイトリンクを設定
5. AmazonやASPの審査通過後、必要に応じて紹介商品や文言を見直す

## 無料かどうか

このサイト自体は無料で公開できます。GitHub Pages と Netlify はどちらも無料枠で使えます。

ただし、次は有料になる場合があります。

- 独自ドメインを使う場合
- 有料画像素材を使う場合
- 将来的に高機能な解析やメール配信を使う場合

## アフィリエイト運用メモ

- 今のボタンは、`affiliate-links.js` に正式リンクを入れるまで一般リンクのままです
- サプリの効果を断定しない表現を維持してください
- 価格や成分は変更されるため、定期的な見直しがおすすめです

## アフィリエイト開始前の最終チェック

1. `affiliate-links.js` の `siteName` `operatorName` `contactEmail` `siteUrl` を更新
2. 公開URLを取得して、`robots.txt` と `sitemap.xml` の `example.com` を差し替え
3. AmazonアソシエイトやA8.netへ登録し、発行された正式リンクを `affiliate-links.js` へ貼る
4. サイトを公開したURLをASP側へ登録する
5. 表示崩れがないかスマホで確認する
