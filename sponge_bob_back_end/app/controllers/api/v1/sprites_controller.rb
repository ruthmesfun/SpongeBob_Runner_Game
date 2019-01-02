class Api::V1::SpritesController < ApplicationController

    #GET /api/v1/sprites

    def index 
        @sprites = Sprite.all
        render json: @sprites, status: :ok
    end

    # GET /api/v1/sprites/:id
    def show
        @sprite = Sprite.find(params[:id])
        render json: @sprite, status: :ok
    end
end
