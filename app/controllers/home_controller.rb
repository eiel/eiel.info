class HomeController < ApplicationController
  def index
    @groups = Group.all
    @sns = SNS.all
    @sites = Website.all
    @ios_applications = IosApplication.all
  end
end
