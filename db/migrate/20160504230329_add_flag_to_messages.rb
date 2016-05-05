class AddFlagToMessages < ActiveRecord::Migration
  def change
    add_column :messages, :flag, :boolean, default: false
  end
end
