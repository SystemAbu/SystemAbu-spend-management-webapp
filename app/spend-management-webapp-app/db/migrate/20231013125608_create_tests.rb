class CreateTests < ActiveRecord::Migration[7.0]
  def change
    create_table :tests do |t|
      t.integer :pass
      t.timestamps
    end
  end
end
