# ApplicationHelper
module ApplicationHelper
  def input_errors(errors, field)
    if errors && !errors.messages[field].blank?
      "<small class='error'>#{errors.messages[field].first}</small>".html_safe
    end
  end
end
