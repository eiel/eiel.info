class IosApplication < ActiveHash::Base

  def self.rapid_description
    <<MARKDOWN
あらかじめ作成したテンプレートを元にメールを作成するアプリです。

[android版はこちら](https://market.android.com/details?id=net.sugarspot.rapidmail)
MARKDOWN
  end

  self.data = [
      {
       name: "縦置",
       url: "http://itunes.apple.com/jp/app/id390444064?mt=8",
       description: "文字を表示するだけのアプリです。",
      },
      {
       name: "カウントしNite",
       url: "http://itunes.apple.com/jp/app/id399605073?mt=8",
       description: "登録したイベントのカウントダウンをするアプリです。",
      },
      {
       name: "RapidMail",
       url: "http://itunes.apple.com/jp/app/rapidmail/id493436340?mt=8",
       description: rapid_description,
      }
    ]
end
