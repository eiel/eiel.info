require 'rails_helper'

feature "ルートページ", :type => :feature, :js => true do
  scenario "アクセスできる" do
    visit root_path
    save_screenshot("hoge.png")
    expect(page).to have_text("eiel.info")
  end
end
