# frozen_string_literal: true

module Api
  module V1
    # Public: Controller to handle reviews requests
    class ReviewsController < ApplicationController
      protect_from_forgery with: :null_session

      # Public: Creates a new review
      #
      # POST /api/v1/reviews
      #
      # Returns the newly created review rendered as JSON
      def create
        review = Review.new(review_params)

        if review.save
          render json: review, serializer: ReviewSerializer
        else
          render json: errors(review), status: 422
        end
      end

      # Public: Deletes an existing review
      #
      # DELETE /api/v1/reviews/:id
      #
      # Returns no content
      def destroy
        review = Review.find(params[:id])

        if review.destroy
          head :no_content
        else
          render json: errors(review), status: 422
        end
      end

      private

      # Strong params
      def review_params
        params.require(:review).permit(:title, :description, :score, :airline_id)
      end

      # Errors
      def errors(record)
        { errors: record.errors.messages }
      end
    end
  end
end
