class RemoveNullFromReviewBody2 < ActiveRecord::Migration
  def change
    change_column :reviews, :body, :text, null: true
  end
end
