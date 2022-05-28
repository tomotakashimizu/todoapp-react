# Memo

## 環境構築

### React の project を作成

`npx create-react-app todoapp-react`

### prettier を導入

1. `npm install --save-dev --save-exact prettier`
2. `.prettierrc` を作成
3. `.prettierignore` を作成

### eslint を導入

1. `npm install --save-dev eslint eslint-config-prettier eslint-plugin-prettier`
2. `.eslintrc.json` を作成

### VSCode の設定

1. `.vscode/settings.json` を作成
2. `.vscode/extensions.json` を作成
3. `.gitignore` に下記を追記

```
# VSCode
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json
!.vscode/*.code-snippets
```

## prettier

prettier でコード整形: `npx prettier --write .`
