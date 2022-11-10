# THEOplayer Web Demo App with Nuxt 3

このリポジトリでは、サービスのWeb サイト用に THEOplayer Web SDK と統合された実用的なアプリケーションとして、THEOplayer プレーヤー デモ Web アプリケーションを紹介します。

THEOplayer は、THEO Technologies によって開発されたユニバーサル ビデオ プレーヤー ソリューションです。 THEOplayer は、複数のプラットフォーム (HTML5 (Web)、Apple iOS、Apple tvOS、Google Android、Google Android TV、Samsumg Tizen、LG webOS、Amazon FireTV、ROKU など) 用のプレーヤー SDK を提供し、HLS、MPEG-DASH、広告、DRM などを様々な機能をサポートします。

このデモ Web アプリは Nuxt 3、Vue 3、および、Vuetify 3 フレームワークと統合されており、THEOplayer Web SDK で複数のビデオ ストリームの例を再生します。

![Screenshot of THEOplayer Demo Web App](./featured-screenshot-theoplayer-demo-webapp.png)

このデモ Web アプリは Netlify にデプロイされます。デモ サイト [https://theoplayer.demo.liveinstantly.cloud/](https://theoplayer.demo.liveinstantly.cloud/) にアクセスして確認してみてください。

現時点では、THEOplayer Web SDK のデモンストレーションはビデオ ストリームの例のみを使用していますが、THEOplayer Web SDK のより多くの機能とシナリオをデモンストレーションするために、すぐにさらに多くの例を追加する予定です。

## このウェブアプリの使い方

このリポジトリは、この Web アプリを実装する Nuxt 3 Minimal Starter テンプレートをベースに開発しました。

Nuxt 3 の詳細については、[nuxt 3 ドキュメント](https://v3.nuxtjs.org) を参照してください。

### セットアップ

最小にパッケージの依存関係を必ずインストールしてください。

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

### 開発サーバー

http://localhost:3000 で開発サーバーを起動します。

```bash
# yarn
yarn dev

# npm
npm run dev
```

### 本番用のビルド

本番用のアプリケーションをビルドします。

```bash
# yarn
yarn build

# npm
npm run build
```

本番ビルドをローカルでプレビューするには以下を実行します:

```bash
# yarn
yarn preview

# npm
npm run preview
```

### THEOplayer Web SDK コンポーネントを使用する

この Web アプリは、THEO によって発行された LiveInstantly が管理する THEOplayer Web SDK コンポーネントを使用しています。独自に管理している THEOplayer Web SDK コンポーネントを参照するには、THEOplayer Web SDK のリンクを変更する必要があります。

また、THEOplayer Web SDK ライセンス コードを指定する必要があります。ローカル テストでは、このリポジトリのルート フォルダーに .env ファイルを作成して、THEOplayer Web SDK コンポーネントがコンテンツ再生を機能させるためのライセンス コードを取得できるようにします。

```shell
NUXT_PUBLIC_THEOPLAYER_LICENSE="<ライセンスコード BASE64 文字列>"
```

### Netlify にデプロイする

このリポジトリは、この Web アプリケーションを Netlify ホスティング サービスにデプロイするための netlify.toml 構成ファイルを提供します。

THEOplayer ライセンスについては、Netlify サイトで **NUXT_PUBLIC_THEOPLAYER_LICENSE** 環境変数を設定できます。

### その他のメモ

その他の補足情報は以下の通りです:

* この Web アプリは、マテリアル デザイン コンポーネントに Vuetify 3 を使用します。
