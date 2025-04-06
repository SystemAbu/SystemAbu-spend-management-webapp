class ApiKeyAuthMiddleware
  def initialize(app)
    @app = app
  end

  def call(env)
    Rails.logger.info "call(env)"

    # リクエストヘッダーから API_KEY を取得
    api_key = env['HTTP_API_KEY']

    Rails.logger.info "ENV.fetch(\"API_KEY\"): #{ENV.fetch("API_KEY")}"
    Rails.logger.info "ENV.fetch(\"API_KEY\").class: #{ENV.fetch("API_KEY").class}"
    Rails.logger.info "env['HTTP_API_KEY']: #{env['HTTP_API_KEY']}"
    Rails.logger.info "api_key: #{api_key}"
    Rails.logger.info "api_key.class: #{api_key.class}"

    # 環境変数の API_KEY と比較
    if api_key != ENV.fetch("API_KEY")
      # API キーが一致しない場合、403 Forbidden を返す
      return [403, { 'Content-Type' => 'application/json' }, ['{"error": "Forbidden"}']]
    end

    # API キーが一致した場合、リクエストを続ける
    @app.call(env)
  end
end