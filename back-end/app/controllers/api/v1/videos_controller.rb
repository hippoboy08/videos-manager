class Api::V1::VideosController < ApplicationController
  before_action :set_video, only: %i[ show update destroy ]

  # GET /videos
  # GET /videos.json
  def index
    @videos = Video.all
    if @videos
      render json: { 
        status: 'SUCCESS', 
        message: 'Load successfully!', 
        data: @videos 
      }, status: :ok
    else
      render json: { 
        status: 'ERROR', 
        message: 'Failed to load videos!', 
      }, status: :unprocessable_entity
    end
  end

  # GET /videos/1
  # GET /videos/1.json
  def show
    if @video
      render json: { 
        status: 'SUCCESS', 
        message: 'Load successfully!', 
        data: @video 
      }, status: :ok
    else
      render json: { 
        status: 'ERROR', 
        message: 'Video not found!', 
      }, status: :unprocessable_entity
    end
  end

  # POST /videos
  # POST /videos.json
  def create
    @video = Video.new
    @video.name = params[:name]
    @video.thumbnail = params[:thumbnail]
    @video.media = params[:media]

    if @video.save
      render json: { 
        status: 'SUCCESS', 
        message: 'Saved successfully!', 
        data: @video 
      }, status: :ok
    else
      render json: { 
        status: 'ERROR', 
        message: 'Failed to save video!', 
        data: @video.errors 
      }, status: :unprocessable_entity
    end
  end

  # # PATCH/PUT /videos/1
  # # PATCH/PUT /videos/1.json
  # def update
  #   if @video.update(video_params)
  #     render :show, status: :ok, location: @video
  #   else
  #     render json: @video.errors, status: :unprocessable_entity
  #   end
  # end

  # DELETE /videos/1
  # DELETE /videos/1.json
  def destroy
    # Delete video by id if exists
    isExisted = Video.exists?(:id => params[:id])
    if isExisted
      @video = Video.find(params[:id])
      puts @video, isExisted
      if @video.destroy
        render json: { 
          status: 'SUCCESS', 
          message: 'Deleted successfully!'
        }, status: :ok
      else
        render json: { 
        status: 'ERROR', 
        message: 'Failed to delete video!',
        data: @video.errors
      }, status: :unprocessable_entity
      end
    else
      render json: { 
        status: 'ERROR', 
        message: 'Video not found!', 
      }, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_video
      videoId = params[:id]
      if Video.exists?(:id => videoId)
        @video = Video.find(videoId)
      else
        @video = nil
      end
    end

    # Only allow a list of trusted parameters through.
    def video_params
      params.require(:video).permit(:name, :thumbnail, :media)
    end
end
