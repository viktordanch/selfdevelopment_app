class MyShopB::ProductsController < ApplicationController
  layout 'my_shop_b'

  respond_to :html, :json

  def index
    books = [{ title: 'book 1', description: 'Some description for book 1', image: '/iamge.png' },
             { title: 'book 2', description: 'Some description for book 2', image: '/iamge.png' },
             { title: 'book 3', description: 'Some description for book 3', image: '/iamge.png' },
             { title: 'book 4', description: 'Some description for book 4', image: '/iamge.png' },
        ]

    respond_to do |format|
      format.js do
        render json: books.to_json
      end
      format.html do
        render json: books.to_json
      end
    end
  end
end
