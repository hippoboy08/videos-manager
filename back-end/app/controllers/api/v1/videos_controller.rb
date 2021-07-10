class Api::V1::VideosController < ApplicationController
  before_action :set_video, only: %i[ show update destroy ]

  # GET /videos
  # GET /videos.json
  def index
    @videos = Video.all
    render json: @videos
  end

  # GET /videos/1
  # GET /videos/1.json
  def show
    render json: @video
  end

  # POST /videos
  # POST /videos.json
  def create
    @video = Video.new(video_params)

    if @video.save
      # render :show, status: :created, location: @video
      render json: { 
        status: 'SUCCESS', 
        message: 'Save video successfully!', 
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

  # PATCH/PUT /videos/1
  # PATCH/PUT /videos/1.json
  def update
    if @video.update(video_params)
      render :show, status: :ok, location: @video
    else
      render json: @video.errors, status: :unprocessable_entity
    end
  end

  # DELETE /videos/1
  # DELETE /videos/1.json
  def destroy
    @video.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_video
      @video = Video.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def video_params
      params.require(:video).permit(:name, :thumbnail, :media)
    end
end
