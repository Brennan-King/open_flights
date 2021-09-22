# frozen_string_literal: true

module Api
  module V1
    # Public: Controller to handle airlines requests
    class AirlinesController < ApplicationController
      protect_from_forgery with: :null_session

      # Public: Retrieves all airlines
      #
      # GET /api/v1/airlines
      #
      # Returns the airlines rendered as JSON
      def index
        airlines = Airline.all
        render json: airlines, each_serializer: AirlineSerializer
      end

      # Public: Retrieves a specific airline using the provided slug
      #
      # GET /api/v1/airlines/:slug
      #
      # Returns the airline rendered as JSON
      def show
        airline = Airline.find_by(slug: params[:slug])
        render json: airline, serializer: AirlineSerializer
      end

      # Public: Creates a new airline
      #
      # POST /api/v1/airlines
      #
      # Returns the newly created airline rendered as JSON
      def create
        airline = Airline.new(airline_params)
        if airline.save
          render json: airline, serializer: AirlineSerializer
        else
          render json: errors(airline), status: 422
        end
      end

      # Public: Updates an existing airline
      #
      # PATCH /api/v1/airlines/:slug
      #
      # Returns the updated airline rendered as JSON
      def update
        airline = Airline.find_by(slug: params[:slug])
        if airline.update(airline_params)
          render json: airline, serializer: AirlineSerializer
        else
          render json: errors(airline), status: 422
        end
      end

      # Public: Deletes an existing airline
      #
      # DELETE /api/v1/airlines/:slug
      #
      # Returns no content
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
