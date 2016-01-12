class Category < ActiveRecord::Base

  def self.open_spreadsheet(file)
    case File.extname(file.original_filename)
      when ".csv" then Roo::CSV.new(file.path, csv_options: {col_sep: "^"})
      when ".xls" then Excel.new(file.path, nil, :ignore)
      when ".xlsx" then Excelx.new(file.path, nil, :ignore)
      else raise "Unknown file type: #{file.original_filename}"
    end
  end

  def self.import(file)
    spreadsheet = open_spreadsheet(file)

    header = spreadsheet.row(1)
    rows_range = (2..spreadsheet.last_row)
    rows_range.each do |i|
      row = Hash[[header, spreadsheet.row(i)].transpose]

      if where(row).blank?
        return { error_row: row } unless create(row)
      end
    end

    { loaded_rows_count: rows_range.count }
  end
end
