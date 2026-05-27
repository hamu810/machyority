# アフィリエイト開始手順書

このファイルは、あなたがこのサイトを実際に公開して、アフィリエイトを始めるための作業手順をまとめたものです。

対象日: 2026年5月26日

## 全体の流れ

1. サイトを無料で公開する
2. サイト内の運営者情報を自分用に変更する
3. 公開URLをサイト設定ファイルへ反映する
4. AmazonアソシエイトまたはA8.netに登録する
5. 発行されたアフィリエイトリンクをサイトへ入れる
6. スマホで表示確認する
7. 公開して運用を始める

---

## 1. サイトを無料で公開する

無料で公開するなら、まずは `Netlify` か `GitHub Pages` が簡単です。

おすすめ:

- すぐ公開したいなら `Netlify`
- GitHubも使いたいなら `GitHub Pages`

### 方法A: Netlifyで公開する

1. Netlifyのサイトを開く
2. アカウントを作る
3. ログインする
4. `Add new site` を押す
5. `Deploy manually` を選ぶ
6. 今のフォルダ `c:\Users\user\OneDrive\afel` の中身をドラッグ&ドロップする
7. 数十秒待つ
8. 公開URLが発行される

発行されるURLの例:

`https://xxxxxx.netlify.app`

このURLは後で使うので、必ずメモしてください。

### 方法B: GitHub Pagesで公開する

1. GitHubでアカウントを作る
2. GitHubで新しいリポジトリを作る
3. このフォルダの中身をアップロードする
4. GitHubのリポジトリ画面で `Settings` を開く
5. 左メニューの `Pages` を開く
6. `Deploy from a branch` を選ぶ
7. ブランチは `main` を選ぶ
8. フォルダは `/root` を選ぶ
9. 保存する
10. 数分待つ
11. 公開URLが発行される

発行されるURLの例:

`https://あなたのユーザー名.github.io/リポジトリ名/`

このURLも必ずメモしてください。

---

## 2. サイト内の運営者情報を自分用に変更する

編集するファイル:

`affiliate-links.js`

開いたら、最初の `siteProfile` を自分の情報に変えてください。

今の状態:

```js
const siteProfile = {
  siteName: "Forge Supplements",
  operatorName: "あなたの名前または屋号",
  contactEmail: "your-email@example.com",
  siteUrl: "https://example.com",
};
```

変更例:

```js
const siteProfile = {
  siteName: "Forge Supplements",
  operatorName: "山田太郎",
  contactEmail: "sample@example.com",
  siteUrl: "https://xxxxxx.netlify.app",
};
```

### ここで決めるもの

- `siteName`
  サイト名です。今のままでも大丈夫です。

- `operatorName`
  あなたの名前、または屋号です。

- `contactEmail`
  問い合わせ用メールアドレスです。

- `siteUrl`
  さきほど取得した公開URLです。

---

## 3. 公開URLを設定ファイルへ反映する

編集するファイルは2つです。

- `robots.txt`
- `sitemap.xml`

### robots.txt を編集

今の記述:

```txt
Sitemap: https://example.com/sitemap.xml
```

例:

```txt
Sitemap: https://xxxxxx.netlify.app/sitemap.xml
```

### sitemap.xml を編集

今の記述:

```xml
<loc>https://example.com/</loc>
```

例:

```xml
<loc>https://xxxxxx.netlify.app/</loc>
```

この2つは、公開URLに必ず変えてください。

---

## 4. AmazonアソシエイトかA8.netに登録する

最初は `Amazonアソシエイト` か `A8.net` のどちらか1つで十分です。

おすすめ:

- Amazonの商品をそのまま紹介したいなら `Amazonアソシエイト`
- 他の案件も探したいなら `A8.net`

### Amazonアソシエイトに登録する場合

1. Amazonアソシエイトの公式ページを開く
2. Amazonアカウントでログインする
3. 申請を進める
4. サイトURLの入力欄で、自分の公開URLを登録する
5. サイト内容を入力する
6. 審査用の情報を送信する

注意:

- Amazonは開示文言が必要です
- 180日以内に3件の適格販売が目安です
- アソシエイトリンクを使うURLは登録対象です

### A8.net に登録する場合

1. A8.netの公式ページを開く
2. メディア会員登録をする
3. サイト情報に公開URLを登録する
4. ログイン後、紹介したい案件を探す
5. 提携申請できる案件は申請する
6. 提携完了後に広告リンクを取得する

注意:

- A8.net は無料登録できます
- 案件によって審査あり、審査なしがあります

---

## 5. 発行されたアフィリエイトリンクをサイトへ入れる

編集するファイル:

`affiliate-links.js`

下の `affiliateLinks` の `url` に、正式なアフィリエイトリンクを入れます。

今の状態:

```js
const affiliateLinks = {
  whey: {
    url: "",
    fallbackUrl: "https://www.amazon.co.jp/s?k=whey+isolate",
  },
  creatine: {
    url: "",
    fallbackUrl: "https://www.amazon.co.jp/s?k=creatine+monohydrate",
  },
  eaa: {
    url: "",
    fallbackUrl: "https://www.amazon.co.jp/s?k=EAA+supplement",
  },
  preworkout: {
    url: "",
    fallbackUrl: "https://www.amazon.co.jp/s?k=pre+workout+supplement",
  },
};
```

変更例:

```js
const affiliateLinks = {
  whey: {
    url: "https://www.amazon.co.jp/dp/XXXXXXXXXX?tag=yourtag-22",
    fallbackUrl: "https://www.amazon.co.jp/s?k=whey+isolate",
  },
  creatine: {
    url: "https://www.amazon.co.jp/dp/YYYYYYYYYY?tag=yourtag-22",
    fallbackUrl: "https://www.amazon.co.jp/s?k=creatine+monohydrate",
  },
  eaa: {
    url: "https://example.a8.net/some-link",
    fallbackUrl: "https://www.amazon.co.jp/s?k=EAA+supplement",
  },
  preworkout: {
    url: "https://example.a8.net/another-link",
    fallbackUrl: "https://www.amazon.co.jp/s?k=pre+workout+supplement",
  },
};
```

### ポイント

- `url` が空だと一般リンクのままです
- `url` に正式リンクを入れると、そのボタンがアフィリエイトリンクになります
- 4つ全部埋めなくても始められます

まずは1つだけでも正式リンクに変えれば大丈夫です。

---

## 6. スマホで表示確認する

これは必ずやってください。

確認ポイント:

1. 見出しが切れていないか
2. ボタンが押しやすいか
3. 商品カードが読みにくくないか
4. ポリシーや運営者情報が崩れていないか
5. 各ボタンが正しいリンク先へ飛ぶか

### 確認方法

- PCのブラウザで開く
- 幅を狭めてスマホサイズにする
- できれば実際のスマホでも開く

---

## 7. 公開後にASP側でやること

これは見落としやすいです。

### Amazonアソシエイト

1. 管理画面にログインする
2. 登録URLが正しいか確認する
3. 必要なら公開URLを追加登録する
4. 発行リンクが正しく動くか確認する

### A8.net

1. 管理画面にログインする
2. 登録サイトURLが正しいか確認する
3. 広告掲載URLの設定が必要なら追加する
4. 提携済み案件のリンクが正しいか確認する

---

## 8. このサイトでやってはいけないこと

安全に運用するために、次は避けてください。

- サプリの効果を断定する
- 「絶対に筋肉がつく」など言い切る
- 価格を固定表示して放置する
- 正式リンクではないのに成果が出ると思って放置する
- 広告表記を消す

---

## 9. 最低限ここまで終われば開始できる

次の5つが終われば、アフィリエイト開始ラインです。

1. サイトが公開されている
2. `affiliate-links.js` の運営者情報が自分のものになっている
3. `robots.txt` と `sitemap.xml` が本番URLになっている
4. 少なくとも1つは正式アフィリエイトリンクが入っている
5. スマホ表示を確認している

---

## 10. 迷ったら最初はこの順番でやる

最短手順:

1. Netlifyで公開
2. 公開URLをメモ
3. `affiliate-links.js` の `siteProfile` を修正
4. `robots.txt` と `sitemap.xml` を修正
5. Amazonアソシエイトに登録
6. 1商品だけ正式リンクを取得
7. `affiliate-links.js` に貼る
8. スマホで確認
9. 公開継続

---

## 11. 公式サイト

Amazonアソシエイト:

https://affiliate.amazon.co.jp/

Amazon開示文言:

https://affiliate.amazon.co.jp/help/node/topic/GPXFHVYZMTGPUMPE

AmazonURL登録案内:

https://affiliate.amazon.co.jp/help/node/topic/GM3CX5D6DSLGVSJD

A8.net:

https://www.a8.net/

A8.net サポート:

https://support.a8.net/

消費者庁 ステマ規制Q&A:

https://www.caa.go.jp/policies/policy/representation/fair_labeling/faq/stealth_marketing/
