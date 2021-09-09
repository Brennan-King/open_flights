# frozen_string_literal: true

module Api
  module V1
    class AirlinesController < ApplicationController
      protect_from_forgery with: :null_session

      # GET /api/v1/airlines
      def index
        airlines = Airline.all
        render json: airlines, each_serializer: AirlineSerializer
      end

      # GET /api/v1/airlines/:slug
      def show
        airline = Airline.find_by(slug: params[:slug])
        render json: airline, serializer: AirlineSerializer
      end

      # POST /api/v1/airlines
      def create
        airline = Airline.new(airline_params)
        if airline.save
          render json: airline, serializer: AirlineSerializer
        else
          render json: errors(airline), status: 422
        end
      end

      # PATCH /api/v1/airlines/:slug
      def update
        airline = Airline.find_by(slug: params[:slug])
        if airline.update(airline_params)
          render json: airline, serializer: AirlineSerializer
        else
          render json: errors(airline), status: 422
        end
      end

      # DELETE /api/v1/airlines/:slug
      def destroy
        airline = Airline.find_by(slug: params[:slug])
        if airline.destroy
          head :no_content
        else
          render json: errors(airline), status: 422
        end
      end

      private

      # Strong params
      def airline_params
        params.require(:airline).permit(:name, :image_url)
      end

      # Errors
      def errors(record)
        { errors: record.errors.messages }
      end
    end
  end
end
