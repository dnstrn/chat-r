class AddFullNameToMessages < ActiveRecord::Migration
  def change
    add_column :messages, :full_name, :string
  end
end
