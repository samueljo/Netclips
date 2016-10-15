class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user
  helper_method :logged_in?
  helper_method :current_episode

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def current_episode(current_watchings, episodes)
    current_watching = current_watchings.select { |current| current.user_id == current_user.id }
    if (current_watching[0])
      return episodes.select{ |episode| episode.id == current_watching[0].episode_id }[0]
    else
      return episodes.select { |episode| episode.episode_number == 1 }[0]
    end
  end

  def login!(user)
    session[:session_token] = user.reset_session_token!
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end
end
