class BooksController < ApplicationController
  
  def home
  end

  def index
    render json: File.read("books.json"), status: 200
  end

  def show
    books = JSON.parse(File.read("books.json"))
    book = books.select {|b| b["id"] == params[:id]}
    render json: book, status: 200
  end


end
