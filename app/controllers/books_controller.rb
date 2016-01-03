class BooksController < ApplicationController
  
  def home
  end

  def index
    render json: File.read("books.json"), status: 200
  end

  def show
  end


end
