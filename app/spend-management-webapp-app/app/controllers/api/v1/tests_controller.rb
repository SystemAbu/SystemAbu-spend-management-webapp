module Api
  module V1
    class TestsController < ApplicationController
      # before_action :set_cors_headers
      before_action :set_test, only: %i[show update destroy]

      # GET /tests
      def index
        @tests = Test.all
        render json: @tests
      rescue => e
        render json: { error: e.message }, status: 500
      end

      # GET /tests/:id
      def show
        render json: @test
      end

      # Post /tests
      def create
        @test = Test.new(test_params)

        if @test.save
          render json: @test, status: :created
        else
          render json: @test.errors, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /tests/:id
      def update
        if @test.update(test_params)
          render json: @test
        else
          render json: @test.errors, status: :unprocessable_entity
        end
      end

      # DELETE /tests/:id
      def destroy
        @test.destroy
      end

      private

      def set_cors_headers
        response.set_header("Access-Control-Allow-Origin", "http://app:3000")
        response.set_header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS")
        response.set_header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept, Authorization")

        # OPTIONS リクエストの場合は 204 No Content で返す
        if request.method == "OPTIONS"
          head :no_content
        end
      end

      def set_test
        @test = Test.find(params[:id])
        return render json: { error: "Test not found" }, status: :not_found unless @test
      end

      def test_params
        params.require(:test).permit(:test_id, :test_name)
      end
    end
  end
end
