# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Reviews', type: :request do
  describe 'POST #create' do
    it('returns a successful response') do
      post '/api/v1/airlines', params: { airline: { name: 'test', image_url: 'testurl' } }
      post '/api/v1/reviews',
           params: { review: { title: 'testTitle', description: 'testDescription', score: 5,
                               airline_id: 1 } }
      expect(response.code).to eq('200')
      expect(response.body).to eq('{"title":"testTitle","description":"testDescription","score":5,"airline_id":1}')
    end

    it('returns an error code when airline does not exist') do
      post '/api/v1/reviews',
           params: { review: { title: 'testReview', description: 'testDescription', score: 5,
                               airline: {} } }
      expect(response.code).to eq('422')
      expect(response.body).to eq('{"errors":{"airline":["must exist"]}}')
    end
  end

  describe 'DELETE #destroy' do
    it('returns a successful response') do
      post '/api/v1/airlines', params: { airline: { name: 'test', image_url: 'testurl' } }
      post '/api/v1/reviews',
           params: { review: { title: 'testTitle', description: 'testDescription', score: 5,
                               airline_id: 1 } }
      delete '/api/v1/reviews/1'
      expect(response.code).to eq('204')
      expect(response.body).to eq('')
    end
  end
end
