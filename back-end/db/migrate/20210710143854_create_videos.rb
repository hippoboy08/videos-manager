class CreateVideos < ActiveRecord::Migration[6.1]
  def change
    create_table :videos do |t|
      t.string :name
      t.string :thumbnail
      t.string :media

      t.timestamps
    end
  end
end
