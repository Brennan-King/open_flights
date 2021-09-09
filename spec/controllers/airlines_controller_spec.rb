# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Airlines', type: :request do
  describe 'GET #index' do
    it('returns a successful response') do
      get '/api/v1/airlines'
      expect(response.code).to eq('200')
      expect(response.body).to eq('[]')
    end
  end

  describe 'GET #show' do
    it('returns a successful response') do
      post '/api/v1/airlines', params: { airline: { name: 'test-airline', image_url: 'testurl' } }
      get '/api/v1/airlines/test-airline'
      expect(response.code).to eq('200')
      expect(response.body).to eq('{"name":"test-airline","image_url":"testurl","slug":"test-airline","reviews":[]}')
    end
  end

  describe 'POST #create' do
    it('returns a successful response') do
      post '/api/v1/airlines', params: { airline: { name: 'test', image_url: 'testurl' } }
      expect(response.code).to eq('200')
      expect(response.body).to eq('{"name":"test","image_url":"testurl","slug":"test","reviews":[]}')
    end

    it('returns an error code when supplied incorrect parameters') do
      post '/api/v1/airlines', params: { airline: { test: 'test' } }
      expect(response.code).to eq('422')
      expect(response.body).to eq('{"errors":{"name":["can\'t be blank"],"image_url":["can\'t be blank"]}}')
    end
  end

  describe 'PATCH #update' do
    it('returns a successful response') do
      post '/api/v1/airlines', params: { airline: { name: 'test-airline', image_url: 'testurl' } }
      patch '/api/v1/airlines/test-airline', params: { airline: { name: 'test-airline-two', image_url: 'testurl' } }
      expect(response.code).to eq('200')
      expect(response.body).to eq('{"name":"test-airline-two","image_url":"testurl","slug":"test-airline","reviews":[]}')
    end
  end

  describe 'DELETE #destroy' do
    it('returns a successful response') do
      post '/api/v1/airlines', params: { airline: { name: 'test-airline', image_url: 'testurl' } }
      delete '/api/v1/airlines/test-airline'
      expect(response.code).to eq('204')
      expect(response.body).to eq('')
    end
  end
end
