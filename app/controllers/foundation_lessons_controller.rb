class FoundationLessonsController < ApplicationController
  layout 'foundation_lessons'

  def first
  end

  def second
  end

  def third
  end

  def mail
    render layout: false
  end
end
