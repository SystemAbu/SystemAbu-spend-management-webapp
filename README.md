# README
## 環境構築
1. クローン。

2. developブランチにチェックアウト。

3. 以下のコマンドを実行してデータベースを作成。
```
$ docker compose run frontend rails db:create
```

4. 以下のコマンドを実行。
```
$ docker compose up -d
```

5. 検索エンジンで`localhost`にアクセスし、Railの初期画面が表示されることが確認できたら完了。

## アタッチの準備
1. アタッチをするための拡張機能をvscodeにインストールする。
* **name**: Remote Development
* **Unique Identifier**: ms-vscode-remote.vscode-remote-extensionpack

2. vscodeの画面左下にある >< マークを選択した後`Add Dev Container Configuration Files...(開発コンテナー構成ファイルを追加...)`を選択。
3. compose.yamlを選択。
4. appを選択。
5. 追加する拡張機能は何も選択しない。(今後追加する可能性がある。そのときはdevcontainer.jsonを編集することで拡張機能を追加する。)
6. 開発コンテナが起動し、アタッチされたら完了。(かなり時間がかかる可能性あり)
