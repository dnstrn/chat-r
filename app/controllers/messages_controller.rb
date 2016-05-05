class MessagesController < ApplicationController

  def index
    render json: Message.all.order("created_at asc")
  end

  def create
    # byebug
    m = Message.create!(body: params[:body], full_name: params[:full_name])
    # head :created
    render json: {id: m.id}
  end

  def update_flag
    # puts "inside update_flag"
    m = Message.find(params[:message_id])
    m.update!(flag: !m.flag)
    render json: {flag: !m.flag}
    #byebug
    #head :ok
  end

  def destroy
    Message.find(params[:id]).destroy!
    head :ok
  end

end
