class Api::V1::UsersController < ApplicationController
        #GET /api/v1/users

        def index 
            @users= User.all
            render json: @users, status: :ok
        end

        def create
            @user = User.create(user_params)
        end
    
        # # GET /api/v1/uses/:id
        # def show
        #     @sprite = Sprite.find(params[:id])
        #     render json: @sprite, status: :ok
        # end

        private 

        def user_params
            params.require(:user).permit(:user_name, :score)
        end
end