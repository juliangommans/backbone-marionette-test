class Class_Super
  attr_accessor :tot_hp, :tot_atk, :tot_def, :tot_spd
  attr_accessor :hp, :atk, :def, :spd, :name

  def initialize(name)
    @name = name
    set_total_stats
  end

  def set_total_stats
    @tot_hp = @hp
    @tot_atk = @atk
    @tot_def = @def
    @tot_spd = @spd
  end

  def stat_reset
    @hp = @tot_hp
    @atk = @tot_atk
    @def = @tot_def
    @spd = @tot_spd
  end

  def display_stats
    puts "#{@name}'s current stats are"
    puts "#{@hp}: health"
    puts "#{@atk}: attack"
    puts "#{@def}: defense"
    puts "#{@spd}: speed"
    puts "---------"
  end

end