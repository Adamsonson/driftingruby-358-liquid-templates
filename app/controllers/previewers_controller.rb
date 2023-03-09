# previewers_controller.rb
class PreviewersController < ApplicationController
  def create
    template = Liquid::Template.parse(params[:content])

    # {{ example }} => "Hello World"
    text = template.render(fields)
    render plain: text
  rescue Liquid::SyntaxError
    render plain: params[:content]
  end

  private

  def fields
    {}.tap do |hash|
      # hash["post_title"] = Post.all.sample.title if params[:content].include?("post_title")
      hash["post_title"] = "This is a post title"
      hash["example_number"] = "1234"
    end
  end
end
