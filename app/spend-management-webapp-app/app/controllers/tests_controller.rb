class TestsController < ApplicationController
  def index
    logger.info "def idnex"
    @tests = Test.all

  end

  def new
    @test = Test.new
    logger.info "def new"
  end

  def create
    logger.info "def create"
    @test = Test.new(test_params)

    if @test.save
      redirect_to 
      
    else
      render :new
      
    end
  end

  private

  def test_params
    # params.require(:test).permit(:user_id)
    # params.require(:test) do |test_obj|
    #   test_obj[:pass] = permit[:test][:pass]
    # end

    
    params.require(:test).permit(:user_id).tap do |tests_obj|
      tests_obj[:pass] = params[:test][:pass].to_i
      logger.debug("tests_obj=#{tests_obj}")
    end 
  end
end
