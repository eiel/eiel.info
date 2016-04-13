class Website < ActiveHash::Base
  self.data = [
      {
       name: "そんなこと覚えてない",
       url: "http://blog.eiel.info",
       description: "技術系のメモを残しているブログです。"
      },
      {
       name: "日常と勉強会と広島と。",
       url: "http://eielh-life.tumblr.com/",
       description: "勉強会に参加したことや広島での出来事を友人という設定で書いている日記です。",
      },
      {
       name: "俺のGitHub Feed!!",
       url: "http://githubfeed.eiel.info/",
       description: "GitHub のフィードで気になったことをメモしているだけのブログです。",
      },
      {
       name: "いつか役に立つ",
       url: "http://alquote.tumblr.com/",
       description: "いつか引用したい言葉とかを記録しているブログです。",
      },
      {
       name: "弐寺に中毒気味。",
       url: "http://eiel-iidx.tumblr.com/",
       description: "音ゲーの記録をしているだけのブログです。",
      },
      {
       name: "Rails Doc",
       url: "http://railsdoc.eiel.info/",
       description: "Ruby on Rails のソースコードリーディングのメモです。ところどころリンクが切れているので GitHub のリポジトリから閲覧するほうがよいかもしれません。Hakyll を利用しています。"
      },
      {
       name: "とある我馬の非公式(ファンサイト)",
       url: "http://gaba.eiel.info/",
       description: "広島にあるとんこつラーメン屋の我馬を応援するサイトです。Ruby on Rails で作成しています。",
      },
      {
       name: "iOSで。",
       url: "http://ios.eiel.info/",
       description: "iOSに関する技術メモを残していたWikiです。",
      },
      {
       name: "かけなびまとめサイト",
       url: "http://kakenavi.eiel.info/",
       description: "デスマ神とよばれる人の書き込みをまとめています。",
      },
      {
       name: "旧そんなこと覚えてない",
       url: "http://d.hatena.ne.jp/eiel/",
       description: "過去の技術系メモをしていたブログです。",
      },
    ]
end
