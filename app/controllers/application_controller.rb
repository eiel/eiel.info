class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :redirect_to_eiel_info

  private

  def redirect_to_eiel_info
    return unless Rails.env.production?
    redirect_to "//eiel.info/" if request.host != "eiel.info"
  end
end
