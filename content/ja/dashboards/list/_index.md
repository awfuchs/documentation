---
description: リストによるダッシュボードの整理と管理
disable_toc: false
further_reading:
- link: serverless/enhanced_lambda_metrics
  tag: ドキュメント
  text: ダッシュボードの概要
- link: dashboards/guide/maintain-relevant-dashboards
  tag: ガイド
  text: 適切なダッシュボードを維持するためのベストプラクティス
title: ダッシュボードリスト
---

## 概要

ダッシュボードリスト機能により、拡大するダッシュボードコレクションを整理して合理化できます。ダッシュボードをリストにグループ化し、特定のチームに割り当て、重要なものをお気に入りとしてマークして、重要な視覚化にすばやくアクセスできます。チームによるフィルタリング、効率的な管理のための一括アクションの実行、複数のダッシュボードへのチームの割り当てなどの機能を使用することで、ダッシュボードの構成をさらに管理できます。[Dashboard List ページ][1]では、カスタムダッシュボードやインテグレーションダッシュボードを簡単に検索、作成、管理できます。
ダッシュボードを表示および管理します。
- [リストの並べ替え、検索、グループ化には、*All Dashboards* テーブルを使用します。](#view-all-dashboards)
- [リストでダッシュボードビューを整理します。](#lists)

## すべてのダッシュボードを表示

**All Dashboards** テーブルには、Datadog 組織内のダッシュボードが一覧表示され、カスタム作成されたダッシュボードやすぐに使えるダッシュボードが表示されます。[チーム](#teams)とダッシュボードの関連付けや、[リスト](#lists)へのダッシュボードの追加などの一括アクションを実行するには、テーブル内の複数のダッシュボードを選択します。

列ヘッダー *Name*、*Modified*、*Popularity* でソートできます。

| 列     | 説明                                                                              |
|------------|------------------------------------------------------------------------------------------|
| スター       | 現在のユーザーがスターを付けたすべてのダッシュボード。                                              |
| 名前       | カスタムダッシュボードまたはプリセットダッシュボードの名前。                                              |
| Author     | ダッシュボードの作成者のプロフィールアイコン。                                             |
| ヘルプ      | ダッシュボードに割り当てられた[チーム][2]。                                                    |
| Modified   | カスタムダッシュボードの最終更新日。                                            |
| 人気度 (Popularity) | 組織のダッシュボードの相対的な[人気度](#人気度)。           |
| アイコン       | ダッシュボードの種類 (タイムボードまたはスクリーンボード) を示すアイコン。                     |


### 人気度 (Popularity)

組織で最も人気のあるダッシュボードに 5 つの人気度バーが表示されます。他のすべてのダッシュボードの人気度は、このダッシュボードを基準として評価されます。人気度は、ダッシュボードが受信するトラフィック量に基づきます。人気度は毎日更新され、新しいダッシュボードの人気度バーは最大 24 時間の間はゼロです。

**注**: 公開ダッシュボード URL のトラフィックは、人気度に反映されません。

## ヘルプ

**My Teams** トグルを使用して、すべてのダッシュボードを表示するか、自分の[チーム][2]が所有するダッシュボードのみを表示するかを切り替えることができます。

1 つまたは複数のダッシュボードに関連するチームを編集するには、次の手順を実行します。
1. 変更したい各ダッシュボードの横にあるチェックボックスを選択します。
1. 右上の **Edit Teams** ドロップダウンを開きます。
1. チェックボックスを使用して、ダッシュボードの適切なチームを選択します。
1. **Apply Changes** をクリックします。

## リスト

ダッシュボードリストはダッシュボードをグループ化し、チームメンバーは同じコンテキスト内でダッシュボードを切り替えることができます。[プリセットリスト](#preset-lists)またはカスタムリストにダッシュボードを追加できます。

1. ダッシュボードリストを作成するには、右上にある **+ New List** をクリックします。
1. リストのタイトルを変更するには、鉛筆アイコンをクリックします。リストのタイトルは自動的にユーザーの名で設定されます。例: `John's list`
1. ダッシュボードをリストに追加します。**[All Dashboards](#view-all-dashboards)** テーブルで、ダッシュボードタイトルの横にあるチェックボックスをオンにします。次に、ダッシュボードリストの右上隅にある **Add to** ドロップダウンをクリックし、リストを選択します。

左サイドバーにはすべてのリストが表示され、チームや検索キーワードで絞り込むことができます。このサイドバーを非表示にするには、**Hide Controls** を切り替えます。

### お気に入りリスト

Favorite lists (お気に入りリスト) は、現在ログインしているユーザーがスターを付けたダッシュボードのリストです。**注**: スター付きのリストがない場合、*Favorite Lists* のカテゴリは非表示になります。

### プリセットリスト

プリセットリストは、Datadog ですぐに使えるダッシュボードリストです。

| リスト                     | 説明                                                               |
|--------------------------|---------------------------------------------------------------------------|
| All Custom               | 組織アカウント内のチームメンバーによって作成されたカスタムダッシュボード。 |
| All Hosts                | ホストを追加すると Datadog で自動作成されるダッシュボード。              |
| All Integrations         | インテグレーションを設置すると Datadog で自動作成されるダッシュボード。  |
| All Shared               | 認証済みまたは公開リンクの共有が有効になっているダッシュボード。             |
| Created By You           | 現在のユーザーにより作成されたカスタムダッシュボード。                            |
| Frequently Viewed By You | 現在のユーザーが頻繁に表示するすべてのダッシュボード。                     |
| Recently Deleted         | 過去 30 日以内に削除されたダッシュボード。このリストから[削除されたダッシュボードを復元します](#restore-deleted-dashboards)。|
| セキュリティとコンプライアンス  | すぐに使えるセキュリティダッシュボード。                                       |

### ダウンタイム

削除されたダッシュボードを復元するには、プリセットの **Recently Deleted** リストを使用します。リストから、復元するすべてのダッシュボードを選択し、**Restore to** をクリックします。ダッシュボードを復元する特定のリストを選択するか、カスタムリストなしで復元する場合は **All Custom** を選択します。**Recently Deleted** にあるダッシュボードは、30 日後に完全に削除されます。

{{< img src="dashboards/list/recently_deleted_restore.png" alt="Recently Deleted リストで削除したダッシュボードを復元" style="width:100%;">}}

## その他の参考資料

{{< partial name="whats-next/whats-next.html" >}}

[1]: https://app.datadoghq.com/dashboard/lists
[2]: /ja/account_management/teams/