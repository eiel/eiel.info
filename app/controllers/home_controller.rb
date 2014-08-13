class HomeController < ApplicationController
  def index
    @groups = Group.all
    @sns = SNS.all
  end
end
