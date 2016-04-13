module ApplicationHelper
  def markdown(text)
    @@renderer ||= Redcarpet::Markdown.new(Redcarpet::Render::HTML, autolink: true, tables: true)
    @@renderer.render(text)
  end
end
