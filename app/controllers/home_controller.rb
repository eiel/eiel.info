class HomeController < ApplicationController
  def index
    @groups = Group.all
    @sns = SNS.all
    @sites = Website.all
  end
end
