class CreateGroups < ActiveRecord::Migration[7.1]
  def change
    create_table :groups do |t|
      t.string :user_name
      t.string :user_id

      t.timestamps
    end
  end
end
